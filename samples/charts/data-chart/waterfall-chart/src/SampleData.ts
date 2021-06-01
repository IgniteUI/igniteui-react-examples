export class DataItem {
    public constructor(init: Partial<DataItem>) {
        Object.assign(this, init);
    }
    
    public costs: number;
    public netIncome: any;
    public category: string;

}
export class Data extends Array<DataItem> {
    public constructor() {
        super();
        this.push(new DataItem(
        {
            costs: 55,
            netIncome: null,
            category: `Revenue`
        }));
        this.push(new DataItem(
        {
            costs: 45,
            netIncome: null,
            category: `Expenses`
        }));
        this.push(new DataItem(
        {
            costs: 35,
            netIncome: null,
            category: `Research`
        }));
        this.push(new DataItem(
        {
            costs: 28,
            netIncome: null,
            category: `Marketing`
        }));
        this.push(new DataItem(
        {
            costs: 25,
            netIncome: null,
            category: `Administration`
        }));
        this.push(new DataItem(
        {
            costs: 55,
            netIncome: null,
            category: `Total Costs`
        }));
        this.push(new DataItem(
        {
            costs: 0,
            netIncome: null,
            category: `Net Income`
        }));
    }
}
