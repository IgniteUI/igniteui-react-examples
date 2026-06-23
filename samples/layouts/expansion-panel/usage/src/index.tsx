import React from 'react';
import ReactDOM from 'react-dom/client';
import './ExpansionPanelUsage.css';
import { IgrExpansionPanel } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default class ExpansionPanelUsage extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <IgrExpansionPanel>
                    <span slot="title">Golden Retriever</span>
                    <span slot="subtitle">Medium-large gun dog</span>
                    <span>The Golden Retriever is a medium-large gun dog that retrieves shot waterfowl, such as ducks
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
