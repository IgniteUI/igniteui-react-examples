export class DataItem {
    public constructor(init: Partial<DataItem>) {
        Object.assign(this, init);
    }
    
    public attribute: string;
    public ronaldoValue: number;
    public messiValue: number;

}
export class Data extends Array<DataItem> {
    public constructor() {
        super();
        this.push(new DataItem(
        {
            attribute: `Dribbling`,
            ronaldoValue: 8,
            messiValue: 10
        }));
        this.push(new DataItem(
        {
            attribute: `Passing`,
            ronaldoValue: 8,
            messiValue: 10
        }));
        this.push(new DataItem(
        {
            attribute: `Finishing`,
            ronaldoValue: 10,
            messiValue: 10
        }));
        this.push(new DataItem(
        {
            attribute: `Free Kicks`,
            ronaldoValue: 8,
            messiValue: 9
        }));
        this.push(new DataItem(
        {
            attribute: `Penalties`,
            ronaldoValue: 9,
            messiValue: 7
        }));
        this.push(new DataItem(
        {
            attribute: `Physical`,
            ronaldoValue: 10,
            messiValue: 7
        }));
        this.push(new DataItem(
        {
            attribute: `Team Play`,
            ronaldoValue: 7,
            messiValue: 9
        }));
        this.push(new DataItem(
        {
            attribute: `Heading`,
            ronaldoValue: 9,
            messiValue: 6
        }));
    }
}
