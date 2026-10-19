import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrRadio, IgrRadioGroup, IgrSwitch, IgrTooltip } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

type TooltipPlacement = 'top' | 'right' | 'left' | 'bottom';

const placements: { label: string; value: TooltipPlacement }[] = [
    { label: 'Top', value: 'top' },
    { label: 'Right', value: 'right' },
    { label: 'Left', value: 'left' },
    { label: 'Bottom', value: 'bottom' },
];

export default function TooltipOverview(): JSX.Element {
    const [placement, setPlacement] = useState<TooltipPlacement>('bottom');
    const [closeButton, setCloseButton] = useState(true);
    const [arrow, setArrow] = useState(true);

    return (
        <div className="sample">
            <div className="settings">
                <IgrRadioGroup alignment="horizontal">
                    {placements.map((item) => (
                        <IgrRadio
                            key={item.value}
                            name="placement"
                            value={item.value}
                            checked={placement === item.value}
                            onChange={(e) => e.detail.checked && setPlacement(item.value)}
                        >
                            <span>{item.label}</span>
                        </IgrRadio>
                    ))}
                </IgrRadioGroup>
                <IgrSwitch
                    labelPosition="before"
                    checked={closeButton}
                    onChange={(e) => setCloseButton(e.detail.checked)}
                >
                    <span>Close Button</span>
                </IgrSwitch>
                <IgrSwitch
                    labelPosition="before"
                    checked={arrow}
                    onChange={(e) => setArrow(e.detail.checked)}
                >
                    <span>Arrow</span>
                </IgrSwitch>
            </div>
            <div id="target" className="target"></div>
            <IgrTooltip
                anchor="target"
                placement={placement}
                withArrow={arrow}
                sticky={closeButton}
                open
            >
                This is a tooltip message
                <br />
                Multiline message here.
            </IgrTooltip>
        </div>
    );
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<TooltipOverview/>);
