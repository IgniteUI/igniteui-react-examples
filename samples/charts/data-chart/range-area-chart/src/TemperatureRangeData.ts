export class TemperatureRangeDataItem {
    public constructor(init: Partial<TemperatureRangeDataItem>) {
        Object.assign(this, init);
    }

    public month: string;
    public highNY: number;
    public lowNY: number;
    public highLA: number;
    public lowLA: number;

}
export class TemperatureRangeData extends Array<TemperatureRangeDataItem> {
    public constructor(items: Array<TemperatureRangeDataItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new TemperatureRangeDataItem(
                {
                    month: `Jan`,
                    highNY: 10.6,
                    lowNY: -6.6,
                    highLA: 28.3,
                    lowLA: 7.8
                }),
                new TemperatureRangeDataItem(
                {
                    month: `Feb`,
                    highNY: 7.8,
                    lowNY: -9.9,
                    highLA: 31.1,
                    lowLA: 5.6
                }),
                new TemperatureRangeDataItem(
                {
                    month: `Mar`,
                    highNY: 12.2,
                    lowNY: -3.8,
                    highLA: 27.8,
                    lowLA: 8.3
                }),
                new TemperatureRangeDataItem(
                {
                    month: `Apr`,
                    highNY: 11.7,
                    lowNY: 2.2,
                    highLA: 33.9,
                    lowLA: 10.6
                }),
                new TemperatureRangeDataItem(
                {
                    month: `May`,
                    highNY: 19.4,
                    lowNY: 1.1,
                    highLA: 35,
                    lowLA: 13.9
                }),
                new TemperatureRangeDataItem(
                {
                    month: `Jun`,
                    highNY: 23.3,
                    lowNY: 10.6,
                    highLA: 36.7,
                    lowLA: 16.1
                }),
                new TemperatureRangeDataItem(
                {
                    month: `Jul`,
                    highNY: 27.2,
                    lowNY: 19.4,
                    highLA: 33.3,
                    lowLA: 15.6
                }),
                new TemperatureRangeDataItem(
                {
                    month: `Aug`,
                    highNY: 25.6,
                    lowNY: 16.7,
                    highLA: 36.7,
                    lowLA: 15.6
                }),
                new TemperatureRangeDataItem(
                {
                    month: `Sep`,
                    highNY: 22.8,
                    lowNY: 8.9,
                    highLA: 43.9,
                    lowLA: 16.1
                }),
                new TemperatureRangeDataItem(
                {
                    month: `Oct`,
                    highNY: 17.8,
                    lowNY: 0,
                    highLA: 38.3,
                    lowLA: 11.1
                }),
                new TemperatureRangeDataItem(
                {
                    month: `Nov`,
                    highNY: 17.8,
                    lowNY: -1,
                    highLA: 32.8,
                    lowLA: 6.7
                }),
                new TemperatureRangeDataItem(
                {
                    month: `Dec`,
                    highNY: 8.3,
                    lowNY: -6.6,
                    highLA: 28.9,
                    lowLA: 5.6
                }),
            ];
            super(...newItems.slice(0));
        }
    }
}
