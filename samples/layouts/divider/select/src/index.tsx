import ReactDOM from 'react-dom/client';
import './index.css';
import {
    IgrDivider,
    IgrSelect,
    IgrSelectItem,
} from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default function DividerSelect() {
    return (
        <div className="container sample">
            <IgrSelect key="select">
                <IgrSelectItem key="item1"><span>Item 1</span></IgrSelectItem>
                <IgrSelectItem key="item2"><span>Item 2</span></IgrSelectItem>
                <IgrDivider key="divider"></IgrDivider>
                <IgrSelectItem key="item3"><span>Item 3</span></IgrSelectItem>
            </IgrSelect>
        </div>
    );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<DividerSelect />);
