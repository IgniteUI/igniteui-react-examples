import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrHierarchicalGridModule } from 'igniteui-react-grids';
import { IgrHierarchicalGrid, IgrPinningConfig, RowPinningPosition, IgrActionStrip, IgrGridPinningActions, IgrGridEditingActions, IgrColumn, IgrRowIsland } from 'igniteui-react-grids';
import SingersData from './SingersData.json';

import 'igniteui-react-grids/grids/combined';
import 'igniteui-react-grids/grids/themes/light/bootstrap.css';

const mods: any[] = [
    IgrHierarchicalGridModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private hierarchicalGrid1: IgrHierarchicalGrid
    private hierarchicalGrid1Ref(r: IgrHierarchicalGrid) {
        this.hierarchicalGrid1 = r;
        this.setState({});
    }
    private  _pinningConfig1: IgrPinningConfig | null = null;
    public get pinningConfig1(): IgrPinningConfig {
        if (this._pinningConfig1 == null)
        {
            var pinningConfig1: IgrPinningConfig = {} as IgrPinningConfig;
            pinningConfig1.rows = RowPinningPosition.Top;

            this._pinningConfig1 = pinningConfig1;
        }
        return this._pinningConfig1;
    }
    private actionStrip: IgrActionStrip

    constructor(props: any) {
        super(props);

        this.hierarchicalGrid1Ref = this.hierarchicalGrid1Ref.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample ig-typography">

            <div className="container fill">
                <IgrHierarchicalGrid
                    autoGenerate="false"
                    data={this.singersData}
                    primaryKey="ID"
                    rowEditable="true"
                    allowFiltering="true"
                    pinning={this.pinningConfig1}
                    ref={this.hierarchicalGrid1Ref}>
                    <IgrActionStrip
                        name="actionStrip">
                        <IgrGridPinningActions
                        >
                        </IgrGridPinningActions>
                        <IgrGridEditingActions
                            editRow="true"
                            deleteRow="true"
                            addRow="true">
                        </IgrGridEditingActions>
                    </IgrActionStrip>
                    <IgrColumn
                        field="Artist"
                        header="Artist"
                        dataType="String"
                        sortable="true">
                    </IgrColumn>
                    <IgrColumn
                        field="Photo"
                        header="Photo"
                        dataType="Image"
                        sortable="true">
                    </IgrColumn>
                    <IgrColumn
                        field="Debut"
                        header="Debut"
                        dataType="Number"
                        sortable="true">
                    </IgrColumn>
                    <IgrColumn
                        field="GrammyNominations"
                        header="Grammy Nominations"
                        dataType="Number"
                        sortable="true">
                    </IgrColumn>
                    <IgrColumn
                        field="GrammyAwards"
                        header="Grammy Awards"
                        dataType="Number"
                        sortable="true">
                    </IgrColumn>
                    <IgrRowIsland
                        childDataKey="Albums"
                        autoGenerate="false">
                        <IgrColumn
                            field="Album"
                            header="Album"
                            dataType="String"
                            sortable="true">
                        </IgrColumn>
                        <IgrColumn
                            field="LaunchDate"
                            header="Launch Date"
                            dataType="Date"
                            sortable="true">
                        </IgrColumn>
                        <IgrColumn
                            field="BillboardReview"
                            header="Billboard Review"
                            dataType="String"
                            sortable="true">
                        </IgrColumn>
                        <IgrColumn
                            field="USBillboard200"
                            header="US Billboard 200"
                            dataType="String"
                            sortable="true">
                        </IgrColumn>
                        <IgrRowIsland
                            childDataKey="Songs"
                            autoGenerate="false">
                            <IgrColumn
                                field="Number"
                                header="No."
                                dataType="String">
                            </IgrColumn>
                            <IgrColumn
                                field="Title"
                                header="Title"
                                dataType="String">
                            </IgrColumn>
                            <IgrColumn
                                field="Released"
                                header="Released"
                                dataType="Date">
                            </IgrColumn>
                            <IgrColumn
                                field="Genre"
                                header="Genre"
                                dataType="String">
                            </IgrColumn>
                        </IgrRowIsland>
                    </IgrRowIsland>
                    <IgrRowIsland
                        childDataKey="Tours"
                        autoGenerate="false">
                        <IgrColumn
                            field="Tour"
                            header="Tour"
                            dataType="String">
                        </IgrColumn>
                        <IgrColumn
                            field="StartedOn"
                            header="Started on"
                            dataType="String">
                        </IgrColumn>
                        <IgrColumn
                            field="Location"
                            header="Location"
                            dataType="String">
                        </IgrColumn>
                        <IgrColumn
                            field="Headliner"
                            header="Headliner"
                            dataType="String">
                        </IgrColumn>
                    </IgrRowIsland>
                </IgrHierarchicalGrid>
            </div>
        </div>
        );
    }

    private _singersData: any[] = SingersData;
    public get singersData(): any[] {
        return this._singersData;
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);