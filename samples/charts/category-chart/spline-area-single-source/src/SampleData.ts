export class DataItem {
    public constructor(init: Partial<DataItem>) {
        Object.assign(this, init);
    }
    
    public year: string;
    public europe: number;
    public china: number;
    public uSA: number;

}
export class Data extends Array<DataItem> {
    public constructor() {
        super();
        this.push(new DataItem(
        {
            year: `2009`,
            europe: 34,
            china: 21,
            uSA: 19
        }));
        this.push(new DataItem(
        {
            year: `2010`,
            europe: 43,
            china: 26,
            uSA: 24
        }));
        this.push(new DataItem(
        {
            year: `2011`,
            europe: 66,
            china: 29,
            uSA: 28
        }));
        this.push(new DataItem(
        {
            year: `2012`,
            europe: 69,
            china: 32,
            uSA: 26
        }));
        this.push(new DataItem(
        {
            year: `2013`,
            europe: 58,
            china: 47,
            uSA: 38
        }));
        this.push(new DataItem(
        {
            year: `2014`,
            europe: 40,
            china: 46,
            uSA: 31
        }));
        this.push(new DataItem(
        {
            year: `2015`,
            europe: 78,
            china: 50,
            uSA: 19
        }));
        this.push(new DataItem(
        {
            year: `2016`,
            europe: 13,
            china: 90,
            uSA: 52
        }));
        this.push(new DataItem(
        {
            year: `2017`,
            europe: 78,
            china: 132,
            uSA: 50
        }));
        this.push(new DataItem(
        {
            year: `2018`,
            europe: 40,
            china: 134,
            uSA: 34
        }));
        this.push(new DataItem(
        {
            year: `2019`,
            europe: 80,
            china: 96,
            uSA: 38
        }));
    }
}
