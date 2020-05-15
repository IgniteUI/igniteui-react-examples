<!-- NOTE: do not change this file because it will be auto re-generated from template file: -->
<!-- https://github.com/IgniteUI/igniteui-react-examples/tree/master/sample-template-files/ReadMe.md -->

<!-- ## Table of Contents -->
<!-- - [Sample Preview](#Sample-Preview) -->
- [Source Code](#Source-Code)
- [Instructions](#Instructions)

This folder contains implementation of React application with example of Tree Map Overview.
<!-- in the Tree Map component -->
<!-- [Tree Map](https://infragistics.com/Reactsite/components/tree-map.html) -->

<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
    <body>
        <!-- <a target="_blank" href="https://codesandbox.io/s/github/IgniteUI/igniteui-react-examples/tree/master/samples/charts/tree-map/overview?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/TreeMapOverview.tsx" rel="noopener noreferrer">
            <img height="40px" style="border-radius: 0.5rem" alt="Edit on CodeSandbox" src="https://static.infragistics.com/xplatform/images/sandbox/edit.png"/>
        </a> -->
        <!-- <a target="_blank"
href="https://codesandbox.io/s/github/IgniteUI/igniteui-react-examples/tree/master/samples/maps/geo-map/binding-csv-points?fontsize=14&hidenavigation=1&theme=dark&view=preview">
            <img alt="Edit Sample" src="https://codesandbox.io/static/img/play-codesandbox.svg"/>
        </a> -->
        <!-- <a target="_blank" style="margin-left: 0.5rem"
href="https://codesandbox.io/embed/github/IgniteUI/igniteui-react-examples/tree/master/samples/charts/tree-map/overview?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/TreeMapOverview.tsx">
            <img height="40px" style="border-radius: 5px" alt="View on CodeSandbox" src="https://static.infragistics.com/xplatform/images/sandbox/view.png"/>
        </a> -->
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

<iframe
  src="https://codesandbox.io/embed/github/IgniteUI/igniteui-react-examples/tree/master/samples/charts/tree-map/overview?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/TreeMapOverview.tsx"
  style="width:100%; height:400px; border:0; border-radius: 4px; overflow:hidden;"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

## Source Code

The following section provides source code from:
`./src/TreeMapOverview.tsx` file:

```tsx
import React from 'react';

import { SampleTreeData } from './SampleTreeData';
import { IgrTreemapModule } from 'igniteui-react-charts';
import { IgrTreemap } from 'igniteui-react-charts';
import { IgrTreemapNodeStyleMapping } from 'igniteui-react-charts';
import { TreemapFillScaleMode } from 'igniteui-react-charts';
import { TreemapLayoutType } from 'igniteui-react-charts';
import { TreemapOrientation } from 'igniteui-react-charts';

IgrTreemapModule.register();

export default class TreeMapOverview extends React.Component {
    public treeMap!: IgrTreemap;

    constructor(props: any) {
         super(props);
         this.onTreeMapRef = this.onTreeMapRef.bind(this);

         this.onClickSliceVer = this.onClickSliceVer.bind(this);
         this.onClickSliceHor = this.onClickSliceHor.bind(this);

         this.onClickStripVer = this.onClickStripVer.bind(this);
         this.onClickStripHor = this.onClickStripHor.bind(this);

         this.onClickSquared = this.onClickSquared.bind(this);
    }
    public onTreeMapRef(element: IgrTreemap) {
        this.treeMap = element;
        this.treeMap.dataSource = SampleTreeData.getPopulation();
        this.treeMap.rootTitle = "Countries";
        this.treeMap.fillScaleMode = TreemapFillScaleMode.Value;
        this.treeMap.fillScaleMinimumValue = 0;
        this.treeMap.fillScaleMaximumValue = 1500000000; // 1.5B
        this.treeMap.fillBrushes = "#4e62cf #8a58d6" as any;
        this.treeMap.isFillScaleLogarithmic = false;
        this.onClickSquared(null);
    }

    public render() {
        return (
          <div className="igContainer" >

            <div className="igOptions">
                <button style={{ width: "140px"}} onClick={this.onClickSliceVer} className="igOptions-button">Slice Vertically</button>
                <button style={{ width: "140px"}} onClick={this.onClickStripVer} className="igOptions-button">Stripped Vertically</button>
                <button style={{ width: "140px"}} onClick={this.onClickSquared} className="igOptions-button">Squarified</button>
            </div>
            <div className="igOptions" style={{ marginBottom: "10px"}}>
                <button style={{ width: "140px"}} onClick={this.onClickSliceHor} className="igOptions-button">Slice Horizontally</button>
                <button style={{ width: "140px"}} onClick={this.onClickStripHor} className="igOptions-button">Stripped Horizontally</button>
            </div>

            <div style={{ width: "100%", height: "calc(100% - 75px)"}}>
                <IgrTreemap
                        ref={this.onTreeMapRef}
                        height="100%"
                        width="100%"
                        parentIdMemberPath="parent"
                        idMemberPath="id"
                        labelMemberPath="name"
                        valueMemberPath="pop"
                        transitionDuration="500"
                        rootTitle="Countries" >
                {/* <IgrTreemapNodeStyleMapping
                    name="fill1"
                    mappingMode="value"
                    minimumValue={3000}
                    maximumValue={3000000}
                    fill="red" /> */}
                </IgrTreemap>
            </div>
          </div>
        );
    }

    public onClickSquared = (e: any) => {
        this.treeMap.layoutType = TreemapLayoutType.Squarified;
    }

    public onClickSliceVer = (e: any) => {
        this.treeMap.layoutType = TreemapLayoutType.SliceAndDice;
        this.treeMap.layoutOrientation = TreemapOrientation.Vertical;
    }
    public onClickSliceHor = (e: any) => {
        this.treeMap.layoutType = TreemapLayoutType.SliceAndDice;
        this.treeMap.layoutOrientation = TreemapOrientation.Horizontal;
    }

    public onClickStripVer = (e: any) => {
        this.treeMap.layoutType = TreemapLayoutType.Stripped;
        this.treeMap.layoutOrientation = TreemapOrientation.Vertical;
    }
    public onClickStripHor = (e: any) => {
        this.treeMap.layoutType = TreemapLayoutType.Stripped;
        this.treeMap.layoutOrientation = TreemapOrientation.Horizontal;
    }
}

```

## Instructions
To run this sample locally, execute these commands:

```
git clone https://github.com/IgniteUI/igniteui-react-examples.git
cd igniteui-react-examples
cd ./samples/charts/tree-map/overview
npm install
npm start

```

Then open http://localhost:3000/ in your browser

