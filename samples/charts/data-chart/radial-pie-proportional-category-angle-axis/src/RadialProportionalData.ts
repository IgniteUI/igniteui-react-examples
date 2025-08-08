export class RadialProportionalDataItem {
    public constructor(init: Partial<RadialProportionalDataItem>) {
        Object.assign(this, init);
    }

    public label: string;
    public value: number;
    public radius: number;
    public radius2: number;

}
export class RadialProportionalData extends Array<RadialProportionalDataItem> {
    public constructor(items: Array<RadialProportionalDataItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new RadialProportionalDataItem({ label: `A`, value: 100, radius: 75, radius2: 50 }),
                new RadialProportionalDataItem({ label: `B`, value: 100, radius: 100, radius2: 75 }),
                new RadialProportionalDataItem({ label: `C`, value: 100, radius: 80, radius2: 140 }),
                new RadialProportionalDataItem({ label: `D`, value: 100, radius: 60, radius2: 220 }),
                new RadialProportionalDataItem({ label: `E`, value: 100, radius: 90, radius2: 30 }),
                new RadialProportionalDataItem({ label: `F`, value: 100, radius: 95, radius2: 120 }),
                new RadialProportionalDataItem({ label: `G`, value: 100, radius: 100, radius2: 200 }),
                new RadialProportionalDataItem({ label: `H`, value: 100, radius: 80, radius2: 120 }),
            ];
            super(...newItems.slice(0));
        }
    }
}
