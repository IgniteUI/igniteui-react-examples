import React from 'react';
import ReactDOM from 'react-dom/client';
import { IgrRadio, IgrRadioGroup, IgrRadioModule, IgrRadioGroupModule } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';
import './index.css';

IgrRadioModule.register();
IgrRadioGroupModule.register();

export default class RadioStyling extends React.Component<any, any> {

    constructor(props: any) {
        super(props);           
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <div className="container" style={{width: "430px", height: "120px", border: "1px solid gainsboro"}}>
                    <IgrRadioGroup alignment="vertical">
                        <IgrRadio value="apple"><span>Apple</span></IgrRadio>
                        <IgrRadio value="banana" checked="true"><span>Banana</span></IgrRadio>
                        <IgrRadio value="Mango"><span>Mango</span></IgrRadio>
                        <IgrRadio value="orange"><span>Orange</span></IgrRadio>
                    </IgrRadioGroup>
                </div>
            </div>
        );
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RadioStyling/>);
