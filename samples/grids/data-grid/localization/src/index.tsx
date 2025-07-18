import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrDataGridModule } from 'igniteui-react-data-grids';
import { IgrDataGrid } from 'igniteui-react-data-grids';
import { IgrColumnGroupDescription } from 'igniteui-react-data-grids';
import { IgrColumnSummaryDescription } from 'igniteui-react-data-grids'
import { IgrComboBoxColumn } from 'igniteui-react-data-grids';
import { IgrTextColumn } from 'igniteui-react-data-grids';
import { IgrNumericColumn } from 'igniteui-react-data-grids';
import { IgrDateTimeColumn } from 'igniteui-react-data-grids';
import { DataSourceSummaryOperand } from 'igniteui-react-core';
import { IgrGridColumnOptionsModule } from 'igniteui-react-data-grids';
import { Localization } from 'igniteui-react-core';
import { DataGridSharedData } from './DataGridSharedData';

// importing localization data:
import { DataGridLocalizationJa } from './DataGridLocaleJa';
import { DataGridSummariesLocalizationJa } from './DataGridLocaleJa';
import { DataGridDateTimeColumnLocalizationJa } from './DataGridLocaleJa';
import { DataGridMultiColumnComboBoxLocalizationJa } from './DataGridLocaleJa';

IgrDataGridModule.register();
IgrGridColumnOptionsModule.register();

export default class DataGridLocalization extends React.Component<any, any> {

    public data: any[];
    public grid: IgrDataGrid;
    public comboColumn: IgrComboBoxColumn;
    public countryList: any[] = [];
    public countryLookup = new Map<string, any>();

