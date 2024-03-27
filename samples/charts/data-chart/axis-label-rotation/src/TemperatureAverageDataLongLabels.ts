export class TemperatureAverageDataLongLabelsItem {
    public constructor(init: Partial<TemperatureAverageDataLongLabelsItem>) {
        Object.assign(this, init);
    }

    public month: string;
    public temperature: number;

}
export class TemperatureAverageDataLongLabels extends Array<TemperatureAverageDataLongLabelsItem> {
    public constructor() {
        super();
        this.push(new TemperatureAverageDataLongLabelsItem(
        {
            month: `January`,
            temperature: 3
        }));
        this.push(new TemperatureAverageDataLongLabelsItem(
        {
            month: `February`,
            temperature: 4
        }));
        this.push(new TemperatureAverageDataLongLabelsItem(
        {
            month: `March`,
            temperature: 9
        }));
        this.push(new TemperatureAverageDataLongLabelsItem(
        {
            month: `April`,
            temperature: 15
        }));
        this.push(new TemperatureAverageDataLongLabelsItem(
        {
            month: `May`,
            temperature: 21
        }));
        this.push(new TemperatureAverageDataLongLabelsItem(
        {
            month: `Jun`,
            temperature: 26
        }));
        this.push(new TemperatureAverageDataLongLabelsItem(
        {
            month: `July`,
            temperature: 29
        }));
        this.push(new TemperatureAverageDataLongLabelsItem(
        {
            month: `August`,
            temperature: 28
        }));
        this.push(new TemperatureAverageDataLongLabelsItem(
        {
            month: `September`,
            temperature: 24
        }));
        this.push(new TemperatureAverageDataLongLabelsItem(
        {
            month: `October`,
            temperature: 18
        }));
        this.push(new TemperatureAverageDataLongLabelsItem(
        {
            month: `November`,
            temperature: 11
        }));
        this.push(new TemperatureAverageDataLongLabelsItem(
        {
            month: `December`,
            temperature: 5
        }));
    }
}
