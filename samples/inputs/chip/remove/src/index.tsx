import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrChip } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default function ChipRemove(): JSX.Element {
    const chipRef = useRef<IgrChip>(null);

    // The chip only shows the removable look, so inert keeps it out of the tab order and ignores pointer input.
    useEffect(() => {
        if (chipRef.current) {
            chipRef.current.inert = true;
        }
    }, []);

    return (
        <div className="sample chip-remove">
            <IgrChip ref={chipRef} removable>
                Chip
            </IgrChip>
        </div>
    );
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ChipRemove/>);
