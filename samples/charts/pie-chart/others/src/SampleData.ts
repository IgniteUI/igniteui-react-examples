export class DataItem {
    public constructor(init: Partial<DataItem>) {
        Object.assign(this, init);
    }
    
    public marketShare: number;
    public summary: string;
    public category: string;

}
export class Data extends Array<DataItem> {
    public constructor() {
        super();
        this.push(new DataItem(
        {
            marketShare: 37,
            summary: `Cooling 37%`,
            category: `Cooling`
        }));
        this.push(new DataItem(
        {
            marketShare: 25,
            summary: `Residential 25%`,
            category: `Residential`
        }));
        this.push(new DataItem(
        {
            marketShare: 12,
            summary: `Heating 12%`,
            category: `Heating`
        }));
        this.push(new DataItem(
        {
            marketShare: 11,
            summary: `Lighting 11%`,
            category: `Lighting`
        }));
        this.push(new DataItem(
        {
            marketShare: 15,
            summary: `Other 15%`,
            category: `Other`
        }));
    }
}
