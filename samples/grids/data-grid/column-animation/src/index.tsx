import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { DataGridSharedData } from './DataGridSharedData';
import { IgrDataGrid } from 'igniteui-react-grids';
import { IgrDataGridModule } from 'igniteui-react-grids';
import { IgrTextColumn } from 'igniteui-react-grids';
import { IgrNumericColumn } from 'igniteui-react-grids';
import { IgrDateTimeColumn } from 'igniteui-react-grids';
import { IgrGridColumnOptionsModule } from 'igniteui-react-grids';

IgrDataGridModule.register();
IgrGridColumnOptionsModule.register();

export default class DataGridColumnAnimation extends React.Component<any, any> {

    public data: any[];
    public grid: IgrDataGrid;

    constructor(props: any) {
        super(props);

        this.state = {
            columnAddOrShowAnimation: "SlideFromLeft",
            columnExchangingAnimationMode: "Crossfade",
            columnHidingAnimationMode: "FadeOut",
            columnMovingAnimationMode: "SlideOver",
            columnPropertyUpdatingAnimationMode: "Interpolate"
        }

        this.data = DataGridSharedData.getEmployees();
    }

    public onGridRef = (grid: IgrDataGrid) => {
        if (!grid) { return; }

        this.grid = grid;
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <div className="options horizontal">
                    <label className="options-label" style={{ width: "160px" }}>Adding Animation: </label>
                    <select className="options-select" value={this.state.columnAddOrShowAnimation}
                        onChange={this.onAddShowChange} style={{ width: "150px" }}>
                        <option>Auto</option>
                        <option>None</option>
                        <option>SlideFromLeft</option>
                        <option>SlideFromRight</option>
                        <option>SlideFromTop</option>
                        <option>SlideFromBottom</option>
                        <option>FadeIn</option>
                        <option>SlideFromLeftAndFadeIn</option>
                        <option>SlideFromRightAndFadeIn</option>
                        <option>SlideFromTopAndFadeIn</option>
                        <option>SlideFromBottomAndFadeIn</option>
                    </select>
                    <label className="options-label" style={{ width: "160px" }}>Exchange Animation: </label>
                    <select className="options-select" value={this.state.columnExchangingAnimationMode}
                        onChange={this.onExchangeChange} style={{ width: "150px" }}>
                        <option>Auto</option>
                        <option>None</option>
                        <option>SlideToLeft</option>
                        <option>SlideToRight</option>
                        <option>SlideToTop</option>
                        <option>SlideToBottom</option>
                        <option>Crossfade</option>
                        <option>SlideToLeftAndCrossfade</option>
                        <option>SlideToRightAndCrossfade</option>
                        <option>SlideToTopAndCrossfade</option>
                        <option>SlideToBottomAndCrossfade</option>
                    </select>
                </div>
                <div className="options horizontal">
                    <label className="options-label" style={{ width: "160px" }}>Hiding Animation: </label>
                    <select className="options-select" value={this.state.columnHidingAnimationMode}
                        onChange={this.onHideChange} style={{ width: "150px" }}>
                        <option>Auto</option>
                        <option>None</option>
                        <option>SlideToLeft</option>
                        <option>SlideToRight</option>
                        <option>SlideToTop</option>
                        <option>SlideToBottom</option>
                        <option>FadeOut</option>
                        <option>SlideToLeftAndFadeOut</option>
                        <option>SlideToRightAndFadeOut</option>
                        <option>SlideToTopAndFadeOut</option>
                        <option>SlideToBottomAndFadeOut</option>
                    </select>
                    <label className="options-label" style={{ width: "160px" }}>Updating Animation: </label>
                    <select className="options-select" value={this.state.columnPropertyUpdatingAnimationMode}
                        onChange={this.onPropUpdateChange} style={{ width: "150px" }} >
                        <option>Auto</option>
                        <option>None</option>
                        <option>Interpolate</option>
                        <option>InterpolateDeep</option>
                    </select>
                </div>
                <div className="options horizontal">
                    <label className="options-label" style={{ width: "160px" }}>Moving Animation: </label>
                    <select className="options-select" value={this.state.columnMovingAnimationMode}
                        onChange={this.onMoveChange} style={{ width: "150px" }}>
                        <option>Auto</option>
                        <option>None</option>
                        <option>SlideOver</option>
                    </select>
                    <button className="options-button" onClick={this.onHideClick} style={{ width: "100px" }}>Hide Column</button>
                    <button className="options-button" onClick={this.onShowClick} style={{ width: "100px" }}>Show Column</button>
                    <button className="options-button" onClick={this.onReloadClick} style={{ width: "100px" }}>Reload Grid</button>
                </div>

                <IgrDataGrid
                    ref={this.onGridRef}
                    height="calc(100% - 120px)"
                    width="100%"
                    defaultColumnMinWidth={100}
                    columnAddingAnimationMode="SlideFromLeft"
                    columnShowingAnimationMode="SlideFromLeft"
                    columnExchangingAnimationMode="Crossfade"
                    columnHidingAnimationMode="FadeOut"
                    columnMovingAnimationMode="SlideOver"
                    columnPropertyUpdatingAnimationMode="Interpolate"
                    autoGenerateColumns={false}
                    dataSource={this.data}
                    isColumnOptionsEnabled="true">

                    <IgrTextColumn field="Name" width="*>170"/>
                    <IgrTextColumn field="Street" headerText="Address" width="*>150" />
                    <IgrTextColumn field="City" width="*>120"/>
                    <IgrNumericColumn field="Salary" positivePrefix="$" showGroupingSeparator="true" width="*>120"/>
                    <IgrDateTimeColumn field="Birthday" width="*>170"/>

                </IgrDataGrid>
            </div>
        );
    }

    public onHideClick = (e: any) => {
        for (const col of this.grid.combinedColumns) {
            if (!col.isHidden) {
                col.isHidden = true;
                break;
            }
        }
    }

    public onReloadClick = (e: any) => {
        // this.grid.dataSource = null;

        // this.grid.dataSource = this.data;

        const newData = DataGridSharedData.getEmployees();
        for (let i = 0; i < this.data.length; i++) {
            const oldItem = this.data[i];
            this.data[i].Salary = newData[i].Salary;
            this.grid.notifySetItem(i, oldItem, newData[i]);
        }
    }

    public onShowClick = (e: any) => {

        const columns = this.grid.combinedColumns.reverse();

        for (const col of columns) {
            if (col.isHidden) {
                col.isHidden = false;
                break;
            }
        }

        this.grid.combinedColumns.reverse();
    }

    public onAddShowChange = (e: any) => {
        this.setState({ columnAddOrShowAnimation: e.target.value });
        this.grid.columnAddingAnimationMode = e.target.value;
        this.grid.columnShowingAnimationMode = e.target.value;
    }

    public onExchangeChange = (e: any) => {
        this.setState({ columnExchangingAnimationMode: e.target.value });
        this.grid.columnExchangingAnimationMode = e.target.value;
    }

    public onHideChange = (e: any) => {
        this.setState({ columnHidingAnimationMode: e.target.value });
        this.grid.columnHidingAnimationMode = e.target.value;
    }

    public onMoveChange = (e: any) => {
        this.setState({ columnMovingAnimationMode: e.target.value });
        this.grid.columnMovingAnimationMode = e.target.value;
    }

    public onPropUpdateChange = (e: any) => {
        this.setState({ columnPropertyUpdatingAnimationMode: e.target.value });
        this.grid.columnPropertyUpdatingAnimationMode = e.target.value;
    }

    public getRandomNumber(min: number, max: number): number {
        return Math.round(min + Math.random() * (max - min));
    }
}

// rendering above class to the React DOM
ReactDOM.render(<DataGridColumnAnimation />, document.getElementById('root'));
