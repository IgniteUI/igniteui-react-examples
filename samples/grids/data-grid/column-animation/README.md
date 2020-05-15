<!-- WARNING Do not change this file because it wil be auto re-generated from template file: -->
<!-- https://github.com/IgniteUI/igniteui-react-examples/tree/master/sample-template-files/ReadMe.md -->

<!-- ## Table of Contents -->
<!-- - [Sample Preview](#Sample-Preview) -->
- [Source Code](#Source-Code)
- [Instructions](#Instructions)

This folder contains implementation of React application with example of the Data Grid component. Use the following buttons to open or edit this sample on CodeSandbox website:

<!-- [Data Grid](https://infragistics.com/Reactsite/components/data-grid.html) -->

<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
    <body>
        <a target="_blank" href="https://codesandbox.io/s/github/IgniteUI/igniteui-react-examples/tree/master/samples/grids/data-grid/column-animation?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/DataGridColumnAnimation.tsx" rel="noopener noreferrer">
            <img height="40px" style="border-radius: 0.3rem" alt="Edit on CodeSandbox" src="https://static.infragistics.com/xplatform/images/sandbox/edit.png"/>
        </a>
        <!-- <a target="_blank"
href="https://codesandbox.io/s/github/IgniteUI/igniteui-react-examples/tree/master/samples/maps/geo-map/binding-csv-points?fontsize=14&hidenavigation=1&theme=dark&view=preview">
            <img alt="Edit Sample" src="https://codesandbox.io/static/img/play-codesandbox.svg"/>
        </a> -->
        <a target="_blank" style="margin-left: 0.5rem"
href="https://codesandbox.io/embed/github/IgniteUI/igniteui-react-examples/tree/master/samples/grids/data-grid/column-animation?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/DataGridColumnAnimation.tsx">
            <img height="40px" style="border-radius: 0.3rem" alt="View on CodeSandbox" src="https://static.infragistics.com/xplatform/images/sandbox/view.png"/>
        </a>
        <!-- <a target="_blank"
href="https://codesandbox.io/embed/github/IgniteUI/igniteui-react-examples/tree/master/samples/maps/geo-map/binding-csv-points?fontsize=14&hidenavigation=1&theme=dark&view=preview">
            <img alt="View on CodeSandbox" src="https://static.infragistics.com/xplatform/images/sandbox/view.png"/>
        </a>
https://codesandbox.io/embed/react-treemap-overview-rtb45
https://codesandbox.io/static/img/play-codesandbox.svg
https://codesandbox.io/embed/react-treemap-overview-rtb45?view=browser -->
    </body>
</html>

<!-- ## Sample Preview -->

<!-- <iframe
  src="https://codesandbox.io/embed/github/IgniteUI/igniteui-react-examples/tree/master/samples/grids/data-grid/column-animation?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/DataGridColumnAnimation.tsx"
  style="width:100%; height:400px; border:0; border-radius: 4px; overflow:hidden;"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe> -->

## Source Code

The following section provides source code from:
`./src/DataGridColumnAnimation.tsx` file:

```tsx
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
```

## Instructions
To run this sample locally, execute these commands:

```
git clone https://github.com/IgniteUI/igniteui-react-examples.git
cd igniteui-react-examples
cd ./samples/grids/data-grid/column-animation
npm install
npm start

# Open http://localhost:3000/ in your browser
```

