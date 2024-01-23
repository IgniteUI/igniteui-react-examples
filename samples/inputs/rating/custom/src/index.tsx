import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrRating, IgrRatingModule, IgrRatingSymbol, IgrRatingSymbolModule, IgrIcon, IgrIconModule} from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

IgrRatingModule.register();
IgrRatingSymbolModule.register();
IgrIconModule.register();

export default class RatingCustomSymbols extends React.Component<any, any> {

    constructor(props: any) {
        super(props);           
    }       

    public render(): JSX.Element {
        return (
            <div className="container sample">                
                    <IgrRating label="Rate Experience" step=".5" size="large" value="3" hoverPreview="true">
                         <IgrRatingSymbol key="0">
                            <div key="div0"><IgrIcon ref={this.iconRef} name='heart' collection="material" key="default0"></IgrIcon></div>
                            <div key="empty-div0" slot='empty'><IgrIcon ref={this.iconRef} name='emptyHeart' collection="material" key="empty0"></IgrIcon></div> 
                        </IgrRatingSymbol>
                         <IgrRatingSymbol key="1">
                            <div key="div1"><IgrIcon ref={this.iconRef} name='heart' collection="material" key="default1"></IgrIcon></div>
                            <div key="empty-div1" slot='empty'><IgrIcon ref={this.iconRef} name='emptyHeart' collection="material" key="empty1"></IgrIcon></div>                           
                        </IgrRatingSymbol>
                        <IgrRatingSymbol key="2">
                            <div key="div2"><IgrIcon ref={this.iconRef} name='heart' collection="material" key="default2"></IgrIcon></div>
                            <div key="empty-div2" slot='empty'><IgrIcon ref={this.iconRef} name='emptyHeart' collection="material" key="empty2"></IgrIcon></div>                           
                        </IgrRatingSymbol>
                        <IgrRatingSymbol key="3">
                            <div key="div3"><IgrIcon ref={this.iconRef} name='heart' collection="material" key="default3"></IgrIcon></div>
                            <div key="empty-div3" slot='empty'><IgrIcon ref={this.iconRef} name='emptyHeart' collection="material" key="empty3"></IgrIcon></div>                           
                        </IgrRatingSymbol> 
                        <IgrRatingSymbol key="4">
                            <div key="div4"><IgrIcon ref={this.iconRef} name='heart' collection="material" key="default4"></IgrIcon></div>
                            <div key="empty-div4" slot='empty'><IgrIcon ref={this.iconRef} name='emptyHeart' collection="material" key="empty4"></IgrIcon></div>                           
                        </IgrRatingSymbol>             
                    </IgrRating>                                                      
            </div>
        );
    }  

    public iconRef(icon: IgrIcon){
        if(!icon){
            return;
        }
       
        const emptyHeart = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 241.597 220.057' version='1.0'><path style='opacity:.98000004;fill:none;stroke:#000;stroke-width:5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-opacity:1;stroke-dasharray:none;stroke-dashoffset:0' d='M243.452 1708.979c-26.934.23-51.58 21.476-55.081 48.293-3.114 23.844 7.33 47.4 23.968 64.215 27.515 27.805 61.227 49.794 83.447 82.547 4.39-4.689 9.278-12.066 14.227-17.529 25.23-27.85 58.166-48.013 80.865-78.155 17.175-22.806 19.103-58.113-.538-80.405-18.25-20.712-51.76-25.17-74.37-9.254-8.226 5.791-15.274 13.37-19.932 22.312-10.053-19.32-30.534-32.214-52.586-32.024z' transform='translate(-175.323 -1696.476)'/></svg>";
        const heartIcon = '<svg xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns="http://www.w3.org/2000/svg" xmlns:cc="http://creativecommons.org/ns#" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:svg="http://www.w3.org/2000/svg" id="svg1" viewBox="0 0 475.82 442.01" version="1.0"> <g id="layer1" transform="translate(-134.07 -225.8)"> <path id="path7" d="m263.42 235.15c-66.24 0-120 53.76-120 120 0 134.75 135.93 170.08 228.56 303.3 87.57-132.4 228.56-172.85 228.56-303.3 0-66.24-53.76-120-120-120-48.05 0-89.4 28.37-108.56 69.18-19.16-40.81-60.52-69.18-108.56-69.18z" stroke="#000" stroke-width="18.7" fill="#e60000"/> </g> </svg>';
        icon.registerIconFromText("heart", heartIcon, "material");
        icon.registerIconFromText("emptyHeart", emptyHeart, "material");
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RatingCustomSymbols/>);
