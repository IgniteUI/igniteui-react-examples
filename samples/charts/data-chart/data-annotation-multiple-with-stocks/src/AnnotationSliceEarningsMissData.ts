export class AnnotationSliceEarningsMissDataItem {
    public constructor(init: Partial<AnnotationSliceEarningsMissDataItem>) {
        Object.assign(this, init);
    }

    public value: number;
    public label: string;

}
export class AnnotationSliceEarningsMissData extends Array<AnnotationSliceEarningsMissDataItem> {
    public constructor(items: Array<AnnotationSliceEarningsMissDataItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new AnnotationSliceEarningsMissDataItem(
                {
                    value: 9,
                    label: `Earnings Miss`
                }),
                new AnnotationSliceEarningsMissDataItem(
                {
                    value: 179,
                    label: `Earnings Miss`
                }),
                new AnnotationSliceEarningsMissDataItem(
                {
                    value: 215,
                    label: `Earnings Miss`
                }),
            ];
            super(...newItems.slice(0));
        }
    }
}
