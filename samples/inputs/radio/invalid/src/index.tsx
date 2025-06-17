import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrRadio } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default class RadioInvalid extends React.Component<any, any> {

    constructor(props: any) {
        super(props);           
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <div className="container" style={{width: "430px", height: "25px", border: "1px solid gainsboro"}}>
                    <IgrRadio value="banana" invalid={true}><span>Invalid</span></IgrRadio>
                </div>
            </div>
        );
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RadioInvalid/>);
