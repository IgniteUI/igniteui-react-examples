export class SparklineUnknownDataItem {
    public constructor(init: Partial<SparklineUnknownDataItem>) {
        Object.assign(this, init);
    }

    public label: number;
    public value: number;

}
export class SparklineUnknownData extends Array<SparklineUnknownDataItem> {
    public constructor() {
        super();
        this.push(new SparklineUnknownDataItem(
        {
            label: 4,
            value: 4
        }));
        this.push(new SparklineUnknownDataItem(
        {
            label: 5,
            value: 5
        }));
        this.push(new SparklineUnknownDataItem(
        {
            label: 2,
            value: null
        }));
        this.push(new SparklineUnknownDataItem(
        {
            label: 7,
            value: 7
        }));
        this.push(new SparklineUnknownDataItem(
        {
            label: -1,
            value: -1
        }));
        this.push(new SparklineUnknownDataItem(
        {
            label: 3,
            value: 3
        }));
        this.push(new SparklineUnknownDataItem(
        {
            label: -2,
            value: -2
        }));
        this.push(new SparklineUnknownDataItem(
        {
            label: 5,
            value: null
        }));
        this.push(new SparklineUnknownDataItem(
        {
            label: 2,
            value: 2
        }));
        this.push(new SparklineUnknownDataItem(
        {
            label: 6,
            value: 6
        }));
    }
}
