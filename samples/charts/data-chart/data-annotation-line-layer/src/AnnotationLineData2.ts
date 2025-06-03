export class AnnotationLineData2Item {
    public constructor(init: Partial<AnnotationLineData2Item>) {
        Object.assign(this, init);
    }

    public startX: number;
    public startY: number;
    public endX: number;
    public endY: number;
    public label: string;

}
export class AnnotationLineData2 extends Array<AnnotationLineData2Item> {
    public constructor(items: Array<AnnotationLineData2Item> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new AnnotationLineData2Item(
                {
                    startX: 48,
                    startY: 25,
                    endX: 105,
                    endY: 250,
                    label: `Growth &
Support`
                }),
                new AnnotationLineData2Item(
                {
                    startX: 108,
                    startY: 440,
                    endX: 155,
                    endY: 210,
                    label: `Decline &
Resistance`
                }),
            ];
            super(...newItems.slice(0));
        }
    }
}
