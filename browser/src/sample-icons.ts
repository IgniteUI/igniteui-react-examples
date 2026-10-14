/**
 * sample-icons.ts
 *
 * Gives sample icons their theme-specific look while the docs host re-themes
 * this samples browser (see sample-theme.ts).
 *
 * Samples register and use their icons as usual. For each entry below, the
 * icon a sample uses is pointed at the icon Ignite UI bundles for the active
 * theme, through the same icon reference mechanism the components use for
 * their own icons. Outside the browser (exported or standalone samples) the
 * sample keeps its own icon.
 */

import { setIconRef } from 'igniteui-react';

interface IconRef {
    name: string;
    collection: string;
}

interface ThemeIcon extends IconRef {
    // Theme name -> icon to show in that theme.
    themes: Record<string, IconRef>;
}

// igniteui-webcomponents registers the icons its components use in the
// `internal` collection, with an `indigo_` prefix for the Indigo versions.
const THEME_ICONS: ThemeIcon[] = [
    {
        name: 'arrow_upward',
        collection: 'material',
        themes: {
            indigo: { name: 'indigo_arrow_upward', collection: 'internal' },
        },
    },
];

export function applyThemeIcons(theme: string): void {
    THEME_ICONS.forEach((icon) => {
        // A reference can't be removed, so themes without an override point
        // the icon back at the one the sample registered.
        const target = icon.themes[theme] || { name: icon.name, collection: icon.collection };
        setIconRef(icon.name, icon.collection, target);
    });
}
