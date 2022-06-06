export class CompanyMarketSharesItem {
    public constructor(init: Partial<CompanyMarketSharesItem>) {
        Object.assign(this, init);
    }
    
    public value: number;
    public category: string;
    public summary: string;

}
export class CompanyMarketShares extends Array<CompanyMarketSharesItem> {
    public constructor() {
        super();
        this.push(new CompanyMarketSharesItem(
        {
            value: 30,
            category: `Google`,
            summary: `Google 30%`
        }));
        this.push(new CompanyMarketSharesItem(
        {
            value: 25,
            category: `Apple`,
            summary: `Apple 25%`
        }));
        this.push(new CompanyMarketSharesItem(
        {
            value: 20,
            category: `Microsoft`,
            summary: `Microsoft 20%`
        }));
        this.push(new CompanyMarketSharesItem(
        {
            value: 15,
            category: `Samsung`,
            summary: `Samsung 15%`
        }));
        this.push(new CompanyMarketSharesItem(
        {
            value: 10,
            category: `Other`,
            summary: `Other 10%`
        }));
    }
}
