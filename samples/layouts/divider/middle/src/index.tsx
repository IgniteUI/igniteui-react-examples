import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrDivider } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default function DividerMiddle() {
    return (
        <div className="container sample center">
            <div className="parent">
                <div className="content">
                    <h4 className="mb">Both sides inset.</h4>
                    <IgrDivider key="divider2" className="withInset" middle={true}></IgrDivider>
                    <p className="mt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad alias at consectetur dolor magnam maiores nihil quasi quod repudiandae similique. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, culpa delectus eius fuga ipsa iste laborum nemo, numquam omnis perferendis soluta sunt. Animi asperiores aspernatur assumenda doloribus eligendi.</p>
                </div>
                <div className="content">
                    <h4 className="mb">Left side only(default).</h4>
                    <IgrDivider key="divider2" className="withInset"></IgrDivider>
                    <p className="mt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad alias at consectetur dolor magnam maiores nihil quasi quod repudiandae similique. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, culpa delectus eius fuga ipsa iste laborum nemo, numquam omnis perferendis soluta sunt. Animi asperiores aspernatur assumenda doloribus eligendi.</p>
                </div>
            </div>
        </div>
    );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<DividerMiddle />);
