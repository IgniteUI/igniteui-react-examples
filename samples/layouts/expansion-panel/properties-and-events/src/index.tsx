import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './ExpansionPanelPropsAndEvents.css';
import { IgrExpansionPanel } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default class ExpansionPanelPropertiesAndEvents extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
        this.state = { subtitleClass: "", eventSpanClass: "eventSpanHidden", eventSpanText: "none" };

        this.onExpansionPanelClosed = this.onExpansionPanelClosed.bind(this);
        this.onExpansionPanelOpened = this.onExpansionPanelOpened.bind(this);
    }

    public render(): JSX.Element {
        return (
            <div className="container sample center">
                <IgrExpansionPanel onClosed={this.onExpansionPanelClosed} onOpened={this.onExpansionPanelOpened}>
                    <h1 slot="title">Golden Retriever</h1>
                    <h3 className={this.state.subtitleClass} slot="subtitle">Medium-large gun dog</h3>
                    <div slot="indicator">{this.state.expansionText}</div>
                    <span>The Golden Retriever is a medium-large gun dog that retrieves shot waterfowl, such as ducks
                        and upland game birds, during hunting and shooting parties.[3] The name retriever refers to the breeds ability
                        to retrieve shot game undamaged due to their soft mouth. Golden retrievers have an instinctive love of water, and
                        are easy to train to basic or advanced obedience standards.</span>
                </IgrExpansionPanel>

                <span className={this.state.eventSpanClass}>{this.state.eventSpanText}</span>
            </div>
        );
    }

    public onExpansionPanelClosed() {

        this.setState({ subtitleClass: "", eventSpanClass: "eventSpanShown", eventSpanText: "Closed event fired!"});

        window.clearTimeout(undefined);

        window.setTimeout(() => {
            this.setState({eventSpanClass: "eventSpanHidden"});
        }, 2000);
    }

    public onExpansionPanelOpened() {
        this.setState({ subtitleClass: "subtitleHidden", eventSpanClass: "eventSpanShown", eventSpanText: "Opened event fired!"});

        window.clearTimeout(undefined);

        window.setTimeout(() => {
            this.setState({eventSpanClass: "eventSpanHidden"});
        }, 2000);
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ExpansionPanelPropertiesAndEvents/>);
