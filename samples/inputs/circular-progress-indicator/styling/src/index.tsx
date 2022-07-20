import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { IgrCircularProgress, IgrCircularProgressModule } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';
import './CircularProgressStyle.css'

IgrCircularProgressModule.register();

export default class StylingCircularProgressIndicator extends React.Component<any, any> {

    constructor(props: any) {
        super(props);           
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <IgrCircularProgress indeterminate="true"/>
            </div>
        );
    }
}

// rendering above class to the React DOM
ReactDOM.render(<StylingCircularProgressIndicator />, document.getElementById('root'));
