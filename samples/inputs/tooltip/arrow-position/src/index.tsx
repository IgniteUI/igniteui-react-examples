import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrTooltip } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

type TooltipPlacement =
    | 'top' | 'top-start' | 'top-end'
    | 'left' | 'left-start' | 'left-end'
    | 'right' | 'right-start' | 'right-end'
    | 'bottom' | 'bottom-start' | 'bottom-end';

const placements: { label: string; value: TooltipPlacement }[] = [
    { label: 'Arrow Top', value: 'top' },
    { label: 'Arrow Top Start', value: 'top-start' },
    { label: 'Arrow Top End', value: 'top-end' },
    { label: 'Arrow Left', value: 'left' },
    { label: 'Arrow Left Start', value: 'left-start' },
    { label: 'Arrow Left End', value: 'left-end' },
    { label: 'Arrow Right', value: 'right' },
    { label: 'Arrow Right Start', value: 'right-start' },
    { label: 'Arrow Right End', value: 'right-end' },
    { label: 'Arrow Bottom', value: 'bottom' },
    { label: 'Arrow Bottom Start', value: 'bottom-start' },
    { label: 'Arrow Bottom End', value: 'bottom-end' },
];

const blockEscape = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
        event.stopImmediatePropagation();
    }
};

export default function TooltipArrowPosition(): JSX.Element {
    useEffect(() => {
        window.addEventListener('keydown', blockEscape, true);
        return () => window.removeEventListener('keydown', blockEscape, true);
    }, []);

    return (
        <div className="sample">
            <div className="placements">
                {placements.map(({ label, value }) => {
                    const [side, alignment = 'center'] = value.split('-');

                    return (
                        <div key={value} className="placement">
                            <span className="placement-label">{label}</span>
                            <div className={`placement-area ${side}`}>
                                <span id={value} className={`anchor ${alignment}`}></span>
                            </div>
                            <IgrTooltip
                                anchor={value}
                                placement={value}
                                withArrow
                                open
                                message="This is a tooltip message. This tooltip shows a long message."
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<TooltipArrowPosition/>);
