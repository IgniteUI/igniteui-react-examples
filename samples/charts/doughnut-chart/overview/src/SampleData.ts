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
            marketShare: 30,
            category: `Google`,
            summary: `Google 30%`
        }));
        this.push(new DataItem(
        {
            marketShare: 25,
            category: `Apple`,
            summary: `Apple 25%`
        }));
        this.push(new DataItem(
        {
            marketShare: 20,
            category: `Microsoft`,
            summary: `Microsoft 20%`
        }));
        this.push(new DataItem(
        {
            marketShare: 15,
            category: `Samsung`,
            summary: `Samsung 15%`
        }));
        this.push(new DataItem(
        {
            marketShare: 10,
            category: `Other`,
            summary: `Other 10%`
        }));
    }
}
