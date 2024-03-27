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
import { defineAllComponents } from 'igniteui-webcomponents';

defineAllComponents();

const mods: any[] = [
    IgrPropertyEditorPanelModule,
    IgrTreemapModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private propertyEditorPanel1: IgrPropertyEditorPanel
    private propertyEditorPanel1Ref(r: IgrPropertyEditorPanel) {
        this.propertyEditorPanel1 = r;
        this.setState({});
    }
    private layoutTypeEditor: IgrPropertyEditorPropertyDescription
    private layoutOrientationEditor: IgrPropertyEditorPropertyDescription
    private headerDisplayModeEditor: IgrPropertyEditorPropertyDescription
    private labelVerticalAlignmentEditor: IgrPropertyEditorPropertyDescription
    private treemap: IgrTreemap
    private treemapRef(r: IgrTreemap) {
        this.treemap = r;
        this.setState({});
    }

    constructor(props: any) {
        super(props);

        this.propertyEditorPanel1Ref = this.propertyEditorPanel1Ref.bind(this);
        this.treemapRef = this.treemapRef.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample">
            <div className="options vertical">
                <IgrPropertyEditorPanel
                    componentRenderer={this.renderer}
                    target={this.treemap}
                    descriptionType="Treemap"
                    isHorizontal="true"
                    isWrappingEnabled="true"
                    ref={this.propertyEditorPanel1Ref}>
                    <IgrPropertyEditorPropertyDescription
                        propertyPath="LayoutType"
                        name="LayoutTypeEditor"
                        primitiveValue="Squarified"
                        label="Layout">
                    </IgrPropertyEditorPropertyDescription>
                    <IgrPropertyEditorPropertyDescription
                        propertyPath="LayoutOrientation"
                        name="LayoutOrientationEditor"
                        primitiveValue="Vertical"
                        label="Orientation">
                    </IgrPropertyEditorPropertyDescription>
                    <IgrPropertyEditorPropertyDescription
                        propertyPath="HeaderDisplayMode"
                        name="HeaderDisplayModeEditor"
                        primitiveValue="Overlay"
                        label="Headers">
                    </IgrPropertyEditorPropertyDescription>
                    <IgrPropertyEditorPropertyDescription
                        propertyPath="LabelVerticalAlignment"
                        name="LabelVerticalAlignmentEditor"
                        primitiveValue="Center"
                        label="Labels">
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
                    rootTitle="Countries"
                    parentIdMemberPath="parent"
                    idMemberPath="name"
                    labelMemberPath="name"
                    valueMemberPath="population"
                    fillBrushes="rgba(41, 158, 65, 1) rgba(78, 98, 207, 1) rgba(94, 53, 156, 1)"
                    isFillScaleLogarithmic="true"
                    headerDisplayMode="Overlay"
                    parentNodeBottomPadding="0"
                    parentNodeLeftPadding="0"
                    parentNodeRightPadding="0"
                    parentNodeTopPadding="0">
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