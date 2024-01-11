export class OnlineTrafficHighlightDesktopOnlyItem {
    public constructor(init: Partial<OnlineTrafficHighlightDesktopOnlyItem>) {
        Object.assign(this, init);
    }

    public category: string;
    public value: number;

}
export class OnlineTrafficHighlightDesktopOnly extends Array<OnlineTrafficHighlightDesktopOnlyItem> {
    public constructor(items: Array<OnlineTrafficHighlightDesktopOnlyItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new OnlineTrafficHighlightDesktopOnlyItem(
                {
                    category: `Apparel`,
                    value: 27
                }),
                new OnlineTrafficHighlightDesktopOnlyItem(
                {
                    category: `Beauty`,
                    value: 29
                }),
                new OnlineTrafficHighlightDesktopOnlyItem(
                {
                    category: `Travel`,
                    value: 41
                }),
                new OnlineTrafficHighlightDesktopOnlyItem(
                {
                    category: `Grocery`,
                    value: 37
                }),
                new OnlineTrafficHighlightDesktopOnlyItem(
                {
                    category: `Energy`,
                    value: 58
                }),
                new OnlineTrafficHighlightDesktopOnlyItem(
                {
                    category: `Home Supply`,
                    value: 35
                }),
                new OnlineTrafficHighlightDesktopOnlyItem(
                {
                    category: `Financial`,
                    value: 58
                }),
            ];
            super(...(newItems.slice(0, items)));
        }
    }
}
