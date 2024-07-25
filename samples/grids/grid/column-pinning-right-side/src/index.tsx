import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrAvatarModule } from 'igniteui-react';
import { IgrGridModule } from 'igniteui-react-grids';
import { IgrGrid, IgrPinningConfig, ColumnPinningPosition, IgrGridToolbar, IgrGridToolbarTitle, IgrGridToolbarActions, IgrGridToolbarPinning } from 'igniteui-react-grids';
import { AthletesDataExtendedItem, AthletesDataExtended } from './AthletesDataExtended';

import 'igniteui-react-grids/grids/combined';
import 'igniteui-react-grids/grids/themes/light/bootstrap.css';

const mods: any[] = [
    IgrAvatarModule,
    IgrGridModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private grid: IgrGrid
    private gridRef(r: IgrGrid) {
        this.grid = r;
        this.setState({});
    }
    private  _pinningConfig1: IgrPinningConfig | null = null;
    public get pinningConfig1(): IgrPinningConfig {
        if (this._pinningConfig1 == null)
        {
            var pinningConfig1: IgrPinningConfig = {} as IgrPinningConfig;
            pinningConfig1.columns = ColumnPinningPosition.End;

            this._pinningConfig1 = pinningConfig1;
        }
        return this._pinningConfig1;
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
                    data={this.athletesDataExtended}
                    ref={this.gridRef}
                    id="grid"
                    pinning={this.pinningConfig1}
                    columns={["Infragistics.Controls.Description.CodeGenerationItemBuilder", "Infragistics.Controls.Description.CodeGenerationItemBuilder", "Infragistics.Controls.Description.CodeGenerationItemBuilder", "Infragistics.Controls.Description.CodeGenerationItemBuilder", "Infragistics.Controls.Description.CodeGenerationItemBuilder", "Infragistics.Controls.Description.CodeGenerationItemBuilder", "Infragistics.Controls.Description.CodeGenerationItemBuilder", "Infragistics.Controls.Description.CodeGenerationItemBuilder", "Infragistics.Controls.Description.CodeGenerationItemBuilder", "Infragistics.Controls.Description.CodeGenerationItemBuilder", "Infragistics.Controls.Description.CodeGenerationItemBuilder", "Infragistics.Controls.Description.CodeGenerationItemBuilder", "Infragistics.Controls.Description.CodeGenerationItemBuilder", "Infragistics.Controls.Description.CodeGenerationItemBuilder", "Infragistics.Controls.Description.CodeGenerationItemBuilder"]}>
                    <IgrGridToolbar
                    >
                        <IgrGridToolbarTitle
                        >
                        </IgrGridToolbarTitle>
                        <IgrGridToolbarActions
                        >
                            <IgrGridToolbarPinning
                            >
                            </IgrGridToolbarPinning>
                        </IgrGridToolbarActions>
                    </IgrGridToolbar>
                </IgrGrid>
            </div>
        </div>
        );
    }

    private _athletesDataExtended: AthletesDataExtended = null;
    public get athletesDataExtended(): AthletesDataExtended {
        if (this._athletesDataExtended == null)
        {
            this._athletesDataExtended = new AthletesDataExtended();
        }
        return this._athletesDataExtended;
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);