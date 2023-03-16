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
    public constructor() {
        super();
        this.push(new TemperatureAnnotatedDataItem(
        {
            index: 0,
            tempInfo: `27�C`,
            temperature: 27,
            month: `Jan`
        }));
        this.push(new TemperatureAnnotatedDataItem(
        {
            index: 1,
            tempInfo: `25�C`,
            temperature: 25,
            month: `Feb`
        }));
        this.push(new TemperatureAnnotatedDataItem(
        {
            index: 2,
            tempInfo: `21�C`,
            temperature: 21,
            month: `Mar`
        }));
        this.push(new TemperatureAnnotatedDataItem(
        {
            index: 3,
            tempInfo: `19�C`,
            temperature: 19,
            month: `Apr`
        }));
        this.push(new TemperatureAnnotatedDataItem(
        {
            index: 4,
            tempInfo: `16�C`,
            temperature: 16,
            month: `May`
        }));
        this.push(new TemperatureAnnotatedDataItem(
        {
            index: 5,
            tempInfo: `13�C`,
            temperature: 13,
            month: `Jun`
        }));
        this.push(new TemperatureAnnotatedDataItem(
        {
            index: 6,
            tempInfo: `14�C`,
            temperature: 14,
            month: `Jul`
        }));
        this.push(new TemperatureAnnotatedDataItem(
        {
            index: 7,
            tempInfo: `15�C`,
            temperature: 15,
            month: `Aug`
        }));
        this.push(new TemperatureAnnotatedDataItem(
        {
            index: 8,
            tempInfo: `19�C`,
            temperature: 19,
            month: `Sep`
        }));
        this.push(new TemperatureAnnotatedDataItem(
        {
            index: 9,
            tempInfo: `22�C`,
            temperature: 22,
            month: `Oct`
        }));
        this.push(new TemperatureAnnotatedDataItem(
        {
            index: 10,
            tempInfo: `26�C`,
            temperature: 26,
            month: `Nov`
        }));
        this.push(new TemperatureAnnotatedDataItem(
        {
            index: 11,
            tempInfo: `30�C`,
            temperature: 30,
            month: `Dec`
        }));
    }
}
