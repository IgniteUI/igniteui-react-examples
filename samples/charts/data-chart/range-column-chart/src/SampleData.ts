export class DataItem {
    public constructor(init: Partial<DataItem>) {
        Object.assign(this, init);
    }

    public month: string;
    public HighNY: number;
    public LowNY: number;
    public HighLA: number;
    public LowLA: number;

}
export class Data extends Array<DataItem> {
    public constructor() {
        super();
        this.push(new DataItem(
        {
            month: `January`,
            HighNY: 10.6,
            LowNY: -6.6,
            HighLA: 28.3,
            LowLA: 7.8
        }));
        this.push(new DataItem(
        {
            month: `February`,
            HighNY: 7.8,
            LowNY: -9.9,
            HighLA: 31.1,
            LowLA: 5.6
        }));
        this.push(new DataItem(
        {
            month: `March`,
            HighNY: 12.2,
            LowNY: -3.8,
            HighLA: 27.8,
            LowLA: 8.3
        }));
        this.push(new DataItem(
        {
            month: `Aprile`,
            HighNY: 11.7,
            LowNY: 2.2,
            HighLA: 33.9,
            LowLA: 10.6
        }));
        this.push(new DataItem(
        {
            month: `May`,
            HighNY: 19.4,
            LowNY: 1.1,
            HighLA: 35,
            LowLA: 13.9
        }));
        this.push(new DataItem(
        {
            month: `June`,
            HighNY: 23.3,
            LowNY: 10.6,
            HighLA: 36.7,
            LowLA: 16.1
        }));
        this.push(new DataItem(
        {
            month: `July`,
            HighNY: 27.2,
            LowNY: 19.4,
            HighLA: 33.3,
            LowLA: 15.6
        }));
        this.push(new DataItem(
        {
            month: `August`,
            HighNY: 25.6,
            LowNY: 16.7,
            HighLA: 36.7,
            LowLA: 15.6
        }));
        this.push(new DataItem(
        {
            month: `September`,
            HighNY: 22.8,
            LowNY: 8.9,
            HighLA: 43.9,
            LowLA: 16.1
        }));
        this.push(new DataItem(
        {
            month: `October`,
            HighNY: 17.8,
            LowNY: 0,
            HighLA: 38.3,
            LowLA: 11.1
        }));
        this.push(new DataItem(
        {
            month: `November`,
            HighNY: 17.8,
            LowNY: -1,
            HighLA: 32.8,
            LowLA: 6.7
        }));
        this.push(new DataItem(
        {
            month: `December`,
            HighNY: 8.3,
            LowNY: -6.6,
            HighLA: 28.9,
            LowLA: 5.6
        }));
    }
}
