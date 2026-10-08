import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrRating } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default function RatingInteractionStates(): JSX.Element {
    return (
        <div className="sample">
            <div className="states">
                <div className="state">
                    <span className="state-label">Enabled</span>
                    <IgrRating label="Rate your experience" />
                </div>
                <div className="state">
                    <span className="state-label">Disabled</span>
                    <IgrRating label="Rate your experience" disabled={true} />
                </div>
            </div>
        </div>
    );
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RatingInteractionStates/>);
