import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrTextarea, IgrTextareaModule } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

IgrTextareaModule.register();

export default class TextAreaOverview extends React.Component<any, any> {

    constructor(props: any) {
        super(props);     
    }

    public render(): JSX.Element {
        return (
            <div className="sample">
                <IgrTextarea rows="3" label="Tell us your story:"><span>It was a dark and stormy night...</span></IgrTextarea>
            </div>
        );
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<TextAreaOverview/>);
