import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrHierarchicalGridModule } from 'igniteui-react-grids';
import { IgrHierarchicalGrid, IgrRowIsland } from 'igniteui-react-grids';
import SingersData from './SingersData.json';
import { IgrPropertyEditorPropertyDescriptionButtonClickEventArgs } from 'igniteui-react-layouts';
import { IgrGrid, IgrRowType } from 'igniteui-react-grids';

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
    private rowIsland1: IgrRowIsland

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
                    rowStyles={this.webHierarchicalGridRowStylesHandler}
                    columns={["Infragistics.Controls.Description.CodeGenerationItemBuilder", "Infragistics.Controls.Description.CodeGenerationItemBuilder", "Infragistics.Controls.Description.CodeGenerationItemBuilder", "Infragistics.Controls.Description.CodeGenerationItemBuilder", "Infragistics.Controls.Description.CodeGenerationItemBuilder"]}
                    ref={this.hierarchicalGrid1Ref}>
                    <IgrRowIsland
                        childDataKey="Albums"
                        autoGenerate="false"
                        rowStyles={this.webHierarchicalGridChildRowStylesHandler}
                        columns={["Infragistics.Controls.Description.CodeGenerationItemBuilder", "Infragistics.Controls.Description.CodeGenerationItemBuilder", "Infragistics.Controls.Description.CodeGenerationItemBuilder", "Infragistics.Controls.Description.CodeGenerationItemBuilder"]}
                        name="rowIsland1">
                        <IgrRowIsland
                            childDataKey="Songs"
                            autoGenerate="false"
                            columns={["Infragistics.Controls.Description.CodeGenerationItemBuilder", "Infragistics.Controls.Description.CodeGenerationItemBuilder", "Infragistics.Controls.Description.CodeGenerationItemBuilder", "Infragistics.Controls.Description.CodeGenerationItemBuilder"]}>
                        </IgrRowIsland>
                    </IgrRowIsland>
                    <IgrRowIsland
                        childDataKey="Tours"
                        autoGenerate="false"
                        columns={["Infragistics.Controls.Description.CodeGenerationItemBuilder", "Infragistics.Controls.Description.CodeGenerationItemBuilder", "Infragistics.Controls.Description.CodeGenerationItemBuilder", "Infragistics.Controls.Description.CodeGenerationItemBuilder"]}>
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


    public webHierarchicalGridRowStylesHandler = {
        background:(row: IgrRowType) => row.data['HasGrammyAward'] ? '#eeddd3' : '#f0efeb',
        'border-left': (row: IgrRowType) => row.data['HasGrammyAward'] ? '2px solid #dda15e' : null
    };

    public webHierarchicalGridChildRowStylesHandler = {
        'border-left': (row: IgrRowType) => row.data['BillboardReview'] > 70 ? '3.5px solid #dda15e' : null
    };

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);