export class TemperatureAverageDataItem {
    public constructor(init: Partial<TemperatureAverageDataItem>) {
        Object.assign(this, init);
    }

    public month: string;
    public temperature: number;

}
export class TemperatureAverageData extends Array<TemperatureAverageDataItem> {
    public constructor(items: Array<TemperatureAverageDataItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new TemperatureAverageDataItem({ month: `Jan`, temperature: 3 }),
                new TemperatureAverageDataItem({ month: `Feb`, temperature: 4 }),
                new TemperatureAverageDataItem({ month: `Mar`, temperature: 9 }),
                new TemperatureAverageDataItem({ month: `Apr`, temperature: 15 }),
                new TemperatureAverageDataItem({ month: `May`, temperature: 21 }),
                new TemperatureAverageDataItem({ month: `Jun`, temperature: 26 }),
                new TemperatureAverageDataItem({ month: `Jul`, temperature: 29 }),
                new TemperatureAverageDataItem({ month: `Aug`, temperature: 28 }),
                new TemperatureAverageDataItem({ month: `Sep`, temperature: 24 }),
                new TemperatureAverageDataItem({ month: `Oct`, temperature: 18 }),
                new TemperatureAverageDataItem({ month: `Nov`, temperature: 11 }),
                new TemperatureAverageDataItem({ month: `Dec`, temperature: 5 }),
            ];
            super(...newItems.slice(0));
        }
    }
}
