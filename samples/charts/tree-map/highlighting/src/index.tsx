import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrPropertyEditorPanelModule } from 'igniteui-react-layouts';
import { IgrTreemapModule, TreemapHighlightingMode } from 'igniteui-react-charts';
import { IgrPropertyEditorPanel, IgrPropertyEditorPropertyDescription } from 'igniteui-react-layouts';
import { IgrTreemap } from 'igniteui-react-charts';
import { ComponentRenderer, PropertyEditorPanelDescriptionModule, TreemapDescriptionModule } from 'igniteui-react-core';
import { CountyHierarchicalDataItem, CountyHierarchicalData } from './CountyHierarchicalData';

import 'igniteui-webcomponents/themes/light/bootstrap.css';

const mods: any[] = [
    IgrPropertyEditorPanelModule,
    IgrTreemapModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {

    private highlightedModeEditor: IgrPropertyEditorPropertyDescription
    private treemap: IgrTreemap
    private treemapRef(r: IgrTreemap) {
        this.treemap = r;
        this.setState({});
        this.onHighlightingModeChange = this.onHighlightingModeChange.bind(this);
    }

    constructor(props: any) {
        super(props);
                
        this.treemapRef = this.treemapRef.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample">
            <div className="options horizontal">
                <select onChange={this.onHighlightingModeChange}>
                    <option>Brighten</option>
                    <option>FadeOthers</option>
                </select>
            </div>

            <div className="legend-title">
                Comparing Population of Countries
            </div>


            <div className="container fill">
                <IgrTreemap
                    ref={this.treemapRef}
                    dataSource={this.countyHierarchicalData}
                    parentIdMemberPath="parent"
                    idMemberPath="name"
                    labelMemberPath="name"
                    valueMemberPath="population"
                    fillScaleMode="Value"
                    fillScaleMinimumValue="0"
                    fillScaleMaximumValue="1500000000"
                    fillBrushes="rgba(78, 98, 207, 1) rgba(138, 88, 214, 1)"
                    isFillScaleLogarithmic="true"
                    rootTitle="Countries"
                    headerDisplayMode="Overlay"
                    parentNodeBottomPadding="0"
                    parentNodeLeftPadding="0"
                    parentNodeRightPadding="0"
                    parentNodeTopPadding="0"
                    outline="black"
                    strokeThickness="1"
                    highlightingMode={TreemapHighlightingMode.Brighten}>
                </IgrTreemap>
            </div>
        </div>
        );
    }

    public onHighlightingModeChange(args: any){
        let value = args.target.value as string;   

        if(value === "Brighten"){
            this.treemap.highlightingMode = TreemapHighlightingMode.Brighten;
        }
        else{
            this.treemap.highlightingMode = TreemapHighlightingMode.FadeOthers;
        }      
    }

    private _countyHierarchicalData: CountyHierarchicalData = null;
    public get countyHierarchicalData(): CountyHierarchicalData {
        if (this._countyHierarchicalData == null)
        {
            this._countyHierarchicalData = new CountyHierarchicalData();
        }
        return this._countyHierarchicalData;
    }
}


// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);