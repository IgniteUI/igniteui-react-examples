import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrRating, IgrRatingSymbol, IgrIcon, registerIconFromText } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

const bandageIcon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-labelledby="bdbandage-desc bdbandage-title" fit="" preserveAspectRatio="xMidYMid meet"><title id="bdbandage-title">Bandage Icon</title><desc id="bdbandage-desc">A picture depicting a bandage.</desc><path d="M3.212 10.03a3 3 0 010-4.242l2.576-2.576a3 3 0 014.242 0l.556.556-6.818 6.818zm17.5.334L10.364 20.707a4 4 0 01-5.657 0l-1.414-1.414a4 4 0 010-5.657L13.636 3.293a4 4 0 015.657 0l1.414 1.414a4 4 0 010 5.657zM14 5a1 1 0 101-1 1 1 0 00-1 1zm-2.5 2.5a1 1 0 101-1 1 1 0 00-1 1zM9 10a1 1 0 101-1 1 1 0 00-1 1zm-4 6a1 1 0 10-1-1 1 1 0 001 1zm1.75 2.25a1 1 0 10-1 1 1 1 0 001-1zm.75-4.75a1 1 0 10-1-1 1 1 0 001 1zm.75 3.25a1 1 0 10-1-1 1 1 0 001 1zM10 19a1 1 0 10-1 1 1 1 0 001-1zm.75-4.75a1 1 0 10-1-1 1 1 0 001 1zm1.75 2.25a1 1 0 10-1 1 1 1 0 001-1zm.75-4.75a1 1 0 10-1-1 1 1 0 001 1zM15 14a1 1 0 10-1 1 1 1 0 001-1zm.75-4.75a1 1 0 10-1-1 1 1 0 001 1zm1.75 2.25a1 1 0 10-1 1 1 1 0 001-1zm.75-4.75a1 1 0 10-1-1 1 1 0 001 1zM20 9a1 1 0 10-1 1 1 1 0 001-1zm.232 4.414l-6.818 6.818.556.556a3 3 0 004.242 0l2.576-2.576a3 3 0 000-4.242z"></path></svg>';
const bacteriaIcon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-labelledby="bcbacteria-desc bcbacteria-title" fit="" preserveAspectRatio="xMidYMid meet"><title id="bcbacteria-title">Bacteria Icon</title><desc id="bcbacteria-desc">A picture depicting a bacteria.</desc><path d="M20.867 7.664h-1.3a4.439 4.439 0 00-.467-1.157l.914-.915a1.132 1.132 0 00-1.6-1.6l-.915.914a4.477 4.477 0 00-1.157-.478V3.133a1.133 1.133 0 10-2.265 0v1.294a4.491 4.491 0 00-1.157.478L12 3.991a1.132 1.132 0 00-1.6 1.6l.8.8L9.6 8l-.8-.8a1.133 1.133 0 10-1.6 1.6l.8.8-1.6 1.6-.8-.8A1.132 1.132 0 004 12l.914.914a4.453 4.453 0 00-.477 1.157H3.133a1.133 1.133 0 100 2.265h1.3a4.439 4.439 0 00.477 1.157l-.914.915a1.132 1.132 0 001.6 1.6l.915-.914a4.439 4.439 0 001.157.477v1.3a1.133 1.133 0 102.265 0v-1.3a4.453 4.453 0 001.157-.477l.914.914a1.132 1.132 0 001.6-1.6l-.8-.8 1.6-1.6.8.8a1.133 1.133 0 101.6-1.6l-.8-.8 1.6-1.6.8.8a1.132 1.132 0 101.6-1.6l-.914-.914a4.453 4.453 0 00.477-1.157h1.3a1.133 1.133 0 100-2.265zM15 11a2 2 0 112-2 2 2 0 01-2 2zm-5.5 5a1.5 1.5 0 111.5-1.5A1.5 1.5 0 019.5 16z"></path></svg>';

