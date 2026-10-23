import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import {
  IgrGrid,
  IgrTreeGrid,
  IgrHierarchicalGrid,
  IgrPivotGrid,
  IgrRowIsland,
  IgrColumn,
  IgrPaginator,
  IgrCellTemplateContext,
  IgrNumberSummaryOperand,
  IgrPivotConfiguration,
  IgrSummaryResult,
} from 'igniteui-react-grids';
import {
  IgrAccordion,
  IgrAvatar,
  IgrButton,
  IgrButtonGroup,
  IgrColorPicker,
  IgrDialog,
  IgrExpansionPanel,
  IgrIconButton,
  IgrSwitch,
  IgrToggleButton,
  registerIconFromText,
} from 'igniteui-react';
import {
  InvoicesData,
  EmployeesFlatAvatars,
  SingersData,
  PivotDataFlat,
} from './PlaygroundData';

import 'igniteui-react-grids/grids/themes/light/material.css';

const copyIcon =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>';
const checkIcon =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>';
const restartIcon =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 5V2L8 6l4 4V7c3.31 0 6 2.69 6 6 0 2.97-2.17 5.43-5 5.91v2.02c3.95-.49 7-3.85 7-7.93 0-4.42-3.58-8-8-8zm-6 8c0-1.65.67-3.15 1.76-4.24L6.34 7.34A8.014 8.014 0 0 0 4 13c0 4.08 3.05 7.44 7 7.93v-2.02c-2.83-.48-5-2.94-5-5.91z"/></svg>';

registerIconFromText('content_copy', copyIcon, 'material');
registerIconFromText('check', checkIcon, 'material');
registerIconFromText('restart_alt', restartIcon, 'material');

type TokenKey =
  | 'background'
  | 'accentColor'
  | 'foreground'
  | 'headerBackground'
  | 'headerForeground';
type Preview = 'grid' | 'tree' | 'hierarchical' | 'pivot';
type Size = 'small' | 'medium' | 'large';

interface TokenDescriptor {
  key: TokenKey;
  cssVar: string;
}

class CompactSummary extends IgrNumberSummaryOperand {
  public operate(data?: any[]): IgrSummaryResult[] {
    return super
      .operate(data)
      .filter((r: IgrSummaryResult) => r.key === 'count' || r.key === 'sum');
  }
}

const PRIMARY_TOKENS: TokenDescriptor[] = [
  { key: 'background', cssVar: '--ig-grid-background' },
  { key: 'accentColor', cssVar: '--ig-grid-accent-color' },
  { key: 'foreground', cssVar: '--ig-grid-foreground' },
];
const HEADER_TOKENS: TokenDescriptor[] = [
  { key: 'headerBackground', cssVar: '--ig-grid-header-background' },
  { key: 'headerForeground', cssVar: '--ig-grid-header-text-color' },
];
const ALL_TOKENS = [...PRIMARY_TOKENS, ...HEADER_TOKENS];

const EMPTY_COLORS: Record<TokenKey, string> = {
  background: '',
  accentColor: '',
  foreground: '',
  headerBackground: '',
  headerForeground: '',
};

const HEADER_TEXT_ON_HEADER =
  'hsla(from color(from var(--ig-grid-header-background) var(--y-contrast)) h 0 l/1)';
const DIVIDER =
  'hsl(from color-mix(in srgb, var(--ig-grid-foreground) 16%, var(--ig-grid-background)) h s l/0.38)';
const ZEBRA =
  'color-mix(in srgb, var(--ig-grid-foreground) 4%, var(--ig-grid-background))';
const NO_DIVIDER = 'var(--ig-grid-background)';

const invoicesData = new InvoicesData();
const employeesFlatAvatars = new EmployeesFlatAvatars();
const singersData = new SingersData();
const pivotDataFlat = new PivotDataFlat();

