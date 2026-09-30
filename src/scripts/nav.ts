/**
 * nav.ts — client-side navigation sidebar.
 *
 * Fetches the build-time nav tree (/nav.json) and renders it into the empty
 * #nav-bar shell that SampleLayout.astro ships. Rendering client-side keeps
 * the ~190KB tree out of every page's HTML; pages embedded as iframes in the
 * docs site never even fetch it.
 *
 * The generated DOM (ids, classes, aria attributes) matches what the old
 * server-rendered NavSidebar.astro produced, so public/styles/layout.css
 * applies unchanged.
 */
import type { NavGroup } from '../utils/samples';
import logoSrc from '../assets/react.png';

const NAV_FLAG = 'igx-react-nav';

const base = import.meta.env.BASE_URL.replace(/\/$/, '');
const activeSlug = document.documentElement.dataset.sampleSlug ?? '';

// Rendering

function renderLogo(): HTMLAnchorElement {
  const link = document.createElement('a');
  link.href = `${base}/`;
  link.className = 'nav-logo';

  const inner = document.createElement('div');
  inner.className = 'nav-logo-inner';

  const img = document.createElement('img');
  img.src = logoSrc.src;
  img.alt = 'Ignite UI for React';
  img.width = 24;
  img.height = 24;

  const label = document.createElement('span');
  label.textContent = 'Ignite UI for React';

  inner.append(img, label);
  link.append(inner);
  return link;
}

function renderSearch(): HTMLDivElement {
  const wrap = document.createElement('div');
  wrap.className = 'nav-search';

  const input = document.createElement('input');
  input.id = 'nav-search-input';
  input.type = 'search';
  input.placeholder = 'Search samples...';
  input.setAttribute('aria-label', 'Search samples');
  input.autocomplete = 'off';
  input.spellcheck = false;

  wrap.append(input);
  return wrap;
}

function renderGroup(group: NavGroup): HTMLElement {
  const section = document.createElement('section');

  const heading = document.createElement('div');
  heading.className = 'nav-group';
  heading.textContent = group.displayName;
  section.append(heading);

  for (const comp of group.components) {
    const id = `${group.id}-${comp.id}`;
    const hasActive = comp.samples.some(s => s.slug === activeSlug);

    const button = document.createElement('button');
    button.className = 'nav-component';
    button.id = `nav-comp-${id}`;
    button.type = 'button';
    button.setAttribute('aria-controls', `nav-list-${id}`);
    button.setAttribute('aria-expanded', hasActive ? 'true' : 'false');
    button.textContent = `${comp.displayName} `;

    const count = document.createElement('span');
    count.style.cssText = 'font-size:0.7rem; color:#aaa;';
    count.textContent = `(${comp.samples.length})`;
    button.append(count);

    const list = document.createElement('ul');
    list.className = 'nav-list';
    list.id = `nav-list-${id}`;
    list.dataset.state = hasActive ? 'expanded' : 'collapsed';
    list.setAttribute('role', 'list');

    for (const sample of comp.samples) {
      const li = document.createElement('li');
      const link = document.createElement('a');
      link.href = `${base}/${sample.slug}`;
      link.className = sample.slug === activeSlug ? 'nav-link active' : 'nav-link';
      link.dataset.nav = `${base}/${sample.slug}`;

      const label = document.createElement('span');
      label.textContent = sample.displayName;
      link.append(label);
      li.append(link);
      list.append(li);
    }

    section.append(button, list);
  }

  return section;
}

// Behavior (unchanged from the previous server-rendered sidebar)

function wireBehavior(nav: HTMLElement) {
  // When the user clicks a sidebar nav link, set the sessionStorage flag
  // so the next page load knows to keep the sidebar visible.
  nav.addEventListener('click', e => {
    const link = (e.target as Element).closest('a[data-nav]');
    if (link) sessionStorage.setItem(NAV_FLAG, '1');
  });

  // Expand / collapse component groups.
  nav.querySelectorAll<HTMLElement>('.nav-component').forEach(header => {
    const listId = header.getAttribute('aria-controls');
    if (!listId) return;
    const list = document.getElementById(listId);
    if (!list) return;

    header.addEventListener('click', () => {
      const isExpanded = list.dataset.state === 'expanded';
      list.dataset.state = isExpanded ? 'collapsed' : 'expanded';
      header.setAttribute('aria-expanded', isExpanded ? 'false' : 'true');
    });
  });

  // Scroll the active link into view.
  const activeLink = nav.querySelector<HTMLAnchorElement>('a.active');
  if (activeLink) {
    requestAnimationFrame(() => {
      activeLink.scrollIntoView({ block: 'nearest', behavior: 'instant' });
    });
  }

  // Search / filter
  const searchInput = nav.querySelector<HTMLInputElement>('#nav-search-input');
  searchInput?.addEventListener('input', () => {
    const q = searchInput.value.trim().toLowerCase();

    nav.querySelectorAll<HTMLElement>('section').forEach(section => {
      let sectionHasMatch = false;

      section.querySelectorAll<HTMLElement>('.nav-component').forEach(btn => {
        const listId = btn.getAttribute('aria-controls');
        const list = listId ? document.getElementById(listId) : null;
        if (!list) return;

        let compHasMatch = false;
        list.querySelectorAll<HTMLElement>('li').forEach(li => {
          const match = !q || (li.textContent?.toLowerCase().includes(q) ?? false);
          li.classList.toggle('nav-item-hidden', !match);
          if (match) compHasMatch = true;
        });

        btn.classList.toggle('nav-item-hidden', !compHasMatch);
        if (q && compHasMatch) {
          list.dataset.state = 'expanded';
          btn.setAttribute('aria-expanded', 'true');
        }
        if (compHasMatch) sectionHasMatch = true;
      });

      section.classList.toggle('nav-section-hidden', !sectionHasMatch);
    });

    // On clear: restore original collapsed state (remove inline overrides)
    if (!q) {
      nav.querySelectorAll<HTMLElement>('.nav-item-hidden').forEach(el => el.classList.remove('nav-item-hidden'));
      nav.querySelectorAll<HTMLElement>('.nav-section-hidden').forEach(el => el.classList.remove('nav-section-hidden'));
      // Re-collapse all lists that weren't previously expanded
      nav.querySelectorAll<HTMLElement>('.nav-list').forEach(list => {
        if (list.dataset.state === 'expanded' && !list.contains(nav.querySelector('a.active'))) {
          list.dataset.state = 'collapsed';
        }
      });
    }
  });
}

// Entry point

async function initNav() {
  const nav = document.getElementById('nav-bar');
  if (!nav) return;

  // Visibility was decided (and the flag armed) before first paint by the
  // inline script in SampleLayout.astro. with-nav also proves sessionStorage
  // is accessible, so the click handler below may use it unguarded.
  if (!document.documentElement.classList.contains('with-nav')) return;

  let groups: NavGroup[];
  try {
    const res = await fetch(`${base}/nav.json`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    groups = (await res.json()).groups;
  } catch (err) {
    console.error('[nav] failed to load nav.json', err);
    return;
  }

  nav.append(renderLogo(), renderSearch(), ...groups.map(renderGroup));
  wireBehavior(nav);
}

initNav();
