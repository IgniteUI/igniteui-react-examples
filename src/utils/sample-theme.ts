/**
 * sample-theme.ts
 *
 * Lets the docs site re-theme this samples browser while it is embedded in a
 * docs `<Sample>` iframe.
 *
 * The docs ThemingWidget dispatches `igd-theme-change`; the Sample widget
 * bridges that to `postMessage({ type: 'igd-sample-theme', theme, mode })` on
 * the frame, and re-posts the current selection on every iframe `load`. Here we
 * validate the sender and re-point the Ignite UI theme stylesheets to match.
 *
 * Dormant unless a trusted docs host asks for a theme.
 *
 * A theme change has TWO halves
 * ─────────────────────────────
 * 1. CSS — every sample page carries `<link data-ig-theme>` elements for the
 *    themes it uses (emitted by [...slug].astro). Re-pointing their href swaps
 *    the `--ig-*` palette. We rewrite only the trailing `<variant>/<name>.css`
 *    so any BASE_PATH prefix survives without this module knowing about it.
 *
 * 2. Shadow styles — `igniteui-webcomponents` picks each component's shadow
 *    stylesheet from `getTheme()`, which is memoised the first time a component
 *    connects. Swapping CSS therefore recolours but leaves material geometry on
 *    a page that asked for fluent. `configureTheme()` is the only public call
 *    that updates that memo *and* emits the event its ThemingController listens
 *    for, so it must run alongside the href swap.
 *
 * Known limitation: `igniteui-webcomponents-grids` reads `--ig-theme` once, in
 * a constructor, into an internal ThemeToken that it does not export. Grid CSS
 * re-points correctly, but whatever that token feeds (default row sizing and
 * friends) keeps its load-time value until the page reloads.
 */

type ThemeName = 'material' | 'fluent' | 'bootstrap' | 'indigo';
type ThemeMode = 'light' | 'dark' | 'system';
type ResolvedMode = 'light' | 'dark';

interface ThemeMessage {
  type?: string;
  event?: string;
  theme?: string;
  themeName?: string;
  mode?: string;
}

const MESSAGE_TYPE = 'igd-sample-theme';
const DARK_QUERY = '(prefers-color-scheme: dark)';
const THEMES: ThemeName[] = ['material', 'fluent', 'bootstrap', 'indigo'];

let selected: { theme: ThemeName; mode: ThemeMode } | null = null;
let latestRequest = 0;
let listening = false;

function isTrustedOrigin(origin: string): boolean {
  if (origin === window.location.origin) return true;

  let hostname: string;
  try {
    hostname = new URL(origin).hostname;
  } catch {
    return false;
  }

  if (hostname === 'localhost' || hostname === '127.0.0.1') return true;
  return hostname === 'infragistics.com' || hostname.endsWith('.infragistics.com');
}

function parseMessage(data: unknown): { theme: ThemeName; mode: ThemeMode } | null {
  if (!data || typeof data !== 'object') return null;

  const msg = data as ThemeMessage;
  if (msg.type !== MESSAGE_TYPE && msg.event !== MESSAGE_TYPE) return null;

  const theme = (msg.theme ?? msg.themeName ?? '').toLowerCase() as ThemeName;
  if (!THEMES.includes(theme)) return null;

  const rawMode = (msg.mode ?? 'light').toLowerCase();
  const mode: ThemeMode = rawMode === 'dark' || rawMode === 'system' ? rawMode : 'light';

  return { theme, mode };
}

function resolveMode(mode: ThemeMode): ResolvedMode {
  if (mode === 'light' || mode === 'dark') return mode;
  return window.matchMedia?.(DARK_QUERY).matches ? 'dark' : 'light';
}

/**
 * Point one theme <link> at a different variant/theme and resolve once the new
 * sheet has actually landed, so the caller can re-adopt shadow styles against
 * CSS that is already live rather than mid-swap.
 */
function retarget(link: HTMLLinkElement, variant: ResolvedMode, theme: ThemeName): Promise<void> {
  // .../ig-themes/<pkg>/<variant>/<name>.css → .../<variant>/<name>.css
  const next = link.href.replace(/\/[^/]+\/[^/]+\.css(\?.*)?$/, `/${variant}/${theme}.css`);

  link.dataset.igThemeVariant = variant;
  link.dataset.igThemeName = theme;

  // Already correct: no request is made, so no load event would ever fire.
  if (link.href === next) return Promise.resolve();

  return new Promise<void>(resolve => {
    const done = () => {
      link.removeEventListener('load', done);
      link.removeEventListener('error', done);
      resolve();
    };
    link.addEventListener('load', done);
    link.addEventListener('error', done);
    link.href = next;
  });
}

async function applyTheme(theme: ThemeName, mode: ThemeMode): Promise<void> {
  const resolved = resolveMode(mode);
  const request = ++latestRequest;

  // Only the packages this sample actually themes have a link. A sample with no
  // grid has nothing to re-point for grids, so there is nothing to create here.
  const links = Array.from(document.querySelectorAll<HTMLLinkElement>('link[data-ig-theme]'));
  await Promise.all(links.map(link => retarget(link, resolved, theme)));

  // Drop stale responses so rapid switching can't land out of order.
  if (request !== latestRequest) return;

  // Only a page that carries a theme link has shadow styles worth re-adopting:
  // every sample here that imports no theme CSS draws from the charts / gauges /
  // maps packages, which own no igniteui-webcomponents shadow theme. Guarding on
  // that keeps a docs theme switch from pulling the igniteui-webcomponents chunk
  // onto a page that would never otherwise load it.
  if (links.length) {
    try {
      // Loaded on demand: for any sample using igc components this chunk is
      // already in cache.
      const { configureTheme } = await import('igniteui-webcomponents');
      if (request !== latestRequest) return;
      configureTheme(theme, resolved);
    } catch (err) {
      console.warn(`[sample-theme] Could not re-adopt shadow styles for "${theme}":`, err);
    }
  }

  const root = document.documentElement;
  root.setAttribute('data-igd-theme', theme);
  root.setAttribute('data-igd-mode', resolved);
  root.style.colorScheme = resolved;
}

function onMessage(event: MessageEvent): void {
  // Only the embedding docs page may drive the theme.
  if (event.source !== window.parent || !isTrustedOrigin(event.origin)) return;

  const next = parseMessage(event.data);
  if (!next) return;
  if (selected && selected.theme === next.theme && selected.mode === next.mode) return;

  selected = next;
  void applyTheme(next.theme, next.mode);
}

function watchSystemMode(): void {
  const query = window.matchMedia?.(DARK_QUERY);
  if (!query) return;

  query.addEventListener('change', () => {
    if (selected?.mode === 'system') void applyTheme(selected.theme, selected.mode);
  });
}

/**
 * Starts listening for theme messages from the embedding docs page.
 *
 * Must run while the document is still loading: the host re-posts on the iframe
 * `load` event, which fires after module scripts execute, so no handshake is
 * needed.
 */
export function initSampleThemeListener(): void {
  if (listening || window.parent === window) return;
  listening = true;
  window.addEventListener('message', onMessage);
  watchSystemMode();
}
