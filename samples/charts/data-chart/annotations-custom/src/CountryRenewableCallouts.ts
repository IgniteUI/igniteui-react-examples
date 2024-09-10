export class CountryRenewableCalloutsItem {
    public constructor(init: Partial<CountryRenewableCalloutsItem>) {
        Object.assign(this, init);
    }

    public index: number;
    public label: string;
    public value: number;

}
export class CountryRenewableCallouts extends Array<CountryRenewableCalloutsItem> {
    public constructor(items: Array<CountryRenewableCalloutsItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new CountryRenewableCalloutsItem(
                {
                    index: 0,
                    label: `19 TWh`,
                    value: 19
                }),
                new CountryRenewableCalloutsItem(
                {
                    index: 1,
                    label: `24 TWh`,
                    value: 24
                }),
                new CountryRenewableCalloutsItem(
                {
                    index: 2,
                    label: `28 TWh`,
                    value: 28
                }),
                new CountryRenewableCalloutsItem(
                {
                    index: 3,
                    label: `26 TWh`,
                    value: 26
                }),
                new CountryRenewableCalloutsItem(
                {
                    index: 4,
                    label: `38 TWh`,
                    value: 38
                }),
                new CountryRenewableCalloutsItem(
                {
                    index: 5,
                    label: `31 TWh`,
                    value: 31
                }),
                new CountryRenewableCalloutsItem(
                {
                    index: 6,
                    label: `19 TWh`,
                    value: 19
                }),
                new CountryRenewableCalloutsItem(
                {
                    index: 7,
                    label: `52 TWh`,
                    value: 52
                }),
                new CountryRenewableCalloutsItem(
                {
                    index: 8,
                    label: `50 TWh`,
                    value: 50
                }),
                new CountryRenewableCalloutsItem(
                {
                    index: 9,
                    label: `34 TWh`,
                    value: 34
                }),
                new CountryRenewableCalloutsItem(
                {
                    index: 10,
                    label: `38 TWh`,
                    value: 34
                }),
                new CountryRenewableCalloutsItem(
                {
                    index: 11,
                    label: `38 TWh`,
                    value: 38
                }),
            ];
            super(...newItems.slice(0));
        }
    }
}
