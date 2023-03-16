import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrTreemapModule } from 'igniteui-react-charts';
import { IgrTreemap } from 'igniteui-react-charts';
import { CountyHierarchicalDataItem, CountyHierarchicalData } from './CountyHierarchicalData';

const mods: any[] = [
    IgrTreemapModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private treemap: IgrTreemap
    private treemapRef(r: IgrTreemap) {
        this.treemap = r;
        this.setState({});
    }

    constructor(props: any) {
        super(props);

        this.treemapRef = this.treemapRef.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample">

            <div className="legend-title">
                Comparing Population of Countries
            </div>

            <div className="container fill">
                <IgrTreemap
                    valueMemberPath="population"
                    rootTitle="Countries"
                    parentIdMemberPath="parent"
                    labelMemberPath="name"
                    idMemberPath="name"
                    dataSource={this.countyHierarchicalData}
                    fillBrushes="rgba(78, 98, 207, 1) rgba(138, 88, 214, 1)"
                    fillScaleMode="Value"
                    isFillScaleLogarithmic="true"
                    fillScaleMinimumValue="0"
                    fillScaleMaximumValue="1500000000"
                    headerDisplayMode="Overlay"
                    parentNodeLeftPadding="0"
                    parentNodeTopPadding="0"
                    parentNodeRightPadding="0"
                    parentNodeBottomPadding="0"
                    outline="black"
                    strokeThickness="1"
                    ref={this.treemapRef}>
                </IgrTreemap>
            </div>
        </div>
        );
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