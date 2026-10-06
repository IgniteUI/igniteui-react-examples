import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrButton, IgrChip } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default function ChipRemove(): JSX.Element {
    const [isVisible, setIsVisible] = useState(true);
    const hasToggled = useRef(false);
    const chipRef = useRef<IgrChip>(null);
    const restoreRef = useRef<IgrButton>(null);

    // The control the user activated is gone, so move focus to the one that replaced it.
    useEffect(() => {
        if (!hasToggled.current) {
            return;
        }
        if (isVisible) {
            // The chip renders after this effect and doesn't delegate focus yet, so wait and focus its remove control directly.
            const chip = chipRef.current;
            chip?.updateComplete.then(() => chip.shadowRoot?.querySelector<HTMLElement>('[part="remove"] igc-icon')?.focus());
        } else {
            restoreRef.current?.focus();
        }
    }, [isVisible]);

    const toggleChip = (visible: boolean) => {
        hasToggled.current = true;
        setIsVisible(visible);
    };

    return (
        <div className="sample chip-remove">
            <div className="chip-remove-item">
                <span>Remove Chip</span>
                <div className="chip-remove-slot">
                    {isVisible ? (
                        <IgrChip ref={chipRef} removable onRemove={() => toggleChip(false)}>
                            Chip
                        </IgrChip>
                    ) : (
                        <IgrButton ref={restoreRef} className="restore-button" variant="flat" onClick={() => toggleChip(true)}>
                            Restore chip
                        </IgrButton>
                    )}
                </div>
            </div>
        </div>
    );
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ChipRemove/>);
