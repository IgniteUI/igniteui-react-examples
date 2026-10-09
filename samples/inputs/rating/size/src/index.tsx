import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrRating } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default function RatingSize(): JSX.Element {
    return (
        <div className="sample">
            <div className="sizes">
                <div className="size">
                    <span className="size-label">Small</span>
                    <IgrRating className="size-small" label="Rate your experience" value={5} />
                </div>
                <div className="size">
                    <span className="size-label">Medium</span>
                    <IgrRating className="size-medium" label="Rate your experience" value={5} />
                </div>
                <div className="size">
                    <span className="size-label">Large</span>
                    <IgrRating className="size-large" label="Rate your experience" value={5} />
                </div>
            </div>
        </div>
    );
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RatingSize/>);
