import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrLinearProgress } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';
import './LinearProgressStyling.css';

export default function StylingLinearProgressIndicator() {
    return (
        <div className="container sample">
            <IgrLinearProgress value={100} ></IgrLinearProgress>
        </div>
    );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<StylingLinearProgressIndicator/>);
