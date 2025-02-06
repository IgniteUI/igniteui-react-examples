export class LocalDataItem {
    public constructor(init: Partial<LocalDataItem>) {
        Object.assign(this, init);
    }

    public v1: number;
    public category: string;

}
export class LocalData extends Array<LocalDataItem> {
    public constructor(items: Array<LocalDataItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new LocalDataItem(
                {
                    v1: 100,
                    category: `Maintenance`
                }),
                new LocalDataItem(
                {
                    v1: 40,
                    category: `Cooling`
                }),
                new LocalDataItem(
                {
                    v1: 20,
                    category: `Residential`
                }),
                new LocalDataItem(
                {
                    v1: 15,
                    category: `Utilities`
                }),
                new LocalDataItem(
                {
                    v1: 10,
                    category: `Heating`
                }),
                new LocalDataItem(
                {
                    v1: 5,
                    category: `Lighting`
                }),
                new LocalDataItem(
                {
                    v1: 4,
                    category: `Electric`
                }),
                new LocalDataItem(
                {
                    v1: 3,
                    category: `Misc`
                }),
            ];
            super(...newItems.slice(0));
        }
    }
}
