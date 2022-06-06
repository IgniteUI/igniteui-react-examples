export class EnergyGlobalDemandItem {
    public constructor(init: Partial<EnergyGlobalDemandItem>) {
        Object.assign(this, init);
    }
    
    public value: number;
    public category: string;
    public summary: string;

}
export class EnergyGlobalDemand extends Array<EnergyGlobalDemandItem> {
    public constructor() {
        super();
        this.push(new EnergyGlobalDemandItem(
        {
            value: 37,
            category: `Cooling`,
            summary: `Cooling 37%`
        }));
        this.push(new EnergyGlobalDemandItem(
        {
            value: 25,
            category: `Residential`,
            summary: `Residential 25%`
        }));
        this.push(new EnergyGlobalDemandItem(
        {
            value: 12,
            category: `Heating`,
            summary: `Heating 12%`
        }));
        this.push(new EnergyGlobalDemandItem(
        {
            value: 11,
            category: `Lighting`,
            summary: `Lighting 11%`
        }));
        this.push(new EnergyGlobalDemandItem(
        {
            value: 15,
            category: `Other`,
            summary: `Other 15%`
        }));
    }
}
