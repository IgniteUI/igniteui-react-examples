export class SparklineProfitDataItem {
    public constructor(init: Partial<SparklineProfitDataItem>) {
        Object.assign(this, init);
    }

    public value: number;
    public label: string;

}
export class SparklineProfitData extends Array<SparklineProfitDataItem> {
    public constructor(items: Array<SparklineProfitDataItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new SparklineProfitDataItem({ value: 30, label: `A` }),
                new SparklineProfitDataItem({ value: 40, label: `B` }),
                new SparklineProfitDataItem({ value: 50, label: `C` }),
                new SparklineProfitDataItem({ value: 40, label: `D` }),
                new SparklineProfitDataItem({ value: 30, label: `E` }),
                new SparklineProfitDataItem({ value: 20, label: `F` }),
                new SparklineProfitDataItem({ value: 30, label: `G` }),
                new SparklineProfitDataItem({ value: 40, label: `H` }),
            ];
            super(...newItems.slice(0));
        }
    }
}
