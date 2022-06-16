export class SparklineProfitDataItem {
    public constructor(init: Partial<SparklineProfitDataItem>) {
        Object.assign(this, init);
    }
    
    public value: number;
    public label: string;

}
export class SparklineProfitData extends Array<SparklineProfitDataItem> {
    public constructor() {
        super();
        this.push(new SparklineProfitDataItem(
        {
            value: 30,
            label: `A`
        }));
        this.push(new SparklineProfitDataItem(
        {
            value: 40,
            label: `B`
        }));
        this.push(new SparklineProfitDataItem(
        {
            value: 50,
            label: `C`
        }));
        this.push(new SparklineProfitDataItem(
        {
            value: 40,
            label: `D`
        }));
        this.push(new SparklineProfitDataItem(
        {
            value: 30,
            label: `E`
        }));
        this.push(new SparklineProfitDataItem(
        {
            value: 20,
            label: `F`
        }));
        this.push(new SparklineProfitDataItem(
        {
            value: 30,
            label: `G`
        }));
        this.push(new SparklineProfitDataItem(
        {
            value: 40,
            label: `H`
        }));
    }
}
