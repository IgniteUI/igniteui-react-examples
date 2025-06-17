export class AnnotationRectDataItem {
    public constructor(init: Partial<AnnotationRectDataItem>) {
        Object.assign(this, init);
    }

    public startX: number;
    public startY: number;
    public endX: number;
    public endY: number;
    public label: string;

}
export class AnnotationRectData extends Array<AnnotationRectDataItem> {
    public constructor(items: Array<AnnotationRectDataItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new AnnotationRectDataItem(
                {
                    startX: 85,
                    startY: 190,
                    endX: 140,
                    endY: 415,
                    label: `Head & Shoulders Pattern
  (Bearish Downtrend)`
                }),
                new AnnotationRectDataItem(
                {
                    startX: 53,
                    startY: 75,
                    endX: 230,
                    endY: 80,
                    label: `Price Gap (Bearish Target)`
                }),
            ];
            super(...newItems.slice(0));
        }
    }
}
