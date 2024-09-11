import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrDividerModule, IgrDivider } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

IgrDividerModule.register();

export default class DividerDashed extends React.Component<any, any> {

    constructor(props: any) {
        super(props);  
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <p>First paragraph</p>
                <IgrDivider type="dashed"></IgrDivider>
                <p>Second paragraph</p>
            </div>
        );
    }

    
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<DividerDashed/>);
