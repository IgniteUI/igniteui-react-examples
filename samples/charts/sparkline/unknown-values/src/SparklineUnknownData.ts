export class SparklineUnknownDataItem {
    public constructor(init: Partial<SparklineUnknownDataItem>) {
        Object.assign(this, init);
    }

    public label: number;
    public value: number;

}
export class SparklineUnknownData extends Array<SparklineUnknownDataItem> {
    public constructor(items: Array<SparklineUnknownDataItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new SparklineUnknownDataItem({ label: 4, value: 4 }),
                new SparklineUnknownDataItem({ label: 5, value: 5 }),
                new SparklineUnknownDataItem({ label: 2, value: null }),
                new SparklineUnknownDataItem({ label: 7, value: 7 }),
                new SparklineUnknownDataItem({ label: -1, value: -1 }),
                new SparklineUnknownDataItem({ label: 3, value: 3 }),
                new SparklineUnknownDataItem({ label: -2, value: -2 }),
                new SparklineUnknownDataItem({ label: 5, value: null }),
                new SparklineUnknownDataItem({ label: 2, value: 2 }),
                new SparklineUnknownDataItem({ label: 6, value: 6 }),
            ];
            super(...newItems.slice(0));
        }
    }
}
