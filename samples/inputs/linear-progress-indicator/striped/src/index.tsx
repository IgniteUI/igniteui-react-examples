import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrLinearProgress } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default function StripedLinearProgress() {
    return (
        <div className="container sample">
             <IgrLinearProgress style={{marginBottom: "15px"}} value={100} variant="primary" />
             <IgrLinearProgress style={{marginBottom: "15px"}} value={100} variant="success" indeterminate={true} striped={true} />
             <IgrLinearProgress style={{marginBottom: "15px"}} value={100} variant="danger" />
             <IgrLinearProgress style={{marginBottom: "15px"}} value={100} variant="info" striped={true} />
             <IgrLinearProgress style={{marginBottom: "15px"}} value={100} variant="warning"/>
        </div>
    );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<StripedLinearProgress/>);
