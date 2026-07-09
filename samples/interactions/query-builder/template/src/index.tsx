import { useRef, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { 
  IgrQueryBuilder,
  IgrQueryBuilderHeader,
  IgrFilteringExpressionsTree,
  FilteringLogic,
  IgrStringFilteringOperand
} from 'igniteui-react-grids';

import {
  IgrDatePicker,
  IgrDateTimeInput,
  IgrSelect,
  IgrSelectItem,
  IgrRadioGroup,
  IgrRadio,
  IgrInput,
  IgrIcon
} from 'igniteui-react';

import 'igniteui-react-grids/grids/themes/light/material.css';

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

const regionOptions: RegionOption[] = [
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

const statusOptions: StatusOption[] = [
  { text: 'New', value: 1 },
  { text: 'Shipped', value: 2 },
  { text: 'Done', value: 3 }
];

const ordersFields: Field[] = [
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
    formatter: (value: number) => statusOptions.find(option => option.value === value)?.text ?? value
  }
];

const entities: Entity[] = [
  {
    name: 'Orders',
    fields: ordersFields
  }
];

const setImplicitValue = (ctx: QueryBuilderSearchValueContext, value: any) => {
  queueMicrotask(() => {
    ctx.implicit.value = value;
  });
};

const normalizeTimeValue = (value: unknown): Date | null => {
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

const buildRegionSelect = (ctx: QueryBuilderSearchValueContext) => {
  const currentValue = ctx?.implicit?.value?.value ?? '';
  const key = `region-select-${currentValue}`;

  return (
    <IgrSelect
      className="qb-select"
      key={key}
      value={currentValue}
      onChange={(sender: any) => {
        const value = sender.detail;
        const currentKey = ctx?.implicit?.value?.value ?? '';

        if (!value || value === currentKey) return;

        setImplicitValue(ctx, regionOptions.find(option => option.value === value) ?? null);
      }}>
      {regionOptions.map(option => (
        <IgrSelectItem key={option.value} value={option.value}>
          <span>{option.text}</span>
        </IgrSelectItem>
      ))}
    </IgrSelect>
  );
};

const buildStatusRadios = (ctx: QueryBuilderSearchValueContext) => {
  const implicitValue = ctx.implicit?.value;
  const currentValue = implicitValue == null ? '' : implicitValue.toString();

  return (
    <IgrRadioGroup
      style={{ gap: '5px' }}
      alignment="horizontal">
      {statusOptions.map(option => (
        <IgrRadio
          key={option.value}
          name="status"
          value={option.value.toString()}
          checked={option.value.toString() === currentValue}
          onChange={(e: any) => {
            if (!e.detail.checked) return;
            const numericValue = Number(e.detail.value);
            if (ctx.implicit.value === numericValue) return;
            setImplicitValue(ctx, numericValue);
          }}>
            <span>{option.text}</span>
        </IgrRadio>
      ))}
    </IgrRadioGroup>
  );
};

const buildDatePicker = (ctx: QueryBuilderSearchValueContext) => {
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
      onChange={(sender: any) => {
        setImplicitValue(ctx, sender.detail);
      }}>
    </IgrDatePicker>
  );
};

const buildTimeInput = (ctx: QueryBuilderSearchValueContext) => {
  const currentValue = normalizeTimeValue(ctx.implicit?.value);
  const allowedConditions = ['at', 'not_at', 'at_before', 'at_after', 'before', 'after'];
  const isDisabled = ctx.selectedField == null || allowedConditions.indexOf(ctx.selectedCondition ?? '') === -1;
  const key = `time-input-${currentValue}`;

  return (
    <IgrDateTimeInput
      key={key}
      inputFormat="hh:mm tt"
      value={currentValue}
      disabled={isDisabled}
      onChange={(sender: any) => {
        setImplicitValue(ctx, sender.detail);
      }}>
      <div slot="prefix">
        <IgrIcon name="clock" collection="material" />
      </div>
    </IgrDateTimeInput>
  );
};

const buildDefaultInput = (ctx: QueryBuilderSearchValueContext, matchesEqualityCondition: boolean) => {
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
      onInput={(sender: any) => {
        const value = sender.detail;
        setImplicitValue(ctx, isNumber
          ? value === '' ? null : Number(value)
          : value);
      }}>
    </IgrInput>
  );
};

const buildSearchValueTemplate = (ctx: QueryBuilderSearchValueContext) => {
  const field = ctx.selectedField?.field;
  const condition = ctx.selectedCondition;
  const matchesEqualityCondition = condition === 'equals' || condition === 'doesNotEqual';

  if (!ctx.implicit) {
    ctx.implicit = { value: null };
  }

  if (field === 'Region' && matchesEqualityCondition) {
    return buildRegionSelect(ctx);
  }

  if (field === 'OrderStatus' && matchesEqualityCondition) {
    return buildStatusRadios(ctx);
  }

  if (ctx.selectedField?.dataType === 'date') {
    return buildDatePicker(ctx);
  }

  if (ctx.selectedField?.dataType === 'time') {
    return buildTimeInput(ctx);
  }

  return buildDefaultInput(ctx, matchesEqualityCondition);
};

function Sample() {
  const queryBuilderRef = useRef<IgrQueryBuilder>(null);
  const expressionOutputRef = useRef<HTMLPreElement>(null);

  const handleExpressionTreeChange = (event: any) => {
    if (expressionOutputRef.current) {
      expressionOutputRef.current.textContent = JSON.stringify(event.detail, null, 2);
    }
  };

  useEffect(() => {
    const tree = new IgrFilteringExpressionsTree();
    tree.operator = FilteringLogic.And;
    tree.entity = 'Orders';
    tree.returnFields = ['*'];
    tree.filteringOperands.push({
      fieldName: 'Region',
      condition: IgrStringFilteringOperand.instance().condition('equals'),
      conditionName: 'equals',
      searchVal: regionOptions[0]
    } as any);
    tree.filteringOperands.push({
      fieldName: 'OrderStatus',
      condition: IgrStringFilteringOperand.instance().condition('equals'),
      conditionName: 'equals',
      searchVal: statusOptions[0].value
    } as any);

    if (queryBuilderRef.current) {
      const queryBuilder = queryBuilderRef.current;
      queryBuilder.entities = entities as any;
      queryBuilder.expressionTree = tree;
      queryBuilder.addEventListener('expressionTreeChange', handleExpressionTreeChange);
    }

    if (expressionOutputRef.current) {
      expressionOutputRef.current.textContent = JSON.stringify(tree, null, 2);
    }

    return () => {
      if (queryBuilderRef.current) {
        queryBuilderRef.current.removeEventListener('expressionTreeChange', handleExpressionTreeChange);
      }
    };
  }, []);

  return (
    <div className="container sample ig-typography">
      <div className="wrapper">
        <IgrQueryBuilder 
          ref={queryBuilderRef} 
          id="queryBuilder"
          searchValueTemplate={buildSearchValueTemplate}>
          <IgrQueryBuilderHeader title="Query Builder Template Sample"></IgrQueryBuilderHeader>
        </IgrQueryBuilder>
        
        <div className="output-area">
          <pre ref={expressionOutputRef} id="expressionOutput"></pre>
        </div>
      </div>
    </div>
  );
}

export default Sample;

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
