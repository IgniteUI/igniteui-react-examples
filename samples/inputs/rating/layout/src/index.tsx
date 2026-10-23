import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrRating } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default function RatingLayout() {
    return (
        <div className="sample">
            <div className="layouts">
                <div className="layout">
                    <span className="layout-label">Label / On</span>
                    <IgrRating label="Rate your experience" value={3} />
                </div>
                <div className="layout">
                    <span className="layout-label">Label / Off</span>
                    <IgrRating aria-label="Rate your experience" value={3} />
                </div>
            </div>
        </div>
    );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<RatingLayout/>);
