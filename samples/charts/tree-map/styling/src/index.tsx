import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrTreemapModule } from 'igniteui-react-charts';
import { IgrTreemap, IgrTreemapNodeStyleMapping } from 'igniteui-react-charts';
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
    private styling1: IgrTreemapNodeStyleMapping
    private styling2: IgrTreemapNodeStyleMapping
    private styling3: IgrTreemapNodeStyleMapping
    private styling4: IgrTreemapNodeStyleMapping
    private styling5: IgrTreemapNodeStyleMapping
    private styling6: IgrTreemapNodeStyleMapping
    private styling7: IgrTreemapNodeStyleMapping
    private styling8: IgrTreemapNodeStyleMapping

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
                    customValueMemberPath="parent"
                    idMemberPath="name"
                    dataSource={this.countyHierarchicalData}
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
                        value="Africa"
                        mappingMode="CustomValue"
                        fill="rgba(115, 86, 86, 1)"
                        name="styling1">
                    </IgrTreemapNodeStyleMapping>
                    <IgrTreemapNodeStyleMapping
                        value="Europe"
                        fill="rgba(97, 171, 55, 1)"
                        mappingMode="CustomValue"
                        name="styling2">
                    </IgrTreemapNodeStyleMapping>
                    <IgrTreemapNodeStyleMapping
                        value="Asia"
                        fill="rgba(139, 91, 177, 1)"
                        mappingMode="CustomValue"
                        name="styling3">
                    </IgrTreemapNodeStyleMapping>
                    <IgrTreemapNodeStyleMapping
                        value="North America"
                        fill="rgba(95, 186, 172, 1)"
                        mappingMode="CustomValue"
                        name="styling4">
                    </IgrTreemapNodeStyleMapping>
                    <IgrTreemapNodeStyleMapping
                        value="South America"
                        fill="rgba(238, 88, 121, 1)"
                        mappingMode="CustomValue"
                        name="styling5">
                    </IgrTreemapNodeStyleMapping>
                    <IgrTreemapNodeStyleMapping
                        value="Middle East"
                        fill="rgba(109, 177, 255, 1)"
                        mappingMode="CustomValue"
                        name="styling6">
                    </IgrTreemapNodeStyleMapping>
                    <IgrTreemapNodeStyleMapping
                        value="Central America"
                        fill="rgba(247, 210, 98, 1)"
                        mappingMode="CustomValue"
                        name="styling7">
                    </IgrTreemapNodeStyleMapping>
                    <IgrTreemapNodeStyleMapping
                        value="Oceania"
                        fill="rgba(168, 168, 183, 1)"
                        mappingMode="CustomValue"
                        name="styling8">
                    </IgrTreemapNodeStyleMapping>
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