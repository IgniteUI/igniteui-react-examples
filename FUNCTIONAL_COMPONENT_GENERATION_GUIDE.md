# Functional Component Generation Guide

This guide is the authoritative reference for **generating** Ignite UI React functional component samples programmatically. Every construct a generated sample may need is covered below with:

- **When to use it** — the trigger condition in the source class
- **Class template** — the exact pattern that appears in class-based originals
- **Functional template** — the exact generated output
- **Rules** — edge cases, ordering requirements, and common mistakes to avoid

Companion document: [`FUNCTIONAL_REFACTORING_README.md`](./FUNCTIONAL_REFACTORING_README.md) — a sample-by-sample mapping of what was refactored and why.

---

## Table of Contents

1. [File skeleton](#1-file-skeleton)
2. [Imports](#2-imports)
3. [Module registration](#3-module-registration)
4. [State](#4-state)
5. [Refs — component or DOM element accessed imperatively](#5-refs--component-or-dom-element-accessed-imperatively)
6. [Cross-component wiring — instance as a prop](#6-cross-component-wiring--instance-as-a-prop)
7. [Cross-component wiring — imperative assignment after render](#7-cross-component-wiring--imperative-assignment-after-render)
8. [Lazy getters and data sources](#8-lazy-getters-and-data-sources)
9. [ComponentRenderer](#9-componentrenderer)
10. [Event handlers](#10-event-handlers)
11. [componentDidMount (one-time setup)](#11-componentdidmount-one-time-setup)
12. [componentWillUnmount (cleanup)](#12-componentwillunmount-cleanup)
13. [setInterval management](#13-setinterval-management)
14. [Async data loading](#14-async-data-loading)
15. [Native / web-component event listeners](#15-native--web-component-event-listeners)
16. [Static or inline data](#16-static-or-inline-data)
17. [Pure helper functions](#17-pure-helper-functions)
18. [Aggregate functions (Pivot Grid)](#18-aggregate-functions-pivot-grid)
19. [One-time side effects (icon registration)](#19-one-time-side-effects-icon-registration)
20. [mountedRef guard (prevent post-unmount updates)](#20-mountedref-guard-prevent-post-unmount-updates)
21. [Hook import checklist](#21-hook-import-checklist)
22. [Complete generated skeleton](#22-complete-generated-skeleton)

---

## 1. File skeleton

### Class template
```tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// ... more imports

export default class Sample extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
        // state init, .bind() calls
    }

    public render(): JSX.Element {
        return ( /* JSX */ );
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
```

### Functional template
```tsx
import React, { /* only the hooks you need */ } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// ... same component imports

// Module-level registrations, constants, pure functions go here
// (see sections 3, 16, 17, 18, 19)

export default function Sample() {
    // hooks go here (useState, useRef, useMemo, useCallback, useEffect)

    return ( /* same JSX, `this.` removed */ );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
```

**Rules**
- The component name stays the same.
- The `ReactDOM.createRoot` line is identical.
- `constructor`, `super(props)`, and all `.bind()` calls are deleted entirely.

---

## 2. Imports

### Class template
```tsx
import React from 'react';
```

### Functional template
```tsx
import React, { useState, useRef, useMemo, useCallback, useEffect } from 'react';
```

**Rules**
- Only import the hooks that are actually used (see [Section 21](#21-hook-import-checklist) for a decision tree).
- Do **not** import hooks that are not needed — unused imports generate lint warnings.

---

## 3. Module registration

Module registration already lives at module scope in most originals. No change is needed — keep it identical.

### Class template
```tsx
const mods: any[] = [
    IgrDataPieChartModule,
    IgrItemLegendModule,
];
mods.forEach((m) => m.register());
```

or

```tsx
IgrFinancialChartModule.register();
IgrLegendModule.register();
```

### Functional template
```tsx
// identical — stays at module scope
const mods: any[] = [
    IgrDataPieChartModule,
    IgrItemLegendModule,
];
mods.forEach(m => m.register());
```

**Rules**
- Never move registration inside the component function body — it would re-run on every render.
- The `(m) => m.register()` arrow can optionally be shortened to `m => m.register()`.

---

## 4. State

**Trigger:** the class has `this.state = { ... }` in the constructor and `this.setState(...)` calls in methods.

### Class template
```tsx
constructor(props: any) {
    super(props);
    this.state = {
        chartType: 'Auto',
        isLoading: false,
        items: [],
    };
}

// inside a method:
this.setState({ chartType: 'Bar' });
this.setState({ isLoading: true, items: [] }); // multiple keys at once
```

### Functional template
```tsx
// One useState per logical piece of state
const [chartType, setChartType] = useState('Auto');
const [isLoading, setIsLoading] = useState(false);
const [items, setItems] = useState<any[]>([]);

// inside a handler:
setChartType('Bar');
setIsLoading(true);
setItems([]);
```

**Rules**
- Split state into independent pieces; do **not** put everything in one `useState({})` object unless the fields are always updated together.
- When multiple related fields are always updated atomically (e.g. `{ dataInfo, dataPoints }`), a single `useState` object with a spread-update is acceptable:
  ```tsx
  const [info, setInfo] = useState({ dataInfo: '500', dataPoints: 500 });
  // update:
  setInfo(prev => ({ ...prev, dataInfo: '1K', dataPoints: 1000 }));
  ```
- `this.setState` merges keys; the functional setter **replaces** the value — always spread when updating an object state.

---

## 5. Refs — component or DOM element accessed imperatively

**Trigger:** the class stores an Ignite UI component or DOM element instance as a plain field (`public chart: IgrCategoryChart`) and accesses it via `this.chart.someMethod()`.

### Class template
```tsx
public chart: IgrCategoryChart;

constructor(props: any) {
    super(props);
    this.onChartRef = this.onChartRef.bind(this);
}

public onChartRef(chart: IgrCategoryChart) {
    if (!chart) { return; }
    this.chart = chart;
}

// in render():
<IgrCategoryChart ref={this.onChartRef} ... />

// later usage:
this.chart.replayTransitionIn();
```

### Functional template
```tsx
const chartRef = useRef<IgrCategoryChart>(null);

const onChartRef = useCallback((chart: IgrCategoryChart) => {
    if (!chart) return;
    chartRef.current = chart;
}, []);

// in JSX:
<IgrCategoryChart ref={onChartRef} ... />

// later usage:
chartRef.current?.replayTransitionIn();
```

**Rules**
- Use `useRef` (not `useState`) because reading the ref never needs to trigger a re-render.
- Wrap the callback ref in `useCallback` to keep the reference stable across renders.
- Always guard with `if (!chart) return` inside the callback to handle unmounting.
- Access the element as `chartRef.current` (may be `null` — use optional chaining `?.`).
- **Do not** call `this.setState({})` after assigning the ref — the `useRef` equivalent never triggers re-renders.

---

## 6. Cross-component wiring — instance as a prop

**Trigger:** a callback ref calls `this.setState({})` purely to trigger a re-render, so that a newly-available component instance (e.g. a legend) can be passed as a **prop** to another component (`legend={this.legend}`).

### Class template
```tsx
private legend: IgrItemLegend;
private legendRef(r: IgrItemLegend) {
    this.legend = r;
    this.setState({}); // force re-render so legend becomes available as a prop
}
private chart: IgrDataPieChart;
private chartRef(r: IgrDataPieChart) {
    this.chart = r;
    this.setState({});
}

constructor(props: any) {
    super(props);
    this.legendRef = this.legendRef.bind(this);
    this.chartRef = this.chartRef.bind(this);
}

// in render():
<IgrItemLegend ref={this.legendRef} ... />
<IgrDataPieChart ref={this.chartRef} legend={this.legend} ... />
```

### Functional template
```tsx
// Store the instance in STATE — the setter causes the re-render that delivers
// the instance as a prop on the next paint.
const [legend, setLegend] = useState<IgrItemLegend | null>(null);

// in JSX:
<IgrItemLegend
    ref={(r: IgrItemLegend) => { if (r) setLegend(r); }}
    orientation="Horizontal"
/>
<IgrDataPieChart
    legend={legend ?? undefined}  // absent until legend is set
    ...
/>
```

**Rules**
- Use `useState`, not `useRef`, because the component instance must be available as a JSX prop — which requires a re-render to propagate.
- The inline ref callback `(r) => { if (r) setSomething(r); }` is intentional. Do **not** wrap it in `useCallback` — the identity change is harmless for ref callbacks and avoids extra complexity.
- Use `legend ?? undefined` to convert `null` (initial state) to `undefined` so the prop is simply absent until the legend mounts.
- A second `useState` for the chart instance is only needed if the chart ref is also used as a prop elsewhere. If only the legend needs wiring, only the legend needs `useState`.

---

## 7. Cross-component wiring — imperative assignment after render

**Trigger:** two callback refs call each other's instance imperatively (`this.chart.legend = this.legend`) rather than passing the instance as a prop.

### Class template
```tsx
public chart: IgrFinancialChart;
public legend: IgrLegend;

public onChartRef(chart: IgrFinancialChart) {
    if (!chart) { return; }
    this.chart = chart;
    if (this.legend) {
        this.chart.legend = this.legend;
    }
}

public onLegendRef(legend: IgrLegend) {
    if (!legend) { return; }
    this.legend = legend;
    if (this.chart) {
        this.chart.legend = this.legend;
    }
}
```

### Functional template
```tsx
const chartRef = useRef<IgrFinancialChart>(null);
const legendRef = useRef<IgrLegend>(null);

// Runs after every render; wires the two together once both refs are populated.
// No dependency array — intentionally runs every render to catch late mounts.
useEffect(() => {
    if (chartRef.current && legendRef.current) {
        chartRef.current.legend = legendRef.current;
    }
});

// in JSX:
<IgrLegend ref={legendRef} ... />
<IgrFinancialChart ref={chartRef} ... />
```

**Rules**
- Omit the dependency array (`[]`) from `useEffect` so it runs after every render. This guarantees the wiring fires regardless of which ref becomes available first.
- Use `useRef` (not `useState`) because the assignment is imperative — nothing in JSX depends on the value, so no re-render is needed.
- This pattern is preferred when the component's API requires imperative property assignment (i.e. the property is not a declarative JSX prop).

---

## 8. Lazy getters and data sources

**Trigger:** a class has a private backing field (`_foo: FooClass = null`) and a public getter with a null-check that initialises on first access.

### Class template
```tsx
private _energyGlobalDemand: EnergyGlobalDemand = null;
public get energyGlobalDemand(): EnergyGlobalDemand {
    if (this._energyGlobalDemand == null) {
        this._energyGlobalDemand = new EnergyGlobalDemand();
    }
    return this._energyGlobalDemand;
}

// used as:
dataSource={this.energyGlobalDemand}
```

### Functional template
```tsx
// useMemo with [] runs the factory exactly once — equivalent to the lazy getter.
const energyGlobalDemand = useMemo(() => new EnergyGlobalDemand(), []);

// used as:
dataSource={energyGlobalDemand}
```

**Rules**
- Always pass `[]` as the dependency array — the data source should be created once and never recreated.
- `useMemo` does not guarantee permanent memoization in strict React internals, but in practice with an empty deps array it is stable for the component's lifetime.
- If the data source class takes constructor arguments that can change, list them in the deps array.

---

## 9. ComponentRenderer

**Trigger:** the class has a lazy getter for a `ComponentRenderer` instance that registers description modules via `context`.

### Class template
```tsx
private _componentRenderer: ComponentRenderer = null;
public get renderer(): ComponentRenderer {
    if (this._componentRenderer == null) {
        this._componentRenderer = new ComponentRenderer();
        var context = this._componentRenderer.context;
        PropertyEditorPanelDescriptionModule.register(context);
        DataPieChartDescriptionModule.register(context);
        ItemLegendDescriptionModule.register(context);
    }
    return this._componentRenderer;
}

// used as:
componentRenderer={this.renderer}
```

### Functional template
```tsx
const renderer = useMemo(() => {
    const r = new ComponentRenderer();
    const ctx = r.context;
    PropertyEditorPanelDescriptionModule.register(ctx);
    DataPieChartDescriptionModule.register(ctx);
    ItemLegendDescriptionModule.register(ctx);
    return r;
}, []);

// used as:
componentRenderer={renderer}
```

**Rules**
- Use `useMemo(() => ..., [])` — identical reasoning to lazy getters in [Section 8](#8-lazy-getters-and-data-sources).
- Use `const ctx = r.context` (not `var context`) to stay consistent with modern TypeScript style.
- The list of `register` calls must be identical to the class version.

---

## 10. Event handlers

**Trigger:** the class has methods used as event callbacks, bound with `.bind(this)` in the constructor.

### Class template
```tsx
constructor(props: any) {
    super(props);
    this.onTransitionInModeChanged = this.onTransitionInModeChanged.bind(this);
    this.onReloadChartClick = this.onReloadChartClick.bind(this);
}

public onTransitionInModeChanged(e: any) {
    this.setState({ transitionInMode: e.target.value });
}

public onReloadChartClick() {
    this.chart.replayTransitionIn();
}

// in render():
<select onChange={this.onTransitionInModeChanged}>...</select>
<button onClick={this.onReloadChartClick}>Reload Chart</button>
```

### Functional template
```tsx
const onTransitionInModeChanged = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    setTransitionInMode(e.target.value);
}, []);

const onReloadChartClick = useCallback(() => {
    chartRef.current?.replayTransitionIn();
}, []);

// in JSX:
<select onChange={onTransitionInModeChanged}>...</select>
<button onClick={onReloadChartClick}>Reload Chart</button>
```

**Rules**
- Always wrap event handlers in `useCallback` to keep handler identity stable across renders (prevents unnecessary child re-renders).
- The dependency array `[]` is correct when the handler only reads from `useRef` values or `useState` setter functions (both are stable references).
- If the handler reads a `useState` value (not the setter), add it to the deps array, or use the functional updater form of the setter (`prev => ...`) to avoid stale closures.
- `this.` is removed from all internal usages; `this.chart.method()` becomes `chartRef.current?.method()`.

---

## 11. componentDidMount (one-time setup)

**Trigger:** the class has a `componentDidMount` method.

### Class template
```tsx
public componentDidMount() {
    this.setupSomething();
}
```

### Functional template
```tsx
useEffect(() => {
    setupSomething();
}, []); // [] = run once after first render, equivalent to componentDidMount
```

**Rules**
- The empty dependency array `[]` is the exact functional equivalent of `componentDidMount`.
- If the setup relies on state or prop values that could change, list them in the array.
- Put the `useEffect` near the top of the component body, after all `useRef` / `useState` declarations, before the `return`.

---

## 12. componentWillUnmount (cleanup)

**Trigger:** the class has a `componentWillUnmount` method that tears down timers, listeners, etc.

### Class template
```tsx
public componentWillUnmount() {
    if (this.interval >= 0) {
        window.clearInterval(this.interval);
        this.interval = -1;
    }
}
```

### Functional template
```tsx
useEffect(() => {
    // setup ...
    return () => {
        // cleanup — runs on unmount (and before re-running on dep changes)
        if (intervalRef.current >= 0) {
            window.clearInterval(intervalRef.current);
            intervalRef.current = -1;
        }
    };
}, [/* same deps as setup */]);
```

**Rules**
- The cleanup function is **always the return value** of the same `useEffect` that performed the setup. This collocates setup and teardown, making it impossible for one to exist without the other.
- The cleanup runs both on unmount **and** before the effect re-runs when dependencies change — this is more correct than `componentWillUnmount` which only ran on unmount.

---

## 13. setInterval management

**Trigger:** the class stores an interval ID as a class field and manages it across multiple methods.

### Class template
```tsx
public interval: number = -1;
public chart: IgrCategoryChart;
public data: any[];
public dataIndex: number = 0;
public refreshMilliseconds: number = 10;

public onChartRef(chart: IgrCategoryChart) {
    this.chart = chart;
    this.setupInterval();
}

public setupInterval(): void {
    if (this.interval >= 0) {
        window.clearInterval(this.interval);
    }
    this.interval = window.setInterval(() => this.tick(), this.refreshMilliseconds);
}

public tick(): void {
    // mutate this.data, call this.chart.notifyInsertItem(...)
}

public componentWillUnmount() {
    window.clearInterval(this.interval);
}
```

### Functional template
```tsx
// Mutable values that must survive re-renders but not trigger them live in refs
const chartRef      = useRef<IgrCategoryChart>(null);
const dataRef       = useRef<any[]>(initialData);
const dataIndexRef  = useRef<number>(0);
const refreshMsRef  = useRef<number>(10);
const intervalRef   = useRef<number>(-1);
const mountedRef    = useRef<boolean>(true); // guards against post-unmount updates

const setupInterval = useCallback(() => {
    if (intervalRef.current >= 0) {
        window.clearInterval(intervalRef.current);
        intervalRef.current = -1;
    }
    intervalRef.current = window.setInterval(() => {
        if (!mountedRef.current) return;  // component already unmounted — bail
        setState(prev => {
            // Read the latest state via `prev` to avoid stale closures.
            // Mutate data refs and call imperative chart API here.
            // Return `prev` unchanged if no state update is needed.
            return prev;
        });
    }, refreshMsRef.current);
}, []);

// Wire chart ref → start interval; cleanup on unmount
const onChartRef = useCallback((chart: IgrCategoryChart) => {
    if (!chart) return;
    chartRef.current = chart;
    setupInterval();
}, [setupInterval]);

useEffect(() => {
    return () => {
        mountedRef.current = false;
        if (intervalRef.current >= 0) {
            window.clearInterval(intervalRef.current);
            intervalRef.current = -1;
        }
    };
}, []);

// Usage in JSX:
// <IgrCategoryChart ref={onChartRef} ... />
```

**Rules**
- **Never** store the interval ID in `useState` — this would trigger a re-render every time the interval is created or cleared.
- **Never** read `useState` values directly inside the interval callback (stale closure). Instead: use the functional updater `setState(prev => ...)` to read the latest state, or store the value in a ref (`refreshMsRef.current`).
- Use `mountedRef` to guard against calling `setState` on an unmounted component (React 18 no longer warns, but it can still cause logic errors).
- When `refreshMilliseconds` changes, call `setupInterval()` again — the new interval replaces the old one.

---

## 14. Async data loading

**Trigger:** the class calls an async data-fetching method in the constructor (or `componentDidMount`) and stores the result in state.

### Class template
```tsx
constructor(props: any) {
    super(props);
    this.state = { data: [] };
    this.initData();
}

public initData() {
    SomeService.getData().then((result: any[]) => {
        this.setState({ data: result });
    });
}
```

### Functional template
```tsx
const [data, setData] = useState<any[]>([]);

useEffect(() => {
    SomeService.getData().then((result: any[]) => {
        setData(result);
    });
}, []); // [] = fetch once on mount
```

**Rules**
- The `[]` dependency array runs the fetch exactly once — equivalent to a constructor-time call.
- If you need to cancel the fetch on unmount (e.g. `AbortController`), return a cleanup function from the effect.
- Do **not** call `initData()` or equivalent from the constructor — functional components have no constructor.

---

## 15. Native / web-component event listeners

**Trigger:** the class uses `componentDidMount` to attach `addEventListener` calls to DOM elements or refs (common with Ignite UI web components that emit `igcInput`, `igcChange`, etc.).

### Class template
```tsx
public componentDidMount() {
    this.infoForm.addEventListener('igcInput', this.onInput);
    this.addressForm.addEventListener('igcInput', this.onInput);
}

public componentWillUnmount() {
    this.infoForm?.removeEventListener('igcInput', this.onInput);
    this.addressForm?.removeEventListener('igcInput', this.onInput);
}
```

### Functional template
```tsx
const infoFormRef    = useRef<HTMLFormElement>(null);
const addressFormRef = useRef<HTMLFormElement>(null);

useEffect(() => {
    const handleInput = () => checkActiveStepValidity(linear);

    const infoForm    = infoFormRef.current;
    const addressForm = addressFormRef.current;

    infoForm?.addEventListener('igcInput', handleInput);
    addressForm?.addEventListener('igcInput', handleInput);

    return () => {
        infoForm?.removeEventListener('igcInput', handleInput);
        addressForm?.removeEventListener('igcInput', handleInput);
    };
}, [linear, checkActiveStepValidity]); // re-attach if `linear` changes
```

**Rules**
- Capture DOM element refs into local variables (`const infoForm = infoFormRef.current`) before attaching listeners, and use the same variables in cleanup. This prevents a situation where `infoFormRef.current` has become `null` by the time the cleanup runs.
- Include state values that the listener handler uses in the dependency array. This causes the effect to re-run and re-attach the listener with an updated closure when those values change.
- The `handleInput` function must be defined **inside** the effect so it captures the latest deps.

---

## 16. Static or inline data

**Trigger:** the class has an `initData()` or equivalent method that builds a static (never-changing) data array and stores it in `this.state` or a class field.

### Class template
```tsx
public data: any[];

constructor(props: any) {
    super(props);
    this.initData();
}

public initData() {
    this.data = [
        { Year: '2009', Europe: 31, China: 21, USA: 19 },
        { Year: '2010', Europe: 43, China: 26, USA: 24 },
        // ...
    ];
}

// in render():
dataSource={this.data}
```

### Functional template
```tsx
// Moved to module scope — created once per module load
const CHART_DATA = [
    { Year: '2009', Europe: 31, China: 21, USA: 19 },
    { Year: '2010', Europe: 43, China: 26, USA: 24 },
    // ...
];

// in JSX:
dataSource={CHART_DATA}
```

**Rules**
- Move static data **outside** the component function. Inside the function, it would be recreated on every render.
- Name constants with `SCREAMING_SNAKE_CASE` to signal that they are module-level constants.
- If the data array is built from props or state, keep it inside the component and use `useMemo`.

---

## 17. Pure helper functions

**Trigger:** the class has instance methods that are pure (no `this.*` usage beyond what can be passed as arguments), used as tooltip renderers, formatters, or utility callbacks.

### Class template
```tsx
public createTooltip(series: IgrGeographicMapSeries, item: any): string {
    return `<b>${item.name}</b><br/>Lat: ${item.lat}<br/>Lon: ${item.lon}`;
}

// used as:
tooltipTemplate={this.createTooltip}
```

### Functional template
```tsx
// Moved to module scope — no `this`, no closure over component state
function createTooltip(series: IgrGeographicMapSeries, item: any): string {
    return `<b>${item.name}</b><br/>Lat: ${item.lat}<br/>Lon: ${item.lon}`;
}

// used as (reference is stable, no binding needed):
tooltipTemplate={createTooltip}
```

**Rules**
- If the function does **not** read any state, props, or refs — move it to module scope.
- If it does read component state, wrap it in `useCallback` instead.
- Module-level functions have stable identity (never change reference), so passing them as event handler props is efficient.

---

## 18. Aggregate functions (Pivot Grid)

**Trigger:** the class has public methods used as Ignite UI `IgrPivotAggregator` implementations.

### Class template
```tsx
public weightedAvg(
    members: any[],
    data: any[],
    allData: any[],
    fieldName: string,
    pivotDimension: IgrPivotDimension
): any {
    // aggregate logic
}

// used as:
aggregatorName: IgrPivotNumericAggregate.sum.name,
// or wired via configuration object referencing `this.weightedAvg`
```

### Functional template
```tsx
// Promoted to module scope (pure functions — no `this`)
function weightedAvg(
    members: any[],
    data: any[],
    allData: any[],
    fieldName: string,
    pivotDimension: IgrPivotDimension
): any {
    // identical aggregate logic
}

// used exactly the same way in the configuration object
```

**Rules**
- Identical to [Section 17](#17-pure-helper-functions) — move to module scope.
- The function signature must remain identical; do not rename parameters.

---

## 19. One-time side effects (icon registration)

**Trigger:** the class calls `registerIconFromText(...)` or similar one-time registrations inside the constructor.

### Class template
```tsx
constructor(props: any) {
    super(props);
    registerIconFromText('add', ADD_SVG, 'material');
    registerIconFromText('delete', DELETE_SVG, 'material');
}
```

### Functional template
```tsx
// Moved to module scope — runs once when the module is first imported
registerIconFromText('add', ADD_SVG, 'material');
registerIconFromText('delete', DELETE_SVG, 'material');

export default function Sample() {
    // no registration here
}
```

**Rules**
- Moving registrations to module scope means they run exactly once per module load, not once per component instantiation — which is the correct semantic.
- Do **not** put them inside `useEffect` unless the registration genuinely depends on the DOM (rare). Module-scope execution is earlier and simpler.

---

## 20. mountedRef guard (prevent post-unmount updates)

**When to use:** any component that has async operations (fetch, setInterval, setTimeout) that call state setters. A component may unmount before the async operation completes, causing a "cannot update state on an unmounted component" style issue.

### Functional template
```tsx
const mountedRef = useRef(true);

useEffect(() => {
    return () => {
        mountedRef.current = false;
    };
}, []);

// Inside async callbacks or interval ticks:
if (!mountedRef.current) return;
setState(...);
```

**Rules**
- Always declare `mountedRef` immediately before the first `useEffect` that starts async work.
- Check `mountedRef.current` at the top of every async callback before calling any state setter.
- This ref **never** needs to be in a dependency array — it is intentionally mutable outside React's tracking.

---

## 21. Hook import checklist

Use this table to decide which hooks to import:

| Situation | Hook |
|---|---|
| Component has `this.state = {...}` / `this.setState(...)` | `useState` |
| Component stores a component/DOM ref on `this` (accessed imperatively) | `useRef` |
| Component stores mutable non-render values on `this` (interval ID, counter, array) | `useRef` |
| Component uses a `mountedRef` guard | `useRef` |
| Component has a lazy getter with backing field | `useMemo` |
| Component has a `ComponentRenderer` lazy getter | `useMemo` |
| Component has static data inside `initData()` used as a prop | module-level `const` (no hook needed) |
| Component has `componentDidMount` or `componentWillUnmount` | `useEffect` |
| Component manages a `setInterval` / `setTimeout` | `useEffect` + `useRef` |
| Component loads async data | `useEffect` |
| Component attaches native event listeners | `useEffect` |
| Component needs cross-component wiring via a prop | `useState` |
| Component needs cross-component wiring via imperative assignment | `useRef` + `useEffect` |
| Component has event handler methods bound in constructor | `useCallback` |

---

## 22. Complete generated skeleton

This is the full template to start from. Delete sections that do not apply.

```tsx
import React, { useState, useRef, useMemo, useCallback, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// ── Ignite UI imports (same as class original) ────────────────────────────────
import { IgrSomeComponentModule } from 'igniteui-react-charts';
import { IgrSomeComponent } from 'igniteui-react-charts';
import { IgrItemLegend, IgrItemLegendModule } from 'igniteui-react-charts';
import {
    ComponentRenderer,
    SomeDescriptionModule,
} from 'igniteui-react-core';
import { SomeDataSource } from './SomeDataSource';

// ── Module registration (unchanged from class original) ───────────────────────
const mods: any[] = [IgrSomeComponentModule, IgrItemLegendModule];
mods.forEach(m => m.register());

// ── Module-level constants (for static data, moved from initData()) ───────────
const STATIC_DATA = [
    { label: 'A', value: 30 },
    { label: 'B', value: 70 },
];

// ── Module-level pure functions (moved from class instance methods) ───────────
function createTooltip(series: any, item: any): string {
    return `<b>${item.label}</b>: ${item.value}`;
}

// ── One-time side effects (moved from constructor) ────────────────────────────
// registerIconFromText('icon-name', SVG_STRING, 'material');

export default function Sample() {

    // ── State (replaces this.state = {...} in constructor) ────────────────────
    const [transitionMode, setTransitionMode] = useState('Auto');
    // Use for cross-component wiring via prop:
    const [legend, setLegend] = useState<IgrItemLegend | null>(null);

    // ── Refs for components/DOM accessed imperatively ─────────────────────────
    const componentRef = useRef<IgrSomeComponent>(null);
    // Use for mutable values that must not trigger re-renders:
    const intervalRef  = useRef<number>(-1);
    const dataRef      = useRef<any[]>([]);
    // Unmount guard for async operations:
    const mountedRef   = useRef<boolean>(true);

    // ── useMemo for lazy data sources and ComponentRenderer ───────────────────
    const dataSource = useMemo(() => new SomeDataSource(), []);
    const renderer   = useMemo(() => {
        const r = new ComponentRenderer();
        SomeDescriptionModule.register(r.context);
        return r;
    }, []);

    // ── useEffect: componentDidMount (one-time setup) ─────────────────────────
    useEffect(() => {
        // async data fetch:
        // SomeService.getData().then(result => { if (mountedRef.current) setData(result); });

        // native event listeners:
        // const el = domRef.current;
        // el?.addEventListener('igcInput', handleInput);

        // cleanup (componentWillUnmount + listener removal):
        return () => {
            mountedRef.current = false;
            if (intervalRef.current >= 0) {
                window.clearInterval(intervalRef.current);
            }
            // el?.removeEventListener('igcInput', handleInput);
        };
    }, []); // [] = run once

    // ── useEffect: cross-component imperative wiring ──────────────────────────
    // (omit dependency array so it runs after every render)
    useEffect(() => {
        if (componentRef.current && legend) {
            (componentRef.current as any).legend = legend;
        }
    });

    // ── useCallback: event handlers (replaces bound methods) ─────────────────
    const onTransitionModeChanged = useCallback(
        (e: React.ChangeEvent<HTMLSelectElement>) => {
            setTransitionMode(e.target.value);
        },
        []
    );

    const onReplayClick = useCallback(() => {
        componentRef.current?.replayTransitionIn();
    }, []);

    // ── Render (replaces public render(): JSX.Element) ────────────────────────
    return (
        <div className="container sample">
            {/* Cross-component wiring via prop (Section 6) */}
            <IgrItemLegend
                ref={(r: IgrItemLegend) => { if (r) setLegend(r); }}
                orientation="Horizontal"
            />

            {/* Standard ref (Section 5) */}
            <IgrSomeComponent
                ref={componentRef}
                dataSource={dataSource}
                legend={legend ?? undefined}
                componentRenderer={renderer}
            />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
```

---

## Quick-reference cheat sheet

| Class | Functional |
|---|---|
| `extends React.Component<any, any>` | `function Sample() {}` |
| `constructor(props) { super(props); }` | *(deleted)* |
| `this.handler = this.handler.bind(this)` | *(deleted — use `useCallback`)* |
| `this.state = { k: v }` | `const [k, setK] = useState(v)` |
| `this.setState({ k: newV })` | `setK(newV)` |
| `this.setState(prev => ...)` | `setK(prev => ...)` |
| `public field: T` (stored component instance — used as prop) | `const [field, setField] = useState<T \| null>(null)` |
| `public field: T` (stored ref — accessed imperatively) | `const fieldRef = useRef<T>(null)` |
| `public counter: number = 0` (mutable, no render) | `const counterRef = useRef<number>(0)` |
| `get lazy() { if (!_f) _f = new F(); return _f; }` | `const lazy = useMemo(() => new F(), [])` |
| `get renderer() { ... register modules ... }` | `const renderer = useMemo(() => { ...; return r; }, [])` |
| `componentDidMount()` | `useEffect(() => { ... }, [])` |
| `componentWillUnmount()` | `useEffect(() => { return () => { cleanup }; }, [])` |
| `this.handler = (e) => { ... }` (class field arrow) | `const handler = useCallback((e) => { ... }, [deps])` |
| `public method(args) { /* pure */ }` | Module-level function `function method(args) {}` |
| `initData() { this.data = [...] }` | Module-level `const DATA = [...]` |
| `registerIconFromText(...)` in constructor | Module scope before component |
| `this.chart.someMethod()` | `chartRef.current?.someMethod()` |
| `legend={this.legend}` (may be `undefined`) | `legend={legend ?? undefined}` |
| `ref={this.onChartRef}` (bound callback) | `ref={onChartRef}` (useCallback) or `ref={chartRef}` (useRef object) |
