export class AnnotationStripDataItem {
    public constructor(init: Partial<AnnotationStripDataItem>) {
        Object.assign(this, init);
    }

    public start: number;
    public end: number;
    public label: string;

}
export class AnnotationStripData extends Array<AnnotationStripDataItem> {
    public constructor(items: Array<AnnotationStripDataItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new AnnotationStripDataItem({ start: 40, end: 45, label: `Covid - Market Crash` }),
                new AnnotationStripDataItem({ start: 100, end: 144, label: `Fed Rate Up  0.25 - 5.25%` }),
                new AnnotationStripDataItem({ start: 190, end: 205, label: `Fed Rate Down 5.25% to 4.45%` }),
            ];
            super(...newItems.slice(0));
        }
    }
}
