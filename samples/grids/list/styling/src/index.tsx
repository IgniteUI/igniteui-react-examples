import React from 'react';
import ReactDOM from 'react-dom/client';
import './ListStyling.css';
import { IgrList, IgrListItem, IgrListHeader, IgrAvatar, IgrButton } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default class ListStyling extends React.Component<any, any> {

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
                        <IgrAvatar slot="start" src="https://dl.infragistics.com/x/img/avatars/8.jpg" shape="circle" />      
                        <span slot="title">Terrance Orta</span>
                        <span slot="subtitle">770-504-2217</span>
                        <IgrButton slot="end" variant="contained">
                            <span>Text</span>
                        </IgrButton>
                        <IgrButton slot="end" variant="contained">
                            <span>Call</span>
                        </IgrButton>
                    </IgrListItem>
                    <IgrListItem>
                        <IgrAvatar slot="start" src="https://dl.infragistics.com/x/img/avatars/17.jpg" shape="circle" />
                        <span slot="title">Richard Mahoney</span>
                        <span slot="subtitle">423-676-2869</span>
                        <IgrButton slot="end" variant="contained">
                            <span>Text</span>
                        </IgrButton>
                        <IgrButton slot="end" variant="contained">
                            <span>Call</span>
                        </IgrButton>
                    </IgrListItem>
                    <IgrListItem>
                        <IgrAvatar slot="start" src="https://dl.infragistics.com/x/img/avatars/9.jpg" shape="circle" />
                        <span slot="title">Donna Price</span>
                        <span slot="subtitle">859-496-2817</span>
                        <IgrButton slot="end" variant="contained">
                            <span>Text</span>
                        </IgrButton>
                        <IgrButton slot="end" variant="contained">
                            <span>Call</span>
                        </IgrButton>
                    </IgrListItem>
                </IgrList>
            </div>
        );
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ListStyling/>);
