export class StripAnnotationDataItem {
    public constructor(init: Partial<StripAnnotationDataItem>) {
        Object.assign(this, init);
    }

    public start: number;
    public end: number;
    public label: string;

}
export class StripAnnotationData extends Array<StripAnnotationDataItem> {
    public constructor(items: Array<StripAnnotationDataItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new StripAnnotationDataItem(
                {
                    start: 40,
                    end: 45,
                    label: `Covid - Market Crash`
                }),
                new StripAnnotationDataItem(
                {
                    start: 100,
                    end: 144,
                    label: `Fed Rate Up  0.25 - 5.25%`
                }),
                new StripAnnotationDataItem(
                {
                    start: 190,
                    end: 205,
                    label: `Fed Rate Down 5.25% to 4.45%`
                }),
            ];
            super(...newItems.slice(0));
        }
    }
}
export class LineAnnotationData1Item {
    public constructor(init: Partial<LineAnnotationData1Item>) {
        Object.assign(this, init);
    }

    public startX: number;
    public startY: number;
    public endX: number;
    public endY: number;
    public label: string;

}
export class LineAnnotationData1 extends Array<LineAnnotationData1Item> {
    public constructor(items: Array<LineAnnotationData1Item> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new LineAnnotationData1Item(
                {
                    startX: 190,
                    startY: 138,
                    endX: 230,
                    endY: 138,
                    label: `52-Week Low`
                }),
                new LineAnnotationData1Item(
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
export class LineAnnotationData2Item {
    public constructor(init: Partial<LineAnnotationData2Item>) {
        Object.assign(this, init);
    }

    public startX: number;
    public startY: number;
    public endX: number;
    public endY: number;
    public label: string;

}
export class LineAnnotationData2 extends Array<LineAnnotationData2Item> {
    public constructor(items: Array<LineAnnotationData2Item> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new LineAnnotationData2Item(
                {
                    startX: 48,
                    startY: 25,
                    endX: 105,
                    endY: 250,
                    label: `Growth &
Support`
                }),
                new LineAnnotationData2Item(
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
export class SliceAnnotationData1Item {
    public constructor(init: Partial<SliceAnnotationData1Item>) {
        Object.assign(this, init);
    }

    public value: number;
    public label: string;

}
export class SliceAnnotationData1 extends Array<SliceAnnotationData1Item> {
    public constructor(items: Array<SliceAnnotationData1Item> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new SliceAnnotationData1Item(
                {
                    value: 126,
                    label: `Stock Split 3-1`
                }),
                new SliceAnnotationData1Item(
                {
                    value: 61,
                    label: `Stock Split 5-1`
                }),
            ];
            super(...newItems.slice(0));
        }
    }
}
export class SliceAnnotationData2Item {
    public constructor(init: Partial<SliceAnnotationData2Item>) {
        Object.assign(this, init);
    }

    public value: number;
    public label: string;

}
export class SliceAnnotationData2 extends Array<SliceAnnotationData2Item> {
    public constructor(items: Array<SliceAnnotationData2Item> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new SliceAnnotationData2Item(
                {
                    value: 9,
                    label: `Earnings Miss`
                }),
                new SliceAnnotationData2Item(
                {
                    value: 179,
                    label: `Earnings Miss`
                }),
                new SliceAnnotationData2Item(
                {
                    value: 215,
                    label: `Earnings Miss`
                }),
            ];
            super(...newItems.slice(0));
        }
    }
}
export class SliceAnnotationData3Item {
    public constructor(init: Partial<SliceAnnotationData3Item>) {
        Object.assign(this, init);
    }

    public value: number;
    public label: string;

}
export class SliceAnnotationData3 extends Array<SliceAnnotationData3Item> {
    public constructor(items: Array<SliceAnnotationData3Item> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new SliceAnnotationData3Item(
                {
                    value: 155,
                    label: `Earnings Beat`
                }),
                new SliceAnnotationData3Item(
                {
                    value: 86,
                    label: `Earnings Beat`
                }),
                new SliceAnnotationData3Item(
                {
                    value: 28,
                    label: `Earnings Miss`
                }),
            ];
            super(...newItems.slice(0));
        }
    }
}
