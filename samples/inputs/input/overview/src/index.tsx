import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrInput, IgrInputModule } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

IgrInputModule.register();

export default class InputOverview extends React.Component<any, any> {

    constructor(props: any) {
        super(props);     
    }

    public render(): JSX.Element {
        return (
            <div className="sample">
                <IgrInput displayType="email" label="Subscribe" placeholder="john.doe@mail.com">
                    <span slot="prefix">Email</span>
                </IgrInput>
            </div>
        );
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<InputOverview/>);
