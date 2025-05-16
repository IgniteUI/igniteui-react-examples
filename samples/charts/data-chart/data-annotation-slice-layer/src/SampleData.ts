export class AnnotationData1Item {
    public constructor(init: Partial<AnnotationData1Item>) {
        Object.assign(this, init);
    }

    public value: number;
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
                    value: 126,
                    label: `Stock Split 3-1`
                }),
                new AnnotationData1Item(
                {
                    value: 61,
                    label: `Stock Split 5-1`
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

    public value: number;
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
                    value: 9,
                    label: `Earnings Miss`
                }),
                new AnnotationData2Item(
                {
                    value: 179,
                    label: `Earnings Miss`
                }),
                new AnnotationData2Item(
                {
                    value: 215,
                    label: `Earnings Miss`
                }),
            ];
            super(...newItems.slice(0));
        }
    }
}
export class AnnotationData3Item {
    public constructor(init: Partial<AnnotationData3Item>) {
        Object.assign(this, init);
    }

    public value: number;
    public label: string;

}
export class AnnotationData3 extends Array<AnnotationData3Item> {
    public constructor(items: Array<AnnotationData3Item> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new AnnotationData3Item(
                {
                    value: 155,
                    label: `Earnings Beat`
                }),
                new AnnotationData3Item(
                {
                    value: 86,
                    label: `Earnings Beat`
                }),
                new AnnotationData3Item(
                {
                    value: 28,
                    label: `Earnings Miss`
                }),
            ];
            super(...newItems.slice(0));
        }
    }
}
