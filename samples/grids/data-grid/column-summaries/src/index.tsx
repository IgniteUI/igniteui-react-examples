import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { DataGridSharedData } from './DataGridSharedData';
import { IgrDataGridModule } from 'igniteui-react-data-grids';
import { IgrDataGrid } from 'igniteui-react-data-grids';
import { IgrColumnGroupDescription } from 'igniteui-react-data-grids';
import { IgrColumnSummaryDescription } from 'igniteui-react-data-grids'
import { IgrProvideCalculatorEventArgs } from 'igniteui-react-core';
import { IgrTextColumn } from 'igniteui-react-data-grids';
import { IgrNumericColumn } from 'igniteui-react-data-grids';
import { IgrDateTimeColumn } from 'igniteui-react-data-grids';
import { DataSourceSummaryOperand, SummaryCalculator, DefaultSummaryResult, IDataSource, ISummaryResult } from 'igniteui-react-core';
import { IgrGridColumnOptionsModule } from 'igniteui-react-data-grids';

IgrDataGridModule.register();
IgrGridColumnOptionsModule.register();

export default class DataGridColumnSummaries extends React.Component<any, any> {

    public data: any[];
    public grid: IgrDataGrid;

    constructor(props: any) {
        super(props);
      
        this.state = { componentVisible: true, isGroupCollapsible: true, summaryScope: "Root", groupSummaryDisplayMode: "RowBottom" }
        this.data = DataGridSharedData.getSales(50);
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <div className="options horizontal">
                    <label className="options-label" style={{ width: "150px" }}>Summary Scope:</label>
                    <select className="options-select" style={{ width: "100px" }} defaultValue="Root" onChange={this.onSummaryScopeChanging}>
                    <option>Root</option>
                        <option>Groups</option>
                        <option>Both</option>
                        <option>None</option>
                    </select>
                    <label className="options-label" style={{ width: "100" }}>Group Summary Display Mode:</label>
                    <select className="options-select" style={{ width: "110px" }} defaultValue="RowBottom" onChange={this.onGroupSummaryDisplayModeChanging}>
                        <option>List</option>
                        <option>Cells</option>
                        <option>RowTop</option>
                        <option>RowBottom</option>
                        <option>None</option>
                    </select>
                </div>

                <IgrDataGrid
                    ref={this.onGridRef}
                    summaryScope = {this.state.summaryScope}
                    groupSummaryDisplayMode = {this.state.groupSummaryDisplayMode}
                    height="calc(100% - 40px)"
                    width="100%"
                    autoGenerateColumns="false"
                    isGroupCollapsable={this.state.isGroupCollapsible}
                    groupHeaderDisplayMode = "combined"
                    isColumnOptionsEnabled="true"
                    dataSource={this.data}>
                        <IgrNumericColumn field="ProductID" width="*>120" headerText="ID" horizontalAlignment="center" />
                        <IgrTextColumn field="ProductName" width="*>130" headerText="Product"/>
                        <IgrNumericColumn positivePrefix="$" field="BundlePrice" width="*>120" showGroupingSeparator="true" headerText="Price" />
                        <IgrNumericColumn field="OrderItems" width="*>140" headerText="Orders"/>
                        <IgrNumericColumn field="OrderValue" width="*>160" showGroupingSeparator="true" headerText="Order Totals"
                        positivePrefix="$"  />
                        <IgrDateTimeColumn field="OrderDate" width="*>150" headerText="Order Date"
                        horizontalAlignment="right"  />
                        <IgrNumericColumn field="Profit" width="*>140" showGroupingSeparator="true" headerText="Profit"
                        positivePrefix="$"  />
                        <IgrTextColumn field="Countries" width="*>170" headerText="Ship Country"/>
                </IgrDataGrid>
            </div>
        );
    }

    public onSummaryScopeChanging = (e: any) => {
        this.grid.summaryScope = e.target.value;
        this.setState( {summaryScope: e.target.value} );
    }
    public onGroupSummaryDisplayModeChanging = (e: any) => {
        this.grid.groupSummaryDisplayMode = e.target.value;
        this.setState( {groupSummaryDisplayMode: e.target.value} );
    }
    public onGridRef = (grid: IgrDataGrid) => {
        if (!grid) { return; }

        this.grid = grid;
        this.grid.actualDataSource.isSectionExpandedDefault = true;
    }

    public componentDidMount() {
        window.addEventListener('load', this.onLoad);
    }

    public onLoad = () => {
        const productGroup = new IgrColumnGroupDescription();
        productGroup.field = "ProductName";
        productGroup.displayName = "ProductName";
        this.grid.groupDescriptions.add(productGroup);

        const productCount = new IgrColumnSummaryDescription();
        productCount.field = "ProductName";
        productCount.operand = DataSourceSummaryOperand.Count;
        this.grid.summaryDescriptions.add(productCount);

        const priceMin = new IgrColumnSummaryDescription();
        priceMin.field = "BundlePrice";
        priceMin.operand = DataSourceSummaryOperand.Min;
        priceMin.formatOverride = new Intl.NumberFormat('en-EN', { style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0 });
        this.grid.summaryDescriptions.add(priceMin);

        const priceMax = new IgrColumnSummaryDescription();
        priceMax.field = "BundlePrice";
        priceMax.operand = DataSourceSummaryOperand.Max;
        priceMax.formatOverride = new Intl.NumberFormat('en-EN', { style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0 });
        this.grid.summaryDescriptions.add(priceMax);

        const orderSum = new IgrColumnSummaryDescription();
        orderSum.field = "OrderItems";
        orderSum.operand = DataSourceSummaryOperand.Sum;
        this.grid.summaryDescriptions.add(orderSum);

        const orderValueSum = new IgrColumnSummaryDescription();
        orderValueSum.field = "OrderValue";
        orderValueSum.operand = DataSourceSummaryOperand.Sum;
        orderValueSum.formatOverride = new Intl.NumberFormat('en-EN', { style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0});
        this.grid.summaryDescriptions.add(orderValueSum);

        const orderValueAvg = new IgrColumnSummaryDescription();
        orderValueAvg.field = "OrderValue";
        orderValueAvg.operand = DataSourceSummaryOperand.Average;
        orderValueAvg.formatOverride = new Intl.NumberFormat('en-EN', { style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0 });
        this.grid.summaryDescriptions.add(orderValueAvg);

        const orderDateMin = new IgrColumnSummaryDescription();
        orderDateMin.field = "OrderDate";
        orderDateMin.operand = DataSourceSummaryOperand.Min;
        orderDateMin.calculatorDisplayName = "First"
        orderDateMin.formatOverride = new Intl.DateTimeFormat('en-EN');
        this.grid.summaryDescriptions.add(orderDateMin);

        const orderDateMax = new IgrColumnSummaryDescription();
        orderDateMax.field = "OrderDate";
        orderDateMax.operand = DataSourceSummaryOperand.Max;
        orderDateMax.calculatorDisplayName = "Last"
        orderDateMax.formatOverride = new Intl.DateTimeFormat('en-EN');
        this.grid.summaryDescriptions.add(orderDateMax);

        const sum1 = new IgrColumnSummaryDescription();
        sum1.field = "Profit";
        sum1.operand = DataSourceSummaryOperand.Sum;
        sum1.formatOverride = new Intl.NumberFormat('en-EN', { style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0 });
        this.grid.summaryDescriptions.add(sum1);

        const avg2 = new IgrColumnSummaryDescription();
        avg2.field = "Profit";
        avg2.operand = DataSourceSummaryOperand.Average;
        avg2.formatOverride = new Intl.NumberFormat('en-EN', { style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0 });
        this.grid.summaryDescriptions.add(avg2);

        const countries = new IgrColumnSummaryDescription();
        countries.field = "Countries";
        countries.operand = DataSourceSummaryOperand.Custom;
        countries.provideCalculator = this.onProvideCalculator;
        // countries.calculator = new CustomDomestic();
        this.grid.summaryDescriptions.add(countries);
    }

    public onProvideCalculator = (s: IgrColumnSummaryDescription, e: IgrProvideCalculatorEventArgs) => {
        e.calculator = new CustomDomestic();
    }
}

// Custom Calculator - calculates the count for all USA.
class CustomDomestic extends SummaryCalculator
{
    get displayName(): string {
        return "USA";
    }
    public usCountries: number;

    public beginCalculation(a: IDataSource, b: string): void {
        super.beginCalculation(a,b);
        this.usCountries = 0;
    }
    public endCalculation(): ISummaryResult {
       return new DefaultSummaryResult(this.propertyName, DataSourceSummaryOperand.Custom, this.usCountries)
    }
    public aggregate(a: any): void {
       if(a.Countries === "USA")
       {
            this.usCountries++;
       }
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<DataGridColumnSummaries/>);

