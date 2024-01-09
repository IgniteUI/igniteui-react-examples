export class SparklineMixedDataItem {
    public constructor(init: Partial<SparklineMixedDataItem>) {
        Object.assign(this, init);
    }

    public label: string;
    public value: number;

}
export class SparklineMixedData extends Array<SparklineMixedDataItem> {
    public constructor(items: Array<SparklineMixedDataItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new SparklineMixedDataItem(
                {
                    label: `A`,
                    value: 30
                }),
                new SparklineMixedDataItem(
                {
                    label: `B`,
                    value: -10
                }),
                new SparklineMixedDataItem(
                {
                    label: `C`,
                    value: 40
                }),
                new SparklineMixedDataItem(
                {
                    label: `D`,
                    value: -20
                }),
                new SparklineMixedDataItem(
                {
                    label: `E`,
                    value: 30
                }),
                new SparklineMixedDataItem(
                {
                    label: `F`,
                    value: 40
                }),
                new SparklineMixedDataItem(
                {
                    label: `G`,
                    value: -10
                }),
                new SparklineMixedDataItem(
                {
                    label: `H`,
                    value: 30
                }),
            ];
            super(...(newItems.slice(0, items)));
        }
    }
}
