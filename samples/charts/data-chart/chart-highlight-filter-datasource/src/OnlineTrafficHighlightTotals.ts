export class OnlineTrafficHighlightTotalsItem {
    public constructor(init: Partial<OnlineTrafficHighlightTotalsItem>) {
        Object.assign(this, init);
    }

    public category: string;
    public value: number;

}
export class OnlineTrafficHighlightTotals extends Array<OnlineTrafficHighlightTotalsItem> {
    public constructor(items: Array<OnlineTrafficHighlightTotalsItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new OnlineTrafficHighlightTotalsItem(
                {
                    category: `Apparel`,
                    value: 100
                }),
                new OnlineTrafficHighlightTotalsItem(
                {
                    category: `Beauty`,
                    value: 100
                }),
                new OnlineTrafficHighlightTotalsItem(
                {
                    category: `Travel`,
                    value: 100
                }),
                new OnlineTrafficHighlightTotalsItem(
                {
                    category: `Grocery`,
                    value: 100
                }),
                new OnlineTrafficHighlightTotalsItem(
                {
                    category: `Energy`,
                    value: 100
                }),
                new OnlineTrafficHighlightTotalsItem(
                {
                    category: `Home Supply`,
                    value: 100
                }),
                new OnlineTrafficHighlightTotalsItem(
                {
                    category: `Financial`,
                    value: 100
                }),
            ];
            super(...(newItems.slice(0, items)));
        }
    }
}
