import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { DataGridSharedData } from './DataGridSharedData';
import { IgrDataGrid } from 'igniteui-react-grids';
import { IgrDataGridModule } from 'igniteui-react-grids';
import { IgrTextColumn } from 'igniteui-react-grids';
import { IgrNumericColumn } from 'igniteui-react-grids';
import { IgrDateTimeColumn } from 'igniteui-react-grids';
import { IgrImageColumn } from 'igniteui-react-grids';
import { IgrGridColumnOptionsModule } from 'igniteui-react-grids';

IgrDataGridModule.register();
IgrGridColumnOptionsModule.register();

interface IRowHoverState {
    hoverEnabled: boolean;
    hoverColor: string;
}

export default class DataGridRowHighlighting extends React.Component<any, IRowHoverState> {

    public data: any[];
    public grid: IgrDataGrid;

    constructor(props: any) {
        super(props);

        this.onGridRef = this.onGridRef.bind(this);

        this.state = { hoverEnabled: true,
        hoverColor: '' };
        this.data = DataGridSharedData.getEmployees();
    }

    public onGridRef(grid: IgrDataGrid) {
        if (!grid) { return; }

        this.grid = grid;
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <div className="options horizontal">

                    <label className="options-label">Enable Row Hover</label>
                    <div>
                        <input type="checkbox" checked={this.state.hoverEnabled} onChange={this.onHoverChange}/>
                    </div>

                    <label className="options-label">Row Hover Color: </label>
                    <select className="options-select" value={this.state.hoverColor}
                        onChange={this.onHoverColorChange}>
                        <option value="default">Default</option>
                        <option value="#ffbfbf">Red</option>
                        <option value="#bfffbf">Green</option>
                        <option value="#bfbfff">Blue</option>
                    </select>
                </div>

                <IgrDataGrid
                    ref={this.onGridRef}
                    height="calc(100% - 40px)"
                    width="100%"
                    defaultColumnMinWidth={120}
                    autoGenerateColumns={false}
                    dataSource={this.data}
                    isRowHoverEnabled={this.state.hoverEnabled}
                    rowHoverBackground={this.state.hoverColor ? this.state.hoverColor : null}
                    isColumnOptionsEnabled="true">

                    <IgrTextColumn field="Name" width="*>150"/>
                    <IgrTextColumn field="Street" headerText="Street" width="*>160" />
                    <IgrTextColumn field="City" headerText="City" width="*>120" />
                    <IgrNumericColumn field="Salary" headerText="Salary" width="*>120" positivePrefix="$" showGroupingSeparator="true" />

                    <IgrImageColumn field="Photo" headerText="Photo" contentOpacity="1"
                    horizontalAlignment="center"  width="*>110"/>
                    <IgrDateTimeColumn field="Birthday" headerText="Date of Birth" width="*>170"/>

                </IgrDataGrid>
            </div>
        );
    }

    public onHoverChange = (args: any) => {
        this.setState({ hoverEnabled: args.target.checked ? true : false });
    }

    public onHoverColorChange = (args: any) => {
        this.setState({ hoverColor: args.target.value === "default" ? '' : args.target.value });
    }
}

// rendering above class to the React DOM
ReactDOM.render(<DataGridRowHighlighting />, document.getElementById('root'));
