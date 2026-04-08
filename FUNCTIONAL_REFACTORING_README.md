# Functional Component Refactoring – Summary

This document describes the refactoring of **7 class-based React samples** to **functional components** following modern React best practices (React 16.8+).

Each original `index.tsx` is left unchanged. A new `*Functional.tsx` file has been created alongside it as the functional counterpart.

---

## Why Functional Components?

| Concern | Class component | Functional component |
|---|---|---|
| Boilerplate | Requires `constructor`, `this`, `.bind()` | Plain function, no `this` |
| State | `this.state` + `setState` | `useState` hook |
| Lifecycle | `componentDidMount`, `componentDidUpdate`, `componentWillUnmount` | `useEffect` hook (unified) |
| Refs | `React.createRef()` / callback refs stored on `this` | `useRef` hook |
| Expensive computations | Lazy getter or instance field | `useMemo` hook |
| Stable callbacks | Manual `.bind()` in constructor | `useCallback` hook |
| Code sharing | HOCs / render-props (complex) | Custom hooks (simple) |

---

## Sample 1 – Expansion Panel: Properties & Events

**Files**
- Original: `samples/layouts/expansion-panel/properties-and-events/src/index.tsx`
- Functional: `samples/layouts/expansion-panel/properties-and-events/src/ExpansionPanelPropsAndEventsFunctional.tsx`

**Feature coverage:** `properties`, `event handlers`, `timed state updates`

| Class pattern | Functional equivalent | Why |
|---|---|---|
| `this.state = { subtitleClass, eventSpanClass, eventSpanText }` | Three `useState` calls | Fine-grained state is cleaner and avoids stale state merging pitfalls |
| Manual `.bind()` in constructor | Not needed | Arrow functions and `useCallback` capture the right scope naturally |
| `this.setState(...)` inside `onExpansionPanelClosed` / `onExpansionPanelOpened` | State setter calls inside `useCallback` handlers | State setters are stable—no re-binding needed |
| Duplicated open/close logic | Extracted shared `showEvent` helper (called from both handlers) | Reduces duplication, improves readability |
| `window.clearTimeout(undefined)` (no-op) | Removed (was a bug in original) | Calling `clearTimeout(undefined)` has no effect; correct approach omits it |

---

## Sample 2 – Accordion: Customization

**Files**
- Original: `samples/layouts/accordion/customization/src/index.tsx`
- Functional: `samples/layouts/accordion/customization/src/AccordionCustomizationFunctional.tsx`

**Feature coverage:** `complex state`, `multiple event handlers`, `refs`, `icon registration`

| Class pattern | Functional equivalent | Why |
|---|---|---|
| Private class field `categories` + mutable copy in `setState` | `useState` with immutable update (`prev.map(...)`) | Avoids direct mutation; React can track changes correctly |
| `this.dateTimeInput` callback ref | `useRef<IgrDateTimeInput>` | `useRef` is the idiomatic hook for persistent mutable DOM/component references |
| `this.dateTimeInputRef` callback bound in constructor | `ref={dateTimeInputRef}` with `useRef` | Simpler and no binding required |
| `registerIconFromText` called inside `constructor` | Moved to module scope (runs once on import) | Icon registration is a one-time side effect, not tied to component lifecycle |
| `INITIAL_CATEGORIES` as class field | Extracted as a `const` outside the component | Module-level constants are created once, not on every render |
| Mutable `categoriesCopy[i].checked = ...` then `setState` | Immutable `prev.map(c => ...)` inside `setCategories` | Avoids accidentally mutating React state |

---

## Sample 3 – Stepper: Linear (Multi-step Form)

**Files**
- Original: `samples/layouts/stepper/linear/src/index.tsx`
- Functional: `samples/layouts/stepper/linear/src/LinearStepperFunctional.tsx`

**Feature coverage:** `refs`, `componentDidMount` (event listeners), `component updates`, `form validation state`

| Class pattern | Functional equivalent | Why |
|---|---|---|
| `React.createRef<IgrStepper>()` as class field | `useRef<IgrStepper>` | Hooks-based ref; same semantics, no `this` |
| `componentDidMount` adding native `igcInput` listeners | `useEffect(() => { ... return cleanup }, [linear, checkActiveStepValidity])` | `useEffect` handles both mount *and* re-attachment when dependencies change, with automatic cleanup via the returned function |
| `activeStepIndex` as class field (mutable between renders) | Step index derived inside `checkActiveStepValidity` at call time | Avoids stale-closure issues; derives from the stepper's current DOM state on each call |
| Manual `.bind(this)` for `onSwitchChange` | `useCallback` | Stable reference without manual binding |
| `this.state.linear` accessed inside `onInput` | `linear` passed directly into `checkActiveStepValidity` | Avoids stale closure—the latest value is always passed explicitly |

---

## Sample 4 – Pivot Grid: Features (Data Operations)

**Files**
- Original: `samples/grids/pivot-grid/features/src/index.tsx`
- Functional: `samples/grids/pivot-grid/features/src/PivotGridFeaturesFunctional.tsx`

**Feature coverage:** `data operations`, `complex configuration objects`, `refs`, `aggregate functions`

