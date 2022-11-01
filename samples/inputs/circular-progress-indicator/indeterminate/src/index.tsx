import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrCircularProgress, IgrCircularProgressModule } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

IgrCircularProgressModule.register();

export default class IndeterminateCircularProgress extends React.Component<any, any> {

    constructor(props: any) {
        super(props);           
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                 <IgrCircularProgress indeterminate="true" />
            </div>
        );
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<IndeterminateCircularProgress/>);
