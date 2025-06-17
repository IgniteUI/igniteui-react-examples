import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrDropdown, IgrButton, IgrDropdownItem, IgrIcon, registerIconFromText } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

const hotelIconText = "<svg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 0 24 24' width='24px'><path d='M0 0h24v24H0V0z' fill='none'/><path d='M7 14c1.66 0 3-1.34 3-3S8.66 8 7 8s-3 1.34-3 3 1.34 3 3 3zm0-4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm12-3h-8v8H3V5H1v15h2v-3h18v3h2v-9c0-2.21-1.79-4-4-4zm2 8h-8V9h6c1.1 0 2 .9 2 2v4z'/></svg>";
const groceryIconText = "<svg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 0 24 24' width='24px'><path d='M0 0h24v24H0V0z' fill='none'/><path d='M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm-1.45-5c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6z'/></svg>";
const restaurantIconText = "<svg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 0 24 24' width='24px'><path d='M0 0h24v24H0V0z' fill='none'/><path d='M16 6v8h3v8h2V2c-2.76 0-5 2.24-5 4zm-5 3H9V2H7v7H5V2H3v7c0 2.21 1.79 4 4 4v9h2v-9c2.21 0 4-1.79 4-4V2h-2v7z'/></svg>";

export default class DropDownItem extends React.Component<any, any> {

    public hotelIcon: IgrIcon;
    public groceryIcon: IgrIcon;
    public restaurantIcon: IgrIcon;

    constructor(props: any) {
        super(props);
        registerIconFromText("hotel", hotelIconText, "material");
        registerIconFromText("grocery", groceryIconText, "material");
        registerIconFromText("restaurant", restaurantIconText, "material");
    }

    public render(): JSX.Element {
        return (
            <div className="container sample center">
                <IgrDropdown>
                    <div slot="target">
                        <IgrButton><span>Category</span></IgrButton>
                    </div>
                    <IgrDropdownItem>
                        <span slot="prefix">
                            <IgrIcon name="hotel" collection="material"></IgrIcon>
                        </span>
                        <span>Hotel</span>
                    </IgrDropdownItem>
                    <IgrDropdownItem disabled>
                        <span slot="prefix">
                            <IgrIcon name="grocery" collection="material"></IgrIcon>
                        </span>
                        <span>Grocery</span>
                    </IgrDropdownItem>
                    <IgrDropdownItem selected>
                        <span slot="prefix">
                            <IgrIcon name="restaurant" collection="material"></IgrIcon>
                        </span>
                        <span>Restaurant</span>
                    </IgrDropdownItem>
                </IgrDropdown>
            </div>
        );
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<DropDownItem/>);
