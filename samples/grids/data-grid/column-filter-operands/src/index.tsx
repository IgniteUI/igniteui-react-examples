import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { DataGridSharedData } from './DataGridSharedData';
import { IgrDataGridModule } from 'igniteui-react-grids';
import { IgrDataGrid } from 'igniteui-react-grids';
import { IgrTextColumn } from 'igniteui-react-grids';
import { IgrNumericColumn } from 'igniteui-react-grids';
import { IgrFilterOperand } from 'igniteui-react-grids';
import { IgrGridColumnOptionsModule } from 'igniteui-react-grids';
import { EditorType } from 'igniteui-react-grids';
import { IgrGridCustomFilterRequestedEventArgs } from'igniteui-react-grids';

IgrDataGridModule.register();
IgrGridColumnOptionsModule.register();

export default class DataGridColumnFilterOperands extends React.Component<any, any> {

    public data: any[];
    public grid: IgrDataGrid;

    constructor(props: any) {
        super(props);

        this.data = DataGridSharedData.getEmployees(4000);
    }

    public onGridRef = (grid: IgrDataGrid) => {
        if (!grid) { return; }

        this.grid = grid;
        
        const filterOperand = new IgrFilterOperand();
        filterOperand.editorType = EditorType.Text;
        filterOperand.displayName = "Show Only France";
        filterOperand.filterRequested = this.onFilter;
        let column = this.grid.actualColumns.item(0);
        column.filterOperands.add(filterOperand);
        
        const filterOperand2 = new IgrFilterOperand();
        filterOperand2.editorType = EditorType.Numeric;
        filterOperand2.displayName = "Less Than Age 30";
        filterOperand2.filterRequested = this.onFilter2;
        let column2 = this.grid.actualColumns.item(1);
        column2.filterOperands.add(filterOperand2);
        
        const filterOperand3 = new IgrFilterOperand();
        filterOperand3.editorType = EditorType.Numeric;
        filterOperand3.displayName = "Greater Than $500k";
        filterOperand3.filterRequested = this.onFilter3;
        let column3 = this.grid.actualColumns.item(2);
        column3.filterOperands.add(filterOperand3);
    }

    public onFilter = (s: IgrFilterOperand, args: IgrGridCustomFilterRequestedEventArgs) =>
    {
        let prop = args.filterFactory.property(args.column.field);
        //Filter-in only records with France
        args.expression = prop.isEqualTo("France");
    }

    public onFilter2 = (s: IgrFilterOperand, args: IgrGridCustomFilterRequestedEventArgs) =>
    {
        let prop = args.filterFactory.property(args.column.field);
        //Filter-in only records with LessThan or Equal to 30
        args.expression = prop.isLessThanOrEqualTo(30);
    }

    public onFilter3 = (s: IgrFilterOperand, args: IgrGridCustomFilterRequestedEventArgs) =>
    {
        let prop = args.filterFactory.property(args.column.field);
        //Filter-in only records with GreaterThan $500,000.00
        args.expression = prop.isGreaterThan(500000);
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">                
                <IgrDataGrid
                    ref={this.onGridRef}
                    height="calc(100% - 40px)"
                    width="100%"
                    defaultColumnMinWidth={100}
                    autoGenerateColumns={false}
                    dataSource={this.data}
                    isColumnOptionsEnabled="true"
                    filterUIType="FilterRow">
                    <IgrTextColumn field="Country" paddingTop="5" paddingBottom="5" headerText="Country" contentOpacity="1"
                        horizontalAlignment="center" width="*>140"/>
                    <IgrNumericColumn field="Age" headerText="Age" width="*>120" />
                    <IgrNumericColumn field="Sales" headerText="Sales" positivePrefix="$" width="*>170" />
                </IgrDataGrid>
            </div>
        );
    }
}

// rendering above class to the React DOM
ReactDOM.render(<DataGridColumnFilterOperands />, document.getElementById('root'));
