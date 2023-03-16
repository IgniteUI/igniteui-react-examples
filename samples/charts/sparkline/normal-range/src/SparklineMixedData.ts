export class SparklineMixedDataItem {
    public constructor(init: Partial<SparklineMixedDataItem>) {
        Object.assign(this, init);
    }

    public label: string;
    public value: number;

}
export class SparklineMixedData extends Array<SparklineMixedDataItem> {
    public constructor() {
        super();
        this.push(new SparklineMixedDataItem(
        {
            label: `A`,
            value: 30
        }));
        this.push(new SparklineMixedDataItem(
        {
            label: `B`,
            value: -10
        }));
        this.push(new SparklineMixedDataItem(
        {
            label: `C`,
            value: 40
        }));
        this.push(new SparklineMixedDataItem(
        {
            label: `D`,
            value: -20
        }));
        this.push(new SparklineMixedDataItem(
        {
            label: `E`,
            value: 30
        }));
        this.push(new SparklineMixedDataItem(
        {
            label: `F`,
            value: 40
        }));
        this.push(new SparklineMixedDataItem(
        {
            label: `G`,
            value: -10
        }));
        this.push(new SparklineMixedDataItem(
        {
            label: `H`,
            value: 30
        }));
    }
}
