import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrCard, IgrCardContent, IgrCardHeader, IgrRating } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default function RatingOverview(): JSX.Element {
    return (
        <div className="sample">
            <IgrCard className="rating-card" elevated={true}>
                <IgrCardHeader>
                    <span slot="title">Rate this product</span>
                    <span slot="subtitle">Your opinion matters to us!</span>
                </IgrCardHeader>
                <IgrCardContent>
                    <IgrRating aria-label="Rate this product" hoverPreview={true} />
                </IgrCardContent>
            </IgrCard>
        </div>
    );
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RatingOverview/>);
