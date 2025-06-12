import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrRating, IgrRatingSymbol } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default class RatingSingleSelection extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">                
                    <IgrRating label="Rate Experience" single={true}>
                        <IgrRatingSymbol>                           
                            <div>😣</div>
                            <div slot="empty">😣</div>
                        </IgrRatingSymbol>
                        <IgrRatingSymbol>                           
                            <div>😔</div>
                            <div slot="empty">😔</div>
                        </IgrRatingSymbol>
                        <IgrRatingSymbol>                           
                            <div>😐</div>
                            <div slot="empty">😐</div>
                        </IgrRatingSymbol>
                        <IgrRatingSymbol>                           
                            <div>🙂</div>
                            <div slot="empty">🙂</div>
                        </IgrRatingSymbol>
                        <IgrRatingSymbol>                           
                            <div>😆</div>
                            <div slot="empty">😆</div>
                        </IgrRatingSymbol>                         
                    </IgrRating>                                                      
            </div>
        );
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RatingSingleSelection/>);
