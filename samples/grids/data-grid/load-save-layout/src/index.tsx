import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "./DataGridStyles.css";
import { DataGridSharedData } from './DataGridSharedData';
import { IgrDataGridModule } from 'igniteui-react-grids';
import { IgrGridColumnOptionsModule } from 'igniteui-react-grids';
import { IgrDataGrid } from 'igniteui-react-grids';
import { IgrDataGridToolbarModule } from "igniteui-react-grids";
import { IgrDataGridToolbar } from "igniteui-react-grids";
import { IgrTextColumn } from 'igniteui-react-grids';
import { IgrNumericColumn } from 'igniteui-react-grids';
import { IgrDateTimeColumn } from 'igniteui-react-grids';
import { IgrImageColumn } from 'igniteui-react-grids';
import { IgrColumnGroupDescription } from 'igniteui-react-grids';
import { IgrColumnSummaryDescription } from 'igniteui-react-grids'
import { DataSourceSummaryOperand } from 'igniteui-react-core';
import { IgrButton } from 'igniteui-react';
import { IgrButtonModule } from 'igniteui-react';

import 'igniteui-webcomponents/themes/light/bootstrap.css';

IgrDataGridModule.register();
IgrDataGridToolbarModule.register();
IgrGridColumnOptionsModule.register();
IgrButtonModule.register();

export default class DataGridLoadSaveLayout extends React.Component<any, any> {

    public data: any[];
    public grid: IgrDataGrid;
    public toolbar: IgrDataGridToolbar;
    public savedLayout: string;

    constructor(props: any) {
        super(props);
        
        this.data = DataGridSharedData.getEmployees(100);
    }

    public onLoadLayoutClicked = () => {
        this.grid.loadLayout(this.savedLayout);
    }

    public onSaveLayoutClicked = () => {
        
        this.grid.saveLayout();
        this.savedLayout = this.grid.saveLayout();
    }

    public render(): JSX.Element {
        let buttonStyle: any = { height: "2rem", marginLeft: "10px", width: "160px", whiteSpace: "nowrap" };
    
        return (
            <div className="container sample">

                <div className="options" style={{height: "50px"}}>
                    <IgrButton variant="contained" style={buttonStyle}                                
                               clicked={this.onLoadLayoutClicked}>
                        <span>Load</span>
                    </IgrButton>
                    <IgrButton variant="contained" style={buttonStyle}                                
                               clicked={this.onSaveLayoutClicked}>
                        <span>Save</span>                                  
                    </IgrButton>
                </div>

                 <IgrDataGridToolbar
                    ref={this.onToolbarRef}
                    toolbarTitle="Sales Team"
                    columnChooser="true"
                    columnPinning="true"
                />
                
                <IgrDataGrid
                    ref={this.onGridRef}
                    height="calc(100% - 2.75rem)"
                    width="100%"
                    rowHeight="50"
                    autoGenerateColumns="false"
                    dataSource={this.data}
                    defaultColumnMinWidth="100"
                    summaryScope="Root"
                    isColumnOptionsEnabled="true"
                    isGroupCollapsable="true"
                    groupHeaderDisplayMode="Combined"
                    groupSummaryDisplayMode="RowBottom"
                    columnMovingMode="Deferred"
                    columnMovingAnimationMode="SlideOver"
                    columnMovingSeparatorWidth="2"
                    columnShowingAnimationMode="slideFromRightAndFadeIn"
                    columnHidingAnimationMode="slideToRightAndFadeOut"
                    selectionMode="SingleRow"
                    cornerRadiusTopLeft="0"
                    cornerRadiusTopRight="0"
                    >
                    <IgrImageColumn field="Photo" headerText="Photo" contentOpacity="1"
                    horizontalAlignment="stretch" width="110" paddingTop="5" paddingBottom="5"  paddingRight="10"/>
                    <IgrTextColumn field="Name" width="*>140"/>

                    <IgrNumericColumn field="Sales" headerText="Sales" horizontalAlignment="center"
                    paddingLeft="10" paddingRight="0" width="*>160" />

                    <IgrNumericColumn field="Salary" positivePrefix="$"
                    showGroupingSeparator="true" width="*>160"/>

                    <IgrDateTimeColumn field="Birthday" headerText="Date of Birth"
                    horizontalAlignment="stretch" width="*>160" paddingRight="10"/>
                    <IgrImageColumn field="CountryFlag" headerText="Country" contentOpacity="1"
                    horizontalAlignment="stretch" width="130" paddingTop="5" paddingBottom="5" />

                    <IgrTextColumn field="Address" headerText="Address" horizontalAlignment="left" width="*>160" />

                    <IgrTextColumn field="Phone" horizontalAlignment="center" width="140" />

                    <IgrTextColumn field="Income" width="*>130" horizontalAlignment="center"/>
                    <IgrTextColumn field="Age" width="*>110" horizontalAlignment="center"/>
               </IgrDataGrid>
            </div>
        );
    }

    public onGridRef = (grid: IgrDataGrid) => {
        if (!grid) { return; }

        this.grid = grid;
        this.grid.actualDataSource.isSectionExpandedDefault = true;
        
        if (this.toolbar !== null) {
            this.toolbar.targetGrid = this.grid;
        }
    }

    public onToolbarRef = (toolbar: IgrDataGridToolbar) => {
          this.toolbar = toolbar;
          if (this.toolbar !== null) {
              this.toolbar.targetGrid = this.grid;
          }
    }

    public componentDidMount() {

        const peopleGroup = new IgrColumnGroupDescription();
        peopleGroup.field = "Country";
        peopleGroup.displayName = "Country";
        this.grid.groupDescriptions.add(peopleGroup);

        const incomeGroup = new IgrColumnGroupDescription();
        incomeGroup.field = "Income";
        incomeGroup.displayName = "Income";
        this.grid.groupDescriptions.add(incomeGroup);

        const peopleCount = new IgrColumnSummaryDescription();
        peopleCount.field = "Photo";
        peopleCount.operand = DataSourceSummaryOperand.Count;
        this.grid.summaryDescriptions.add(peopleCount);

        const sales = new IgrColumnSummaryDescription();
        sales.field = "Sales";
        sales.operand = DataSourceSummaryOperand.Max;
        sales.formatOverride = new Intl.NumberFormat('en-EN', { style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0 });
        this.grid.summaryDescriptions.add(sales);

        const salary = new IgrColumnSummaryDescription();
        salary.field = "Salary";
        salary.operand = DataSourceSummaryOperand.Average;
        salary.formatOverride = new Intl.NumberFormat('en-EN', { style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 0 });
        this.grid.summaryDescriptions.add(salary);
    }

    

}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<DataGridLoadSaveLayout/>);
