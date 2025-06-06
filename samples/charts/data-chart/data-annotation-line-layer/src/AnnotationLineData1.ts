export class AnnotationLineData1Item {
    public constructor(init: Partial<AnnotationLineData1Item>) {
        Object.assign(this, init);
    }

    public startX: number;
    public startY: number;
    public endX: number;
    public endY: number;
    public label: string;

}
export class AnnotationLineData1 extends Array<AnnotationLineData1Item> {
    public constructor(items: Array<AnnotationLineData1Item> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new AnnotationLineData1Item(
                {
                    startX: 190,
                    startY: 138,
                    endX: 230,
                    endY: 138,
                    label: `52-Week Low`
                }),
                new AnnotationLineData1Item(
                {
                    startX: 190,
                    startY: 481,
                    endX: 230,
                    endY: 481,
                    label: `52-Week High`
                }),
            ];
            super(...newItems.slice(0));
        }
    }
}
