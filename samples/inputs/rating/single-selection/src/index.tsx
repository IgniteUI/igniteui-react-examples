import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrRating, IgrRatingModule, IgrRatingSymbol, IgrRatingSymbolModule, IgrIcon, IgrIconModule} from 'igniteui-react';
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
                    <IgrRating label="Rate Experience" single="true">
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

    public iconRef(icon: IgrIcon){
        if(!icon){
            return;
        }
       
        const heartIcon = '<svg xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns="http://www.w3.org/2000/svg" xmlns:cc="http://creativecommons.org/ns#" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:svg="http://www.w3.org/2000/svg" id="svg1" viewBox="0 0 475.82 442.01" version="1.0"> <g id="layer1" transform="translate(-134.07 -225.8)"> <path id="path7" d="m263.42 235.15c-66.24 0-120 53.76-120 120 0 134.75 135.93 170.08 228.56 303.3 87.57-132.4 228.56-172.85 228.56-303.3 0-66.24-53.76-120-120-120-48.05 0-89.4 28.37-108.56 69.18-19.16-40.81-60.52-69.18-108.56-69.18z" stroke="#000" stroke-width="18.7" fill="#e60000"/> </g> </svg>'  
        icon.registerIconFromText("heart", heartIcon, "material");
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RatingSingleSelection/>);
