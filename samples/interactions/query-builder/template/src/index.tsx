import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { 
  IgcQueryBuilderComponent,
  IgcQueryBuilderHeaderComponent,
  IgcFilteringExpressionsTree,
  IgcExpressionTree,
  FilteringLogic,
  IgcStringFilteringOperand
} from 'igniteui-webcomponents-grids/grids';

import {
  IgcDatePickerComponent,
  IgcDateTimeInputComponent,
  IgcSelectComponent,
  IgcSelectItemComponent,
  IgcRadioGroupComponent,
  IgcRadioComponent,
  IgcInputComponent,
  IgcIconComponent,
  defineComponents,
  registerIconFromText
} from 'igniteui-webcomponents';

import { html, render } from 'lit-html';

import 'igniteui-webcomponents-grids/grids/themes/light/material.css';

// Register components
IgcQueryBuilderComponent.register();
IgcQueryBuilderHeaderComponent.register();
defineComponents(
  IgcDatePickerComponent,
  IgcDateTimeInputComponent,
  IgcSelectComponent,
  IgcSelectItemComponent,
  IgcRadioGroupComponent,
  IgcRadioComponent,
  IgcInputComponent,
  IgcIconComponent
);

// Declare JSX types for custom elements
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'igc-query-builder': any;
      'igc-query-builder-header': any;
    }
  }
}

// Types
interface Field {
  field: string;
  dataType: string;
  formatter?: (value: any) => string;
}

interface Entity {
  name: string;
  fields: Field[];
}

interface RegionOption {
  text: string;
  value: string;
}

interface StatusOption {
  text: string;
  value: number;
}

interface QueryBuilderSearchValueContext {
  implicit: { value: any };
  selectedField?: Field;
  selectedCondition?: string;
  defaultSearchValueTemplate?: any;
}

interface SampleState {
  expressionTree: IgcExpressionTree | null;
}

export default class Sample extends React.Component<any, SampleState> {
  private queryBuilderRef: React.RefObject<IgcQueryBuilderComponent>;
  private expressionOutputRef: React.RefObject<HTMLPreElement>;

  private regionOptions: RegionOption[] = [
    { text: 'Central North America', value: 'CNA' },
    { text: 'Central Europe', value: 'CEU' },
    { text: 'Mediterranean region', value: 'MED' },
    { text: 'Central Asia', value: 'CAS' },
    { text: 'South Asia', value: 'SAS' },
    { text: 'Western Africa', value: 'WAF' },
    { text: 'Amazonia', value: 'AMZ' },
    { text: 'Southern Africa', value: 'SAF' },
    { text: 'Northern Australia', value: 'NAU' }
  ];

  private statusOptions: StatusOption[] = [
    { text: 'New', value: 1 },
    { text: 'Shipped', value: 2 },
    { text: 'Done', value: 3 }
  ];

  constructor(props: any) {
    super(props);

    this.queryBuilderRef = React.createRef();
    this.expressionOutputRef = React.createRef();

    this.state = {
      expressionTree: null
    };
  }

  componentDidMount() {
    // Register icon
    const clockIcon = "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><path d='M12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22C6.47,22 2,17.5 2,12A10,10 0 0,1 12,2M12.5,7V12.25L17,14.92L16.25,16.15L11,13V7H12.5Z' /></svg>";
    registerIconFromText('clock', clockIcon, 'material');

    // Initialize expression tree
    const tree = new IgcFilteringExpressionsTree();
    tree.operator = FilteringLogic.And;
    tree.entity = 'Orders';
    tree.returnFields = ['*'];
    tree.filteringOperands.push({
      fieldName: 'Region',
      condition: IgcStringFilteringOperand.instance().condition('equals'),
      conditionName: 'equals',
      searchVal: this.regionOptions[0]
    } as any);
    tree.filteringOperands.push({
      fieldName: 'OrderStatus',
      condition: IgcStringFilteringOperand.instance().condition('equals'),
      conditionName: 'equals',
      searchVal: this.statusOptions[0].value
    } as any);

    this.setState({ expressionTree: tree });

    // Set up query builder
    if (this.queryBuilderRef.current && tree) {
      const queryBuilder = this.queryBuilderRef.current;
      queryBuilder.entities = this.entities as any;
      queryBuilder.expressionTree = tree;
      queryBuilder.searchValueTemplate = this.buildSearchValueTemplate as any;

      queryBuilder.addEventListener('expressionTreeChange', this.handleExpressionTreeChange);
    }
  }

