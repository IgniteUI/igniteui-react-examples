import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrTextarea } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default function TextAreaResize() {

    return (
        <div className="sample container">
           <IgrTextarea label="Resize: none" resize="none">                                      
                <span slot="helper-text">This textarea does not resize and uses a scroll bar to show overflow text.</span>
            </IgrTextarea>
            <IgrTextarea label="Resize: vertical (default)">                                    
                <span slot="helper-text">This textarea lets the user resize vertically.</span>
            </IgrTextarea>
            <IgrTextarea label="Resize: auto" resize="auto">                                       
                <span slot="helper-text">This textarea shows all the user input at once. Overflow text wraps onto a new line and expands the text area.</span>
            </IgrTextarea>
        </div>
    );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<TextAreaResize/>);
