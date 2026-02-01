import React, { useState, useEffect, useRef, useCallback } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { 
  IgcQueryBuilderComponent,
  IgcQueryBuilderHeaderComponent,
  IgcFilteringExpressionsTree,
  IgcExpressionTree,
  FilteringLogic,
  IgcStringFilteringOperand,
  defineComponents as defineGridComponents
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
defineGridComponents(IgcQueryBuilderComponent, IgcQueryBuilderHeaderComponent);
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

const QueryBuilderTemplate: React.FC = () => {
  const queryBuilderRef = useRef<IgcQueryBuilderComponent>(null);
  const expressionOutputRef = useRef<HTMLPreElement>(null);
  const [expressionTree, setExpressionTree] = useState<IgcExpressionTree | null>(null);

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

  // Register icon
  useEffect(() => {
    const clockIcon = "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><path d='M12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22C6.47,22 2,17.5 2,12A10,10 0 0,1 12,2M12.5,7V12.25L17,14.92L16.25,16.15L11,13V7H12.5Z' /></svg>";
    registerIconFromText('clock', clockIcon, 'material');
  }, []);

  // Define fields with formatters
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

  // Initialize expression tree
  useEffect(() => {
    const tree = new IgcFilteringExpressionsTree();
    tree.operator = FilteringLogic.And;
    tree.entity = 'Orders';
    tree.returnFields = ['*'];
    tree.filteringOperands.push({
      fieldName: 'Region',
      condition: IgcStringFilteringOperand.instance().condition('equals'),
      conditionName: 'equals',
      searchVal: regionOptions[0]
    } as any);
    tree.filteringOperands.push({
      fieldName: 'OrderStatus',
      condition: IgcStringFilteringOperand.instance().condition('equals'),
      conditionName: 'equals',
      searchVal: statusOptions[0].value
    } as any);

    setExpressionTree(tree);
  }, []);

  // Normalize time value
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

  // Build search value template
  const buildSearchValueTemplate = useCallback((ctx: QueryBuilderSearchValueContext) => {
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
  }, []);

  // Build region select template
  const buildRegionSelect = (ctx: QueryBuilderSearchValueContext) => {
    const currentValue = ctx?.implicit?.value?.value ?? '';

    return html`
      <igc-select
        placeholder="Region"
        .value=${currentValue}
        @igcChange=${(event: CustomEvent<{ value: string }>) => {
          const value = event.detail?.value;
          const currentKey = ctx?.implicit?.value?.value ?? '';

          if (!value || value === currentKey) return;

          ctx.implicit.value = regionOptions.find(option => option.value === value) ?? null;
        }}>
        ${regionOptions.map(option => html`
          <igc-select-item value=${option.value}>${option.text}</igc-select-item>
        `)}
      </igc-select>
    `;
  };

  // Build status radios template
  const buildStatusRadios = (ctx: QueryBuilderSearchValueContext) => {
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
        ${statusOptions.map(option => html`
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

  // Build date picker template
  const buildDatePicker = (ctx: QueryBuilderSearchValueContext) => {
    const implicitValue = ctx.implicit?.value;
    const currentValue = implicitValue instanceof Date
      ? implicitValue
      : implicitValue
        ? new Date(implicitValue)
        : null;

    const allowedConditions = ['equals', 'doesNotEqual', 'before', 'after'];
    const isEnabled = allowedConditions.includes(ctx.selectedCondition ?? '');

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

  // Build time input template
  const buildTimeInput = (ctx: QueryBuilderSearchValueContext) => {
    const currentValue = normalizeTimeValue(ctx.implicit?.value);
    const allowedConditions = ['at', 'not_at', 'at_before', 'at_after', 'before', 'after'];
    const isDisabled = ctx.selectedField == null || !allowedConditions.includes(ctx.selectedCondition ?? '');

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

  // Build default input template
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
    const isDisabled = isBoolean || selectedField == null || disabledConditions.includes(ctx.selectedCondition ?? '');

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

  // Set up query builder
  useEffect(() => {
    if (!queryBuilderRef.current || !expressionTree) return;

    const queryBuilder = queryBuilderRef.current;
    queryBuilder.entities = entities as any;
    queryBuilder.expressionTree = expressionTree;
    queryBuilder.searchValueTemplate = buildSearchValueTemplate as any;

    const handleExpressionTreeChange = (event: CustomEvent<IgcExpressionTree>) => {
      setExpressionTree(event.detail);
    };

    queryBuilder.addEventListener('expressionTreeChange', handleExpressionTreeChange as EventListener);

    return () => {
      queryBuilder.removeEventListener('expressionTreeChange', handleExpressionTreeChange as EventListener);
    };
  }, [expressionTree?.entity, buildSearchValueTemplate]);

  // Render expression tree output
  useEffect(() => {
    if (expressionOutputRef.current && expressionTree) {
      expressionOutputRef.current.textContent = JSON.stringify(expressionTree, null, 2);
    }
  }, [expressionTree]);

  return (
    <div className="container sample ig-typography">
      <div className="wrapper">
        <igc-query-builder ref={queryBuilderRef} id="queryBuilder">
          <igc-query-builder-header title="Query Builder Template Sample"></igc-query-builder-header>
        </igc-query-builder>
        
        <div className="output-area">
          <pre ref={expressionOutputRef} id="expressionOutput"></pre>
        </div>
      </div>
    </div>
  );
};

// Rendering component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<QueryBuilderTemplate />);
