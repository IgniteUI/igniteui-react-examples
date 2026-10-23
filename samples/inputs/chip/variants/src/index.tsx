import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrChip } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default function ChipVariants() {

    function handleChipRemove(event: CustomEvent<void>) {
        const chip = event.target as IgrChip;
        chip.remove();
    }

    return (
        <div className="container sample" style={{flexDirection: "row", gap: "8px", alignItems: "baseline"}}>
             <IgrChip variant="primary" selectable={true} removable={true} onRemove={handleChipRemove}>
                 <span>Primary</span>
             </IgrChip>
             <IgrChip variant="info" selectable={true} removable={true} onRemove={handleChipRemove}>
                 <span>Info</span>
             </IgrChip>
             <IgrChip variant="success" selectable={true} removable={true} onRemove={handleChipRemove}>
                 <span>Success</span>
             </IgrChip>
             <IgrChip variant="warning" selectable={true} removable={true} onRemove={handleChipRemove}>
                 <span>Warning</span>
             </IgrChip>
             <IgrChip variant="danger" selectable={true} removable={true} onRemove={handleChipRemove}>
                 <span>Danger</span>
             </IgrChip>
        </div>
    );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<ChipVariants/>);
