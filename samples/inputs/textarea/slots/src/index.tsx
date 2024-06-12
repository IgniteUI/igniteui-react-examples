import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrTextarea, IgrTextareaModule, IgrIcon, IgrIconModule } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

IgrTextareaModule.register();
IgrIconModule.register();

export default class TextAreaSlots extends React.Component<any, any> {

    constructor(props: any) {
        super(props);     
    }

    public render(): JSX.Element {
        return (
            <div className="sample">
                <IgrTextarea label="Your feedback">
                    <span slot="prefix">
                    <IgrIcon ref={this.iconRef} name='feedback' collection="material"></IgrIcon>
                    </span>                    
                    <p slot="helper-text">Give us a short description of what you liked/disliked</p>
                </IgrTextarea>
            </div>
        );
        
    }      

    public iconRef(icon: IgrIcon){
        if(!icon){
            return;
        }

        icon.registerIconFromText( "feedback",
        `<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-360q17 0 28.5-11.5T520-400q0-17-11.5-28.5T480-440q-17 0-28.5 11.5T440-400q0 17 11.5 28.5T480-360Zm-40-160h80v-240h-80v240ZM80-80v-720q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H240L80-80Zm126-240h594v-480H160v525l46-45Zm-46 0v-480 480Z"/></svg>`,
        "material");    
    } 
}


// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<TextAreaSlots/>);