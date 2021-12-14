import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { DataGridSharedData } from './DataGridSharedData';
import { IgrDataGridModule } from 'igniteui-react-grids';
import { IgrDataGrid } from 'igniteui-react-grids';
import { IgrTextColumn } from 'igniteui-react-grids';
import { IgrDateTimeColumn } from 'igniteui-react-grids';
import { IgrNumericColumn } from 'igniteui-react-grids';
import { IgrFilterOperand } from 'igniteui-react-grids';
import { IgrGridColumnOptionsModule } from 'igniteui-react-grids';
import { EditorType } from 'igniteui-react-grids';
import { IgrGridCustomFilterRequestedEventArgs } from'igniteui-react-grids';

IgrDataGridModule.register();
IgrGridColumnOptionsModule.register();

export default class DataGridColumnFiltering extends React.Component<any, any> {

    public data: any[];
    public grid: IgrDataGrid;

    constructor(props: any) {
        super(props);

        this.onGridRef = this.onGridRef.bind(this);
        this.onFilter = this.onFilter.bind(this);
        this.data = DataGridSharedData.getEmployees(4000);
    }

    public onGridRef(grid: IgrDataGrid) {
        if (!grid) { return; }

        this.grid = grid;
        
        const filterOperand = new IgrFilterOperand();
        filterOperand.editorType = EditorType.Text;
        filterOperand.displayName = "(Custom) In Code Filter";
        filterOperand.filterRequested = this.onFilter;
        let column = this.grid.actualColumns.item(0);
        column.filterOperands.add(filterOperand);
    }

    public onFilter(s: IgrFilterOperand, args: IgrGridCustomFilterRequestedEventArgs)
    {
        let prop = args.filterFactory.property(args.column.field);
        console.log(prop);
        //Filter-in only records with France
        let filter = prop.isEqualTo("France")
        return filter;        
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

                   
                    <IgrTextColumn field="Country" paddingTop="5" paddingBottom="5" headerText="Code-behind Filter" contentOpacity="1"
                        horizontalAlignment="center" width="*>140"/>
                    <IgrNumericColumn field="Age" headerText="Custom Class Filter" width="*>120">
                        {/* <CustomFilter></CustomFilter> */}
                    </IgrNumericColumn>
                    <IgrNumericColumn field="Sales" headerText="Sales" positivePrefix="$" width="*>170" >
                        {/* <IgbFilterOperand EditorType="EditorType.Numeric" IsInputRequired="false" DisplayName="(Custom) In-Line Filter"
                                            FilterRequested="@(args => args.FilterFactory.Property("Sales").IsLessThanOrEqualTo(300000))">

                        </IgbFilterOperand> */}
                    </IgrNumericColumn>
                </IgrDataGrid>
            </div>
        );
    }

}

class CustomFilter extends IgrFilterOperand
{
    constructor(props: IgrFilterOperand) {

    super();
    props.displayName = "Filter As Class",
    props.isInputRequired = false;
    props.editorType = EditorType.Numeric;
    props.filterRequested = this.onFilter;

    public onFilter(s: IgrFilterOperand, args: IgrGridCustomFilterRequestedEventArgs)
    {
        let prop = args.filterFactory.property(args.column.field);
        console.log(prop);
        //Filter-in only records with France
        let filter = prop.isEqualTo("France")
        return filter;        
    }

    // public createImplementation(s: function (): IgrFilterOperand) 
    // {

    // }

}

// rendering above class to the React DOM
ReactDOM.render(<DataGridColumnFiltering />, document.getElementById('root'));
