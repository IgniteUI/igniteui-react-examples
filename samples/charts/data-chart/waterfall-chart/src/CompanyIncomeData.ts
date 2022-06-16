export class CompanyIncomeDataItem {
    public constructor(init: Partial<CompanyIncomeDataItem>) {
        Object.assign(this, init);
    }
    
    public costs: number;
    public netIncome: number;
    public category: string;

}
export class CompanyIncomeData extends Array<CompanyIncomeDataItem> {
    public constructor() {
        super();
        this.push(new CompanyIncomeDataItem(
        {
            costs: 55,
            netIncome: null,
            category: `Revenue`
        }));
        this.push(new CompanyIncomeDataItem(
        {
            costs: 45,
            netIncome: null,
            category: `Expenses`
        }));
        this.push(new CompanyIncomeDataItem(
        {
            costs: 35,
            netIncome: null,
            category: `Research`
        }));
        this.push(new CompanyIncomeDataItem(
        {
            costs: 28,
            netIncome: null,
            category: `Marketing`
        }));
        this.push(new CompanyIncomeDataItem(
        {
            costs: 25,
            netIncome: null,
            category: `Administration`
        }));
        this.push(new CompanyIncomeDataItem(
        {
            costs: 55,
            netIncome: null,
            category: `Total Costs`
        }));
        this.push(new CompanyIncomeDataItem(
        {
            costs: 0,
            netIncome: 25,
            category: `Net Income`
        }));
    }
}