const pivotConfig: IgrPivotConfiguration = {
  columns: [
    {
      memberName: 'Product',
      memberFunction: (data: any) => data.ProductName,
      enabled: true,
    },
  ],
  rows: [
    {
      memberName: 'City',
      memberFunction: (data: any) => data.SellerCity,
      enabled: true,
      childLevel: {
        memberName: 'Seller',
        memberFunction: (data: any) => data.SellerName,
        enabled: true,
      },
    },
  ],
  values: [
    {
      member: 'NumberOfUnits',
      aggregate: { key: 'sum', aggregatorName: 'SUM', label: 'Sum' },
      enabled: true,
    },
  ],
  filters: null,
};

const avatarCellTemplate = (props: { dataContext: IgrCellTemplateContext }) => {
  return (
    <div className="playground__cell">
      <IgrAvatar
        src={props.dataContext.cell.row.data.Avatar}
        shape="circle"
      ></IgrAvatar>
      <span>{props.dataContext.cell.value}</span>
    </div>
  );
};

function getPreviewStyle(
  colors: Record<TokenKey, string>,
  size: Size,
  radiusFactor: number,
  horizontalDividers: boolean,
  verticalDividers: boolean,
  zebra: boolean,
): Record<string, string> {
  const style: Record<string, string> = {};

  for (const token of ALL_TOKENS) {
    if (colors[token.key]) {
      style[token.cssVar] = colors[token.key];
    }
  }
  if (colors.headerBackground && !colors.headerForeground) {
    style['--ig-grid-header-text-color'] = HEADER_TEXT_ON_HEADER;
  }

  style['--ig-size'] = `var(--ig-size-${size})`;
  style['--ig-radius-factor'] = `${radiusFactor}`;
  style['--ig-grid-row-border-color'] = horizontalDividers
    ? DIVIDER
    : NO_DIVIDER;

  const columnRule = verticalDividers ? DIVIDER : NO_DIVIDER;
  style['--ig-grid-body-column-border-color-odd'] = columnRule;
  style['--ig-grid-body-column-border-color-even'] = columnRule;

  if (zebra) {
    style['--ig-grid-row-even-background'] = ZEBRA;
  }

  return style;
}

function getExportCss(
  overrides: Record<string, string>,
  base: [string, string][],
): string {
  if (!base.length) {
    const lines = Object.entries(overrides).map(
      ([name, value]) => `  ${name}: ${value};`,
    );
    return `/* Overrides only -- requires a base grid theme to derive from. */\n.my-grid {\n${lines.join('\n')}\n}`;
  }

  const emitted = new Set<string>();
  const lines = base.map(([name, value]) => {
    emitted.add(name);
    return `  ${name}: ${overrides[name] ?? value};`;
  });
  const extras = Object.entries(overrides)
    .filter(([name]) => !emitted.has(name))
    .map(([name, value]) => `  ${name}: ${value};`);

  return `.my-grid {\n${[...extras, ...lines].join('\n')}\n}`;
}

function readCompiledTheme(): [string, string][] {
  const tokens = new Map<string, string>();

  for (const sheet of Array.from(document.styleSheets)) {
    let rules: CSSRuleList;

    try {
      rules = sheet.cssRules;
    } catch {
      continue; // cross-origin sheet, not ours
    }

    for (const rule of Array.from(rules)) {
      if (
        !(rule instanceof CSSStyleRule) ||
        !rule.selectorText.includes('playground__stage')
      ) {
        continue;
      }

      for (let i = 0; i < rule.style.length; i++) {
        const name = rule.style.item(i);
        if (name.startsWith('--ig-')) {
          tokens.set(name, rule.style.getPropertyValue(name).trim());
        }
      }
    }
  }

  return Array.from(tokens);
}

