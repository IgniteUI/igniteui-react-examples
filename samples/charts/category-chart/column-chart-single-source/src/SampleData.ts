export class DataItem {
    public constructor(init: Partial<DataItem>) {
        Object.assign(this, init);
    }
    
    public month: string;
    public temperature: number;

}
export class Data extends Array<DataItem> {
    public constructor() {
        super();
        this.push(new DataItem(
        {
            month: `January`,
            temperature: 3
        }));
        this.push(new DataItem(
        {
            month: `February`,
            temperature: 4
        }));
        this.push(new DataItem(
        {
            month: `March`,
            temperature: 9
        }));
        this.push(new DataItem(
        {
            month: `April`,
            temperature: 15
        }));
        this.push(new DataItem(
        {
            month: `May`,
            temperature: 21
        }));
        this.push(new DataItem(
        {
            month: `June`,
            temperature: 26
        }));
        this.push(new DataItem(
        {
            month: `July`,
            temperature: 29
        }));
        this.push(new DataItem(
        {
            month: `August`,
            temperature: 28
        }));
        this.push(new DataItem(
        {
            month: `September`,
            temperature: 24
        }));
        this.push(new DataItem(
        {
            month: `October`,
            temperature: 18
        }));
        this.push(new DataItem(
        {
            month: `November`,
            temperature: 11
        }));
        this.push(new DataItem(
        {
            month: `December`,
            temperature: 5
        }));
    }
}
