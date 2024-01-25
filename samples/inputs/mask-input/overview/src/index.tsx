import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrMaskInput, IgrIcon, IgrMaskInputModule, IgrIconModule } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

IgrMaskInputModule.register();
IgrIconModule.register();

export default class MaskInputOverview extends React.Component<any, any> {

    public locationIcon: IgrIcon;

    constructor(props: any) {
        super(props);
        this.iconLocationRef = this.iconLocationRef.bind(this);         
    }

    public render(): JSX.Element {
        return (
            <div className="container sample center">
                <IgrMaskInput mask="00000">
                    <span slot="prefix">
                        <IgrIcon ref={this.iconLocationRef} name="location" collection="material"></IgrIcon>
                    </span>
                    <span slot="helper-text">ZIP Code</span>
                </IgrMaskInput>
            </div>
        );
    }

    public iconLocationRef(icon: IgrIcon){
        if (!icon) { return; }
        this.locationIcon = icon;
        const locationIconText = '<svg width="24px" height="24px" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg" aria-labelledby="locationIconTitle" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none" color="#000000"> <title id="locationIconTitle">Location</title> <path d="M12,21 C16,16.8 18,12.8 18,9 C18,5.6862915 15.3137085,3 12,3 C8.6862915,3 6,5.6862915 6,9 C6,12.8 8,16.8 12,21 Z"/> <circle cx="12" cy="9" r="1"/> </svg>';
        this.locationIcon.registerIconFromText("location", locationIconText, "material");
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MaskInputOverview/>);
