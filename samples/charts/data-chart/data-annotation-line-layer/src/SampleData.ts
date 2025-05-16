export class AnnotationData1Item {
    public constructor(init: Partial<AnnotationData1Item>) {
        Object.assign(this, init);
    }

    public startX: number;
    public startY: number;
    public endX: number;
    public endY: number;
    public label: string;

}
export class AnnotationData1 extends Array<AnnotationData1Item> {
    public constructor(items: Array<AnnotationData1Item> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new AnnotationData1Item(
                {
                    startX: 190,
                    startY: 138,
                    endX: 230,
                    endY: 138,
                    label: `52-Week Low`
                }),
                new AnnotationData1Item(
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
export class AnnotationData2Item {
    public constructor(init: Partial<AnnotationData2Item>) {
        Object.assign(this, init);
    }

    public startX: number;
    public startY: number;
    public endX: number;
    public endY: number;
    public label: string;

}
export class AnnotationData2 extends Array<AnnotationData2Item> {
    public constructor(items: Array<AnnotationData2Item> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new AnnotationData2Item(
                {
                    startX: 48,
                    startY: 25,
                    endX: 105,
                    endY: 250,
                    label: `Growth &
Support`
                }),
                new AnnotationData2Item(
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
