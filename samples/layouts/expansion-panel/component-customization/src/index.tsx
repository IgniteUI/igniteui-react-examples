import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './ExpansionPanelCustomization.css';
import { IgrExpansionPanel, IgrButton } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default function ExpansionPanelComponentCustomization() {
    const [expansionText, setExpansionText] = useState("Show more");

    function onExpansionPanelClosed() {
        setExpansionText("Show more");
    }

    function onExpansionPanelOpened() {
        setExpansionText("Show less");
    }

    return (
        <div className="container sample">
            <IgrExpansionPanel onClosed={onExpansionPanelClosed} onOpened={onExpansionPanelOpened} indicatorPosition="end">
                <span slot="title">Golden Retriever</span>
                <span slot="subtitle">Medium-large gun dog</span>
                <div slot="indicator">{expansionText}</div>
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

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<ExpansionPanelComponentCustomization/>);
