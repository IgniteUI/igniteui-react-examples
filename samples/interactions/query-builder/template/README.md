# Query Builder Template Sample

This sample demonstrates the Query Builder component with custom search value templates.

## Features

- Query Builder with custom search value templates
- **Region field**: Custom Select dropdown with predefined options
- **OrderStatus field**: Radio button group for status selection
- **Date fields**: Date picker component
- **Time fields**: Time input with custom clock icon
- **Default fields**: Standard input (text/number)
- Expression tree JSON output display
- Query Builder Header with custom title
- Field formatters for display values

## Running the Sample

```bash
npm install
npm start
```

## Custom Templates

The sample demonstrates the `searchValueTemplate` prop which allows customization of the search value input based on:
- Field name
- Data type
- Condition type

### Template Examples

- **Region**: Dropdown with predefined region options (CNA, CEU, MED, etc.)
- **OrderStatus**: Radio buttons for New, Shipped, Done
- **Date fields**: Date picker for dates
- **Time fields**: Time input with clock icon
- **Boolean fields**: Automatically handled by Query Builder
- **Other fields**: Standard text/number inputs

## Components Used

- `IgcQueryBuilderComponent` - Main query builder component
- `IgcQueryBuilderHeaderComponent` - Header with custom title
- `IgcDatePickerComponent` - Date selection
- `IgcDateTimeInputComponent` - Time selection
- `IgcSelectComponent` - Dropdown for region
- `IgcRadioGroupComponent` - Radio buttons for status
- `IgcInputComponent` - Standard input fields
- `IgcIconComponent` - Clock icon for time input
