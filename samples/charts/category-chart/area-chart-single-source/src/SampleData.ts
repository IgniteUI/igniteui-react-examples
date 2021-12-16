export class DataItem {
    public constructor(init: Partial<DataItem>) {
        Object.assign(this, init);
    }
    
    public year: string;
    public europe: number;

}
export class Data extends Array<DataItem> {
    public constructor() {
        super();
        this.push(new DataItem(
        {
            year: `2009`,
            europe: 34
        }));
        this.push(new DataItem(
        {
            year: `2010`,
            europe: 43
        }));
        this.push(new DataItem(
        {
            year: `2011`,
            europe: 66
        }));
        this.push(new DataItem(
        {
            year: `2012`,
            europe: 69
        }));
        this.push(new DataItem(
        {
            year: `2013`,
            europe: 58
        }));
        this.push(new DataItem(
        {
            year: `2014`,
            europe: 40
        }));
        this.push(new DataItem(
        {
            year: `2015`,
            europe: 78
        }));
        this.push(new DataItem(
        {
            year: `2016`,
            europe: 13
        }));
        this.push(new DataItem(
        {
            year: `2017`,
            europe: 78
        }));
        this.push(new DataItem(
        {
            year: `2018`,
            europe: 40
        }));
        this.push(new DataItem(
        {
            year: `2018`,
            europe: 40
        }));
        this.push(new DataItem(
        {
            year: `2019`,
            europe: 80
        }));
    }
}