const bandageIcon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-labelledby="bdbandage-desc bdbandage-title" fit="" preserveAspectRatio="xMidYMid meet"><title id="bdbandage-title">Bandage Icon</title><desc id="bdbandage-desc">A picture depicting a bandage.</desc><path d="M3.212 10.03a3 3 0 010-4.242l2.576-2.576a3 3 0 014.242 0l.556.556-6.818 6.818zm17.5.334L10.364 20.707a4 4 0 01-5.657 0l-1.414-1.414a4 4 0 010-5.657L13.636 3.293a4 4 0 015.657 0l1.414 1.414a4 4 0 010 5.657zM14 5a1 1 0 101-1 1 1 0 00-1 1zm-2.5 2.5a1 1 0 101-1 1 1 0 00-1 1zM9 10a1 1 0 101-1 1 1 0 00-1 1zm-4 6a1 1 0 10-1-1 1 1 0 001 1zm1.75 2.25a1 1 0 10-1 1 1 1 0 001-1zm.75-4.75a1 1 0 10-1-1 1 1 0 001 1zm.75 3.25a1 1 0 10-1-1 1 1 0 001 1zM10 19a1 1 0 10-1 1 1 1 0 001-1zm.75-4.75a1 1 0 10-1-1 1 1 0 001 1zm1.75 2.25a1 1 0 10-1 1 1 1 0 001-1zm.75-4.75a1 1 0 10-1-1 1 1 0 001 1zM15 14a1 1 0 10-1 1 1 1 0 001-1zm.75-4.75a1 1 0 10-1-1 1 1 0 001 1zm1.75 2.25a1 1 0 10-1 1 1 1 0 001-1zm.75-4.75a1 1 0 10-1-1 1 1 0 001 1zM20 9a1 1 0 10-1 1 1 1 0 001-1zm.232 4.414l-6.818 6.818.556.556a3 3 0 004.242 0l2.576-2.576a3 3 0 000-4.242z"></path></svg>';
const bacteriaIcon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-labelledby="bcbacteria-desc bcbacteria-title" fit="" preserveAspectRatio="xMidYMid meet"><title id="bcbacteria-title">Bacteria Icon</title><desc id="bcbacteria-desc">A picture depicting a bacteria.</desc><path d="M20.867 7.664h-1.3a4.439 4.439 0 00-.467-1.157l.914-.915a1.132 1.132 0 00-1.6-1.6l-.915.914a4.477 4.477 0 00-1.157-.478V3.133a1.133 1.133 0 10-2.265 0v1.294a4.491 4.491 0 00-1.157.478L12 3.991a1.132 1.132 0 00-1.6 1.6l.8.8L9.6 8l-.8-.8a1.133 1.133 0 10-1.6 1.6l.8.8-1.6 1.6-.8-.8A1.132 1.132 0 004 12l.914.914a4.453 4.453 0 00-.477 1.157H3.133a1.133 1.133 0 100 2.265h1.3a4.439 4.439 0 00.477 1.157l-.914.915a1.132 1.132 0 001.6 1.6l.915-.914a4.439 4.439 0 001.157.477v1.3a1.133 1.133 0 102.265 0v-1.3a4.453 4.453 0 001.157-.477l.914.914a1.132 1.132 0 001.6-1.6l-.8-.8 1.6-1.6.8.8a1.133 1.133 0 101.6-1.6l-.8-.8 1.6-1.6.8.8a1.132 1.132 0 101.6-1.6l-.914-.914a4.453 4.453 0 00.477-1.157h1.3a1.133 1.133 0 100-2.265zM15 11a2 2 0 112-2 2 2 0 01-2 2zm-5.5 5a1.5 1.5 0 111.5-1.5A1.5 1.5 0 019.5 16z"></path></svg>';

export default class RatingEmptyAndSelected extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
        registerIconFromText("bandage", bandageIcon, "material");
        registerIconFromText("bacteria", bacteriaIcon,"material");
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">                
                    <IgrRating>
                        <IgrRatingSymbol>
                            <div><IgrIcon name='bandage' collection="material"></IgrIcon></div>
                            <div slot='empty'><IgrIcon name='bacteria' collection="material"></IgrIcon></div> 
                        </IgrRatingSymbol>
                         <IgrRatingSymbol>
                            <div><IgrIcon name='bandage' collection="material"></IgrIcon></div>
                            <div slot='empty'><IgrIcon name='bacteria' collection="material"></IgrIcon></div>                           
                        </IgrRatingSymbol>
                        <IgrRatingSymbol>
                            <div><IgrIcon name='bandage' collection="material"></IgrIcon></div>
                            <div slot='empty'><IgrIcon name='bacteria' collection="material"></IgrIcon></div>                           
                        </IgrRatingSymbol>
                        <IgrRatingSymbol>
                            <div><IgrIcon name='bandage' collection="material"></IgrIcon></div>
                            <div slot='empty'><IgrIcon name='bacteria' collection="material"></IgrIcon></div>                           
                        </IgrRatingSymbol> 
                        <IgrRatingSymbol>
                            <div><IgrIcon name='bandage' collection="material"></IgrIcon></div>
                            <div slot='empty'><IgrIcon name='bacteria' collection="material"></IgrIcon></div>                           
                        </IgrRatingSymbol>
                    </IgrRating>                                                      
            </div>
        );
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RatingEmptyAndSelected/>);
