import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrList, IgrListItem, IgrListHeader } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default class ListItemContent extends React.Component<any, any> {

    constructor(props: any) {
        super(props);                
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <IgrList>
                    <IgrListHeader>
                        <span>Contacts</span>
                    </IgrListHeader>
                    <IgrListItem>
                        <span slot="title">Terrance Orta</span>
                        <span slot="subtitle">770-504-2217</span>
                    </IgrListItem>
                    <IgrListItem>
                        <span slot="title">Richard Mahoney</span>
                        <span slot="subtitle">423-676-2869</span>
                    </IgrListItem>
                    <IgrListItem>
                        <span slot="title">Donna Price</span>
                        <span slot="subtitle">859-496-2817</span>
                    </IgrListItem>
                </IgrList>
            </div>
        );
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ListItemContent/>);
