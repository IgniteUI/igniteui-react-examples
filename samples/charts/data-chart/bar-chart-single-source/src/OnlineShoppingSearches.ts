export class OnlineShoppingSearchesItem {
    public constructor(init: Partial<OnlineShoppingSearchesItem>) {
        Object.assign(this, init);
    }

    public x: number;
    public y: number;
    public label: string;
    public percent: number;
    public shop: string;

}
export class OnlineShoppingSearches extends Array<OnlineShoppingSearchesItem> {
    public constructor() {
        super();
        this.push(new OnlineShoppingSearchesItem(
        {
            x: 63,
            y: 0,
            label: `63%`,
            percent: 63,
            shop: `Amazon`
        }));
        this.push(new OnlineShoppingSearchesItem(
        {
            x: 48,
            y: 1,
            label: `48%`,
            percent: 48,
            shop: `Search Engines`
        }));
        this.push(new OnlineShoppingSearchesItem(
        {
            x: 33,
            y: 2,
            label: `33%`,
            percent: 33,
            shop: `Retailer Sites`
        }));
        this.push(new OnlineShoppingSearchesItem(
        {
            x: 25,
            y: 3,
            label: `25%`,
            percent: 25,
            shop: `Marketplaces`
        }));
        this.push(new OnlineShoppingSearchesItem(
        {
            x: 21,
            y: 4,
            label: `21%`,
            percent: 21,
            shop: `Brand Website`
        }));
        this.push(new OnlineShoppingSearchesItem(
        {
            x: 10,
            y: 5,
            label: `10%`,
            percent: 10,
            shop: `Comparison Sites`
        }));
        this.push(new OnlineShoppingSearchesItem(
        {
            x: 8,
            y: 6,
            label: `8%`,
            percent: 8,
            shop: `Social Media`
        }));
        this.push(new OnlineShoppingSearchesItem(
        {
            x: 2,
            y: 7,
            label: `2%`,
            percent: 2,
            shop: `Other`
        }));
    }
}
