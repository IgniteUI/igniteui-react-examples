export class DataItem {
    public constructor(init: Partial<DataItem>) {
        Object.assign(this, init);
    }
    
    public shop: string;
    public percent: number;

}
export class Data extends Array<DataItem> {
    public constructor() {
        super();
        this.push(new DataItem(
        {
            shop: `Amazon`,
            percent: 63
        }));
        this.push(new DataItem(
        {
            shop: `Search Engines`,
            percent: 48
        }));
        this.push(new DataItem(
        {
            shop: `Retailer Sites`,
            percent: 33
        }));
        this.push(new DataItem(
        {
            shop: `Other Marketplaces`,
            percent: 25
        }));
        this.push(new DataItem(
        {
            shop: `At the Website of the Brand`,
            percent: 21
        }));
        this.push(new DataItem(
        {
            shop: `Comparison Sites`,
            percent: 10
        }));
        this.push(new DataItem(
        {
            shop: `Social Media`,
            percent: 8
        }));
        this.push(new DataItem(
        {
            shop: `Other`,
            percent: 2
        }));
    }
}
