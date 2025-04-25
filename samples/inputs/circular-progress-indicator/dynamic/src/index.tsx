import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrCircularProgress, IgrCircularGradient, IgrIconButton, IgrCircularProgressModule, IgrCircularGradientModule, IgrIconButtonModule } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';
import './DynamicCircularProgressStyle.css';

IgrCircularProgressModule.register();
IgrCircularGradientModule.register();
IgrIconButtonModule.register();

export default class DynamicCircularProgress extends React.Component<any, any> {

    public circularProgress: IgrCircularProgress;
    public addIcon: IgrIconButton;
    public removeIcon: IgrIconButton;

    constructor(props: any) {
        super(props);       
        
        this.circularProgressRef = this.circularProgressRef.bind(this);
        this.addIconRef = this.addIconRef.bind(this);
        this.removeIconRef = this.removeIconRef.bind(this);
        this.onIconClick = this.onIconClick.bind(this);  
    }

    public render(): JSX.Element {
        return (
            <div style={{width: "300px", display: "flex", alignItems: "center", marginTop: "30px"}}>
                <IgrCircularProgress ref={this.circularProgressRef} style={{marginRight: "50px", marginLeft: "20px"}} max={100} value={100}>
                    <IgrCircularGradient offset="0%" color="#ff9a40">
                    </IgrCircularGradient>
                    <IgrCircularGradient offset="50%" color="#1eccd4">
                    </IgrCircularGradient>
                    <IgrCircularGradient offset="100%" color="#ff0079">
                    </IgrCircularGradient>
                </IgrCircularProgress>
                <div style={{display: "flex", justifyContent: "space evenly", marginTop: "20px"}} onClick={this.onIconClick}>
                    <IgrIconButton ref={this.removeIconRef} className="removeIcon" name="remove" collection="material">
                    </IgrIconButton>
                    <IgrIconButton ref={this.addIconRef} className="addIcon" name="add" collection="material">
                    </IgrIconButton>
                </div>
            </div>
        );
    }

    public circularProgressRef(progress: IgrCircularProgress)
    {
        if(!progress) { return; }
        this.circularProgress = progress;
    }

    public addIconRef(icon: IgrIconButton){
        if (!icon) { return; }        
        this.addIcon = icon;
        const addIconText = '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>';
        this.addIcon.registerIconFromText(
            "add", addIconText, "material"
        );
    }

    public removeIconRef(icon: IgrIconButton){
        if (!icon) { return; }
        this.removeIcon = icon;
        const removeIconText = '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 13H5v-2h14v2z"/></svg>';
        this.removeIcon.registerIconFromText(
            "remove", removeIconText, "material"
        );
    }

    public onIconClick(e: any) {
        const target = e.target as HTMLElement;
        const iconButton: any = target.closest('igc-icon-button');
        if(iconButton.getAttribute("classname") === "removeIcon")
        {
            if(this.circularProgress.value > 0) {
                this.circularProgress.value = this.circularProgress.value - 10;
            }
            else {
                this.circularProgress.value = 0;
            }
        }
        else {
            this.circularProgress.value = this.circularProgress.value + 10;
        }

    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<DynamicCircularProgress/>);
