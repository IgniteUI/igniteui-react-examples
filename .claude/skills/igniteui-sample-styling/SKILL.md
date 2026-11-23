---
name: igniteui-sample-styling
description: "Rules for writing and reviewing the CSS of a sample that the Ignite UI documentation embeds, so that the sample works in every theme the docs theme picker offers (Material, Fluent, Bootstrap and Indigo, in light and dark). Use when writing, changing or reviewing a sample's src/index.css, when a sample color looks wrong in one theme, or when a design review flags a sample's colors. Not for building an application theme or a custom palette."
---

# Ignite UI sample styling

The docs theme picker switches every embedded sample between Material, Fluent, Bootstrap and
Indigo, in light and dark. A color that a sample sets by hand either fights the theme or needs one
more exception for one theme. These rules keep a sample's stylesheet out of the theme's way.

In this repo the sample stylesheet is `samples/<group>/<component>/<name>/src/index.css`. The samples
browser loads the sample's theme as a `<link data-ig-theme>`, and `src/utils/sample-theme.ts`
re-points that link when the docs picker posts a selection into the sample's iframe.

## Rules

The rules are shared by the Angular, Web Components, React and Blazor samples repos, worded the
same in each. Only the [platform section](#platform-react) differs.

### 1. A sample's CSS holds layout only

A sample's CSS holds layout only: display, grid and flex, gaps, padding and sizes. It sets no
color, background or border color.

Wrong: the icon and the badge already get their colors from the theme.

```css
igc-icon {
    color: var(--ig-gray-700);
    font-size: 1.5rem;
}

igc-badge::part(base) {
    color: #fff;
}
```

Right:

```css
igc-icon {
    font-size: 1.5rem;
}
```

### 2. Colors and text styles come from the theme

Colors come from the theme. The caption style of the sample labels, the "Aktiv Grotesk" font with
its gray color, is deliberate and stays as it is. Other text styles that the design asks for use
the theme's typography classes, such as `ig-typography__subtitle-2` or `ig-typography__body-2`,
inside an element with the `ig-typography` class.

Wrong: a hand-made text style with its own size, weight and color.

```tsx
<div className="sample">
    <span className="group-title">Destinations by region</span>
</div>
```

```css
.group-title {
    font-size: 0.875rem;
    font-weight: 600;
    color: var(--ig-gray-800);
}
```

Right: the theme's typography class, and the sample label caption kept as it is.

```tsx
<div className="sample ig-typography">
    <span className="ig-typography__subtitle-2">Destinations by region</span>
    <span className="state-label">Success</span>
</div>
```

```css
/* the sample label caption, deliberate in every sample */
.state-label {
    font: 400 13px / 20px "Aktiv Grotesk", sans-serif;
    letter-spacing: 0.3px;
    color: var(--ig-gray-600);
}
```

### 3. No color rules for one theme

A sample has no color rules for one theme. When a color looks wrong in one theme, the fix removes
the custom color and lets the theme decide. It does not add a rule for that theme.

Wrong: a custom color, then an exception for the theme it looked wrong in.

```css
igc-icon-button {
    color: var(--ig-gray-700);
}

@container style(--ig-theme: indigo) {
    igc-icon-button {
        color: var(--ig-gray-500);
    }
}
```

Right: both rules removed, so the icon button keeps the theme's own color.

```css
igc-icon-button {
    --ig-size: var(--ig-size-small);
}
```

### 4. Layout may change by theme only when the theme changes what the sample can show

A sample may change its layout by theme when the theme itself changes what the sample can show. An
example is the box type of the input components, such as Input, Select and Combo, which only
Material draws differently from the border type. The sample root gets `container-name: sample`, and
the rule uses `@container sample not style(--ig-theme: material)`. Such a rule changes layout only.

Wrong: no container name, a rule that matches one theme, and a color inside it.

```css
@container style(--ig-theme: fluent) {
    .box-type {
        display: none;
        border-color: var(--ig-gray-400);
    }
}
```

Right: from `samples/inputs/combo/validation/src/index.css`.

```css
.sample {
    display: flex;
    container-name: sample;
}

/* the box type looks like the border type outside the Material theme, so the other themes show
   the border type alone, without the type labels */
@container sample not style(--ig-theme: material) {
    .states {
        grid-template-columns: repeat(3, minmax(0, 17.4375rem));
    }

    .type-label,
    .box-type {
        display: none;
    }
}
```

### 5. A state the component does not have may take a palette color

When a component has no built-in state that the sample shows, the sample may color that state from
the theme palette, for example `var(--ig-success-500)`. An example is the success or warn state,
which the Web Components input components do not have. The rule is the same in every theme and on
all four platforms.

Wrong: a fixed color, or a different color per theme.

```css
.state-combo.success {
    --ig-input-group-error-secondary-color: #2e7d32;
}

@container style(--ig-theme: bootstrap) {
    .state-combo.success {
        --ig-input-group-error-secondary-color: var(--ig-success-700);
    }
}
```

Right: from `samples/inputs/combo/validation/src/index.css`. The success and warn combos are invalid
combos that take a palette color in place of the error color.

```css
.state-combo.success {
    --ig-input-group-error-secondary-color: var(--ig-success-500);
}

.state-combo.warn {
    --ig-input-group-error-secondary-color: var(--ig-warn-500);
}
```

### 6. A sample does not import or force a theme

A sample does not import or force a theme, because the docs picker sets it. The four platforms stay
in step through `--ig-size`, not through a theme.

Wrong: a second theme imported from the stylesheet, or the theme forced from code.

```css
@import "igniteui-webcomponents/themes/light/indigo.css";
```

```ts
configureTheme('indigo');
```

Right: the size set through `--ig-size`, and the theme left to the picker.

```css
igc-combo {
    --ig-size: var(--ig-size-medium);
}
```

## Platform: React

Style components through `::part()` and their CSS variables. An `Igr` component renders the matching
`igc-` element, such as `IgrCombo` rendering `igc-combo`, and its markup is in that element's shadow
DOM, so select the `igc-` element and reach its markup through its parts. A descendant selector does
not reach it. Look the parts and the variables up with `get_component_design_tokens` rather than
guessing them, and set only layout through them.

Wrong: a descendant selector that cannot reach into the shadow DOM.

```css
igc-color-picker .color-picker {
    width: 100%;
}
```

Right: the component's part, from `samples/inputs/color-picker/overview/src/index.css`.

```css
igc-color-picker::part(color-picker) {
    width: 100%;
    grid-template-columns: auto;
}
```

The theme import in `src/index.tsx`, such as
`import 'igniteui-webcomponents/themes/light/bootstrap.css';`, is not a forced theme. The samples
browser turns it into the `<link data-ig-theme>` that the docs picker re-points, and the sample
needs it to run on its own. Keep that one import in the shape [AGENTS.md](../../../AGENTS.md)
describes. Do not import a theme anywhere else, and do not call `configureTheme`.

The samples browser puts the `ig-typography` class on `<body>`, but a sample also runs on its own,
so put the class on the sample root when the sample uses a typography class.

## Theming MCP server

Use the Ignite UI theming MCP server from the `igniteui-theming` package. It serves Angular, Web
Components, React and Blazor. The repo configures it for VS Code in `.vscode/mcp.json` and for
Claude Code in `.mcp.json`, both starting it with `npx -y igniteui-theming igniteui-theming-mcp`.
If its tools are not available, ask the user to enable the server and reload the editor.

- Call `detect_platform` once first, or pass `react` as the platform.
- Look up the CSS variables of a component with `get_component_design_tokens` instead of guessing
  their names.
- Look up a palette color with `get_color`, for example `{ color: "success", variant: "500" }`,
  instead of writing its name by hand.
- Follow the color guidance the server serves. Read these resources with `read_resource`:
  `theming://guidance/colors/rules`, `theming://guidance/colors/usage`,
  `theming://guidance/colors/states` and `theming://guidance/colors/themes`.

Do not use the theme generation tools, such as `create_theme`, `create_palette` or
`create_component_theme`, for a sample. A sample does not carry a theme of its own (rule 6).

## Review checklist

Compare the sample under every theme before you finish, and when you review a sample's CSS.

1. Start the samples browser with `npm run dev` and open `http://localhost:4200`.
2. The sample takes a theme only from the frame that embeds it, the way the docs embed it. From the
   browser console, embed the sample in a frame the size of the docs sample, about 810px wide:

   ```js
   const frame = document.createElement('iframe');
   frame.src = '/inputs/combo/validation';
   frame.style.cssText = 'position: fixed; inset: 0 auto auto 0; z-index: 9999; width: 810px; height: 600px; border: 0; background: Canvas';
   document.body.append(frame);
   ```

3. Once the frame has loaded, switch the theme the way the docs picker does:

   ```js
   frame.contentWindow.postMessage({ type: 'igd-sample-theme', theme: 'fluent', mode: 'dark' }, '*');
   ```

   `theme` is `material`, `fluent`, `bootstrap` or `indigo`, and `mode` is `light` or `dark`.
4. Go through all eight combinations:

   | Theme | Light | Dark |
   | --- | --- | --- |
   | Material | [ ] | [ ] |
   | Fluent | [ ] | [ ] |
   | Bootstrap | [ ] | [ ] |
   | Indigo | [ ] | [ ] |

5. In each one, check that:
   - all text is readable, and no element keeps a light-theme color in dark or the other way
     round;
   - nothing is clipped or overflows the 810px frame;
   - a theme rule, if any, changes layout only and uses `@container sample` (rule 4).
6. Search the stylesheet for `color`, `background`, `border` and `@container`, and check each hit
   against rules 1 to 5.
