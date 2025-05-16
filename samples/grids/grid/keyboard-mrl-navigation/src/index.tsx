import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrGridModule, IgrColumnLayoutModule } from 'igniteui-react-grids';
import { IgrGrid, IgrColumnLayout, IgrColumn } from 'igniteui-react-grids';
import { ComponentRenderer, WebGridDescriptionModule, WebColumnLayoutDescriptionModule } from 'igniteui-react-core';
import { CompanyDataItem, CompanyData } from './CompanyData';
import { IgrGridKeydownEventArgs } from 'igniteui-react-grids';

import 'igniteui-react-grids/grids/combined';
import 'igniteui-react-grids/grids/themes/light/bootstrap.css';

const mods: any[] = [
    IgrGridModule,
    IgrColumnLayoutModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private grid: IgrGrid
    private gridRef(r: IgrGrid) {
        this.grid = r;
        this.setState({});
    }
    private companyInfo: IgrColumnLayout
    private company: IgrColumn
    private country: IgrColumn
    private city: IgrColumn
    private address: IgrColumn
    private sales: IgrColumnLayout
    private lifetimeSales: IgrColumn
    private quarterly: IgrColumn
    private yearly: IgrColumn
    private marketPotentialInfo: IgrColumnLayout
    private marketPotential: IgrColumn
    private assets: IgrColumnLayout
    private assetsCash: IgrColumn
    private accountsReceivable: IgrColumn
    private assetsBooks: IgrColumn

    constructor(props: any) {
        super(props);

        this.gridRef = this.gridRef.bind(this);
        this.webGridMRLCustomNavigationEvent = this.webGridMRLCustomNavigationEvent.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample ig-typography">

            <div className="container fill">
                <IgrGrid
                    autoGenerate={false}
                    ref={this.gridRef}
                    id="grid"
                    data={this.companyData}
                    gridKeydown={this.webGridMRLCustomNavigationEvent}>
                    <IgrColumnLayout
                        name="CompanyInfo"
                        header="Company">
                        <IgrColumn
                            name="Company"
                            field="Company"
                            header="Company"
                            rowStart={1}
                            colStart={1}
                            colEnd={3}>
                        </IgrColumn>
                        <IgrColumn
                            name="Country"
                            field="Country"
                            header="Country"
                            rowStart={2}
                            colStart={1}>
                        </IgrColumn>
                        <IgrColumn
                            name="City"
                            field="City"
                            header="City"
                            rowStart={2}
                            colStart={2}>
                        </IgrColumn>
                        <IgrColumn
                            name="Address"
                            field="Address"
                            header="Address"
                            rowStart={3}
                            colStart={1}
                            colEnd={3}>
                        </IgrColumn>
                    </IgrColumnLayout>
                    <IgrColumnLayout
                        name="Sales"
                        header="Sales">
                        <IgrColumn
                            name="LifetimeSales"
                            field="LifetimeSales"
                            header="Lifetime Sales"
                            rowStart={1}
                            rowEnd={3}
                            colStart={1}
                            colEnd={3}>
                        </IgrColumn>
                        <IgrColumn
                            name="Quarterly"
                            field="QuarterlySales"
                            header="Quarterly"
                            rowStart={3}
                            colStart={1}>
                        </IgrColumn>
                        <IgrColumn
                            name="Yearly"
                            field="YearlySales"
                            header="Yearly"
                            rowStart={3}
                            colStart={2}>
                        </IgrColumn>
                    </IgrColumnLayout>
                    <IgrColumnLayout
                        name="MarketPotentialInfo"
                        header="Market Potential">
                        <IgrColumn
                            name="MarketPotential"
                            field="MarketPotential"
                            header="Market Potential"
                            rowStart={1}
                            rowEnd={4}
                            colStart={1}>
                        </IgrColumn>
                    </IgrColumnLayout>
                    <IgrColumnLayout
                        name="Assets"
                        header="Assets">
                        <IgrColumn
                            name="AssetsCash"
                            field="AssetsCash"
                            header="Assets Cash"
                            rowStart={1}
                            colStart={1}>
                        </IgrColumn>
                        <IgrColumn
                            name="AccountsReceivable"
                            field="AccountsReceivable"
                            header="Accounts Receivable"
                            rowStart={1}
                            colStart={2}
                            colEnd={4}>
                        </IgrColumn>
                        <IgrColumn
                            name="AssetsBooks"
                            field="AssetsBooks"
                            header="Assets Books"
                            rowStart={2}
                            rowEnd={4}
                            colStart={1}
                            colEnd={4}>
                        </IgrColumn>
                    </IgrColumnLayout>
                </IgrGrid>
            </div>
        </div>
        );
    }

    private _companyData: CompanyData = null;
    public get companyData(): CompanyData {
        if (this._companyData == null)
        {
            this._companyData = new CompanyData();
        }
        return this._companyData;
    }

    private _componentRenderer: ComponentRenderer = null;
    public get renderer(): ComponentRenderer {
        if (this._componentRenderer == null) {
            this._componentRenderer = new ComponentRenderer();
            var context = this._componentRenderer.context;
            WebGridDescriptionModule.register(context);
            WebColumnLayoutDescriptionModule.register(context);
        }
        return this._componentRenderer;
    }

    public webGridMRLCustomNavigationEvent(sender: IgrGrid, args: IgrGridKeydownEventArgs): void {
        const target = args.detail.target;
        const grid: IgrGrid = this.grid;
        if ((args.detail.event as any).key.toLowerCase() === 'enter') {
           args.detail.event.preventDefault();
           args.detail.cancel = true;
           const rowIndex = target.row.index === undefined ? target.index : target.row.index;
           (grid as any).navigateTo((args.detail.event as any).shiftKey ? rowIndex - 1 : rowIndex + 1, target.column.visibleIndex,
                (obj: any) => {
                   obj.target.activate();
               });
        }
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);