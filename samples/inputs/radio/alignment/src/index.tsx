import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrRadio, IgrRadioGroup } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default class RadioAlignment extends React.Component<any, any> {

    constructor(props: any) {
        super(props);           
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <div className="container" style={{width: "430px", height: "25px", border: "1px solid gainsboro"}}>
                    <IgrRadioGroup alignment="horizontal">
                        <IgrRadio name="fruit" value="apple">Apple</IgrRadio>
                        <IgrRadio name="fruit" value="banana" checked={true}>Banana</IgrRadio>
                        <IgrRadio name="fruit" value="Mango">Mango</IgrRadio>
                        <IgrRadio name="fruit" value="orange">Orange</IgrRadio>
                    </IgrRadioGroup>
                </div>
            </div>
        );
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RadioAlignment/>);
