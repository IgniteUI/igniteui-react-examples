import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './ButtonStyle.css';
import { IgrButton } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default class ButtonStyling extends React.Component<any, any> {

    constructor(props: any) {
        super(props);           
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <IgrButton variant="contained"><span>Contained</span></IgrButton>
            </div>
        );
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ButtonStyling/>);
