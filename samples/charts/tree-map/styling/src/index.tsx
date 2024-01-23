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

    public componentDidMount() {
    }

    public render(): JSX.Element {
        return (
        <div className="container sample">

            <div className="legend-title">
                Comparing Population of Countries
            </div>

            <div className="container fill">
                <IgrTreemap
                    ref={this.treemapRef}
                    dataSource={this.countyHierarchicalData}
                    parentIdMemberPath="parent"
                    customValueMemberPath="parent"
                    idMemberPath="name"
                    labelMemberPath="name"
                    valueMemberPath="population"
                    rootTitle="Countries"
                    headerDisplayMode="Overlay"
                    overlayHeaderBackground="rgba(63, 64, 63, 1)"
                    headerHoverBackground="rgba(63, 64, 63, 1)"
                    headerBackground="rgba(63, 64, 63, 1)"
                    parentNodeBottomPadding="0"
                    parentNodeLeftPadding="0"
                    parentNodeRightPadding="0"
                    parentNodeTopPadding="0"
                    outline="black"
                    strokeThickness="1">
                    <IgrTreemapNodeStyleMapping
                        name="styling1"
                        value="Africa"
                        fill="rgba(115, 86, 86, 1)"
                        mappingMode="CustomValue">
                    </IgrTreemapNodeStyleMapping>
                    <IgrTreemapNodeStyleMapping
                        name="styling2"
                        value="Europe"
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