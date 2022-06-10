export class TemperatureAverageDataItem {
    public constructor(init: Partial<TemperatureAverageDataItem>) {
        Object.assign(this, init);
    }
    
    public marketShare: number;
    public category: string;
    public summary: string;

}
export class TemperatureAverageData extends Array<TemperatureAverageDataItem> {
    public constructor() {
        super();
        this.push(new TemperatureAverageDataItem(
        {
            marketShare: 30,
            category: `Google`,
            summary: `Google 30%`
        }));
        this.push(new TemperatureAverageDataItem(
        {
            marketShare: 25,
            category: `Apple`,
            summary: `Apple 25%`
        }));
        this.push(new TemperatureAverageDataItem(
        {
            marketShare: 20,
            category: `Microsoft`,
            summary: `Microsoft 20%`
        }));
        this.push(new TemperatureAverageDataItem(
        {
            marketShare: 15,
            category: `Samsung`,
            summary: `Samsung 15%`
        }));
        this.push(new TemperatureAverageDataItem(
        {
            marketShare: 10,
            category: `Other`,
            summary: `Other 10%`
        }));
    }
}
