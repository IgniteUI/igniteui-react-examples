import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './ExpansionPanelCustomization.css';
import { IgrExpansionPanel, IgrButton } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default class ExpansionPanelComponentCustomization extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
        this.state = { expansionText: "Show more" };

        this.onExpansionPanelClosed = this.onExpansionPanelClosed.bind(this);
        this.onExpansionPanelOpened = this.onExpansionPanelOpened.bind(this);
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <IgrExpansionPanel onClosed={this.onExpansionPanelClosed} onOpened={this.onExpansionPanelOpened} indicatorPosition="end">
                    <h1 slot="title">Golden Retriever</h1>
                    <h3 slot="subtitle">Medium-large gun dog</h3>
                    <div slot="indicator">{this.state.expansionText}</div>
                    <img height="100" src="https://i.ibb.co/6ZdY7cn/Untitled-design-3.png" alt=""></img>
                    <span>The Golden Retriever is a medium-large gun dog that retrieves shot waterfowl, such as ducks
                        and upland game birds, during hunting and shooting parties.[3] The name retriever refers to the breeds ability
                        to retrieve shot game undamaged due to their soft mouth. Golden retrievers have an instinctive love of water, and
                        are easy to train to basic or advanced obedience standards.</span>
                    <IgrButton href="https://en.wikipedia.org/wiki/Golden_Retriever" variant="outlined" target="_blank">
                        <span>Read more</span>
                    </IgrButton>
                </IgrExpansionPanel>
            </div>
        );
    }

    public onExpansionPanelClosed() {
        this.setState({ expansionText: "Show more"});
    }

    public onExpansionPanelOpened() {
        this.setState({ expansionText: "Show less"});
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ExpansionPanelComponentCustomization/>);
