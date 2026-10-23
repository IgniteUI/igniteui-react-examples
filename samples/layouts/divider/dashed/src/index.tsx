import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrDivider } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default function DividerDashed() {
    return (
        <div className="container sample">
            <p>First paragraph</p>
            <IgrDivider key="divider" type="dashed"></IgrDivider>
            <p>Second paragraph</p>
        </div>
    );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<DividerDashed/>);
