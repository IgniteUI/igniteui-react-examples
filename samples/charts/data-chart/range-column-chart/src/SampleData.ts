export class DataItem {
    public constructor(init: Partial<DataItem>) {
        Object.assign(this, init);
    }
    
    public month: string;
    public highNY: number;
    public lowNY: number;
    public highLA: number;
    public lowLA: number;

}
export class Data extends Array<DataItem> {
    public constructor() {
        super();
        this.push(new DataItem(
        {
            month: `January`,
            highNY: 10.6,
            lowNY: -6.6,
            highLA: 28.3,
            lowLA: 7.8
        }));
        this.push(new DataItem(
        {
            month: `February`,
            highNY: 7.8,
            lowNY: -9.9,
            highLA: 31.1,
            lowLA: 5.6
        }));
        this.push(new DataItem(
        {
            month: `March`,
            highNY: 12.2,
            lowNY: -3.8,
            highLA: 27.8,
            lowLA: 8.3
        }));
        this.push(new DataItem(
        {
            month: `Aprile`,
            highNY: 11.7,
            lowNY: 2.2,
            highLA: 33.9,
            lowLA: 10.6
        }));
        this.push(new DataItem(
        {
            month: `May`,
            highNY: 19.4,
            lowNY: 1.1,
            highLA: 35,
            lowLA: 13.9
        }));
        this.push(new DataItem(
        {
            month: `June`,
            highNY: 23.3,
            lowNY: 10.6,
            highLA: 36.7,
            lowLA: 16.1
        }));
        this.push(new DataItem(
        {
            month: `July`,
            highNY: 27.2,
            lowNY: 19.4,
            highLA: 33.3,
            lowLA: 15.6
        }));
        this.push(new DataItem(
        {
            month: `August`,
            highNY: 25.6,
            lowNY: 16.7,
            highLA: 36.7,
            lowLA: 15.6
        }));
        this.push(new DataItem(
        {
            month: `September`,
            highNY: 22.8,
            lowNY: 8.9,
            highLA: 43.9,
            lowLA: 16.1
        }));
        this.push(new DataItem(
        {
            month: `October`,
            highNY: 17.8,
            lowNY: 0,
            highLA: 38.3,
            lowLA: 11.1
        }));
        this.push(new DataItem(
        {
            month: `November`,
            highNY: 17.8,
            lowNY: -1,
            highLA: 32.8,
            lowLA: 6.7
        }));
        this.push(new DataItem(
        {
            month: `December`,
            highNY: 8.3,
            lowNY: -6.6,
            highLA: 28.9,
            lowLA: 5.6
        }));
    }
}
