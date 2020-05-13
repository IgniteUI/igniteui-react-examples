import * as React from 'react';


import { DataGridSharedData } from './DataGridSharedData';

import { IgrLiveGrid } from 'igniteui-react-grids';
import { IgrLiveGridModule } from 'igniteui-react-grids';
import { IgrTextColumn } from 'igniteui-react-grids';
import { IgrNumericColumn } from 'igniteui-react-grids';
import { IgrDateTimeColumn } from 'igniteui-react-grids';

IgrLiveGridModule.register();

export default class DataGridColumnAnimation extends React.Component<any, any> {

    public data: any[];
    public grid: IgrLiveGrid;

    constructor(props: any) {
        super(props);

        this.onGridRef = this.onGridRef.bind(this);
        this.onHideClick = this.onHideClick.bind(this);
        this.onReloadClick = this.onReloadClick.bind(this);
        this.onShowClick = this.onShowClick.bind(this);

        this.onAddShowChange = this.onAddShowChange.bind(this);
        this.onExchangeChange = this.onExchangeChange.bind(this);
        this.onHideChange = this.onHideChange.bind(this);
        this.onMoveChange = this.onMoveChange.bind(this);
        this.onPropUpdateChange = this.onPropUpdateChange.bind(this);

        this.state = {
            columnAddOrShowAnimation: "SlideFromLeft",
            columnExchangingAnimationMode: "Crossfade",
            columnHidingAnimationMode: "FadeOut",
            columnMovingAnimationMode: "SlideOver",
            columnPropertyUpdatingAnimationMode: "Interpolate"
        }

        this.data = DataGridSharedData.getEmployees();
    }

    public onGridRef(grid: IgrLiveGrid) {
        this.grid = grid;
    }

    public render() {
        return (
            <div className="igContainer">
                <div className="igOptions">
                    <label className="igOptions-item" style={{ width: "130px" }}>Adding Animation: </label>
                    <select className="igOptions-item" value={this.state.columnAddOrShowAnimation}
                        onChange={this.onAddShowChange} style={{ width: "175px" }}>
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
                    <span className="igOptions-item" style={{ width: "130px" }}>Exchange Animation: </span>
                    <select className="igOptions-item" value={this.state.columnExchangingAnimationMode}
                        onChange={this.onExchangeChange} style={{ width: "175px" }}>
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
                <div className="igOptions">
                    <span className="igOptions-item" style={{ width: "130px" }}>Hiding Animation: </span>
                    <select className="igOptions-item" value={this.state.columnHidingAnimationMode}
                        onChange={this.onHideChange} style={{ width: "175px" }}>
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
                    <span className="igOptions-item" style={{ width: "130px" }}>Updating Animation: </span>
                    <select className="igOptions-item" value={this.state.columnPropertyUpdatingAnimationMode}
                        onChange={this.onPropUpdateChange} style={{ width: "175px" }} >
                        <option>Auto</option>
                        <option>None</option>
                        <option>Interpolate</option>
                        <option>InterpolateDeep</option>
                    </select>
                </div>
                <div className="igOptions">
                    <span className="igOptions-item" style={{ width: "130px" }}>Moving Animation: </span>
                    <select className="igOptions-item" value={this.state.columnMovingAnimationMode}
                        onChange={this.onMoveChange} style={{ width: "175px" }}>
                        <option>Auto</option>
                        <option>None</option>
                        <option>SlideOver</option>
                    </select>
                    <button className="igOptions-item" onClick={this.onHideClick} style={{ width: "100px" }}>Hide Column</button>
                    <button className="igOptions-item" onClick={this.onShowClick} style={{ width: "100px" }}>Show Column</button>
                    <button className="igOptions-item" onClick={this.onReloadClick} style={{ width: "100px" }}>Reload Grid</button>
                </div>

                <IgrLiveGrid
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
                    dataSource={this.data} >

                    <IgrTextColumn propertyPath="Name" width="*>150"/>
                    <IgrTextColumn propertyPath="Street" headerText="Address" />
                    <IgrTextColumn propertyPath="City" />
                    <IgrNumericColumn propertyPath="Salary" positivePrefix="$" showGroupingSeparator="true" />
                    <IgrDateTimeColumn propertyPath="Birthday" />

                </IgrLiveGrid>
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