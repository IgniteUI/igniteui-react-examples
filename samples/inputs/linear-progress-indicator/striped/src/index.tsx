import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrLinearProgress, IgrLinearProgressModule } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

IgrLinearProgressModule.register();

export default class StripedLinearProgress extends React.Component<any, any> {

    constructor(props: any) {
        super(props);           
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                 <IgrLinearProgress style={{marginBottom: "15px"}} value="100" variant="primary" />
                 <IgrLinearProgress style={{marginBottom: "15px"}} value="100" variant="success" indeterminate={true} striped={true} />
                 <IgrLinearProgress style={{marginBottom: "15px"}} value="100" variant="danger" />
                 <IgrLinearProgress style={{marginBottom: "15px"}} value="100" variant="info" striped={true} />
                 <IgrLinearProgress style={{marginBottom: "15px"}} value="100" variant="warning"/>
            </div>
        );
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<StripedLinearProgress/>);
