export class AnnotationBandDataItem {
    public constructor(init: Partial<AnnotationBandDataItem>) {
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
export class AnnotationBandData extends Array<AnnotationBandDataItem> {
    public constructor(items: Array<AnnotationBandDataItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new AnnotationBandDataItem({ startLabel: `Growth Start`, endLabel: `Growth Stop`, startX: 48, startY: 110, endX: 105, endY: 335, value: 170, label: `Rapid Growth` }),
            ];
            super(...newItems.slice(0));
        }
    }
}
