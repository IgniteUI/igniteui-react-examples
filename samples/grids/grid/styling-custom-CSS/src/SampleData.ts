export class LocalDataItem {
    public constructor(init: Partial<LocalDataItem>) {
        Object.assign(this, init);
    }

    public MarketShare: number;
    public Category: string;
    public Summary: string;

}
export class LocalData extends Array<LocalDataItem> {
    public constructor(items: Array<LocalDataItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new LocalDataItem(
                {
                    MarketShare: 37,
                    Category: `Cooling`,
                    Summary: `Cooling 37%`
                }),
                new LocalDataItem(
                {
                    MarketShare: 25,
                    Category: `Residential`,
                    Summary: `Residential 25%`
                }),
                new LocalDataItem(
                {
                    MarketShare: 12,
                    Category: `Heating`,
                    Summary: `Heating 12%`
                }),
                new LocalDataItem(
                {
                    MarketShare: 11,
                    Category: `Lighting`,
                    Summary: `Lighting 11%`
                }),
                new LocalDataItem(
                {
                    MarketShare: 15,
                    Category: `Other`,
                    Summary: `Other 15%`
                }),
            ];
            super(...newItems.slice(0));
        }
    }
}
