import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrChip } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default class ChipVariants extends React.Component<any, any> {

    constructor(props: any) {
        super(props);           
    }

    public render(): JSX.Element {
        return (
            <div className="container sample" style={{flexDirection: "row", gap: "8px", alignItems: "baseline"}}>
                 <IgrChip variant="primary" selectable={true} removable={true}>
                     <span>Primary</span>
                 </IgrChip>
                 <IgrChip variant="info" selectable={true} removable={true}>
                     <span>Info</span>
                 </IgrChip>
                 <IgrChip variant="success" selectable={true} removable={true}>
                     <span>Success</span>
                 </IgrChip>
                 <IgrChip variant="warning" selectable={true} removable={true}>
                     <span>Warning</span>
                 </IgrChip>
                 <IgrChip variant="danger" selectable={true} removable={true}>
                     <span>Danger</span>
                 </IgrChip>
            </div>
        );
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ChipVariants/>);
