export class AnnotationSliceMultiOverlayDataItem {
    public constructor(init: Partial<AnnotationSliceMultiOverlayDataItem>) {
        Object.assign(this, init);
    }

    public value: number;

}
export class AnnotationSliceMultiOverlayData extends Array<AnnotationSliceMultiOverlayDataItem> {
    public constructor(items: Array<AnnotationSliceMultiOverlayDataItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new AnnotationSliceMultiOverlayDataItem(
                {
                    value: 50
                }),
            ];
            super(...newItems.slice(0));
        }
    }
}
