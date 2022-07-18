import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { IgrList, IgrListItem, IgrListHeader, IgrListModule } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

IgrListModule.register();

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
                        <h2 slot="title">Terrance Orta</h2>
                        <span slot="subtitle">770-504-2217</span>
                    </IgrListItem>
                    <IgrListItem>
                        <h2 slot="title">Richard Mahoney</h2>
                        <span slot="subtitle">423-676-2869</span>
                    </IgrListItem>
                    <IgrListItem>
                        <h2 slot="title">Donna Price</h2>
                        <span slot="subtitle">859-496-2817</span>
                    </IgrListItem>
                </IgrList>
            </div>
        );
    }
}

// rendering above class to the React DOM
ReactDOM.render(<ListItemContent/>, document.getElementById("root"));
