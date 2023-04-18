import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrPropertyEditorPanelModule } from 'igniteui-react-layouts';
import { IgrDataChartCoreModule, IgrDataChartCategoryModule } from 'igniteui-react-charts';
//insert bindingImports
//end bindingImports
import { ComponentRenderer, PropertyEditorPanelDescriptionModule, DataChartCoreDescriptionModule, DataChartCategoryDescriptionModule } from 'igniteui-react-core';

const mods: any[] = [
    IgrPropertyEditorPanelModule,
    IgrDataChartCoreModule,
    IgrDataChartCategoryModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    //insert bindingFields
    //end bindingFields

    constructor(props: any) {
        super(props);

        //insert bindingInit
        //end bindingInit
        //insert bindingCode
        //end bindingCode
    }

    public render(): JSX.Element {
        return (
        <div className="container sample">

            <div className="legend-title">
                Facebook Consolidated Statements of Income
            </div>

            <div className="container fill">
                //insert content
                //end content
            </div>
        </div>
        );
    }

    private _componentRenderer: ComponentRenderer = null;
    public get renderer(): ComponentRenderer {
        if (this._componentRenderer == null) {
            this._componentRenderer = new ComponentRenderer();
            var context = this._componentRenderer.context;
            PropertyEditorPanelDescriptionModule.register(context);
            DataChartCoreDescriptionModule.register(context);
            DataChartCategoryDescriptionModule.register(context);
        }
        return this._componentRenderer;
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);