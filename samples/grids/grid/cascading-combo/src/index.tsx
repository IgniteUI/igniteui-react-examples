import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrGridModule } from 'igniteui-react-grids';
import { IgrComboModule } from 'igniteui-react';
import { IgrGrid, IgrColumn } from 'igniteui-react-grids';
import { WorldCitiesAbove500KItem, WorldCitiesAbove500K } from './WorldCitiesAbove500K';
import { IgrCombo, IgrLinearProgress } from 'igniteui-react';
import { IgrCellTemplateContext } from 'igniteui-react-grids';

import 'igniteui-react-grids/grids/combined';
import 'igniteui-react-grids/grids/themes/light/bootstrap.css';

const mods: any[] = [
    IgrGridModule,
    IgrComboModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private grid1: IgrGrid
    private grid1Ref(r: IgrGrid) {
        this.grid1 = r;
        this.setState({});
    }
    private column1: IgrColumn
    private column2: IgrColumn
    private column3: IgrColumn

    constructor(props: any) {
        super(props);

        this.grid1Ref = this.grid1Ref.bind(this);
        this.webGridWithComboRendered = this.webGridWithComboRendered.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample ig-typography">

            <div className="container fill">
                <IgrGrid
                    autoGenerate="false"
                    data={this.worldCitiesAbove500K}
                    primaryKey="ID"
                    rendered={this.webGridWithComboRendered}
                    ref={this.grid1Ref}>
                    <IgrColumn
                        field="ID"
                        header="ID"
                        dataType="Number">
                    </IgrColumn>
                    <IgrColumn
                        field="Country"
                        header="Country"
                        bodyTemplate={this.webGridCountryDropDownTemplate}
                        name="column1">
                    </IgrColumn>
                    <IgrColumn
                        field="Region"
                        header="Region"
                        bodyTemplate={this.webGridRegionDropDownTemplate}
                        name="column2">
                    </IgrColumn>
                    <IgrColumn
                        field="City"
                        header="City"
                        bodyTemplate={this.webGridCityDropDownTemplate}
                        name="column3">
                    </IgrColumn>
                </IgrGrid>
            </div>
        </div>
        );
    }

    private _worldCitiesAbove500K: WorldCitiesAbove500K = null;
    public get worldCitiesAbove500K(): WorldCitiesAbove500K {
        if (this._worldCitiesAbove500K == null)
        {
            this._worldCitiesAbove500K = new WorldCitiesAbove500K();
        }
        return this._worldCitiesAbove500K;
    }


    public countryNames = [
        'United States',
        'Japan',
        'United Kingdom'
    ];
    public countries = [...this.worldCitiesAbove500K].filter(x => this.countryNames.indexOf(x.Country) !== -1).filter((value, index, array) => array.findIndex(x => x.Country === value.Country) === index);
    public regions = [...this.worldCitiesAbove500K].filter((value, index, array) => array.findIndex(x => x.Region === value.Region) === index);
    public cities = [...this.worldCitiesAbove500K].filter((value, index, array) => array.findIndex(x => x.Name === value.Name) === index);
    public webGridWithComboRendered(args:any): void {
        const grid = CodeGenHelper.getDescription<IgrGrid>("content");
        grid.data = [
            {
              ID: 1,
              Country: '',
              Region: '',
              City: ''
            },
            {
              ID: 2,
              Country: '',
              Region: '',
              City: ''
            },
            {
              ID: 3,
              Country: '',
              Region: '',
              City: ''
            }
        ];

        setTimeout(() => {
            for (let index = 0; index < grid.data.length; index++) {
                const rowId = grid.data[index].ID;
                this.bindEventsCountryCombo(rowId, grid.getCellByKey(rowId , "Country"));
                this.bindEventsRegionCombo(rowId, grid.getCellByKey(rowId , "Region"));
                this.bindEventsCityCombo(rowId, grid.getCellByKey(rowId , "City"));
            }
        }, 100);
    }

    public bindEventsCountryCombo(rowId: any, cell: any) {
        const comboId = "country_" + rowId;
        var combo = document.getElementById(comboId) as IgrCombo<any>;
        combo?.addEventListener("igcChange", (e:any) => {
            const value = e.detail.newValue[0];
            cell.update(value);
            const nextCombo = document.getElementById("region_" + cell.id.rowID) as IgrCombo<any>;
            const nextProgress = document.getElementById("progress_region_" + cell.id.rowID) as IgrLinearProgress;
            if (value === "") {
                nextCombo.deselect(nextCombo.value);
                nextCombo.disabled = true;
                nextCombo.data = [];
            } else {
                nextProgress.style.display = "block";
                setTimeout(() => {
                    nextProgress.style.display = "none";
                    nextCombo.disabled = false;
                    nextCombo.data = this.regions.filter(x => x.Country === value);
                }, 2000);

            }
        });
        combo?.addEventListener("igcOpening", (e:any) => {
            var currCombo = e.target;
            if (currCombo.data.length === 0) {
                combo.data = this.countries;
            };
        });
    }

    public bindEventsRegionCombo(rowId: any, cell: any) {
        const comboId = "region_" + rowId;
        var combo = document.getElementById(comboId) as IgrCombo<any>;
        combo?.addEventListener("igcChange", (e:any) => {
            const value = e.detail.newValue[0];
            cell.update(value);
            const nextCombo = document.getElementById("city_" + cell.id.rowID) as IgrCombo<any>;
            const nextProgress = document.getElementById("progress_city_" + cell.id.rowID) as IgrLinearProgress;
            if (value === "") {
                nextCombo.deselect(nextCombo.value);
                nextCombo.disabled = true;
                nextCombo.data = [];
            } else {
                nextProgress.style.display = "block";
                setTimeout(() => {
                    nextProgress.style.display = "none";
                    nextCombo.disabled = false;
                    nextCombo.data = this.cities.filter(x => x.Region === value);
                }, 2000);
            }
        });
    }

    public bindEventsCityCombo(rowId: any, cell: any) {
        const comboId = "city_" + rowId;
        var combo = document.getElementById(comboId) as IgrCombo<any>;
        combo?.addEventListener("igcChange", (e:any) => {
            const value = e.detail.newValue[0];
            cell.update(value);
        });
    }

    public webGridCountryDropDownTemplate = (props: {dataContext: IgrCellTemplateContext}) => {
        var cell = props.dataContext.cell as any;
        if (cell === undefined) {
            return <></>;
        }

        return (
        <>
            <IgrCombo placeholder="Choose Country..." valueKey="Country" displayKey="Country" singleSelect="true" id="${comboId}"></IgrCombo>
        </>
        );
    }

    public webGridRegionDropDownTemplate = (props: {dataContext: IgrCellTemplateContext}) => {
        var cell = props.dataContext.cell as any;
        if (cell === undefined) {
            return <></>;
        }
        const id = cell.id.rowID;
        const comboId = "region_" + id;
        return (
        <>
            <div style={{display: "flex", flexDirection: "column"}}>
                <IgrCombo placeholder="Choose Region..." disabled="true" valueKey="Region"  displayKey="Region" singleSelect="true" id={comboId}>
                </IgrCombo>
                <IgrLinearProgress style={{display: "none"}} indeterminate>
                </IgrLinearProgress>
            </div>
        </>
        );
    }

    public webGridCityDropDownTemplate = (props: {dataContext: IgrCellTemplateContext}) => {
        var cell = props.dataContext.cell as any;
        if (cell === undefined) {
            return <></>;
        }
        const id = cell.id.rowID;
        const comboId = "city_" + id;
        return (
        <>
            <div style={{display: "flex", flexDirection: "column"}}>
                <IgrCombo placeholder="Choose City..." disabled="true" valueKey="Name"  displayKey="Name" id={comboId} singleSelect="true">
                </IgrCombo>
                <IgrLinearProgress style={{display: "none"}} indeterminate>
                </IgrLinearProgress>
            </div>
        </>
        );
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);