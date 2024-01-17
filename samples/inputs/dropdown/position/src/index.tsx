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
                <IgrDropdown ref={this.onDropDownRef} distance="5" change={(e)=>this.onChange(e)} placement="bottom">
                    <div slot="target">
                        <IgrButton><span>Options</span></IgrButton>
                    </div>
                    <IgrDropdownItem><span>top</span></IgrDropdownItem>
                    <IgrDropdownItem><span>top-start</span></IgrDropdownItem>
                    <IgrDropdownItem><span>top-end</span></IgrDropdownItem>
                    <IgrDropdownItem selected><span>bottom</span></IgrDropdownItem>
                    <IgrDropdownItem><span>bottom-start</span></IgrDropdownItem>
                    <IgrDropdownItem><span>bottom-end</span></IgrDropdownItem>
                    <IgrDropdownItem><span>right</span></IgrDropdownItem>
                    <IgrDropdownItem><span>right-start</span></IgrDropdownItem>
                    <IgrDropdownItem><span>right-end</span></IgrDropdownItem>
                    <IgrDropdownItem><span>left</span></IgrDropdownItem>
                    <IgrDropdownItem><span>left-start</span></IgrDropdownItem>
                    <IgrDropdownItem><span>left-end</span></IgrDropdownItem>
                </IgrDropdown>
            </div>
        );
    }

    public onDropDownRef(dropdown: IgrDropdown){
        if (!dropdown) { return; }
        this.dropdownRef = dropdown;
        this.setState({});
    }

    public onChange(event: any): void {
        if(this.dropdownRef){
            for (let i = 1; i < event.i.nativeElement.children.length; i++) {
                let item = event.i.nativeElement.children[i];
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
