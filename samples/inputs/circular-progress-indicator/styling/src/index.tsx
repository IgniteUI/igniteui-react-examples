import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrCircularProgress } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';
import './CircularProgressStyle.css'

export default function StylingCircularProgressIndicator() {
    return (
        <div className="container sample">
            <IgrCircularProgress indeterminate={true}/>
        </div>
    );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<StylingCircularProgressIndicator/>);
