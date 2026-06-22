import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrList, IgrListItem, IgrListHeader } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

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
                        <span slot="title">Item 1</span>
                    </IgrListItem>
                    <IgrListItem>
                        <span slot="title">Item 2</span>
                    </IgrListItem>
                    <IgrListItem>
                        <span slot="title">Item 3</span>
                    </IgrListItem>
                </IgrList>
            </div>
        );
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ListAddListItems/>);
