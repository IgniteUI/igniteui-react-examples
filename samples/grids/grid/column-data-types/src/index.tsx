import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrGridModule } from 'igniteui-react-grids';
import { IgrGrid } from 'igniteui-react-grids';
import { InvoicesDataExtendedDates } from './InvoicesDataExtendedDates';

import 'igniteui-react-grids/grids/combined';
import 'igniteui-react-grids/grids/themes/light/bootstrap.css';

const mods: any[] = [
    IgrGridModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private grid: IgrGrid
    private gridRef(r: IgrGrid) {
        this.grid = r;
        this.setState({});
    }

    constructor(props: any) {
        super(props);

        this.gridRef = this.gridRef.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample ig-typography">

            <div className="container fill">
                <IgrGrid
                    autoGenerate="false"
                    data={this.invoicesDataExtendedDates}
                    ref={this.gridRef}
                    id="grid"
                    allowFiltering="true"
                    filterMode="ExcelStyleFilter"
                    displayDensity="Compact"
                    locale="EN"
                    columns={["Infragistics.Controls.Description.CodeGenerationItemBuilder", "Infragistics.Controls.Description.CodeGenerationItemBuilder", "Infragistics.Controls.Description.CodeGenerationItemBuilder", "Infragistics.Controls.Description.CodeGenerationItemBuilder", "Infragistics.Controls.Description.CodeGenerationItemBuilder", "Infragistics.Controls.Description.CodeGenerationItemBuilder", "Infragistics.Controls.Description.CodeGenerationItemBuilder", "Infragistics.Controls.Description.CodeGenerationItemBuilder"]}>
                </IgrGrid>
            </div>
        </div>
        );
    }

    private _invoicesDataExtendedDates: InvoicesDataExtendedDates = null;
    public get invoicesDataExtendedDates(): InvoicesDataExtendedDates {
        if (this._invoicesDataExtendedDates == null)
        {
            this._invoicesDataExtendedDates = new InvoicesDataExtendedDates();
        }
        return this._invoicesDataExtendedDates;
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);