  componentDidUpdate(prevProps: any, prevState: any) {
    // Update query builder if expression tree changed
    if (this.queryBuilderRef.current && this.state.expressionTree && 
        prevState.expressionTree !== this.state.expressionTree) {
      const queryBuilder = this.queryBuilderRef.current;
      queryBuilder.expressionTree = this.state.expressionTree;
    }

    // Render expression tree output
    if (this.expressionOutputRef.current && this.state.expressionTree && 
        prevState.expressionTree !== this.state.expressionTree) {
      this.expressionOutputRef.current.textContent = JSON.stringify(this.state.expressionTree, null, 2);
    }
  }

  componentWillUnmount() {
    if (this.queryBuilderRef.current) {
      this.queryBuilderRef.current.removeEventListener('expressionTreeChange', this.handleExpressionTreeChange);
    }
  }

  private handleExpressionTreeChange = (event: CustomEvent<IgcExpressionTree>) => {
    this.setState({ expressionTree: event.detail });
  };

  private get ordersFields(): Field[] {
    return [
      { field: 'CompanyID', dataType: 'string' },
      { field: 'OrderID', dataType: 'number' },
      { field: 'Freight', dataType: 'number' },
      { field: 'ShipCountry', dataType: 'string' },
      { field: 'IsRushOrder', dataType: 'boolean' },
      {
        field: 'RequiredTime',
        dataType: 'time',
        formatter: (value: any) => {
          if (!value || !(value instanceof Date)) return '';
          return value.toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit'
          });
        }
      },
      {
        field: 'OrderDate',
        dataType: 'date',
        formatter: (value: any) => {
          if (!value || !(value instanceof Date)) return '';
          return value.toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric'
          });
        }
      },
      {
        field: 'Region',
        dataType: 'string',
        formatter: (value: any) => value?.text ?? value?.value ?? value
      },
      {
        field: 'OrderStatus',
        dataType: 'number',
        formatter: (value: number) => this.statusOptions.find(option => option.value === value)?.text ?? value
      }
    ];
  }

  private get entities(): Entity[] {
    return [
      {
        name: 'Orders',
        fields: this.ordersFields
      }
    ];
  }

  private normalizeTimeValue = (value: unknown): Date | null => {
    if (!value) return null;
    if (value instanceof Date) return value;
    
    if (typeof value === 'string') {
      const isoCandidate = value.includes('T') ? value : `1970-01-01T${value}`;
      const parsed = new Date(isoCandidate);
      return isNaN(parsed.getTime()) ? null : parsed;
    }
    
    if (typeof value === 'number') {
      const parsed = new Date(value);
      return isNaN(parsed.getTime()) ? null : parsed;
    }
    
    return null;
  };

  private buildSearchValueTemplate = (ctx: QueryBuilderSearchValueContext) => {
    const field = ctx.selectedField?.field;
    const condition = ctx.selectedCondition;
    const matchesEqualityCondition = condition === 'equals' || condition === 'doesNotEqual';

    if (!ctx.implicit) {
      ctx.implicit = { value: null };
    }

    if (field === 'Region' && matchesEqualityCondition) {
      return this.buildRegionSelect(ctx);
    }

    if (field === 'OrderStatus' && matchesEqualityCondition) {
      return this.buildStatusRadios(ctx);
    }

    if (ctx.selectedField?.dataType === 'date') {
      return this.buildDatePicker(ctx);
    }

    if (ctx.selectedField?.dataType === 'time') {
      return this.buildTimeInput(ctx);
    }

    return this.buildDefaultInput(ctx, matchesEqualityCondition);
  };

  private buildRegionSelect = (ctx: QueryBuilderSearchValueContext) => {
    const currentValue = ctx?.implicit?.value?.value ?? '';

    return html`
      <igc-select
        placeholder="Region"
        .value=${currentValue}
        @igcChange=${(event: CustomEvent<{ value: string }>) => {
          const value = event.detail?.value;
          const currentKey = ctx?.implicit?.value?.value ?? '';

          if (!value || value === currentKey) return;

          ctx.implicit.value = this.regionOptions.find(option => option.value === value) ?? null;
        }}>
        ${this.regionOptions.map(option => html`
          <igc-select-item value=${option.value}>${option.text}</igc-select-item>
        `)}
      </igc-select>
    `;
  };

  private buildStatusRadios = (ctx: QueryBuilderSearchValueContext) => {
    const implicitValue = ctx.implicit?.value;
    const currentValue = implicitValue === null ? '' : implicitValue.toString();

    return html`
      <igc-radio-group
        style="gap: 5px;"
        .alignment=${"horizontal"}
        .value=${currentValue}
        @igcChange=${(event: CustomEvent<{ value: string }>) => {
          const value = event.detail?.value;
          if (value === undefined) return;

          const numericValue = Number(value);
          if (ctx.implicit.value === numericValue) return;

          ctx.implicit.value = numericValue;
        }}>
        ${this.statusOptions.map(option => html`
          <igc-radio
            name="status"
            value=${option.value}
            ?checked=${option.value.toString() === currentValue}>
            ${option.text}
          </igc-radio>
        `)}
      </igc-radio-group>
    `;
  };

  private buildDatePicker = (ctx: QueryBuilderSearchValueContext) => {
    const implicitValue = ctx.implicit?.value;
    const currentValue = implicitValue instanceof Date
      ? implicitValue
      : implicitValue
        ? new Date(implicitValue)
        : null;

    const allowedConditions = ['equals', 'doesNotEqual', 'before', 'after'];
    const isEnabled = allowedConditions.indexOf(ctx.selectedCondition ?? '') !== -1;

    return html`
      <igc-date-picker
        .value=${currentValue}
        .disabled=${!isEnabled}
        @click=${(event: Event) => (event.currentTarget as IgcDatePickerComponent).show()}
        @igcChange=${(event: CustomEvent) => {
          ctx.implicit.value = event.detail;
        }}>
      </igc-date-picker>
    `;
  };

  private buildTimeInput = (ctx: QueryBuilderSearchValueContext) => {
    const currentValue = this.normalizeTimeValue(ctx.implicit?.value);
    const allowedConditions = ['at', 'not_at', 'at_before', 'at_after', 'before', 'after'];
    const isDisabled = ctx.selectedField == null || allowedConditions.indexOf(ctx.selectedCondition ?? '') === -1;

    return html`
      <igc-date-time-input
        .inputFormat=${"hh:mm tt"}
        .value=${currentValue}
        .disabled=${isDisabled}
        @igcChange=${(event: CustomEvent) => {
          const picker = event.currentTarget as IgcDateTimeInputComponent;
          ctx.implicit.value = picker.value;
        }}>
        <igc-icon slot="prefix" name="clock" collection="material"></igc-icon>
      </igc-date-time-input>
    `;
  };

  private buildDefaultInput = (ctx: QueryBuilderSearchValueContext, matchesEqualityCondition: boolean) => {
    const selectedField = ctx.selectedField;
    const dataType = selectedField?.dataType;
    const isNumber = dataType === 'number';
    const isBoolean = dataType === 'boolean';

    const placeholder = ctx.selectedCondition === 'inQuery' || ctx.selectedCondition === 'notInQuery'
      ? 'Sub-query results'
      : 'Value';

    const currentValue = typeof ctx.implicit?.value === 'object' && (ctx.implicit.value && 'text' in ctx.implicit.value)
      ? matchesEqualityCondition ? ctx.implicit.value.text : ''
      : ctx.implicit?.value;

    const inputValue = currentValue == null ? '' : currentValue;
    const disabledConditions = ['empty', 'notEmpty', 'null', 'notNull', 'inQuery', 'notInQuery'];
    const isDisabled = isBoolean || selectedField == null || disabledConditions.indexOf(ctx.selectedCondition ?? '') !== -1;

    return html`
      <igc-input 
        .value=${inputValue}
        ?disabled=${isDisabled}
        placeholder=${placeholder}
        type=${isNumber ? 'number' : 'text'}
        @input=${(event: Event) => {
          const target = event.target as HTMLInputElement;
          ctx.implicit.value = isNumber
            ? target.value === '' ? null : Number(target.value)
            : target.value;
        }}>
      </igc-input>
    `;
  };

  public render(): JSX.Element {
    return (
      <div className="container sample ig-typography">
        <div className="wrapper">
          <igc-query-builder ref={this.queryBuilderRef} id="queryBuilder">
            <igc-query-builder-header title="Query Builder Template Sample"></igc-query-builder-header>
          </igc-query-builder>
          
          <div className="output-area">
            <pre ref={this.expressionOutputRef} id="expressionOutput"></pre>
          </div>
        </div>
      </div>
    );
  }
}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
