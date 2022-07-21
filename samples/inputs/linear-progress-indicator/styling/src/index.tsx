import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { IgrLinearProgress, IgrLinearProgressModule } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';
import './LinearProgressStyling.css';

IgrLinearProgressModule.register();

export default class StylingLinearProgressIndicator extends React.Component<any, any> {

    constructor(props: any) {
        super(props);           
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <IgrLinearProgress value="100" ></IgrLinearProgress>
            </div>
        );
    }
}

// rendering above class to the React DOM
ReactDOM.render(<StylingLinearProgressIndicator />, document.getElementById('root'));
