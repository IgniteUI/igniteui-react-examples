export class TemperatureAverageDataLongLabelsItem {
    public constructor(init: Partial<TemperatureAverageDataLongLabelsItem>) {
        Object.assign(this, init);
    }

    public month: string;
    public temperature: number;

}
export class TemperatureAverageDataLongLabels extends Array<TemperatureAverageDataLongLabelsItem> {
    public constructor(items: Array<TemperatureAverageDataLongLabelsItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new TemperatureAverageDataLongLabelsItem(
                {
                    month: `January`,
                    temperature: 3
                }),
                new TemperatureAverageDataLongLabelsItem(
                {
                    month: `February`,
                    temperature: 4
                }),
                new TemperatureAverageDataLongLabelsItem(
                {
                    month: `March`,
                    temperature: 9
                }),
                new TemperatureAverageDataLongLabelsItem(
                {
                    month: `April`,
                    temperature: 15
                }),
                new TemperatureAverageDataLongLabelsItem(
                {
                    month: `May`,
                    temperature: 21
                }),
                new TemperatureAverageDataLongLabelsItem(
                {
                    month: `Jun`,
                    temperature: 26
                }),
                new TemperatureAverageDataLongLabelsItem(
                {
                    month: `July`,
                    temperature: 29
                }),
                new TemperatureAverageDataLongLabelsItem(
                {
                    month: `August`,
                    temperature: 28
                }),
                new TemperatureAverageDataLongLabelsItem(
                {
                    month: `September`,
                    temperature: 24
                }),
                new TemperatureAverageDataLongLabelsItem(
                {
                    month: `October`,
                    temperature: 18
                }),
                new TemperatureAverageDataLongLabelsItem(
                {
                    month: `November`,
                    temperature: 11
                }),
                new TemperatureAverageDataLongLabelsItem(
                {
                    month: `December`,
                    temperature: 5
                }),
            ];
            super(...newItems.slice(0));
        }
    }
}
