import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { IgrSwitch, IgrSwitchModule } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

IgrSwitchModule.register();

export default class SwitchOutlined extends React.Component<any, any> {

    constructor(props: any) {
        super(props);           
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <IgrSwitch checked="true" ><span>Label</span></IgrSwitch>
            </div>
        );
    }
}

// rendering above class to the React DOM
ReactDOM.render(<SwitchOutlined />, document.getElementById('root'));
