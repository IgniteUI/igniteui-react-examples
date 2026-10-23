import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrRating } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default function RatingOverview() {
    return (
        <div className="container sample">                
                <IgrRating className="size-large" label="Rate Experience" max={5} step={.5} hoverPreview={true}></IgrRating>                                    
        </div>
    );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<RatingOverview/>);
