export class DashboardGaugeDataSourceItem {
    public constructor(init: Partial<DashboardGaugeDataSourceItem>) {
        Object.assign(this, init);
    }

    public value: number;

}
export class DashboardGaugeDataSource extends Array<DashboardGaugeDataSourceItem> {
    public constructor(items: Array<DashboardGaugeDataSourceItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new DashboardGaugeDataSourceItem({ value: 40 }),
            ];
            super(...newItems.slice(0));
        }
    }
}
