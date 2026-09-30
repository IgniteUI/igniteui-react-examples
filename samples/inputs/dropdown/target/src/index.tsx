import { useRef, type MouseEvent } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrDropdown, IgrButton, IgrDropdownItem } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default function DropDownTarget() {
    const dropdownRef = useRef<IgrDropdown>(null);

    function onClick(event: MouseEvent<IgrButton>) {
        if (!dropdownRef.current) { return; }
        dropdownRef.current.toggle(event.currentTarget);
    }

    return (
        <div className="container sample center">
            <div className="options horizontal">
                <IgrButton onClick={(e)=>onClick(e)}><span>First Target</span></IgrButton>
                <IgrButton onClick={(e)=>onClick(e)} style={{marginLeft: "20px"}}><span>Second Target</span></IgrButton>

                <IgrDropdown ref={dropdownRef} sameWidth={true}>
                    <IgrDropdownItem><span>Option 1</span></IgrDropdownItem>
                    <IgrDropdownItem><span>Option 2</span></IgrDropdownItem>
                    <IgrDropdownItem><span>Option 3</span></IgrDropdownItem>
                </IgrDropdown>
            </div>
        </div>
    );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<DropDownTarget/>);
