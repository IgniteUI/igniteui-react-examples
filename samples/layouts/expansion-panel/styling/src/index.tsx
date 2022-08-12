import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './ExpansionPanelStyling.css';
import { IgrExpansionPanel, IgrButton, IgrButtonModule, IgrExpansionPanelModule } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

IgrButtonModule.register();
IgrExpansionPanelModule.register();

export default class ExpansionPanelStyling extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <IgrExpansionPanel indicatorPosition="end">
                    <h1 key="epTitle" slot="title">Golden Retriever</h1>
                    <h3 key="epSubtitle" slot="subtitle">Medium-large gun dog</h3>
                    <img key="epImg" height="100" src="https://i.ibb.co/6ZdY7cn/Untitled-design-3.png" alt=""></img>
                        <span key="epSpan">The Golden Retriever is a medium-large gun dog that retrieves shot waterfowl, such as ducks
                            and upland game birds, during hunting and shooting parties.[3] The name retriever refers to the breeds ability
                            to retrieve shot game undamaged due to their soft mouth. Golden retrievers have an instinctive love of water, and
                            are easy to train to basic or advanced obedience standards.</span>
                    <IgrButton key="epBtn" href="https://en.wikipedia.org/wiki/Golden_Retriever" variant="contained" target="_blank">
                        <span key="btnCaption">Read more</span>
                    </IgrButton>
                </IgrExpansionPanel>
            </div>
        );
    }
}

// rendering above class to the React DOM
ReactDOM.render(<ExpansionPanelStyling/>, document.getElementById("root"));
