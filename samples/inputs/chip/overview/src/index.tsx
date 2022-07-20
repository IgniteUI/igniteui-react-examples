import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { IgrChip, IgrChipModule } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

IgrChipModule.register();

export default class ChipOverview extends React.Component<any, any> {

    constructor(props: any) {
        super(props);           
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                 <IgrChip selectable="true" removable="true">
                     <span>Chip</span>
                 </IgrChip>
            </div>
        );
    }
}

// rendering above class to the React DOM
ReactDOM.render(<ChipOverview />, document.getElementById('root'));
