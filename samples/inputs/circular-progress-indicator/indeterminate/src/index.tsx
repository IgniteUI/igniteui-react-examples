import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrCircularProgress } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default function IndeterminateCircularProgress() {
    return (
        <div className="container sample">
             <IgrCircularProgress indeterminate={true} />
        </div>
    );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<IndeterminateCircularProgress/>);
