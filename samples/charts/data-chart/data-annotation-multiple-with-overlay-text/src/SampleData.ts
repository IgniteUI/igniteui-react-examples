export class AnnotationDataItem {
    public constructor(init: Partial<AnnotationDataItem>) {
        Object.assign(this, init);
    }

    public value: number;

}
export class AnnotationData extends Array<AnnotationDataItem> {
    public constructor(items: Array<AnnotationDataItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new AnnotationDataItem(
                {
                    value: 50
                }),
            ];
            super(...newItems.slice(0));
        }
    }
}
