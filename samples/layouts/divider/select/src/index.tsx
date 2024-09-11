import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrDividerModule, 
        IgrDivider, 
        IgrSelectModule,
        IgrSelectItemModule,        
        IgrSelect,
        IgrSelectItem, } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

IgrDividerModule.register();
IgrSelectModule.register();
IgrSelectItemModule.register();

export default class DividerSelect extends React.Component<any, any> {

    constructor(props: any) {
        super(props);  
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <IgrSelect>
                    <IgrSelectItem><span>Item 1</span></IgrSelectItem>
                    <IgrSelectItem><span>Item 2</span></IgrSelectItem>
                    <IgrDivider></IgrDivider>
                    <IgrSelectItem><span>Item 3</span></IgrSelectItem>
                </IgrSelect>
            </div>
        );
    }

    
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<DividerSelect/>);
