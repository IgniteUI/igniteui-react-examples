// import {Data } from './SampleData';
import { SampleTreeData } from './SampleTreeData';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { IgrTreemapModule } from 'igniteui-react-charts';

import { IgrTreemap } from 'igniteui-react-charts';
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
                    valueMemberPath="pop"
                    rootTitle="Countries"
                    parentIdMemberPath="parent"
                    labelMemberPath="name"
                    idMemberPath="id"
                    dataSource={this.data}
                    fillBrushes="rgba(41, 158, 65, 1) rgba(78, 98, 207, 1) rgba(94, 53, 156, 1)"
                    isFillScaleLogarithmic="true"
                    parentNodeLeftPadding="0"
                    parentNodeTopPadding="0"
                    parentNodeRightPadding="0"
                    parentNodeBottomPadding="0"
                    ref={this.treemapRef}>
                </IgrTreemap>
            </div>
        </div>
        );
   }

   public data: any[] = SampleTreeData.getPopulation();

}
// rendering above component in the React DOM
ReactDOM.render(<Sample />, document.getElementById('root'));
