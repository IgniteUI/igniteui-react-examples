import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrTreemapModule } from 'igniteui-react-charts';
import { IgrTreemap } from 'igniteui-react-charts';
import { ComponentRenderer, TreemapDescriptionModule } from 'igniteui-react-core';
import { CountryTopUrbanPopDataItem, CountryTopUrbanPopData } from './CountryTopUrbanPopData';

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
                Comparing Top Urban Population Percentages between North America & Asia
            </div>

            <div className="container fill">
                <IgrTreemap
                    ref={this.treemapRef}
                    dataSource={this.countryTopUrbanPopData}
                    parentIdMemberPath="parent"
                    idMemberPath="name"
                    labelMemberPath="name"
                    valueMemberPath="population"
                    highlightedValueMemberPath="urbanPopulation"
                    highlightedValuesDisplayMode="Overlay"
                    fillBrushes="rgba(252, 65, 0, 1) rgba(255, 197, 90, 1) rgba(0, 33, 94, 1) rgba(44, 78, 128, 1)"
                    rootTitle="Continents"
                    headerDisplayMode="Auto"
                    isFillScaleLogarithmic={true}
                    labelVerticalAlignment="Top"
                    parentNodeTopMargin={10}
                    fillScaleMode="Value"
                    textColor="black"
                    textStyle="normal bold 25px Verdana">
                </IgrTreemap>
            </div>
        </div>
        );
    }

    private _countryTopUrbanPopData: CountryTopUrbanPopData = null;
    public get countryTopUrbanPopData(): CountryTopUrbanPopData {
        if (this._countryTopUrbanPopData == null)
        {
            this._countryTopUrbanPopData = new CountryTopUrbanPopData();
        }
        return this._countryTopUrbanPopData;
    }

    private _componentRenderer: ComponentRenderer = null;
    public get renderer(): ComponentRenderer {
        if (this._componentRenderer == null) {
            this._componentRenderer = new ComponentRenderer();
            var context = this._componentRenderer.context;
            TreemapDescriptionModule.register(context);
        }
        return this._componentRenderer;
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);