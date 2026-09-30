import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrButton } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default function ButtonDownload() {
    return (
        <div className="container sample">
             <IgrButton href="" variant="contained" download="url" target="_blank">Download</IgrButton>
        </div>
    );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<ButtonDownload/>);
