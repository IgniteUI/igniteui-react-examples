export class TemperatureAverageDataItem {
    public constructor(init: Partial<TemperatureAverageDataItem>) {
        Object.assign(this, init);
    }

    public month: string;
    public temperature: number;

}
export class TemperatureAverageData extends Array<TemperatureAverageDataItem> {
    public constructor() {
        super();
        this.push(new TemperatureAverageDataItem(
        {
            month: `Jan`,
            temperature: 3
        }));
        this.push(new TemperatureAverageDataItem(
        {
            month: `Feb`,
            temperature: 4
        }));
        this.push(new TemperatureAverageDataItem(
        {
            month: `Mar`,
            temperature: 9
        }));
        this.push(new TemperatureAverageDataItem(
        {
            month: `Apr`,
            temperature: 15
        }));
        this.push(new TemperatureAverageDataItem(
        {
            month: `May`,
            temperature: 21
        }));
        this.push(new TemperatureAverageDataItem(
        {
            month: `Jun`,
            temperature: 26
        }));
        this.push(new TemperatureAverageDataItem(
        {
            month: `Jul`,
            temperature: 29
        }));
        this.push(new TemperatureAverageDataItem(
        {
            month: `Aug`,
            temperature: 28
        }));
        this.push(new TemperatureAverageDataItem(
        {
            month: `Sep`,
            temperature: 24
        }));
        this.push(new TemperatureAverageDataItem(
        {
            month: `Oct`,
            temperature: 18
        }));
        this.push(new TemperatureAverageDataItem(
        {
            month: `Nov`,
            temperature: 11
        }));
        this.push(new TemperatureAverageDataItem(
        {
            month: `Dec`,
            temperature: 5
        }));
    }
}
