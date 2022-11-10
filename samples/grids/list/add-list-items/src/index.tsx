import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrList, IgrListItem, IgrListHeader, IgrListModule } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

IgrListModule.register();

export default class ListAddListItems extends React.Component<any, any> {

    constructor(props: any) {
        super(props);                
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <IgrList>
                    <IgrListHeader>
                        <span>Header</span>
                    </IgrListHeader>
                    <IgrListItem>
                        <h2 slot="title">Item 1</h2>
                    </IgrListItem>
                    <IgrListItem>
                        <h2 slot="title">Item 2</h2>
                    </IgrListItem>
                    <IgrListItem>
                        <h2 slot="title">Item 3</h2>
                    </IgrListItem>
                </IgrList>
            </div>
        );
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ListAddListItems/>);
