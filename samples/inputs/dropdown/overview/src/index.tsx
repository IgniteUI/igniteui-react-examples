import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrDropdown, IgrButton, IgrDropdownItem } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default class DropDownOverview extends React.Component<any, any> {

    constructor(props: any) {
        super(props);           
    }

    public render(): JSX.Element {
        return (
            <div className="container sample center">
                <IgrDropdown>
                    <div slot="target">
                        <IgrButton><span>Options</span></IgrButton>
                    </div>
                    <IgrDropdownItem><span>Option 1</span></IgrDropdownItem>
                    <IgrDropdownItem><span>Option 2</span></IgrDropdownItem>
                    <IgrDropdownItem><span>Option 3</span></IgrDropdownItem>
                </IgrDropdown>
            </div>
        );
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<DropDownOverview/>);
