import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrCheckbox } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default class CheckboxStates extends React.Component<any, any> {

    // the checkboxes are display-only, so user interaction is blocked
    public preventToggle(e: React.SyntheticEvent): void {
        e.preventDefault();
    }

    public render(): JSX.Element {
        return (
            <div className="sample">
                <div className="states" onClickCapture={this.preventToggle} onKeyDownCapture={this.preventToggle}>
                    <div className="state">
                        <span className="state-label">Indeterminate</span>
                        <IgrCheckbox indeterminate={true} aria-label="Indeterminate" />
                    </div>
                    <div className="state">
                        <span className="state-label">On</span>
                        <IgrCheckbox checked={true} aria-label="On" />
                    </div>
                    <div className="state">
                        <span className="state-label">Off</span>
                        <IgrCheckbox aria-label="Off" />
                    </div>
                    <div className="state">
                        <span className="state-label">Disabled</span>
                        <IgrCheckbox disabled={true} aria-label="Disabled" />
                    </div>
                    <div className="state">
                        <span className="state-label">Invalid</span>
                        <IgrCheckbox invalid={true} aria-label="Invalid" />
                    </div>
                    <div className="state">
                        <span className="state-label">Required</span>
                        <IgrCheckbox required={true} aria-label="Required" />
                    </div>
                </div>
            </div>
        );
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<CheckboxStates/>);
