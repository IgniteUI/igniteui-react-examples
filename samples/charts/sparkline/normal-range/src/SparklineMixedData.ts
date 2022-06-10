export class SparklineMixedDataItem {
    public constructor(init: Partial<SparklineMixedDataItem>) {
        Object.assign(this, init);
    }
    
    public value: number;
    public category: string;
    public summary: string;

}
export class SparklineMixedData extends Array<SparklineMixedDataItem> {
    public constructor() {
        super();
        this.push(new SparklineMixedDataItem(
        {
            value: 37,
            category: `Cooling`,
            summary: `Cooling 37%`
        }));
        this.push(new SparklineMixedDataItem(
        {
            value: 25,
            category: `Residential`,
            summary: `Residential 25%`
        }));
        this.push(new SparklineMixedDataItem(
        {
            value: 12,
            category: `Heating`,
            summary: `Heating 12%`
        }));
        this.push(new SparklineMixedDataItem(
        {
            value: 11,
            category: `Lighting`,
            summary: `Lighting 11%`
        }));
        this.push(new SparklineMixedDataItem(
        {
            value: 15,
            category: `Other`,
            summary: `Other 15%`
        }));
    }
}