| Class pattern | Functional equivalent | Why |
|---|---|---|
| Lazy getter with `_pivotConfiguration1` backing field | `useMemo(() => { ... }, [])` | `useMemo` with an empty dependency array is the hook equivalent of a lazy getter—builds once, memoizes forever |
| `_pivotDataFlat` backing field with lazy getter | `useMemo(() => new PivotDataFlat(), [])` | Same pattern—data source created once and kept stable across renders |
| Aggregate functions as `public` instance methods | Promoted to module-level plain functions | Aggregate logic is stateless; module-level functions are garbage-collected-friendly and don't capture `this` |
| `private gridRef(r)` callback ref + `this.setState({})` to trigger re-render | `useRef<IgrPivotGrid>` | Standard hook ref; forced re-render on ref assignment is no longer needed |
| `IgrPivotGridModule` registered in module scope | Unchanged—kept at module scope | Already correct; module registration is a one-time side effect |

---

## Sample 5 – Geo Map: Binding Data from CSV (Async Data Loading)

**Files**
- Original: `samples/maps/geo-map/binding-data-csv/src/index.tsx`
- Functional: `samples/maps/geo-map/binding-data-csv/src/MapBindingDataCSVFunctional.tsx`

**Feature coverage:** `componentDidMount`, `async data fetching`, `refs`, `tooltip rendering`

| Class pattern | Functional equivalent | Why |
|---|---|---|
| `public geoMap: IgrGeographicMap` class field | `useRef<IgrGeographicMap>` | Refs are the correct way to hold mutable, non-render-triggering values in functional components |
| `onMapRef` callback bound in constructor | `ref={geoMapRef}` with `useRef` | Object refs work directly with Ignite UI components; no manual binding |
| `componentDidMount` + `this.onDataLoaded` | `useEffect(() => { fetch(...).then(onDataLoaded) }, [onDataLoaded])` | `useEffect` with an empty/stable dep array runs once after mount, matching `componentDidMount` semantics |
| `this.geoMap` accessed inside `onDataLoaded` | `geoMapRef.current` accessed inside `onDataLoaded` `useCallback` | Reads the latest ref value at call time—no stale reference |
| `createTooltip` as instance method | Promoted to module-level function | Tooltip renderer is stateless and pure; module scope avoids re-creation and `this` |

---

## Sample 6 – Calendar: Disabled Dates (Constructor State Initialization)

**Files**
- Original: `samples/scheduling/calendar/disabled-dates/src/index.tsx`
- Functional: `samples/scheduling/calendar/disabled-dates/src/CalendarDisabledDatesFunctional.tsx`

**Feature coverage:** `properties`, `constructor state initialization`, `stable object references`

| Class pattern | Functional equivalent | Why |
|---|---|---|
| `constructor` computing `disabledDates` and placing it in `this.state` | `useMemo(() => [...], [])` | `useMemo` with an empty dependency array runs once (equivalent to constructor) and memoizes the result, preventing re-creation on every render |
| `this.state.disabledDates` passed as prop | `disabledDates` variable from `useMemo` | Direct variable reference—cleaner and no `this` required |
| Empty `constructor` with `super(props)` | No constructor needed | Functional components have no constructor |

---

## Sample 7 – Tile Manager: Actions (DOM Manipulation + Event Handlers)

**Files**
- Original: `samples/layouts/tile-manager/actions/src/index.tsx`
- Functional: `samples/layouts/tile-manager/actions/src/TileManagerActionsFunctional.tsx`

**Feature coverage:** `event handlers`, `DOM manipulation`, `icon registration`, `class field arrow functions`

| Class pattern | Functional equivalent | Why |
|---|---|---|
| Class field arrow functions (`private onCustomOneClick = (event) => {}`) | `useCallback` | `useCallback` provides stable handler references across renders, preventing unnecessary child re-renders |
| `registerIconFromText` calls in `constructor` | Moved to module scope | Icon registration is a pure side effect; moving it outside the component means it runs exactly once per module load, not once per instance |
| `actionsSlot.parentElement?.querySelectorAll(...)` in original | Simplified to `tile.querySelectorAll('.additional-action')` | The `actionsSlot` traversal was unnecessarily indirect; querying from the tile element is more direct and correct |
| `this.` prefix on all methods and properties | No `this` required | Functions and variables are in lexical scope; arrow functions in `useCallback` close over them naturally |

---

## General Patterns Applied Across All Samples

| Class component pattern | Functional equivalent | Notes |
|---|---|---|
| `extends React.Component<any, any>` | `function ComponentName() {}` | No inheritance needed |
| `constructor(props) { super(props); this.state = {...} }` | `const [x, setX] = useState(...)` per piece of state | Each state slice is independent; no need to spread/merge the full state object |
| `this.setState({ key: value })` | `setKey(value)` | Direct setter; React batches updates automatically in React 18 |
| `public render(): JSX.Element { return (...) }` | Component body `return (...)` | The function body *is* the render method |
| Manual `.bind(this)` in constructor | Not needed (hooks + arrow functions) | Lexical `this` in functional components is never needed |
| `componentDidMount()` | `useEffect(() => { ... }, [])` | Empty dependency array = runs once after first render |
| `componentWillUnmount()` | Cleanup function returned from `useEffect` | Collocates setup and teardown logic |
| Lazy instance getter (backing field + null check) | `useMemo(() => ..., [])` | Memoizes expensive computations; empty deps = computed once |
| Callback ref stored on `this` | `useRef` + `ref={refObj}` | Ref object persists for the component's lifetime |
| `ReactDOM.createRoot(...).render(<Class/>)` | `ReactDOM.createRoot(...).render(<Function/>)` | Unchanged—only the component name changes |
