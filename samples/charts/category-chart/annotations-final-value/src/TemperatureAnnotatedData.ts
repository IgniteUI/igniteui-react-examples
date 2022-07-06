export class TemperatureAnnotatedDataItem {
    public constructor(init: Partial<TemperatureAnnotatedDataItem>) {
        Object.assign(this, init);
    }
    
    public index: number;
    public temperature: number;
    public tempInfo: string;
    public month: string;

}
export class TemperatureAnnotatedData extends Array<TemperatureAnnotatedDataItem> {
    public constructor() {
        super();
        this.push(new TemperatureAnnotatedDataItem(
        {
            index: 0,
            temperature: 27,
            tempInfo: `27°C`,
            month: `Jan`
        }));
        this.push(new TemperatureAnnotatedDataItem(
        {
            index: 1,
            temperature: 25,
            tempInfo: `25°C`,
            month: `Feb`
        }));
        this.push(new TemperatureAnnotatedDataItem(
        {
            index: 2,
            temperature: 21,
            tempInfo: `21°C`,
            month: `Mar`
        }));
        this.push(new TemperatureAnnotatedDataItem(
        {
            index: 3,
            temperature: 19,
            tempInfo: `19°C`,
            month: `Apr`
        }));
        this.push(new TemperatureAnnotatedDataItem(
        {
            index: 4,
            temperature: 16,
            tempInfo: `16°C`,
            month: `May`
        }));
        this.push(new TemperatureAnnotatedDataItem(
        {
            index: 5,
            temperature: 13,
            tempInfo: `13°C`,
            month: `Jun`
        }));
        this.push(new TemperatureAnnotatedDataItem(
        {
            index: 6,
            temperature: 14,
            tempInfo: `14°C`,
            month: `Jul`
        }));
        this.push(new TemperatureAnnotatedDataItem(
        {
            index: 7,
            temperature: 15,
            tempInfo: `15°C`,
            month: `Aug`
        }));
        this.push(new TemperatureAnnotatedDataItem(
        {
            index: 8,
            temperature: 19,
            tempInfo: `19°C`,
            month: `Sep`
        }));
        this.push(new TemperatureAnnotatedDataItem(
        {
            index: 9,
            temperature: 22,
            tempInfo: `22°C`,
            month: `Oct`
        }));
        this.push(new TemperatureAnnotatedDataItem(
        {
            index: 10,
            temperature: 26,
            tempInfo: `26°C`,
            month: `Nov`
        }));
        this.push(new TemperatureAnnotatedDataItem(
        {
            index: 11,
            temperature: 30,
            tempInfo: `30°C`,
            month: `Dec`
        }));
    }
}
