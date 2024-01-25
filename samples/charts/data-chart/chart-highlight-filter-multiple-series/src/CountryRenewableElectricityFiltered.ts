export class CountryRenewableElectricityFilteredItem {
    public constructor(init: Partial<CountryRenewableElectricityFilteredItem>) {
        Object.assign(this, init);
    }

    public year: string;
    public europe: number;
    public china: number;
    public america: number;

}
export class CountryRenewableElectricityFiltered extends Array<CountryRenewableElectricityFilteredItem> {
    public constructor(items: Array<CountryRenewableElectricityFilteredItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new CountryRenewableElectricityFilteredItem(
                {
                    year: `2009`,
                    europe: 26,
                    china: 14,
                    america: 12
                }),
                new CountryRenewableElectricityFilteredItem(
                {
                    year: `2010`,
                    europe: 29,
                    china: 17,
                    america: 18
                }),
                new CountryRenewableElectricityFilteredItem(
                {
                    year: `2011`,
                    europe: 50,
                    china: 21,
                    america: 22
                }),
                new CountryRenewableElectricityFilteredItem(
                {
                    year: `2012`,
                    europe: 48,
                    china: 20,
                    america: 20
                }),
                new CountryRenewableElectricityFilteredItem(
                {
                    year: `2013`,
                    europe: 37,
                    china: 23,
                    america: 26
                }),
                new CountryRenewableElectricityFilteredItem(
                {
                    year: `2014`,
                    europe: 26,
                    china: 34,
                    america: 21
                }),
                new CountryRenewableElectricityFilteredItem(
                {
                    year: `2015`,
                    europe: 55,
                    china: 38,
                    america: 12
                }),
                new CountryRenewableElectricityFilteredItem(
                {
                    year: `2016`,
                    europe: 7,
                    china: 55,
                    america: 38
                }),
                new CountryRenewableElectricityFilteredItem(
                {
                    year: `2017`,
                    europe: 57,
                    china: 101,
                    america: 32
                }),
                new CountryRenewableElectricityFilteredItem(
                {
                    year: `2018`,
                    europe: 23,
                    china: 112,
                    america: 19
                }),
                new CountryRenewableElectricityFilteredItem(
                {
                    year: `2018`,
                    europe: 18,
                    china: 118,
                    america: 22
                }),
                new CountryRenewableElectricityFilteredItem(
                {
                    year: `2019`,
                    europe: 40,
                    china: 70,
                    america: 26
                }),
            ];
            super(...(newItems.slice(0, items)));
        }
    }
}
