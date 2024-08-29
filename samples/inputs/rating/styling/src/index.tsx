import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrRating, IgrRatingModule,} from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

IgrRatingModule.register();

export default class RatingStyling extends React.Component<any, any> {

    constructor(props: any) {
        super(props);           
    }       

    public render(): JSX.Element {
        return (
            <div className="container sample">                
                <IgrRating className="size-large" label="Styled Rating" value="2.5" step=".5" hoverPreview="true"></IgrRating>                                    
            </div>
        );
    }  
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RatingStyling/>);
