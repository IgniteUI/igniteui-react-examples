import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { IgrCheckbox, IgrCheckboxModule } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

IgrCheckboxModule.register();

export default class CheckboxChecked extends React.Component<any, any> {

    constructor(props: any) {
        super(props);           
    }

    public render(): JSX.Element {
        return (
            <div className="container-center sample">
                <IgrCheckbox checked="true"><span>Label</span></IgrCheckbox>
            </div>
        );
    }
}

// rendering above class to the React DOM
ReactDOM.render(<CheckboxChecked />, document.getElementById('root'));
