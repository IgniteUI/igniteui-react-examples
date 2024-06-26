export class SelectableDataItem {
    public constructor(init: Partial<SelectableDataItem>) {
        Object.assign(this, init);
    }

    public category: string;
    public dataValue: number;
    public selectedValue: number;

}
export class SelectableData extends Array<SelectableDataItem> {
    public constructor(items: Array<SelectableDataItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new SelectableDataItem(
                {
                    category: `2010`,
                    dataValue: 20,
                    selectedValue: 20
                }),
                new SelectableDataItem(
                {
                    category: `2011`,
                    dataValue: 40,
                    selectedValue: null
                }),
                new SelectableDataItem(
                {
                    category: `2012`,
                    dataValue: 35,
                    selectedValue: null
                }),
                new SelectableDataItem(
                {
                    category: `2013`,
                    dataValue: 50,
                    selectedValue: 50
                }),
                new SelectableDataItem(
                {
                    category: `2014`,
                    dataValue: 45,
                    selectedValue: null
                }),
                new SelectableDataItem(
                {
                    category: `2015`,
                    dataValue: 60,
                    selectedValue: 60
                }),
                new SelectableDataItem(
                {
                    category: `2016`,
                    dataValue: 35,
                    selectedValue: null
                }),
                new SelectableDataItem(
                {
                    category: `2017`,
                    dataValue: 40,
                    selectedValue: null
                }),
                new SelectableDataItem(
                {
                    category: `2018`,
                    dataValue: 50,
                    selectedValue: 50
                }),
                new SelectableDataItem(
                {
                    category: `2019`,
                    dataValue: 75,
                    selectedValue: 75
                }),
                new SelectableDataItem(
                {
                    category: `2020`,
                    dataValue: 65,
                    selectedValue: null
                }),
                new SelectableDataItem(
                {
                    category: `2021`,
                    dataValue: 40,
                    selectedValue: null
                }),
                new SelectableDataItem(
                {
                    category: `2022`,
                    dataValue: 50,
                    selectedValue: null
                }),
                new SelectableDataItem(
                {
                    category: `2023`,
                    dataValue: 65,
                    selectedValue: 65
                }),
                new SelectableDataItem(
                {
                    category: `2024`,
                    dataValue: 70,
                    selectedValue: 70
                }),
                new SelectableDataItem(
                {
                    category: `2025`,
                    dataValue: 85,
                    selectedValue: null
                }),
            ];
            super(...newItems.slice(0));
        }
    }
}
