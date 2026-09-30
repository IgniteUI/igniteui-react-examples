import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrChip } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default function ChipOverview() {

    function handleChipRemove(event: CustomEvent<void>) {
        const chip = event.target as IgrChip;
        chip.remove();
    }

    return (
        <div className="container sample">
             <IgrChip selectable={true} removable={true} onRemove={handleChipRemove}>
                 <span>Chip</span>
             </IgrChip>
        </div>
    );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<ChipOverview/>);