export default function GridThemePlayground() {
  const [colors, setColors] = useState<Record<TokenKey, string>>({
    ...EMPTY_COLORS,
  });
  const [size, setSize] = useState<Size>('medium');
  const [radiusFactor, setRadiusFactor] = useState(0.4);
  const [horizontalDividers, setHorizontalDividers] = useState(true);
  const [verticalDividers, setVerticalDividers] = useState(false);
  const [zebra, setZebra] = useState(false);
  const [preview, setPreview] = useState<Preview>('grid');
  const [codeHtml, setCodeHtml] = useState('');
  const [copied, setCopied] = useState(false);

  const stageRef = useRef<HTMLDivElement>(null);
  const dialogRef = useRef<IgrDialog>(null);
  const seedColors = useRef<Partial<Record<TokenKey, string>>>({});
  const themeTokens = useRef<[string, string][]>([]);
  const highlighter = useRef<{
    codeToHtml: (code: string, opts: { lang: string; theme: string }) => string;
  } | null>(null);

  useEffect(() => {
    themeTokens.current = readCompiledTheme();

    const styles = getComputedStyle(stageRef.current);
    seedColors.current = {
      background: styles.getPropertyValue('--ig-grid-background').trim(),
      accentColor: styles.getPropertyValue('--ig-grid-accent-color').trim(),
    };
    setColors((current) => ({ ...current, ...seedColors.current }));
  }, []);

  const previewStyle = getPreviewStyle(
    colors,
    size,
    radiusFactor,
    horizontalDividers,
    verticalDividers,
    zebra,
  );
  const exportCss = getExportCss(previewStyle, themeTokens.current);

  const setColor = (key: TokenKey, value: string) => {
    setColors((current) => ({ ...current, [key]: value }));
  };

  const onColorChange = (key: TokenKey, event: CustomEvent<string>) => {
    if (event.composedPath()[0] === event.currentTarget) {
      setColor(key, event.detail);
    }
  };

  const reset = () => {
    setColors({ ...EMPTY_COLORS, ...seedColors.current });
    setSize('medium');
    setRadiusFactor(0.4);
    setHorizontalDividers(true);
    setVerticalDividers(false);
    setZebra(false);
  };

  const showCode = async () => {
    if (!highlighter.current) {
      const [core, engine, css, theme] = await Promise.all([
        import('shiki/core'),
        import('shiki/engine/javascript'),
        import('shiki/langs/css.mjs'),
        import('shiki/themes/dark-plus.mjs'),
      ]);

      highlighter.current = await core.createHighlighterCore({
        themes: [theme.default],
        langs: [css.default],
        engine: engine.createJavaScriptRegexEngine(),
      });
    }

    setCodeHtml(
      highlighter.current.codeToHtml(exportCss, {
        lang: 'css',
        theme: 'dark-plus',
      }),
    );
    dialogRef.current?.show();
  };

  const copy = () => {
    navigator.clipboard.writeText(exportCss).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const renderPreview = () => {
    switch (preview) {
      case 'grid':
        return (
          <IgrGrid
            key="grid"
            data={invoicesData}
            autoGenerate={false}
            width="100%"
            height="100%"
            allowFiltering={true}
            filterMode="excelStyleFilter"
            rowSelection="multiple"
          >
            <IgrColumn
              field="ShipCountry"
              header="Country"
              width="150px"
              sortable={true}
              filterable={true}
              groupable={true}
            ></IgrColumn>
            <IgrColumn
              field="ShipCity"
              header="City"
              width="150px"
              sortable={true}
              filterable={true}
              groupable={true}
            ></IgrColumn>
            <IgrColumn
              field="ShipName"
              header="Ship Name"
              width="220px"
              sortable={true}
              filterable={true}
            ></IgrColumn>
            <IgrColumn
              field="Salesperson"
              header="Salesperson"
              width="180px"
              sortable={true}
              filterable={true}
            ></IgrColumn>
            <IgrColumn
              field="Quantity"
              header="Quantity"
              width="120px"
              dataType="number"
              sortable={true}
              hasSummary={true}
              summaries={CompactSummary}
            ></IgrColumn>
            <IgrPaginator perPage={50}></IgrPaginator>
          </IgrGrid>
        );
      case 'tree':
        return (
          <IgrTreeGrid
            key="tree"
            data={employeesFlatAvatars}
            primaryKey="ID"
            foreignKey="ParentID"
            autoGenerate={false}
            width="100%"
            height="100%"
            allowFiltering={true}
            filterMode="excelStyleFilter"
            rowSelection="multiple"
          >
            <IgrColumn
              field="Name"
              width="260px"
              sortable={true}
              filterable={true}
              bodyTemplate={avatarCellTemplate}
            ></IgrColumn>
            <IgrColumn
              field="Title"
              dataType="string"
              sortable={true}
              filterable={true}
            ></IgrColumn>
            <IgrColumn
              field="Age"
              dataType="number"
              sortable={true}
              filterable={true}
            ></IgrColumn>
            <IgrColumn
              field="HireDate"
              dataType="date"
              sortable={true}
              filterable={true}
            ></IgrColumn>
          </IgrTreeGrid>
        );
      case 'hierarchical':
        return (
          <IgrHierarchicalGrid
            key="hierarchical"
            data={singersData}
            autoGenerate={false}
            width="100%"
            height="100%"
            allowFiltering={true}
            filterMode="excelStyleFilter"
          >
            <IgrColumn
              field="Artist"
              sortable={true}
              filterable={true}
            ></IgrColumn>
            <IgrColumn
              field="Debut"
              dataType="number"
              sortable={true}
              filterable={true}
            ></IgrColumn>
            <IgrColumn
              field="GrammyNominations"
              header="Nominations"
              sortable={true}
              filterable={true}
            ></IgrColumn>
            <IgrColumn
              field="GrammyAwards"
              header="Awards"
              sortable={true}
              filterable={true}
            ></IgrColumn>
            <IgrRowIsland
              childDataKey="Albums"
              autoGenerate={false}
              height={null}
            >
              <IgrColumn field="Album" sortable={true}></IgrColumn>
              <IgrColumn
                field="LaunchDate"
                header="Launch Date"
                dataType="date"
                sortable={true}
              ></IgrColumn>
              <IgrColumn
                field="BillboardReview"
                header="Review"
                sortable={true}
              ></IgrColumn>
            </IgrRowIsland>
          </IgrHierarchicalGrid>
        );
      case 'pivot':
        return (
          <IgrPivotGrid
            key="pivot"
            data={pivotDataFlat}
            pivotConfiguration={pivotConfig}
            width="100%"
            height="100%"
            allowFiltering={true}
            filterMode="excelStyleFilter"
          ></IgrPivotGrid>
        );
    }
  };

  return (
    <div className="container sample ig-typography">
      <div className="playground">
        <aside className="playground__rail">
          <IgrAccordion>
            <IgrExpansionPanel>
              <span slot="title">Grid Type</span>
              <p className="playground__hint">
                One set of grid tokens serves every grid. Switch here to see the
                same tokens applied to a different one.
              </p>
              <IgrButtonGroup
                alignment="vertical"
                selection="single-required"
                onSelect={(e: CustomEvent<string>) =>
                  setPreview(e.detail as Preview)
                }
              >
                <IgrToggleButton value="grid" selected={preview === 'grid'}>
                  Flat
                </IgrToggleButton>
                <IgrToggleButton value="tree" selected={preview === 'tree'}>
                  Tree
                </IgrToggleButton>
                <IgrToggleButton
                  value="hierarchical"
                  selected={preview === 'hierarchical'}
                >
                  Hierarchical
                </IgrToggleButton>
                <IgrToggleButton value="pivot" selected={preview === 'pivot'}>
                  Pivot
                </IgrToggleButton>
              </IgrButtonGroup>
            </IgrExpansionPanel>
            <IgrExpansionPanel open>
              <span slot="title">Primary tokens</span>
              <p className="playground__hint">
                Start here. Background and accent are enough to theme the whole
                grid &mdash; header, rows, icons and popups all derive from
                them. Foreground is picked for contrast automatically; set it
                only to override that.
              </p>
              <div className="playground__fields">
                  <div className="playground__color-control">
                    <IgrColorPicker
                      mode="input"
                      label="Background"
                      value={colors.background}
                      onInput={(e: CustomEvent<string>) => onColorChange('background', e)}
                      onChange={(e: CustomEvent<string>) => onColorChange('background', e)}
                    ></IgrColorPicker>
                    <IgrIconButton
                      variant="flat"
                      name="restart_alt"
                      collection="material"
                      disabled={!colors.background}
                      aria-label="Reset Background to auto"
                      title="Reset to auto"
                      onClick={() => setColor('background', '')}
                    ></IgrIconButton>
                  </div>
                  <div className="playground__color-control">
                    <IgrColorPicker
                      mode="input"
                      label="Accent"
                      value={colors.accentColor}
                      onInput={(e: CustomEvent<string>) => onColorChange('accentColor', e)}
                      onChange={(e: CustomEvent<string>) => onColorChange('accentColor', e)}
                    ></IgrColorPicker>
                    <IgrIconButton
                      variant="flat"
                      name="restart_alt"
                      collection="material"
                      disabled={!colors.accentColor}
                      aria-label="Reset Accent to auto"
                      title="Reset to auto"
                      onClick={() => setColor('accentColor', '')}
                    ></IgrIconButton>
                  </div>
                  <div className="playground__color-control">
                    <IgrColorPicker
                      mode="input"
                      label="Foreground"
                      value={colors.foreground}
                      onInput={(e: CustomEvent<string>) => onColorChange('foreground', e)}
                      onChange={(e: CustomEvent<string>) => onColorChange('foreground', e)}
                    ></IgrColorPicker>
                    <IgrIconButton
                      variant="flat"
                      name="restart_alt"
                      collection="material"
                      disabled={!colors.foreground}
                      aria-label="Reset Foreground to auto"
                      title="Reset to auto"
                      onClick={() => setColor('foreground', '')}
                    ></IgrIconButton>
                  </div>
              </div>
            </IgrExpansionPanel>
            <IgrExpansionPanel>
              <span slot="title">Header</span>
              <p className="playground__hint">
                Optional. The header normally derives from the background.
                Declare one here and it detaches, becoming a root of its own
                &mdash; its text then takes contrast against the new header
                rather than following the grid foreground.
              </p>
              <div className="playground__fields">
                  <div className="playground__color-control">
                    <IgrColorPicker
                      mode="input"
                      label="Header background"
                      value={colors.headerBackground}
                      onInput={(e: CustomEvent<string>) => onColorChange('headerBackground', e)}
                      onChange={(e: CustomEvent<string>) => onColorChange('headerBackground', e)}
                    ></IgrColorPicker>
                    <IgrIconButton
                      variant="flat"
                      name="restart_alt"
                      collection="material"
                      disabled={!colors.headerBackground}
                      aria-label="Reset Header background to auto"
                      title="Reset to auto"
                      onClick={() => setColor('headerBackground', '')}
                    ></IgrIconButton>
                  </div>
                  <div className="playground__color-control">
                    <IgrColorPicker
                      mode="input"
                      label="Header foreground"
                      value={colors.headerForeground}
                      onInput={(e: CustomEvent<string>) => onColorChange('headerForeground', e)}
                      onChange={(e: CustomEvent<string>) => onColorChange('headerForeground', e)}
                    ></IgrColorPicker>
                    <IgrIconButton
                      variant="flat"
                      name="restart_alt"
                      collection="material"
                      disabled={!colors.headerForeground}
                      aria-label="Reset Header foreground to auto"
                      title="Reset to auto"
                      onClick={() => setColor('headerForeground', '')}
                    ></IgrIconButton>
                  </div>
              </div>
            </IgrExpansionPanel>
            <IgrExpansionPanel open>
              <span slot="title">Structure</span>
              <div className="playground__fields">
                <div className="playground__control">
                  <span className="playground__label">Density</span>
                  <IgrButtonGroup
                    alignment="vertical"
                    selection="single-required"
                    onSelect={(e: CustomEvent<string>) =>
                      setSize(e.detail as Size)
                    }
                  >
                    <IgrToggleButton value="small" selected={size === 'small'}>
                      Small
                    </IgrToggleButton>
                    <IgrToggleButton
                      value="medium"
                      selected={size === 'medium'}
                    >
                      Medium
                    </IgrToggleButton>
                    <IgrToggleButton value="large" selected={size === 'large'}>
                      Large
                    </IgrToggleButton>
                  </IgrButtonGroup>
                </div>
                <div className="playground__control">
                  <span className="playground__label">Roundness</span>
                  <IgrButtonGroup
                    alignment="vertical"
                    selection="single-required"
                    onSelect={(e: CustomEvent<string>) =>
                      setRadiusFactor(Number(e.detail))
                    }
                  >
                    <IgrToggleButton value="0" selected={radiusFactor === 0}>
                      Square
                    </IgrToggleButton>
                    <IgrToggleButton
                      value="0.4"
                      selected={radiusFactor === 0.4}
                    >
                      Soft
                    </IgrToggleButton>
                    <IgrToggleButton value="1" selected={radiusFactor === 1}>
                      Round
                    </IgrToggleButton>
                  </IgrButtonGroup>
                </div>
                <IgrSwitch
                  checked={horizontalDividers}
                  onChange={(e: CustomEvent) =>
                    setHorizontalDividers((e.target as IgrSwitch).checked)
                  }
                >
                  Horizontal dividers
                </IgrSwitch>
                <IgrSwitch
                  checked={verticalDividers}
                  onChange={(e: CustomEvent) =>
                    setVerticalDividers((e.target as IgrSwitch).checked)
                  }
                >
                  Vertical dividers
                </IgrSwitch>
                <IgrSwitch
                  checked={zebra}
                  onChange={(e: CustomEvent) =>
                    setZebra((e.target as IgrSwitch).checked)
                  }
                >
                  Zebra rows
                </IgrSwitch>
                <p className="playground__hint">
                  Both dividers use the same derived colour, and switching one
                  off tints it to the surface rather than removing it, so the
                  row metrics never change.
                </p>
              </div>
            </IgrExpansionPanel>
          </IgrAccordion>
          <div className="playground__actions">
            <IgrButton variant="outlined" onClick={reset}>
              Reset
            </IgrButton>
            <IgrButton variant="contained" onClick={showCode}>
              Show code
            </IgrButton>
          </div>
        </aside>
        <section className="playground__preview">
          <div
            className="playground__stage"
            ref={stageRef}
            style={previewStyle as React.CSSProperties}
          >
            {renderPreview()}
          </div>
        </section>
      </div>
      <IgrDialog ref={dialogRef} closeOnOutsideClick={true}>
        <div slot="title" className="playground__dialog-title">
          Theme code
        </div>
        <div className="playground__dialog-body">
          <div className="playground__code-header">
            <span>CSS variables</span>
            <IgrIconButton
              className="playground__copy"
              name={copied ? 'check' : 'content_copy'}
              collection="material"
              variant="outlined"
              title={copied ? 'Copied' : 'Copy code'}
              onClick={copy}
            ></IgrIconButton>
          </div>
          <div
            className="playground__code"
            dangerouslySetInnerHTML={{ __html: codeHtml }}
          ></div>
        </div>
        <IgrButton
          slot="footer"
          variant="flat"
          onClick={() => dialogRef.current?.hide()}
        >
          Close
        </IgrButton>
      </IgrDialog>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<GridThemePlayground />);
