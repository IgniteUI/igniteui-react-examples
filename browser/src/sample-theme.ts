/**
 * sample-theme.ts
 *
 * Lets the docs site re-theme this samples browser while it is embedded in a
 * docs `<Sample>` iframe.
 *
 * The docs ThemingWidget dispatches `igd-theme-change`; the Sample widget
 * bridges that to `postMessage({ type: 'igd-sample-theme', theme, mode })` on
 * the frame, and re-posts the current selection on every iframe `load`. Here we
 * validate the sender and swap the Ignite UI theme stylesheets to match.
 *
 * Dormant unless a trusted docs host asks for a theme.
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

type CssLoader = () => Promise<{ default: string }>;

const MESSAGE_TYPE = 'igd-sample-theme';
const STYLE_ATTR = 'data-igd-sample-theme';
const DARK_QUERY = '(prefers-color-scheme: dark)';

// Vite only bundles dynamic imports with literal specifiers, so every
// mode/theme pair is spelled out. `?inline` yields the CSS as a string instead
// of injecting a sheet, which lets selections replace each other in owned
// <style> elements rather than stacking sheets that can never be removed.
const THEME_CSS: Record<string, CssLoader[]> = {
    'light:material': [
        () => import('igniteui-react-grids/grids/themes/light/material.css?inline'),
        () => import('igniteui-webcomponents/themes/light/material.css?inline'),
    ],
    'light:fluent': [
        () => import('igniteui-react-grids/grids/themes/light/fluent.css?inline'),
        () => import('igniteui-webcomponents/themes/light/fluent.css?inline'),
    ],
    'light:bootstrap': [
        () => import('igniteui-react-grids/grids/themes/light/bootstrap.css?inline'),
        () => import('igniteui-webcomponents/themes/light/bootstrap.css?inline'),
    ],
    'light:indigo': [
        () => import('igniteui-react-grids/grids/themes/light/indigo.css?inline'),
        () => import('igniteui-webcomponents/themes/light/indigo.css?inline'),
    ],
    'dark:material': [
        () => import('igniteui-react-grids/grids/themes/dark/material.css?inline'),
        () => import('igniteui-webcomponents/themes/dark/material.css?inline'),
    ],
    'dark:fluent': [
        () => import('igniteui-react-grids/grids/themes/dark/fluent.css?inline'),
        () => import('igniteui-webcomponents/themes/dark/fluent.css?inline'),
    ],
    'dark:bootstrap': [
        () => import('igniteui-react-grids/grids/themes/dark/bootstrap.css?inline'),
        () => import('igniteui-webcomponents/themes/dark/bootstrap.css?inline'),
    ],
    'dark:indigo': [
        () => import('igniteui-react-grids/grids/themes/dark/indigo.css?inline'),
        () => import('igniteui-webcomponents/themes/dark/indigo.css?inline'),
    ],
};

const styleEls: HTMLStyleElement[] = [];
let selected: { theme: ThemeName; mode: ThemeMode } = null;
let latestRequest = 0;
let listening = false;

function isTrustedOrigin(origin: string): boolean {
    if (origin === window.location.origin) { return true; }
    let hostname: string;
    try {
        hostname = new URL(origin).hostname;
    } catch {
        return false;
    }
    if (hostname === 'localhost' || hostname === '127.0.0.1') { return true; }
    return hostname === 'infragistics.com' || hostname.endsWith('.infragistics.com');
}

function parseMessage(data: any): { theme: ThemeName; mode: ThemeMode } {
    if (!data || typeof data !== 'object') { return null; }
    const msg = data as ThemeMessage;
    if (msg.type !== MESSAGE_TYPE && msg.event !== MESSAGE_TYPE) { return null; }

    const theme = (msg.theme || msg.themeName || '').toLowerCase();
    if (!theme || !THEME_CSS['light:' + theme]) { return null; }

    const rawMode = (msg.mode || 'light').toLowerCase();
    const mode: ThemeMode =
        rawMode === 'dark' || rawMode === 'system' ? rawMode : 'light';

    return { theme: theme as ThemeName, mode };
}

function resolveMode(mode: ThemeMode): ResolvedMode {
    if (mode === 'light' || mode === 'dark') { return mode; }
    return window.matchMedia && window.matchMedia(DARK_QUERY).matches ? 'dark' : 'light';
}

// One element per source sheet: a stylesheet's `@import` rules are only valid
// at its top, so the sheets must not be concatenated into a single element.
function writeSheets(css: string[]): void {
    css.forEach((text, i) => {
        let el = styleEls[i];
        if (!el) {
            el = document.createElement('style');
            el.setAttribute(STYLE_ATTR, String(i));
            styleEls[i] = el;
        }
        el.textContent = text;
        // Re-append on every swap so the override stays last in the cascade,
        // ahead of any theme sheet a lazily routed sample imports after us.
        document.head.appendChild(el);
    });
}

function applyTheme(theme: ThemeName, mode: ThemeMode): void {
    const resolved = resolveMode(mode);
    const loaders = THEME_CSS[resolved + ':' + theme];
    if (!loaders) { return; }

    const request = ++latestRequest;
    Promise.all(loaders.map((load) => load()))
        .then((sheets) => {
            // Drop stale responses so rapid switching can't land out of order.
            if (request !== latestRequest) { return; }
            writeSheets(sheets.map((s) => s.default));

            const root = document.documentElement;
            root.setAttribute('data-igd-theme', theme);
            root.setAttribute('data-igd-mode', resolved);
            root.style.colorScheme = resolved;
        })
        .catch((err) => {
            console.warn('[sample-theme] Could not load theme "' + theme + '":', err);
        });
}

function onMessage(event: MessageEvent): void {
    // Only the embedding docs page may drive the theme.
    if (event.source !== window.parent || !isTrustedOrigin(event.origin)) { return; }

    const next = parseMessage(event.data);
    if (!next) { return; }
    if (selected && selected.theme === next.theme && selected.mode === next.mode) { return; }

    selected = next;
    applyTheme(next.theme, next.mode);
}

function watchSystemMode(): void {
    if (!window.matchMedia) { return; }
    const query = window.matchMedia(DARK_QUERY);
    const onChange = () => {
        if (selected && selected.mode === 'system') {
            applyTheme(selected.theme, selected.mode);
        }
    };
    if (query.addEventListener) {
        query.addEventListener('change', onChange);
    } else {
        query.addListener(onChange);
    }
}

/**
 * Starts listening for theme messages from the embedding docs page.
 *
 * Must run during module evaluation of the app entry: the host re-posts on the
 * iframe `load` event, which fires after module scripts execute, so no
 * handshake is needed.
 */
export function initSampleThemeListener(): void {
    if (listening || window.parent === window) { return; }
    listening = true;
    window.addEventListener('message', onMessage);
    watchSystemMode();
}
