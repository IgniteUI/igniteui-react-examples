import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrTooltip } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default function TooltipVariants(): JSX.Element {
    return (
        <div className="sample">
            <div className="variants">
                <div id="arrow" className="target"></div>
                <div id="arrow-close" className="target"></div>
                <div id="no-arrow" className="target"></div>
                <div id="no-arrow-close" className="target"></div>
            </div>
            <IgrTooltip anchor="arrow" placement="top" withArrow hideTriggers="" open>
                Tooltip message
            </IgrTooltip>
            <IgrTooltip anchor="arrow-close" placement="top" withArrow sticky open>
                Tooltip message
            </IgrTooltip>
            <IgrTooltip anchor="no-arrow" placement="top" hideTriggers="" open>
                Tooltip message
            </IgrTooltip>
            <IgrTooltip anchor="no-arrow-close" placement="top" sticky open>
                Tooltip message
            </IgrTooltip>
        </div>
    );
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<TooltipVariants/>);
