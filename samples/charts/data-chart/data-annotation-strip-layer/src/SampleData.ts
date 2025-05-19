export class AnnotationDataItem {
    public constructor(init: Partial<AnnotationDataItem>) {
        Object.assign(this, init);
    }

    public start: number;
    public end: number;
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
                    start: 40,
                    end: 45,
                    label: `Covid - Market Crash`
                }),
                new AnnotationDataItem(
                {
                    start: 100,
                    end: 144,
                    label: `Fed Rate Up  0.25 - 5.25%`
                }),
                new AnnotationDataItem(
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
