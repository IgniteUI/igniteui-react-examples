import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { IgrExpansionPanel, IgrExpansionPanelModule } from 'igniteui-react';
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
                    <h1 slot="title">Golden Retriever</h1>
                    <h3 slot="subtitle">Medium-large gun dog</h3>
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
ReactDOM.render(<ExpansionPanelUsage/>, document.getElementById("root"));
