import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrLinearProgress, IgrIconButton, IgrLinearProgressModule, IgrIconButtonModule, registerIconFromText } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

IgrLinearProgressModule.register();
IgrIconButtonModule.register();

const addIconText = '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>';
const removeIconText = '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 13H5v-2h14v2z"/></svg>';

export default class DynamicLinearProgress extends React.Component<any, any> {

    public linearProgress: IgrLinearProgress;
    constructor(props: any) {
        super(props);       
        
        this.linearProgressRef = this.linearProgressRef.bind(this);
        registerIconFromText(
            "add", addIconText, "material"
        );
        registerIconFromText(
            "remove", removeIconText, "material"
        );
        this.onIconClick = this.onIconClick.bind(this);
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <IgrLinearProgress ref={this.linearProgressRef} style={{marginRight: "50px", marginLeft: "20px"}} max={100} value={100} labelAlign="bottom-start">
                </IgrLinearProgress>
                <div style={{display: "flex", justifyContent: "space-evenly", marginTop: "20px", marginLeft: "20px"}} onClick={this.onIconClick}>
                    <IgrIconButton className="removeIcon" name="remove" collection="material">
                    </IgrIconButton>
                    <IgrIconButton className="addIcon" name="add" collection="material">
                    </IgrIconButton>
                </div>
            </div>
        );
    }

    public linearProgressRef(progress: IgrLinearProgress)
    {
        if(!progress) { return; }
        this.linearProgress = progress;
    }

    public onIconClick(e: any) {
        const target = e.target as HTMLElement;
        const iconButton: any = target.closest('igc-icon-button');
        if(iconButton.getAttribute("class") === "removeIcon")
        {
            if(this.linearProgress.value > 0) {
                this.linearProgress.value = this.linearProgress.value - 10;
            }
            else {
                this.linearProgress.value = 0;
            }
        }
        else {
            this.linearProgress.value = this.linearProgress.value + 10;
        }

    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<DynamicLinearProgress/>);
