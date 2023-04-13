import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrWebBadgeModule } from 'igniteui-react-webinputs';
import { IgrWebGridModule } from 'igniteui-react-grids';
import { IgrPropertyEditorPanelModule } from 'igniteui-react-layouts';
//insert bindingImports
//end bindingImports
import { ComponentRenderer, WebGridDescriptionModule, PropertyEditorPanelDescriptionModule } from 'igniteui-react-core';



const mods: any[] = [
    IgrWebBadgeModule,
    IgrWebGridModule,
    IgrPropertyEditorPanelModule
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
            WebGridDescriptionModule.register(context);
            PropertyEditorPanelDescriptionModule.register(context);
        }
        return this._componentRenderer;
    }

}


// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);