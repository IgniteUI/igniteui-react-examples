import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrPropertyEditorPanelModule } from 'igniteui-react-layouts';
import { IgrTreemapModule } from 'igniteui-react-charts';
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
    private propertyEditor: IgrPropertyEditorPanel
    private propertyEditorRef(r: IgrPropertyEditorPanel) {
        this.propertyEditor = r;
        this.setState({});
    }
    private highlightedModeEditor: IgrPropertyEditorPropertyDescription
    private treemap: IgrTreemap
    private treemapRef(r: IgrTreemap) {
        this.treemap = r;
        this.setState({});
    }

    constructor(props: any) {
        super(props);

        this.propertyEditorRef = this.propertyEditorRef.bind(this);
        this.treemapRef = this.treemapRef.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample">
            <div className="options vertical">
                <IgrPropertyEditorPanel
                    ref={this.propertyEditorRef}
                    componentRenderer={this.renderer}
                    target={this.treemap}
                    descriptionType="Treemap"
                    isHorizontal={true}
                    isWrappingEnabled={true}>
                    <IgrPropertyEditorPropertyDescription
                        propertyPath="HighlightingMode"
                        name="HighlightedModeEditor"
                        label="Highlighting Mode: "
                        primitiveValue="Brighten"
                        dropDownValues={["Brighten", "FadeOthers"]}>
                    </IgrPropertyEditorPropertyDescription>
                </IgrPropertyEditorPanel>
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
                    fillScaleMinimumValue={0}
                    fillScaleMaximumValue={1500000000}
                    fillBrushes="rgba(78, 98, 207, 1) rgba(138, 88, 214, 1)"
                    isFillScaleLogarithmic={true}
                    rootTitle="Countries"
                    headerDisplayMode="Overlay"
                    parentNodeBottomPadding={0}
                    parentNodeLeftPadding={0}
                    parentNodeRightPadding={0}
                    parentNodeTopPadding={0}
                    outline="black"
                    strokeThickness={1}>
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

    private _componentRenderer: ComponentRenderer = null;
    public get renderer(): ComponentRenderer {
        if (this._componentRenderer == null) {
            this._componentRenderer = new ComponentRenderer();
            var context = this._componentRenderer.context;
            PropertyEditorPanelDescriptionModule.register(context);
            TreemapDescriptionModule.register(context);
        }
        return this._componentRenderer;
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);