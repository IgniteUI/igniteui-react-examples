export class AnnotationSliceEarningsBeatDataItem {
    public constructor(init: Partial<AnnotationSliceEarningsBeatDataItem>) {
        Object.assign(this, init);
    }

    public value: number;
    public label: string;

}
export class AnnotationSliceEarningsBeatData extends Array<AnnotationSliceEarningsBeatDataItem> {
    public constructor(items: Array<AnnotationSliceEarningsBeatDataItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new AnnotationSliceEarningsBeatDataItem({ value: 155, label: `Earnings Beat` }),
                new AnnotationSliceEarningsBeatDataItem({ value: 86, label: `Earnings Beat` }),
                new AnnotationSliceEarningsBeatDataItem({ value: 28, label: `Earnings Miss` }),
            ];
            super(...newItems.slice(0));
        }
    }
}
