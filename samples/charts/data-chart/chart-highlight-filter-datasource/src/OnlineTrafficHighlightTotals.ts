export class OnlineTrafficHighlightTotalsItem {
    public constructor(init: Partial<OnlineTrafficHighlightTotalsItem>) {
        Object.assign(this, init);
    }

    public category: string;
    public value: number;

}
export class OnlineTrafficHighlightTotals extends Array<OnlineTrafficHighlightTotalsItem> {
    public constructor() {
        super();
        this.push(new OnlineTrafficHighlightTotalsItem(
        {
            category: `Apparel`,
            value: 100
        }));
        this.push(new OnlineTrafficHighlightTotalsItem(
        {
            category: `Beauty`,
            value: 100
        }));
        this.push(new OnlineTrafficHighlightTotalsItem(
        {
            category: `Travel`,
            value: 100
        }));
        this.push(new OnlineTrafficHighlightTotalsItem(
        {
            category: `Grocery`,
            value: 100
        }));
        this.push(new OnlineTrafficHighlightTotalsItem(
        {
            category: `Energy`,
            value: 100
        }));
        this.push(new OnlineTrafficHighlightTotalsItem(
        {
            category: `Home Supply`,
            value: 100
        }));
        this.push(new OnlineTrafficHighlightTotalsItem(
        {
            category: `Financial`,
            value: 100
        }));
    }
}
