export class AnnotationDataItem {
    public constructor(init: Partial<AnnotationDataItem>) {
        Object.assign(this, init);
    }

    public startLabel: string;
    public endLabel: string;
    public startX: number;
    public startY: number;
    public endX: number;
    public endY: number;
    public value: number;
    public label: string;

}
export class AnnotationData extends Array<AnnotationDataItem> {
    public constructor(items: Array<AnnotationDataItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new AnnotationDataItem(
                {
                    startLabel: `Growth Start`,
                    endLabel: `Growth Stop`,
                    startX: 48,
                    startY: 110,
                    endX: 105,
                    endY: 335,
                    value: 170,
                    label: `Rapid Growth`
                }),
            ];
            super(...newItems.slice(0));
        }
    }
}
