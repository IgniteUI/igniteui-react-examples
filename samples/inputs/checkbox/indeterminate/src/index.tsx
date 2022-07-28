import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { IgrCheckbox, IgrCheckboxModule } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

IgrCheckboxModule.register();

export default class CheckboxIndeterminate extends React.Component<any, any> {

    constructor(props: any) {
        super(props);           
    }

    public render(): JSX.Element {
        return (
            <div className="container-center sample">
                <IgrCheckbox indeterminate="true"><span>Label</span></IgrCheckbox>
            </div>
        );
    }
}

// rendering above class to the React DOM
ReactDOM.render(<CheckboxIndeterminate />, document.getElementById('root'));
