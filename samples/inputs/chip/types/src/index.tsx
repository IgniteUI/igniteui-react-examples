import { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrChip } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default function ChipTypes() {
    const sampleRef = useRef<HTMLDivElement>(null);

    // The chips only show their look, so inert keeps them out of the tab order and ignores pointer input.
    useEffect(() => {
        if (sampleRef.current) {
            sampleRef.current.inert = true;
        }
    }, []);

    return (
        <div className="sample chip-types" ref={sampleRef}>
            <div className="chip-types-item">
                <span>Default</span>
                <IgrChip removable>Chip</IgrChip>
            </div>
            <div className="chip-types-item">
                <span>Primary</span>
                <IgrChip removable variant="primary">Chip</IgrChip>
            </div>
        </div>
    );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<ChipTypes/>);
