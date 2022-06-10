export class TemperatureRangeDataItem {
    public constructor(init: Partial<TemperatureRangeDataItem>) {
        Object.assign(this, init);
    }
    
    public month: string;
    public nY_High: number;
    public nY_Low: number;
    public lA_High: number;
    public lA_Low: number;

}
export class TemperatureRangeData extends Array<TemperatureRangeDataItem> {
    public constructor() {
        super();
        this.push(new TemperatureRangeDataItem(
        {
            month: `Jan`,
            nY_High: 10.6,
            nY_Low: -6.6,
            lA_High: 28.3,
            lA_Low: 7.8
        }));
        this.push(new TemperatureRangeDataItem(
        {
            month: `Feb`,
            nY_High: 7.8,
            nY_Low: -9.9,
            lA_High: 31.1,
            lA_Low: 5.6
        }));
        this.push(new TemperatureRangeDataItem(
        {
            month: `Mar`,
            nY_High: 12.2,
            nY_Low: -3.8,
            lA_High: 27.8,
            lA_Low: 8.3
        }));
        this.push(new TemperatureRangeDataItem(
        {
            month: `Apr`,
            nY_High: 11.7,
            nY_Low: 2.2,
            lA_High: 33.9,
            lA_Low: 10.6
        }));
        this.push(new TemperatureRangeDataItem(
        {
            month: `May`,
            nY_High: 19.4,
            nY_Low: 1.1,
            lA_High: 35,
            lA_Low: 13.9
        }));
        this.push(new TemperatureRangeDataItem(
        {
            month: `Jun`,
            nY_High: 23.3,
            nY_Low: 10.6,
            lA_High: 36.7,
            lA_Low: 16.1
        }));
        this.push(new TemperatureRangeDataItem(
        {
            month: `Jul`,
            nY_High: 27.2,
            nY_Low: 19.4,
            lA_High: 33.3,
            lA_Low: 15.6
        }));
        this.push(new TemperatureRangeDataItem(
        {
            month: `Aug`,
            nY_High: 25.6,
            nY_Low: 16.7,
            lA_High: 36.7,
            lA_Low: 15.6
        }));
        this.push(new TemperatureRangeDataItem(
        {
            month: `Sep`,
            nY_High: 22.8,
            nY_Low: 8.9,
            lA_High: 43.9,
            lA_Low: 16.1
        }));
        this.push(new TemperatureRangeDataItem(
        {
            month: `Oct`,
            nY_High: 17.8,
            nY_Low: 0,
            lA_High: 38.3,
            lA_Low: 11.1
        }));
        this.push(new TemperatureRangeDataItem(
        {
            month: `Nov`,
            nY_High: 17.8,
            nY_Low: -1,
            lA_High: 32.8,
            lA_Low: 6.7
        }));
        this.push(new TemperatureRangeDataItem(
        {
            month: `Dec`,
            nY_High: 8.3,
            nY_Low: -6.6,
            lA_High: 28.9,
            lA_Low: 5.6
        }));
    }
}
