export class CompanyMarketSharesItem {
    public constructor(init: Partial<CompanyMarketSharesItem>) {
        Object.assign(this, init);
    }

    public value: number;
    public category: string;
    public summary: string;

}
export class CompanyMarketShares extends Array<CompanyMarketSharesItem> {
    public constructor(items: Array<CompanyMarketSharesItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new CompanyMarketSharesItem(
                {
                    value: 30,
                    category: `Google`,
                    summary: `Google 30%`
                }),
                new CompanyMarketSharesItem(
                {
                    value: 25,
                    category: `Apple`,
                    summary: `Apple 25%`
                }),
                new CompanyMarketSharesItem(
                {
                    value: 20,
                    category: `Microsoft`,
                    summary: `Microsoft 20%`
                }),
                new CompanyMarketSharesItem(
                {
                    value: 15,
                    category: `Samsung`,
                    summary: `Samsung 15%`
                }),
                new CompanyMarketSharesItem(
                {
                    value: 10,
                    category: `Other`,
                    summary: `Other 10%`
                }),
            ];
            super(...(newItems.slice(0, items)));
        }
    }
}
