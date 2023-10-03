import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrGridModule } from 'igniteui-react-grids';
import { IgrCheckboxModule } from 'igniteui-react-webinputs';
import { IgrGrid, IgrColumn } from 'igniteui-react-grids';
import { ComponentRenderer, WebGridDescriptionModule, WebCheckboxDescriptionModule } from 'igniteui-react-core';
import { CustomersDataItem, CustomersData } from './CustomersData';
import { IgrRowSelectorTemplateContext, IgrHeadSelectorTemplateContext } from 'igniteui-react-grids';
import { IgrCheckbox } from 'igniteui-react';

import 'igniteui-react-grids/grids/combined';
import 'igniteui-react-grids/grids/themes/light/bootstrap.css';

const mods: any[] = [
    IgrGridModule,
    IgrCheckboxModule
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
        <div className="container sample">

            <div className="container fill">
                <IgrGrid
                    autoGenerate="true"
                    ref={this.gridRef}
                    data={this.customersData}
                    rowSelection="Multiple"
                    rowSelectorTemplate={this.webGridRowSelectorTemplate}
                    headSelectorTemplate={this.webGridHeaderRowSelectorTemplate}>
                    <IgrColumn
                        field="ContactName">
                    </IgrColumn>
                    <IgrColumn
                        field="Country">
                    </IgrColumn>
                    <IgrColumn
                        field="City">
                    </IgrColumn>
                    <IgrColumn
                        field="PostalCode">
                    </IgrColumn>
                    <IgrColumn
                        field="CompanyName">
                    </IgrColumn>
                </IgrGrid>
            </div>
        </div>
        );
    }

    private _customersData: CustomersData = null;
    public get customersData(): CustomersData {
        if (this._customersData == null)
        {
            this._customersData = new CustomersData();
        }
        return this._customersData;
    }

    private _componentRenderer: ComponentRenderer = null;
    public get renderer(): ComponentRenderer {
        if (this._componentRenderer == null) {
            this._componentRenderer = new ComponentRenderer();
            var context = this._componentRenderer.context;
            WebGridDescriptionModule.register(context);
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
                <img src="https://www.infragistics.com/angular-demos-lob/assets/images/card/avatars/igLogo.png" className="header-image"/>
            </div>
        );
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);