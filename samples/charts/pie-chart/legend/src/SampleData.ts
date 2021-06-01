export class DataItem {
    public constructor(init: Partial<DataItem>) {
        Object.assign(this, init);
    }
    
    public marketShare: number;
    public category: string;
    public summary: string;

}
export class Data extends Array<DataItem> {
    public constructor() {
        super();
        this.push(new DataItem(
        {
            marketShare: 37,
            category: `Cooling`,
            summary: `Cooling 37%`
        }));
        this.push(new DataItem(
        {
            marketShare: 25,
            category: `Residential`,
            summary: `Residential 25%`
        }));
        this.push(new DataItem(
        {
            marketShare: 12,
            category: `Heating`,
            summary: `Heating 12%`
        }));
        this.push(new DataItem(
        {
            marketShare: 11,
            category: `Lighting`,
            summary: `Lighting 11%`
        }));
        this.push(new DataItem(
        {
            marketShare: 15,
            category: `Other`,
            summary: `Other 15%`
        }));
    }
}
