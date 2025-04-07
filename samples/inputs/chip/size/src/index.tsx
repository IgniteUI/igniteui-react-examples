import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrChip, IgrChipModule } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

IgrChipModule.register();

export default class ChipSize extends React.Component<any, any> {

    constructor(props: any) {
        super(props);           
    }

    public render(): JSX.Element {
        return (
            <div className="container sample" style={{flexDirection: "row", gap: "8px", alignItems: "baseline"}}>
                 <IgrChip className="size-small" selectable={true} removable={true}>
                     <span>Chip</span>
                 </IgrChip>
                 <IgrChip className="size-medium" selectable={true} removable={true}>
                     <span>Chip</span>
                 </IgrChip>
                 <IgrChip className="size-large" selectable={true} removable={true}>
                     <span>Chip</span>
                 </IgrChip>
            </div>
        );
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ChipSize/>);
