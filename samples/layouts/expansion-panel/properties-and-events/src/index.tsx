import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './ExpansionPanelPropsAndEvents.css';
import { IgrExpansionPanel } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default function ExpansionPanelPropertiesAndEvents() {
    const [subtitleClass, setSubtitleClass] = useState("");
    const [eventSpanClass, setEventSpanClass] = useState("eventSpanHidden");
    const [eventSpanText, setEventSpanText] = useState("none");

    function onExpansionPanelClosed() {

        setSubtitleClass("");
        setEventSpanClass("eventSpanShown");
        setEventSpanText("Closed event fired!");

        window.clearTimeout(undefined);

        window.setTimeout(() => {
            setEventSpanClass("eventSpanHidden");
        }, 2000);
    }

    function onExpansionPanelOpened() {
        setSubtitleClass("subtitleHidden");
        setEventSpanClass("eventSpanShown");
        setEventSpanText("Opened event fired!");

        window.clearTimeout(undefined);

        window.setTimeout(() => {
            setEventSpanClass("eventSpanHidden");
        }, 2000);
    }

    return (
        <div className="container sample center">
            <IgrExpansionPanel onClosed={onExpansionPanelClosed} onOpened={onExpansionPanelOpened}>
                <span slot="title">Golden Retriever</span>
                <span className={subtitleClass} slot="subtitle">Medium-large gun dog</span>
                <div slot="indicator"></div>
                <span>The Golden Retriever is a medium-large gun dog that retrieves shot waterfowl, such as ducks
                    and upland game birds, during hunting and shooting parties.[3] The name retriever refers to the breeds ability
                    to retrieve shot game undamaged due to their soft mouth. Golden retrievers have an instinctive love of water, and
                    are easy to train to basic or advanced obedience standards.</span>
            </IgrExpansionPanel>

            <span className={eventSpanClass}>{eventSpanText}</span>
        </div>
    );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<ExpansionPanelPropertiesAndEvents/>);
