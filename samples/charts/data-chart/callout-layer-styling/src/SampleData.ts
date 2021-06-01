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
            europe: 31,
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
export class CalloutsItem {
    public constructor(init: Partial<CalloutsItem>) {
        Object.assign(this, init);
    }
    
    public index: number;
    public label: string;
    public value: number;

}
export class Callouts extends Array<CalloutsItem> {
    public constructor() {
        super();
        this.push(new CalloutsItem(
        {
            index: 0,
            label: `19 TWh`,
            value: 19
        }));
        this.push(new CalloutsItem(
        {
            index: 1,
            label: `24 TWh`,
            value: 24
        }));
        this.push(new CalloutsItem(
        {
            index: 2,
            label: `28 TWh`,
            value: 28
        }));
        this.push(new CalloutsItem(
        {
            index: 3,
            label: `26 TWh`,
            value: 26
        }));
        this.push(new CalloutsItem(
        {
            index: 4,
            label: `38 TWh`,
            value: 38
        }));
        this.push(new CalloutsItem(
        {
            index: 5,
            label: `31 TWh`,
            value: 31
        }));
        this.push(new CalloutsItem(
        {
            index: 6,
            label: `19 TWh`,
            value: 19
        }));
        this.push(new CalloutsItem(
        {
            index: 7,
            label: `52 TWh`,
            value: 52
        }));
        this.push(new CalloutsItem(
        {
            index: 8,
            label: `50 TWh`,
            value: 50
        }));
        this.push(new CalloutsItem(
        {
            index: 9,
            label: `34 TWh`,
            value: 34
        }));
        this.push(new CalloutsItem(
        {
            index: 10,
            label: `38 TWh`,
            value: 38
        }));
    }
}
