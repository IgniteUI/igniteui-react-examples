import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrTextarea, IgrTextareaModule } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

IgrTextareaModule.register();

export default class InputOverview extends React.Component<any, any> {

    constructor(props: any) {
        super(props);     
    }

    public render(): JSX.Element {
        return (
            <div className="sample">
               <IgrTextarea label="Resize: none" resize="none">                                      
                    <p slot="helper-text">This textarea does not resize and uses a scroll bar to show overflow text.</p>
                </IgrTextarea>
                <IgrTextarea label="Resize: vertical (default)">                                    
                    <p slot="helper-text">This textarea lets the user resize vertically.</p>
                </IgrTextarea>
                <IgrTextarea label="Resize: auto" resize="auto">                                       
                    <p slot="helper-text">This textarea shows all the user input at once. Overflow text wraps onto a new line and expands the text area.</p>
                </IgrTextarea>
            </div>
        );
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<InputOverview/>);
