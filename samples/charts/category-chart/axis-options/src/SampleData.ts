export class DataItem {
    public constructor(init: Partial<DataItem>) {
        Object.assign(this, init);
    }
    
    public year: string;
    public uSA: number;
    public cHN: number;
    public rUS: number;

}
export class Data extends Array<DataItem> {
    public constructor() {
        super();
        this.push(new DataItem(
        {
            year: `1996`,
            uSA: 148,
            cHN: 110,
            rUS: 95
        }));
        this.push(new DataItem(
        {
            year: `2000`,
            uSA: 142,
            cHN: 115,
            rUS: 91
        }));
        this.push(new DataItem(
        {
            year: `2004`,
            uSA: 134,
            cHN: 121,
            rUS: 86
        }));
        this.push(new DataItem(
        {
            year: `2008`,
            uSA: 131,
            cHN: 129,
            rUS: 65
        }));
        this.push(new DataItem(
        {
            year: `2012`,
            uSA: 135,
            cHN: 115,
            rUS: 77
        }));
        this.push(new DataItem(
        {
            year: `2016`,
            uSA: 146,
            cHN: 112,
            rUS: 88
        }));
    }
}
