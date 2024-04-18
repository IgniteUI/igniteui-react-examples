import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './ExpansionPanelUsage.css';
import { IgrExpansionPanel, IgrExpansionPanelModule } from "@infragistics/igniteui-react";
import 'igniteui-webcomponents/themes/light/bootstrap.css';

IgrExpansionPanelModule.register();

export default class ExpansionPanelUsage extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <IgrExpansionPanel>
                    <h1 key="epTitle" slot="title">Golden Retriever</h1>
                    <h3 key="epSubtitle" slot="subtitle">Medium-large gun dog</h3>
                    <span key="epSpan">The Golden Retriever is a medium-large gun dog that retrieves shot waterfowl, such as ducks
                        and upland game birds, during hunting and shooting parties.[3] The name retriever refers to the breeds ability
                        to retrieve shot game undamaged due to their soft mouth. Golden retrievers have an instinctive love of water, and
                        are easy to train to basic or advanced obedience standards.</span>
                </IgrExpansionPanel>
            </div>
        );
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ExpansionPanelUsage/>);
