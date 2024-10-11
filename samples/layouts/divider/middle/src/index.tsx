import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrDividerModule, IgrDivider } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

IgrDividerModule.register();

export default class DividerMiddle extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
    }

    public render(): JSX.Element {
        return (
            <div className="container sample center">
                <div className="parent">
                    <div className="content">
                        <h4 className="mb">Both sides inset.</h4>
                        <IgrDivider key="divider2" className="withInset" middle="true"></IgrDivider>
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
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<DividerMiddle />);
