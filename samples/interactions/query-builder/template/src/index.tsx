import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { 
  IgrQueryBuilder,
  IgrQueryBuilderModule,
  IgrQueryBuilderHeader,
  IgrFilteringExpressionsTree,
  IgrExpressionTree,
  FilteringLogic,
  IgrStringFilteringOperand
} from 'igniteui-react-grids';

import {
  IgrDatePicker,
  IgrDatePickerModule,
  IgrDateTimeInput,
  IgrDateTimeInputModule,
  IgrSelect,
  IgrSelectModule,
  IgrSelectItem,
  IgrRadioGroup,
  IgrRadioGroupModule,
  IgrRadio,
  IgrInput,
  IgrInputModule,
  IgrIcon,
  IgrIconModule
} from 'igniteui-react';

import 'igniteui-react-grids/grids/themes/light/material.css';

// Register components
const mods: any[] = [
  IgrQueryBuilderModule,
  IgrDatePickerModule,
  IgrDateTimeInputModule,
  IgrSelectModule,
  IgrRadioGroupModule,
  IgrInputModule,
  IgrIconModule
];
mods.forEach((m) => m.register());

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
  expressionTree: IgrExpressionTree | null;
}

export default class Sample extends React.Component<any, SampleState> {
  private queryBuilderRef: React.RefObject<IgrQueryBuilder>;
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
    // Initialize expression tree
    const tree = new IgrFilteringExpressionsTree();
    tree.operator = FilteringLogic.And;
    tree.entity = 'Orders';
    tree.returnFields = ['*'];
    tree.filteringOperands.push({
      fieldName: 'Region',
      condition: IgrStringFilteringOperand.instance().condition('equals'),
      conditionName: 'equals',
      searchVal: this.regionOptions[0]
    } as any);
    tree.filteringOperands.push({
      fieldName: 'OrderStatus',
      condition: IgrStringFilteringOperand.instance().condition('equals'),
      conditionName: 'equals',
      searchVal: this.statusOptions[0].value
    } as any);

    this.setState({ expressionTree: tree });

    // Set up query builder
    if (this.queryBuilderRef.current && tree) {
      const queryBuilder = this.queryBuilderRef.current;
      queryBuilder.entities = this.entities as any;
      queryBuilder.expressionTree = tree;

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

  private handleExpressionTreeChange = (event: any) => {
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
    const key = `region-select-${currentValue}`;

    return (
      <IgrSelect
        className="qb-select"
        key={key}
        value={currentValue}
        change={(sender: any) => {
          const value = sender.value;
          const currentKey = ctx?.implicit?.value?.value ?? '';

          if (!value || value === currentKey) return;

          setTimeout(() => {
            ctx.implicit.value = this.regionOptions.find(option => option.value === value) ?? null;
          });
        }}>
        {this.regionOptions.map(option => (
          <IgrSelectItem key={option.value} value={option.value}>
            <span>{option.text}</span>
          </IgrSelectItem>
        ))}
      </IgrSelect>
    );
  };

  private buildStatusRadios = (ctx: QueryBuilderSearchValueContext) => {
    const implicitValue = ctx.implicit?.value;
    const currentValue = implicitValue === null ? '' : implicitValue.toString();
    const key = `status-radio-${currentValue}`;

    return (
      <IgrRadioGroup
        key={key}
        style={{ gap: '5px' }}
        alignment="horizontal"
        value={currentValue}
        change={(sender: any) => {
          const value = sender.value;
          if (value === undefined) return;

          const numericValue = Number(value);
          if (ctx.implicit.value === numericValue) return;

          setTimeout(() => {
            ctx.implicit.value = numericValue;
          });
        }}>
        {this.statusOptions.map(option => (
          <IgrRadio
            key={option.value}
            name="status"
            value={option.value.toString()}
            checked={option.value.toString() === currentValue}
            labelText={option.text}>
          </IgrRadio>
        ))}
      </IgrRadioGroup>
    );
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
    const key = `date-picker-${currentValue}`;

    return (
      <IgrDatePicker
        key={key}
        value={currentValue}
        disabled={!isEnabled}
        click={(sender: any) => sender.show()}
        change={(sender: any) => {
          setTimeout(() => {
            ctx.implicit.value = sender.value;
          });
        }}>
      </IgrDatePicker>
    );
  };

  private buildTimeInput = (ctx: QueryBuilderSearchValueContext) => {
    const currentValue = this.normalizeTimeValue(ctx.implicit?.value);
    const allowedConditions = ['at', 'not_at', 'at_before', 'at_after', 'before', 'after'];
    const isDisabled = ctx.selectedField == null || allowedConditions.indexOf(ctx.selectedCondition ?? '') === -1;
    const key = `time-input-${currentValue}`;

    return (
      <IgrDateTimeInput
        key={key}
        inputFormat="hh:mm tt"
        value={currentValue}
        disabled={isDisabled}
        change={(sender: any) => {
          setTimeout(() => {
            ctx.implicit.value = sender.value;
          });
        }}>
        <div slot="prefix">
          <IgrIcon name="clock" collection="material" />
        </div>
      </IgrDateTimeInput>
    );
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
    const key = `default-input-${inputValue}`;

    return (
      <IgrInput 
        key={key}
        value={inputValue?.toString() || ''}
        disabled={isDisabled}
        placeholder={placeholder}
        type={isNumber ? 'number' : 'text'}
        input={(sender: any) => {
          const value = sender.value;
          setTimeout(() => {
            ctx.implicit.value = isNumber
              ? value === '' ? null : Number(value)
              : value;
          });
        }}>
      </IgrInput>
    );
  };

  public render(): JSX.Element {
    return (
      <div className="container sample ig-typography">
        <div className="wrapper">
          <IgrQueryBuilder 
            ref={this.queryBuilderRef} 
            id="queryBuilder"
            searchValueTemplate={this.buildSearchValueTemplate}>
            <IgrQueryBuilderHeader title="Query Builder Template Sample"></IgrQueryBuilderHeader>
          </IgrQueryBuilder>
          
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
