export class DataPieDataItem {
    public constructor(init: Partial<DataPieDataItem>) {
        Object.assign(this, init);
    }

    public v1: number;
    public category: string;

}
export class DataPieData extends Array<DataPieDataItem> {
    public constructor(items: Array<DataPieDataItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new DataPieDataItem(
                {
                    v1: 100,
                    category: `Maintenance`
                }),
                new DataPieDataItem(
                {
                    v1: 40,
                    category: `Cooling`
                }),
                new DataPieDataItem(
                {
                    v1: 20,
                    category: `Residential`
                }),
                new DataPieDataItem(
                {
                    v1: 15,
                    category: `Utilities`
                }),
                new DataPieDataItem(
                {
                    v1: 10,
                    category: `Heating`
                }),
                new DataPieDataItem(
                {
                    v1: 5,
                    category: `Lighting`
                }),
                new DataPieDataItem(
                {
                    v1: 4,
                    category: `Electric`
                }),
                new DataPieDataItem(
                {
                    v1: 3,
                    category: `Misc`
                }),
            ];
            super(...newItems.slice(0));
        }
    }
}
