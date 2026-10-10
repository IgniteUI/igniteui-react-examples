import React, { useState, useCallback } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './ExpansionPanelPropsAndEvents.css';
import { IgrExpansionPanel } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default function ExpansionPanelPropertiesAndEvents() {
    const [subtitleClass, setSubtitleClass] = useState('');
    const [eventSpanClass, setEventSpanClass] = useState('eventSpanHidden');
    const [eventSpanText, setEventSpanText] = useState('none');

    const showEvent = useCallback((text: string, newSubtitleClass: string) => {
        setSubtitleClass(newSubtitleClass);
        setEventSpanClass('eventSpanShown');
        setEventSpanText(text);

        window.setTimeout(() => {
            setEventSpanClass('eventSpanHidden');
        }, 2000);
    }, []);

    const onExpansionPanelClosed = useCallback(() => {
        showEvent('Closed event fired!', '');
    }, [showEvent]);

    const onExpansionPanelOpened = useCallback(() => {
        showEvent('Opened event fired!', 'subtitleHidden');
    }, [showEvent]);

    return (
        <div className="container sample center">
            <IgrExpansionPanel onClosed={onExpansionPanelClosed} onOpened={onExpansionPanelOpened}>
                <h1 slot="title">Golden Retriever</h1>
                <h3 className={subtitleClass} slot="subtitle">Medium-large gun dog</h3>
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
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ExpansionPanelPropertiesAndEvents/>);
