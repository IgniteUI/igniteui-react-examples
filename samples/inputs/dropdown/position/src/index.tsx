import { useRef } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrDropdown, IgrButton, IgrDropdownItem } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default function DropDownPosition() {
    const dropdownRef = useRef<IgrDropdown>(null);

    // Move the dropdown to the placement named by the selected item.
    function onChange(event: CustomEvent<IgrDropdownItem>) {
        const dropdown = dropdownRef.current;
        if (!dropdown) { return; }

        const items = (event.target as IgrDropdown).children;
        for (let i = 1; i < items.length; i++) {
            const item = items[i] as IgrDropdownItem;
            if (item.selected) {
                dropdown.placement = item.value as IgrDropdown['placement'];
            }
        }
    }

    return (
        <div className="container sample center">
            <IgrDropdown ref={dropdownRef} distance={5} onChange={(e)=>onChange(e)} placement="bottom">
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

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<DropDownPosition/>);
