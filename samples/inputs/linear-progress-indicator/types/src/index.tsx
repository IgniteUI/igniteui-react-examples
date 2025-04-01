import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrLinearProgress, IgrLinearProgressModule } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

IgrLinearProgressModule.register();

export default class LinearProgressTypes extends React.Component<any, any> {

    constructor(props: any) {
        super(props);           
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                 <IgrLinearProgress value="100"variant="primary" />
                 <IgrLinearProgress value="100"variant="success" striped={true} />
                 <IgrLinearProgress value="100"variant="danger" />
                 <IgrLinearProgress value="100"variant="info" striped={true} />
                 <IgrLinearProgress value="100"variant="warning" />

            </div>
        );
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<LinearProgressTypes/>);
