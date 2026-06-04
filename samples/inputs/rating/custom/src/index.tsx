import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrRating, IgrRatingSymbol, IgrIcon, registerIconFromText } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

const emptyHeart = '<svg xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns="http://www.w3.org/2000/svg" xmlns:cc="http://creativecommons.org/ns#" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:svg="http://www.w3.org/2000/svg" id="svg1" viewBox="0 0 475.82 442.01" version="1.0"> <g id="layer1" transform="translate(-134.07 -225.8)"> <path id="path7" d="m263.42 235.15c-66.24 0-120 53.76-120 120 0 134.75 135.93 170.08 228.56 303.3 87.57-132.4 228.56-172.85 228.56-303.3 0-66.24-53.76-120-120-120-48.05 0-89.4 28.37-108.56 69.18-19.16-40.81-60.52-69.18-108.56-69.18z" stroke="#000" stroke-width="18.7" fill="#fff"/> </g> </svg>';
const heartIcon = '<svg xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns="http://www.w3.org/2000/svg" xmlns:cc="http://creativecommons.org/ns#" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:svg="http://www.w3.org/2000/svg" id="svg1" viewBox="0 0 475.82 442.01" version="1.0"> <g id="layer1" transform="translate(-134.07 -225.8)"> <path id="path7" d="m263.42 235.15c-66.24 0-120 53.76-120 120 0 134.75 135.93 170.08 228.56 303.3 87.57-132.4 228.56-172.85 228.56-303.3 0-66.24-53.76-120-120-120-48.05 0-89.4 28.37-108.56 69.18-19.16-40.81-60.52-69.18-108.56-69.18z" stroke="#000" stroke-width="18.7" fill="#e60000"/> </g> </svg>';

export default class RatingCustomSymbols extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
        registerIconFromText("heart", heartIcon, "material");
        registerIconFromText("emptyHeart", emptyHeart, "material");
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <IgrRating className="size-large" label="Rate Experience" step={.5} value={3} hoverPreview={true}>
                    <IgrRatingSymbol>
                        <div><IgrIcon name='heart' collection="material"></IgrIcon></div>
                        <div slot='empty'><IgrIcon name='emptyHeart' collection="material"></IgrIcon></div> 
                    </IgrRatingSymbol>
                        <IgrRatingSymbol>
                        <div><IgrIcon name='heart' collection="material"></IgrIcon></div>
                        <div slot='empty'><IgrIcon name='emptyHeart' collection="material"></IgrIcon></div>
                    </IgrRatingSymbol>
                    <IgrRatingSymbol>
                        <div><IgrIcon name='heart' collection="material"></IgrIcon></div>
                        <div slot='empty'><IgrIcon name='emptyHeart' collection="material"></IgrIcon></div>
                    </IgrRatingSymbol>
                    <IgrRatingSymbol>
                        <div><IgrIcon name='heart' collection="material"></IgrIcon></div>
                        <div slot='empty'><IgrIcon name='emptyHeart' collection="material"></IgrIcon></div>
                    </IgrRatingSymbol>
                    <IgrRatingSymbol>
                        <div><IgrIcon name='heart' collection="material"></IgrIcon></div>
                        <div slot='empty'><IgrIcon name='emptyHeart' collection="material"></IgrIcon></div>
                    </IgrRatingSymbol>
                </IgrRating>
            </div>
        );
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RatingCustomSymbols/>);
