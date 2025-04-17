import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrDropdown, IgrButton, IgrDropdownItem, IgrDropdownModule, IgrButtonModule, IgrDropdownItemModule, DropdownPlacement } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

IgrDropdownModule.register();
IgrDropdownItemModule.register();
IgrButtonModule.register();

export default class DropDownPosition extends React.Component<any, any> {

    public dropdownRef: IgrDropdown;

    constructor(props: any) {
        super(props);
        this.onDropDownRef = this.onDropDownRef.bind(this);     
    }

    public render(): JSX.Element {
        return (
            <div className="container sample center">
                <IgrDropdown ref={this.onDropDownRef} distance={5} onChange={(e)=>this.onChange(e)} placement="bottom">
                    <div slot="target">
                        <IgrButton><span>Options</span></IgrButton>
                    </div>
                    <IgrDropdownItem><span>top</span></IgrDropdownItem>
                    <IgrDropdownItem><span>topstart</span></IgrDropdownItem>
                    <IgrDropdownItem><span>topend</span></IgrDropdownItem>
                    <IgrDropdownItem selected><span>bottom</span></IgrDropdownItem>
                    <IgrDropdownItem><span>bottomstart</span></IgrDropdownItem>
                    <IgrDropdownItem><span>bottomend</span></IgrDropdownItem>
                    <IgrDropdownItem><span>right</span></IgrDropdownItem>
                    <IgrDropdownItem><span>rightstart</span></IgrDropdownItem>
                    <IgrDropdownItem><span>rightend</span></IgrDropdownItem>
                    <IgrDropdownItem><span>left</span></IgrDropdownItem>
                    <IgrDropdownItem><span>leftstart</span></IgrDropdownItem>
                    <IgrDropdownItem><span>leftend</span></IgrDropdownItem>
                </IgrDropdown>
            </div>
        );
    }

    public onDropDownRef(dropdown: IgrDropdown){
        if (!dropdown) { return; }
        this.dropdownRef = dropdown;
    }

    public onChange(event: any): void {
        if(this.dropdownRef){
            for (let i = 1; i < event.target.children.length; i++) {
                let item = event.target.children[i];
                if (item.selected){
                    this.dropdownRef.placement = item.value;
                }
            }
        }
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<DropDownPosition/>);
