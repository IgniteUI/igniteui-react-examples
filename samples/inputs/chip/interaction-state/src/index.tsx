import { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrChip } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default function ChipInteractionState() {
    const sampleRef = useRef<HTMLDivElement>(null);

    // The chips only show their look, so inert keeps them out of the tab order and ignores pointer input.
    useEffect(() => {
        if (sampleRef.current) {
            sampleRef.current.inert = true;
        }
    }, []);

    return (
        <div className="sample chip-states" ref={sampleRef}>
            <div className="chip-states-item">
                <span>Enabled</span>
                <IgrChip removable>Chip</IgrChip>
            </div>
            <div className="chip-states-item">
                <span>Disabled</span>
                <IgrChip removable disabled>Chip</IgrChip>
            </div>
        </div>
    );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<ChipInteractionState/>);
