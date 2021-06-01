export class DataItem {
    public constructor(init: Partial<DataItem>) {
        Object.assign(this, init);
    }
    
    public category: string;
    public desktop: number;
    public mobile: number;
    public tablet: number;

}
export class Data extends Array<DataItem> {
    public constructor() {
        super();
        this.push(new DataItem(
        {
            category: `Apparel`,
            desktop: 27,
            mobile: 66,
            tablet: 7
        }));
        this.push(new DataItem(
        {
            category: `Beauty`,
            desktop: 29,
            mobile: 66,
            tablet: 5
        }));
        this.push(new DataItem(
        {
            category: `Travel`,
            desktop: 41,
            mobile: 51,
            tablet: 8
        }));
        this.push(new DataItem(
        {
            category: `Grocery`,
            desktop: 37,
            mobile: 57,
            tablet: 6
        }));
        this.push(new DataItem(
        {
            category: `Energy`,
            desktop: 58,
            mobile: 39,
            tablet: 3
        }));
        this.push(new DataItem(
        {
            category: `Home Supply`,
            desktop: 35,
            mobile: 56,
            tablet: 8
        }));
        this.push(new DataItem(
        {
            category: `Financial`,
            desktop: 58,
            mobile: 39,
            tablet: 3
        }));
    }
}
