export class AnnotationSliceStockSplitDataItem {
    public constructor(init: Partial<AnnotationSliceStockSplitDataItem>) {
        Object.assign(this, init);
    }

    public value: number;
    public label: string;

}
export class AnnotationSliceStockSplitData extends Array<AnnotationSliceStockSplitDataItem> {
    public constructor(items: Array<AnnotationSliceStockSplitDataItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new AnnotationSliceStockSplitDataItem(
                {
                    value: 126,
                    label: `Stock Split 3-1`
                }),
                new AnnotationSliceStockSplitDataItem(
                {
                    value: 61,
                    label: `Stock Split 5-1`
                }),
            ];
            super(...newItems.slice(0));
        }
    }
}
