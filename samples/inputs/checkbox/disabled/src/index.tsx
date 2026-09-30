import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrCheckbox } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default function CheckboxDisabled() {
    return (
        <div className="sample">
            <IgrCheckbox disabled={true}>
                <span>Label</span>
            </IgrCheckbox>
        </div>
    );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<CheckboxDisabled/>);
