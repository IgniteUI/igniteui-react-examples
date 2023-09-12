export class LocalDataItem {
    public constructor(init: Partial<LocalDataItem>) {
        Object.assign(this, init);
    }

    public MarketShare: number;
    public Category: string;
    public Summary: string;

}
export class LocalData extends Array<LocalDataItem> {
    public constructor() {
        super();
        this.push(new LocalDataItem(
        {
            MarketShare: 37,
            Category: `Cooling`,
            Summary: `Cooling 37%`
        }));
        this.push(new LocalDataItem(
        {
            MarketShare: 25,
            Category: `Residential`,
            Summary: `Residential 25%`
        }));
        this.push(new LocalDataItem(
        {
            MarketShare: 12,
            Category: `Heating`,
            Summary: `Heating 12%`
        }));
        this.push(new LocalDataItem(
        {
            MarketShare: 11,
            Category: `Lighting`,
            Summary: `Lighting 11%`
        }));
        this.push(new LocalDataItem(
        {
            MarketShare: 15,
            Category: `Other`,
            Summary: `Other 15%`
        }));
    }
}
