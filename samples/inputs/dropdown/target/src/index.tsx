import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrDropdown, IgrButton, IgrDropdownItem, IgrDropdownModule, IgrButtonModule, IgrDropdownItemModule } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

IgrDropdownModule.register();
IgrDropdownItemModule.register();
IgrButtonModule.register();

export default class DropDownTarget extends React.Component<any, any> {

    public dropdownRef: IgrDropdown;

    constructor(props: any) {
        super(props);
        this.onDropDownRef = this.onDropDownRef.bind(this);
    }

    public render(): JSX.Element {
        return (
            <div className="container sample center">
                <div className="options horizontal">
                    <IgrButton onClick={(e)=>this.onClick(e)}><span>First Target</span></IgrButton>
                    <IgrButton onClick={(e)=>this.onClick(e)} style={{marginLeft: "20px"}}><span>Second Target</span></IgrButton>

                    <IgrDropdown ref={this.onDropDownRef} sameWidth={true}>
                        <IgrDropdownItem><span>Option 1</span></IgrDropdownItem>
                        <IgrDropdownItem><span>Option 2</span></IgrDropdownItem>
                        <IgrDropdownItem><span>Option 3</span></IgrDropdownItem>
                    </IgrDropdown>
                </div>
            </div>
        );
    }

    public onDropDownRef(dropdown: IgrDropdown){
        if (!dropdown) { return; }
        this.dropdownRef = dropdown;
    }

    public onClick(event: any) {
        if(this.dropdownRef){
            this.dropdownRef.toggleTarget(event.i.nativeElement);
        }
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<DropDownTarget/>);
