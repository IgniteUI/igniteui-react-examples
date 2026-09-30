import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrRating, IgrRatingSymbol } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default function RatingSingleSelection() {
    return (
        <div className="container sample">                
                <IgrRating label="Rate Experience" single={true}>
                    <IgrRatingSymbol>                           
                        <span>😣</span>
                        <span slot="empty">😣</span>
                    </IgrRatingSymbol>
                    <IgrRatingSymbol>                           
                        <span>😔</span>
                        <span slot="empty">😔</span>
                    </IgrRatingSymbol>
                    <IgrRatingSymbol>                           
                        <span>😐</span>
                        <span slot="empty">😐</span>
                    </IgrRatingSymbol>
                    <IgrRatingSymbol>                           
                        <span>🙂</span>
                        <span slot="empty">🙂</span>
                    </IgrRatingSymbol>
                    <IgrRatingSymbol>                           
                        <span>😆</span>
                        <span slot="empty">😆</span>
                    </IgrRatingSymbol>                         
                </IgrRating>                                                      
        </div>
    );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<RatingSingleSelection/>);
