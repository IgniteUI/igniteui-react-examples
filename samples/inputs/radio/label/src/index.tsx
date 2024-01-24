import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrRadio, IgrRadioGroup, IgrRadioModule, IgrRadioGroupModule } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

IgrRadioModule.register();
IgrRadioGroupModule.register();

export default class RadioLabel extends React.Component<any, any> {

    constructor(props: any) {
        super(props);           
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <div className="container" style={{width: "430px", height:"60px", border: "1px solid gainsboro"}}>
                    <IgrRadioGroup alignment="vertical">
                        <IgrRadio name="fruit" value="apple" labelPosition="before"><span>Apple</span></IgrRadio>
                        <div style={{display: "flex", alignItems: "center"}}>
                        <span id="radio-label">Label</span>
                        <IgrRadio
                            name="fruit"
                            labelPosition="before"
                            ariaLabelledby="radio-label"
                            value="orange">
                        </IgrRadio>
                        </div>
                    </IgrRadioGroup>
                </div>
            </div>
        );
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RadioLabel/>);