    constructor(props: any) {
        super(props);
       
        this.data = DataGridSharedData.getSales();

        // If your browser language is JA then you should use "ja" after eg."DataGrid-ja" etc.  The grid will automatically look for the correct
        // suffix based on what the browser language is. This means you could force the grid to use the Japanese resources for whatever
        // the browser culture is by registering it for each language.

        //Localization.register("DataGrid-ja", new CustomDataGridLocaleJa());

        //Register custom strings for column options in the DataGrid
        Localization.register("DataGrid-en", new DataGridLocalizationJa());

        //Register custom strings for summary cells in the DataGrid
        Localization.register("DataVisualization-en", new DataGridSummariesLocalizationJa());

        //Register custom strings for date-time column in the DataGrid
        Localization.register("Calendar-en", new DataGridDateTimeColumnLocalizationJa());

        //Register custom strings for combo-column in the DataGrid
        Localization.register("MultiColumnComboBox-en", new DataGridMultiColumnComboBoxLocalizationJa());

    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <IgrDataGrid
                    ref={this.onGridRef}
                    summaryScope = "Root"
                    groupSummaryDisplayMode = "RowBottom"
                    height="100%"
                    width="100%"
                    autoGenerateColumns="false"
                    isGroupCollapsable="true"
                    groupHeaderDisplayMode = "combined"
                    isColumnOptionsEnabled="true"
                    dataSource={this.data}>
                        <IgrNumericColumn field="ProductID" width="*>120" headerText="製品番号" horizontalAlignment="center" />
                        <IgrTextColumn field="ProductName" width="*>130" headerText="製品"/>
                        <IgrNumericColumn positivePrefix="$" field="BundlePrice" width="*>120" showGroupingSeparator="true" headerText="価格" />
                        <IgrNumericColumn field="OrderItems" width="*>140" headerText="注文"/>
                        <IgrNumericColumn field="OrderValue" width="*>160" showGroupingSeparator="true" headerText="注文合計"
                        positivePrefix="$"  />
                        <IgrDateTimeColumn field="OrderDate" width="*>150" headerText="注文日"
                        horizontalAlignment="right"  />
                        <IgrNumericColumn field="Profit" width="*>140" showGroupingSeparator="true" headerText="利益"
                        positivePrefix="$"  />
                        <IgrComboBoxColumn dataSource={this.countryList} field="Countries" textField="Countries" valueField="Countries" width="*>170" headerText="出荷国"/>
                </IgrDataGrid>
            </div>
        );
    }

    public onGridRef = (grid: IgrDataGrid) => {
        if (!grid) { return; }

        this.grid = grid;
        this.grid.actualDataSource.isSectionExpandedDefault = true;
    }

    public onCountryColumnRef = (column: IgrComboBoxColumn) => {
        if (!column) { return; }

        this.comboColumn = column;
    }

    public componentDidMount() {
        window.addEventListener('load', this.onLoad);
    }

    public onLoad = () => {

        this.data.forEach(sales => {
            if (!this.countryLookup.has(sales.Countries)) {
                this.countryLookup.set(sales.Countries, sales);
                this.countryList.push(sales);
            }
        });
       
        const productGroup = new IgrColumnGroupDescription();
        productGroup.field = "ProductName";
        productGroup.displayName = "商品名";
        this.grid.groupDescriptions.add(productGroup);

        const productCount = new IgrColumnSummaryDescription();
        productCount.field = "ProductName";
        productCount.displayName = "商品名"
        productCount.operand = DataSourceSummaryOperand.Count;
        this.grid.summaryDescriptions.add(productCount);

        const priceMin = new IgrColumnSummaryDescription();
        priceMin.field = "BundlePrice";
        priceMin.displayName = "価格"
        priceMin.operand = DataSourceSummaryOperand.Min;
        priceMin.formatOverride = new Intl.NumberFormat('en-EN', { style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0 });
        this.grid.summaryDescriptions.add(priceMin);

        const priceMax = new IgrColumnSummaryDescription();
        priceMax.field = "BundlePrice";
        priceMax.displayName = "価格";
        priceMax.operand = DataSourceSummaryOperand.Max;
        priceMax.formatOverride = new Intl.NumberFormat('en-EN', { style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0 });
        this.grid.summaryDescriptions.add(priceMax);

        const orderSum = new IgrColumnSummaryDescription();
        orderSum.field = "OrderItems";
        orderSum.displayName = "アイテムを注文する";
        orderSum.operand = DataSourceSummaryOperand.Sum;
        this.grid.summaryDescriptions.add(orderSum);

        const orderValueSum = new IgrColumnSummaryDescription();
        orderValueSum.field = "OrderValue";
        orderValueSum.displayName = "オーダー値";
        orderValueSum.operand = DataSourceSummaryOperand.Sum;
        orderValueSum.formatOverride = new Intl.NumberFormat('en-EN', { style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0});
        this.grid.summaryDescriptions.add(orderValueSum);

        const orderValueAvg = new IgrColumnSummaryDescription();
        orderValueAvg.field = "OrderValue";
        orderValueAvg.displayName = "オーダー値";
        orderValueAvg.operand = DataSourceSummaryOperand.Average;
        orderValueAvg.formatOverride = new Intl.NumberFormat('en-EN', { style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0 });
        this.grid.summaryDescriptions.add(orderValueAvg);

        const orderDateMin = new IgrColumnSummaryDescription();
        orderDateMin.field = "OrderDate";
        orderDateMin.displayName = "注文日";
        orderDateMin.operand = DataSourceSummaryOperand.Min;
        orderDateMin.calculatorDisplayName = "First"
        orderDateMin.formatOverride = new Intl.DateTimeFormat('en-EN');
        this.grid.summaryDescriptions.add(orderDateMin);

        const orderDateMax = new IgrColumnSummaryDescription();
        orderDateMax.field = "OrderDate";
        orderDateMax.displayName = "注文日";
        orderDateMax.operand = DataSourceSummaryOperand.Max;
        orderDateMax.calculatorDisplayName = "Last"
        orderDateMax.formatOverride = new Intl.DateTimeFormat('en-EN');
        this.grid.summaryDescriptions.add(orderDateMax);

        const sum1 = new IgrColumnSummaryDescription();
        sum1.field = "Profit";
        sum1.displayName = "利益";
        sum1.operand = DataSourceSummaryOperand.Sum;
        sum1.formatOverride = new Intl.NumberFormat('en-EN', { style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0 });
        this.grid.summaryDescriptions.add(sum1);

        const avg2 = new IgrColumnSummaryDescription();
        avg2.field = "Profit";
        avg2.displayName = "利益";
        avg2.operand = DataSourceSummaryOperand.Average;
        avg2.formatOverride = new Intl.NumberFormat('en-EN', { style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0 });
        this.grid.summaryDescriptions.add(avg2);

    }

}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<DataGridLocalization/>);
