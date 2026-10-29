import type { KeyboardEvent } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrTab, IgrTabs } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default function TabsStates() {
    const blockKeyboard = (e: KeyboardEvent) => e.stopPropagation();

    return (
        <div className="sample">
            <div className="states" onKeyDownCapture={blockKeyboard}>
                <span />
                <span className="state-label state-column">Active</span>
                <span className="state-label state-column">Inactive</span>
                <span className="state-label state-column">Disabled</span>
                <span className="state-label">Hover / Off</span>
                <IgrTabs className="state-tabs" alignment="justify">
                    <IgrTab label="Active" selected={true} />
                    <IgrTab label="Inactive" />
                    <IgrTab label="Disabled" disabled={true} />
                </IgrTabs>
                <span className="state-label">Hover / On</span>
                <IgrTabs className="state-tabs" alignment="justify">
                    <IgrTab className="hover" label="Active" selected={true} />
                    <IgrTab className="hover" label="Inactive" />
                </IgrTabs>
            </div>
        </div>
    );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<TabsStates/>);
