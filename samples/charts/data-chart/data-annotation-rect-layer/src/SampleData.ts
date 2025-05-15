export class AnnotationDataItem {
    public constructor(init: Partial<AnnotationDataItem>) {
        Object.assign(this, init);
    }

    public startX: number;
    public startY: number;
    public endX: number;
    public endY: number;
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
                    startX: 85,
                    startY: 190,
                    endX: 140,
                    endY: 415,
                    label: `Head & Shoulders Pattern
  (Bearish Downtrend)`
                }),
                new AnnotationDataItem(
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
