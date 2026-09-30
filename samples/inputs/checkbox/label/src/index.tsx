import ReactDOM from 'react-dom/client';
import './index.css';
import './CheckboxLabelStyles.css'
import { IgrCheckbox } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default function CheckboxLabel() {
    return (
        <div className="sample">
            <IgrCheckbox labelPosition="before">Label</IgrCheckbox>
            <div className="wrapper">
                <span id="checkbox-label">Label</span>
                <IgrCheckbox aria-labelledby="checkbox-label" labelPosition="before"></IgrCheckbox>
            </div>
        </div>
    );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<CheckboxLabel/>);
