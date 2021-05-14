import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
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
    public onTreeMapRef(treeMap: IgrTreemap) {
        if (!treeMap) { return; }

        this.treeMap = treeMap;
        this.treeMap.dataSource = SampleTreeData.getPopulation();
        this.treeMap.rootTitle = "Countries";
        this.treeMap.fillScaleMode = TreemapFillScaleMode.Value;
        this.treeMap.fillScaleMinimumValue = 0;
        this.treeMap.fillScaleMaximumValue = 1500000000; // 1.5B
        this.treeMap.fillBrushes = "#4e62cf #8a58d6" as any;
        this.treeMap.isFillScaleLogarithmic = false;
        this.onClickSquared(null);
    }

    public render(): JSX.Element {
        return (
          <div className="container sample" >

            <div className="options horizontal">
                <button style={{ width: "140px"}} onClick={this.onClickSliceVer} className="options-button">Slice Vertically</button>
                <button style={{ width: "140px"}} onClick={this.onClickStripVer} className="options-button">Stripped Vertically</button>
                <button style={{ width: "140px"}} onClick={this.onClickSquared} className="options-button">Squarified</button>
            </div>
            <div className="options horizontal" style={{ marginBottom: "10px"}}>
                <button style={{ width: "140px"}} onClick={this.onClickSliceHor} className="options-button">Slice Horizontally</button>
                <button style={{ width: "140px"}} onClick={this.onClickStripHor} className="options-button">Stripped Horizontally</button>
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

// rendering above class to the React DOM
ReactDOM.render(<TreeMapOverview />, document.getElementById('root'));
