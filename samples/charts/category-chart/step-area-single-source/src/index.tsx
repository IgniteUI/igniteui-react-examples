import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrCategoryChartModule, IgrDataChartInteractivityModule } from 'igniteui-react-charts';
//insert bindingImports
//end bindingImports



const mods: any[] = [
    IgrCategoryChartModule,
    IgrDataChartInteractivityModule
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
                Renewable Electricity Generated
            </div>


            <div className="container fill">
                //insert content
                //end content
            </div>
        </div>
        );
    }



}


// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);