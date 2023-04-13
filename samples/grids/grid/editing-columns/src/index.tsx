import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrWebGridModule, IgrWebPaginatorModule } from 'igniteui-react-grids';
//insert bindingImports
//end bindingImports
import { ComponentRenderer, WebGridDescriptionModule, WebPaginatorDescriptionModule } from 'igniteui-react-core';



const mods: any[] = [
    IgrWebGridModule,
    IgrWebPaginatorModule
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
            WebPaginatorDescriptionModule.register(context);
        }
        return this._componentRenderer;
    }

}


// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);