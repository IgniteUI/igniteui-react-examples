import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { LocalDataItem, LocalData } from './SampleData';
import { IgrGridModule } from 'igniteui-react-grids';
import { IgrGrid, IgrColumn } from 'igniteui-react-grids';

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
    private category: IgrColumn
    private marketShare: IgrColumn
    private summary: IgrColumn

    constructor(props: any) {
        super(props);

        this.gridRef = this.gridRef.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample ig-typography">

            <div className="container fill">
                <IgrGrid
                    autoGenerate={false}
                    data={this.localData}
                    id="grid"
                    ref={this.gridRef}
                    cellSelection="multiple"
                    columnSelection="multiple">
                    <IgrColumn
                        name="Category"
                        field="Category"
                        header="Category"
                        selectable={true}>
                    </IgrColumn>
                    <IgrColumn
                        name="MarketShare"
                        field="MarketShare"
                        header="Market Share"
                        selectable={true}>
                    </IgrColumn>
                    <IgrColumn
                        name="Summary"
                        field="Summary"
                        header="Summary"
                        selectable={false}>
                    </IgrColumn>
                </IgrGrid>
            </div>
        </div>
        );
    }

    private _localData: LocalData = null;
    public get localData(): LocalData {
        if (this._localData == null)
        {
            this._localData = new LocalData();
        }
        return this._localData;
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);