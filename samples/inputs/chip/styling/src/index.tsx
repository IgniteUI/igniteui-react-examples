import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './ChipStyle.css';
import { IgrChip } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default class ChipStyling extends React.Component<any, any> {

    constructor(props: any) {
        super(props);           
    }

    private handleChipRemove = (event: CustomEvent<boolean>) => {
        const chip = event.target as IgrChip;
        chip.remove();
    }

    public render(): JSX.Element {
        return (
            <div className="container sample" style={{flexDirection: "row", gap: "8px"}}>
                 <IgrChip selectable={true} removable={true} onRemove={this.handleChipRemove}>
                     <span>Chip</span>
                 </IgrChip>
            </div>
        );
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ChipStyling/>);
