import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrHierarchicalGridModule } from 'igniteui-react-grids';
import { IgrCheckboxModule } from 'igniteui-react';
import { IgrHierarchicalGrid, IgrPaginator, IgrColumn, IgrRowIsland } from 'igniteui-react-grids';
import { ComponentRenderer, WebHierarchicalGridDescriptionModule, WebCheckboxDescriptionModule } from 'igniteui-react-core';
import SingersData from './SingersData.json';
import { IgrRowSelectorTemplateContext, IgrHeadSelectorTemplateContext } from 'igniteui-react-grids';
import { IgrCheckbox } from 'igniteui-react';

import 'igniteui-react-grids/grids/themes/light/bootstrap.css';

const mods: any[] = [
    IgrHierarchicalGridModule,
    IgrCheckboxModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private hierarchicalGrid: IgrHierarchicalGrid
    private hierarchicalGridRef(r: IgrHierarchicalGrid) {
        this.hierarchicalGrid = r;
        this.setState({});
    }
    private paginator: IgrPaginator

    constructor(props: any) {
        super(props);

        this.hierarchicalGridRef = this.hierarchicalGridRef.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample ig-typography">

            <div className="container fill">
                <IgrHierarchicalGrid
                    autoGenerate={false}
                    data={this.singersData}
                    ref={this.hierarchicalGridRef}
                    id="hierarchicalGrid"
                    primaryKey="ID"
                    rowSelection="multiple"
                    cellSelection="none"
                    rowSelectorTemplate={this.webGridRowSelectorTemplate}
                    headSelectorTemplate={this.webGridHeaderRowSelectorTemplate}>
                    <IgrPaginator
                    >
                    </IgrPaginator>
                    <IgrColumn
                        field="Artist">
                    </IgrColumn>
                    <IgrColumn
                        field="Photo"
                        dataType="image">
                    </IgrColumn>
                    <IgrColumn
                        field="Debut">
                    </IgrColumn>
                    <IgrColumn
                        field="GrammyNominations"
                        header="Grammy Nominations">
                    </IgrColumn>
                    <IgrColumn
                        field="GrammyAwards"
                        header="Grammy Awards">
                    </IgrColumn>
                    <IgrRowIsland
                        childDataKey="Albums"
                        autoGenerate={false}>
                        <IgrColumn
                            field="Album">
                        </IgrColumn>
                        <IgrColumn
                            field="LaunchDate"
                            header="Launch Date"
                            dataType="date">
                        </IgrColumn>
                        <IgrColumn
                            field="BillboardReview"
                            header="Billboard Review">
                        </IgrColumn>
                        <IgrColumn
                            field="USBillboard200"
                            header="US Billboard 200">
                        </IgrColumn>
                        <IgrRowIsland
                            childDataKey="Songs"
                            autoGenerate={false}>
                            <IgrColumn
                                field="Number"
                                header="No.">
                            </IgrColumn>
                            <IgrColumn
                                field="Title">
                            </IgrColumn>
                            <IgrColumn
                                field="Released"
                                dataType="date">
                            </IgrColumn>
                            <IgrColumn
                                field="Genre">
                            </IgrColumn>
                        </IgrRowIsland>
                    </IgrRowIsland>
                    <IgrRowIsland
                        childDataKey="Tours"
                        autoGenerate={false}>
                        <IgrColumn
                            field="Tour">
                        </IgrColumn>
                        <IgrColumn
                            field="StartedOn"
                            header="Started on">
                        </IgrColumn>
                        <IgrColumn
                            field="Location">
                        </IgrColumn>
                        <IgrColumn
                            field="Headliner">
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

    private _componentRenderer: ComponentRenderer = null;
    public get renderer(): ComponentRenderer {
        if (this._componentRenderer == null) {
            this._componentRenderer = new ComponentRenderer();
            var context = this._componentRenderer.context;
            WebHierarchicalGridDescriptionModule.register(context);
            WebCheckboxDescriptionModule.register(context);
        }
        return this._componentRenderer;
    }


    public webGridRowSelectorTemplate = (e: {dataContext: IgrRowSelectorTemplateContext}) => {
        const contextDetail = e.dataContext.implicit;
        const containerStyle = {
            justifyContent: 'space-evenly',
            display: 'flex',
            width: '70px'
        };

        return (
            <div style={containerStyle}>
                <span>{contextDetail.index}</span>
                <IgrCheckbox checked={contextDetail.selected} key={`${contextDetail.selected}`}></IgrCheckbox>
            </div>
        );
    }

    public webGridHeaderRowSelectorTemplate = (e: {dataContext: IgrHeadSelectorTemplateContext }) => {
        return (
            <div style={{width: '70px', height: '60px', display: 'flex'}}>
                <img src="https://dl.infragistics.com/x/img/browsers/ig.png" className="header-image"/>
            </div>
        );
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);