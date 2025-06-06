import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrRating, IgrRatingModule, IgrRatingSymbol, IgrRatingSymbolModule, IgrIconModule } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

IgrRatingModule.register();
IgrRatingSymbolModule.register();
IgrIconModule.register();
export default class RatingSingleSelection extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">                
                    <IgrRating label="Rate Experience" single={true}>
                        <IgrRatingSymbol key="0">                           
                            <div key="div0">😣</div>
                            <div key="empty-div0" slot="empty">😣</div>
                        </IgrRatingSymbol>
                        <IgrRatingSymbol key="1">                           
                            <div key="div1">😔</div>
                            <div key="empty-div1" slot="empty">😔</div>
                        </IgrRatingSymbol>
                        <IgrRatingSymbol key="2">                           
                            <div key="div2">😐</div>
                            <div key="empty-div2" slot="empty">😐</div>
                        </IgrRatingSymbol>
                        <IgrRatingSymbol key="3">                           
                            <div key="div3">🙂</div>
                            <div key="empty-div3" slot="empty">🙂</div>
                        </IgrRatingSymbol>
                        <IgrRatingSymbol key="4">                           
                            <div key="div4">😆</div>
                            <div key="empty-div4" slot="empty">😆</div>
                        </IgrRatingSymbol>                         
                    </IgrRating>                                                      
            </div>
        );
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RatingSingleSelection/>);
