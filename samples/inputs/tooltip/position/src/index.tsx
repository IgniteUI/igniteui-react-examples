import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrTooltip } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

const blockEscape = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
        event.stopImmediatePropagation();
    }
};

export default function TooltipPosition(): JSX.Element {
    useEffect(() => {
        window.addEventListener('keydown', blockEscape, true);
        return () => window.removeEventListener('keydown', blockEscape, true);
    }, []);

    return (
        <div className="sample">
            <div className="positions">
                <div id="top" className="target"></div>
                <div id="left" className="target"></div>
                <div id="right" className="target"></div>
                <div id="bottom" className="target"></div>
            </div>
            <IgrTooltip anchor="top" placement="top" withArrow open>
                Tooltip message Top
            </IgrTooltip>
            <IgrTooltip anchor="left" placement="left" withArrow open>
                Tooltip message Left
            </IgrTooltip>
            <IgrTooltip anchor="right" placement="right" withArrow open>
                Tooltip message Right
            </IgrTooltip>
            <IgrTooltip anchor="bottom" placement="bottom" withArrow open>
                Tooltip message Bottom
            </IgrTooltip>
        </div>
    );
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<TooltipPosition/>);
