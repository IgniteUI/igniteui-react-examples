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
export class CalloutsItem {
    public constructor(init: Partial<CalloutsItem>) {
        Object.assign(this, init);
    }
    
    public x: number;
    public y: number;
    public label: string;

}
export class Callouts extends Array<CalloutsItem> {
    public constructor() {
        super();
        this.push(new CalloutsItem(
        {
            x: 63,
            y: 0,
            label: `63%`
        }));
        this.push(new CalloutsItem(
        {
            x: 48,
            y: 1,
            label: `48%`
        }));
        this.push(new CalloutsItem(
        {
            x: 33,
            y: 2,
            label: `33%`
        }));
        this.push(new CalloutsItem(
        {
            x: 25,
            y: 3,
            label: `25%`
        }));
        this.push(new CalloutsItem(
        {
            x: 21,
            y: 4,
            label: `21%`
        }));
        this.push(new CalloutsItem(
        {
            x: 10,
            y: 5,
            label: `10%`
        }));
        this.push(new CalloutsItem(
        {
            x: 8,
            y: 6,
            label: `8%`
        }));
        this.push(new CalloutsItem(
        {
            x: 2,
            y: 7,
            label: `2%`
        }));
    }
}
