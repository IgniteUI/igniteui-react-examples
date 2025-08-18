export class TemperatureAnnotatedDataItem {
    public constructor(init: Partial<TemperatureAnnotatedDataItem>) {
        Object.assign(this, init);
    }

    public index: number;
    public tempInfo: string;
    public temperature: number;
    public month: string;

}
export class TemperatureAnnotatedData extends Array<TemperatureAnnotatedDataItem> {
    public constructor(items: Array<TemperatureAnnotatedDataItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new TemperatureAnnotatedDataItem({ index: 0, tempInfo: `27°C`, temperature: 27, month: `Jan` }),
                new TemperatureAnnotatedDataItem({ index: 1, tempInfo: `25°C`, temperature: 25, month: `Feb` }),
                new TemperatureAnnotatedDataItem({ index: 2, tempInfo: `21°C`, temperature: 21, month: `Mar` }),
                new TemperatureAnnotatedDataItem({ index: 3, tempInfo: `19°C`, temperature: 19, month: `Apr` }),
                new TemperatureAnnotatedDataItem({ index: 4, tempInfo: `16°C`, temperature: 16, month: `May` }),
                new TemperatureAnnotatedDataItem({ index: 5, tempInfo: `13°C`, temperature: 13, month: `Jun` }),
                new TemperatureAnnotatedDataItem({ index: 6, tempInfo: `14°C`, temperature: 14, month: `Jul` }),
                new TemperatureAnnotatedDataItem({ index: 7, tempInfo: `15°C`, temperature: 15, month: `Aug` }),
                new TemperatureAnnotatedDataItem({ index: 8, tempInfo: `19°C`, temperature: 19, month: `Sep` }),
                new TemperatureAnnotatedDataItem({ index: 9, tempInfo: `22°C`, temperature: 22, month: `Oct` }),
                new TemperatureAnnotatedDataItem({ index: 10, tempInfo: `26°C`, temperature: 26, month: `Nov` }),
                new TemperatureAnnotatedDataItem({ index: 11, tempInfo: `30°C`, temperature: 30, month: `Dec` }),
            ];
            super(...newItems.slice(0));
        }
    }
}
