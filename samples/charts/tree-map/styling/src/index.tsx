// import { DataItem, Data } from './SampleData';
import { SampleTreeData } from './SampleTreeData';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { IgrTreemapNodeStyleMapping } from 'igniteui-react-charts';
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
                    customValueMemberPath="parent"
                    idMemberPath="id"
                    dataSource={this.data}
                    headerHoverBackground="rgba(63, 64, 63, 1)"
                    headerBackground="rgba(63, 64, 63, 1)"
                    overlayHeaderBackground="rgba(63, 64, 63, 1)"
                    headerDisplayMode="Overlay"
                    parentNodeLeftPadding="0"
                    parentNodeTopPadding="0"
                    parentNodeRightPadding="0"
                    parentNodeBottomPadding="0"
                    outline="black"
                    strokeThickness="1"
                    ref={this.treemapRef}>
                    <IgrTreemapNodeStyleMapping
                        name="styling1"
                        value="Africa"
                        mappingMode="CustomValue"
                        fill="rgba(115, 86, 86, 1)">
                    </IgrTreemapNodeStyleMapping>
                    <IgrTreemapNodeStyleMapping
                        name="styling2"
                        value="Africa"
                        fill="rgba(97, 171, 55, 1)"
                        mappingMode="CustomValue">
                    </IgrTreemapNodeStyleMapping>
                    <IgrTreemapNodeStyleMapping
                        name="styling3"
                        value="Asia"
                        fill="rgba(139, 91, 177, 1)"
                        mappingMode="CustomValue">
                    </IgrTreemapNodeStyleMapping>
                    <IgrTreemapNodeStyleMapping
                        name="styling4"
                        value="North America"
                        fill="rgba(95, 186, 172, 1)"
                        mappingMode="CustomValue">
                    </IgrTreemapNodeStyleMapping>
                    <IgrTreemapNodeStyleMapping
                        name="styling5"
                        value="South America"
                        fill="rgba(238, 88, 121, 1)"
                        mappingMode="CustomValue">
                    </IgrTreemapNodeStyleMapping>
                    <IgrTreemapNodeStyleMapping
                        name="styling6"
                        value="Middle East"
                        fill="rgba(109, 177, 255, 1)"
                        mappingMode="CustomValue">
                    </IgrTreemapNodeStyleMapping>
                    <IgrTreemapNodeStyleMapping
                        name="styling7"
                        value="Central America"
                        fill="rgba(247, 210, 98, 1)"
                        mappingMode="CustomValue">
                    </IgrTreemapNodeStyleMapping>
                    <IgrTreemapNodeStyleMapping
                        name="styling8"
                        value="Oceania"
                        fill="rgba(168, 168, 183, 1)"
                        mappingMode="CustomValue">
                    </IgrTreemapNodeStyleMapping>
                </IgrTreemap>
            </div>
        </div>
        );
   }

   public data: any[] = SampleTreeData.getPopulation();

}
// rendering above component in the React DOM
ReactDOM.render(<Sample />, document.getElementById('root'));
