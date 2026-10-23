import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrChip } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

const chips = ['Chip', 'Chip', 'Chip'];

export default function ChipArea() {
    return (
        <div className="sample chips-area-sample">
            <div className="chips-area">
                {chips.map((label, index) => (
                    <IgrChip key={index}>{label}</IgrChip>
                ))}
            </div>
        </div>
    );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<ChipArea/>);
