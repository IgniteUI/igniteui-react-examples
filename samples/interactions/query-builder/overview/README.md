# Query Builder Overview Sample

This sample demonstrates the Query Builder component with Grid integration.

## Features

- Query Builder with entity selection (Customers/Orders)
- Dynamic field management based on selected entity
- Expression tree construction with filtering logic
- Grid integration with auto-generated columns
- API integration with Northwind backend
- Dynamic column visibility based on return fields
- Loading state handling

## Running the Sample

```bash
npm install
npm start
```

## API Integration

The sample connects to the Northwind Query Builder API:
- Endpoint: `https://data-northwind.indigo.design/QueryBuilder/ExecuteQuery`
- Method: POST
- Body: Expression tree JSON

## Components Used

- `IgcQueryBuilderComponent` - Main query builder component
- `IgcGridComponent` - Data grid for displaying results
- `IgcFilteringExpressionsTree` - Expression tree structure
