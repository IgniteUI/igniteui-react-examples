export class CountryTopUrbanPopDataItem {
    public constructor(init: Partial<CountryTopUrbanPopDataItem>) {
        Object.assign(this, init);
    }

    public code: string;
    public parent: string;
    public name: string;
    public population: number;
    public urbanPopulation: number;
    public urbanPopPercent: string;

}
export class CountryTopUrbanPopData extends Array<CountryTopUrbanPopDataItem> {
    public constructor(items: Array<CountryTopUrbanPopDataItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new CountryTopUrbanPopDataItem(
                {
                    code: `ASA`,
                    parent: null,
                    name: `Asia`,
                    population: null,
                    urbanPopulation: null,
                    urbanPopPercent: null
                }),
                new CountryTopUrbanPopDataItem(
                {
                    code: `NAM`,
                    parent: null,
                    name: `North America`,
                    population: null,
                    urbanPopulation: null,
                    urbanPopPercent: null
                }),
                new CountryTopUrbanPopDataItem(
                {
                    code: `CHI`,
                    parent: `Asia`,
                    name: `China`,
                    population: 1425178792,
                    urbanPopulation: 941865672,
                    urbanPopPercent: `65%`
                }),
                new CountryTopUrbanPopDataItem(
                {
                    code: `IND`,
                    parent: `Asia`,
                    name: `India`,
                    population: 1428627663,
                    urbanPopulation: 530387142,
                    urbanPopPercent: `36%`
                }),
                new CountryTopUrbanPopDataItem(
                {
                    code: `USA`,
                    parent: `North America`,
                    name: `United States`,
                    population: 341814420,
                    urbanPopulation: 284698234,
                    urbanPopPercent: `83%`
                }),
                new CountryTopUrbanPopDataItem(
                {
                    code: `MEX`,
                    parent: `North America`,
                    name: `Mexico`,
                    population: 129388467,
                    urbanPopulation: 114397383,
                    urbanPopPercent: `88%`
                }),
            ];
            super(...newItems.slice(0));
        }
    }
}
