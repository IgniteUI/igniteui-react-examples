import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrGridModule } from "@infragistics/igniteui-react-grids";
import { IgrComboModule } from "@infragistics/igniteui-react";
import { IgrGrid, IgrColumn } from "@infragistics/igniteui-react-grids";
import { WorldCitiesAbove500KItem, WorldCitiesAbove500K } from './WorldCitiesAbove500K';
import { IgrCombo } from "@infragistics/igniteui-react";
import { IgrCellTemplateContext } from "@infragistics/igniteui-react-grids";

import "@infragistics/igniteui-react-grids/grids/combined";
import "@infragistics/igniteui-react-grids/grids/themes/light/bootstrap.css";

const mods: any[] = [
    IgrGridModule,
    IgrComboModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private grid: IgrGrid
    private gridRef(r: IgrGrid) {
        this.grid = r;
        this.setState({});
    }
    private column1: IgrColumn
    private column2: IgrColumn
    private column3: IgrColumn

    constructor(props: any) {
        super(props);

        this.gridRef = this.gridRef.bind(this);
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
                    ref={this.gridRef}
                    rendered={this.webGridWithComboRendered}>
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


    public webGridWithComboRendered(args: any) {
        console.log(args);
    }
    public countryNames = [
        'United States',
        'Japan',
        'United Kingdom'
    ];
    public countries = [...this.worldCitiesAbove500K].filter(x => this.countryNames.indexOf(x.Country) !== -1).filter((value, index, array) => array.findIndex(x => x.Country === value.Country) === index);
    public regions = [...this.worldCitiesAbove500K].filter((value, index, array) => array.findIndex(x => x.Region === value.Region) === index);
    public cities = [...this.worldCitiesAbove500K].filter((value, index, array) => array.findIndex(x => x.Name === value.Name) === index);
    private comboRefCollection = new Map<string, IgrCombo>();
    private comboRefs(r: IgrCombo) {
        if (this && r && !this.comboRefCollection.get((r as any).props.name)) {
            this.comboRefCollection.set((r as any).props.name, r);
        }
    }

    public onCountryChange( rowId: string, cmp: any, args:any) {
        // find next combo
        // args incomplete, so gte value from component on timeout as workaround.
        const regionCombo = this.comboRefCollection.get("region_" + rowId);
        const cityCombo = this.comboRefCollection.get("city_" + rowId);
        const regions = this.regions;
       setTimeout(() => {
            const newValue = cmp.value[0];
            if (newValue === undefined) {
                regionCombo.deselect(regionCombo.value);
                regionCombo.disabled = true;
                regionCombo.data = [];

                cityCombo.deselect(regionCombo.value);
                cityCombo.disabled = true;
                cityCombo.data = [];
            } else {
                regionCombo.disabled = false;
                regionCombo.data = regions.filter(x => x.Country === newValue);

                cityCombo.deselect(cityCombo.value);
                cityCombo.disabled = true;
                cityCombo.data = [];
            }
       });
    }

    public onRegionChange( rowId: string, cmp: any, args:any) {
        // find next combo
        // args incomplete
        const cityCombo = this.comboRefCollection.get("city_" + rowId);
        const cities = this.cities;
       setTimeout(() => {
            const newValue = cmp.value[0];
            if (newValue === undefined) {
                cityCombo.deselect(cityCombo.value);
                cityCombo.disabled = true;
                cityCombo.data = [];
            } else {
                cityCombo.disabled = false;
                cityCombo.data = cities.filter(x => x.Region === newValue);
            }
       });
    }

    public webGridCountryDropDownTemplate = (props: {dataContext: IgrCellTemplateContext}) => {
        var cell = props.dataContext.cell as any;
        if (cell === undefined) {
            return <></>;
        }
        this.comboRefs = this.comboRefs.bind(this);
        const id = cell.id.rowID;
        const comboId = "country" + id;
        return (
        <>
            <IgrCombo data={this.countries} ref={this.comboRefs} change={(x: any, args: any) => { this.onCountryChange(id, x, args) }} placeholder="Choose Country..." valueKey="Country" displayKey="Country" singleSelect="true" name={comboId}></IgrCombo>
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
        this.comboRefs = this.comboRefs.bind(this);
        return (
        <>
            <div style={{display: "flex", flexDirection: "column"}}>
                <IgrCombo ref={this.comboRefs} change={(x: any, args: any) => { this.onRegionChange(id, x, args) }} placeholder="Choose Region..." disabled="true" valueKey="Region"  displayKey="Region" singleSelect="true" name={comboId}>
                </IgrCombo>
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
        this.comboRefs = this.comboRefs.bind(this);
        return (
        <>
            <div style={{display: "flex", flexDirection: "column"}}>
                <IgrCombo ref={this.comboRefs} placeholder="Choose City..." disabled="true" valueKey="Name"  displayKey="Name" name={comboId} singleSelect="true">
                </IgrCombo>
            </div>
        </>
        );
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);