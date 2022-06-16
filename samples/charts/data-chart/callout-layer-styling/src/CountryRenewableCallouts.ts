export class CountryRenewableCalloutsItem {
    public constructor(init: Partial<CountryRenewableCalloutsItem>) {
        Object.assign(this, init);
    }
    
    public index: number;
    public label: string;
    public value: number;

}
export class CountryRenewableCallouts extends Array<CountryRenewableCalloutsItem> {
    public constructor() {
        super();
        this.push(new CountryRenewableCalloutsItem(
        {
            index: 0,
            label: `19 TWh`,
            value: 19
        }));
        this.push(new CountryRenewableCalloutsItem(
        {
            index: 1,
            label: `24 TWh`,
            value: 24
        }));
        this.push(new CountryRenewableCalloutsItem(
        {
            index: 2,
            label: `28 TWh`,
            value: 28
        }));
        this.push(new CountryRenewableCalloutsItem(
        {
            index: 3,
            label: `26 TWh`,
            value: 26
        }));
        this.push(new CountryRenewableCalloutsItem(
        {
            index: 4,
            label: `38 TWh`,
            value: 38
        }));
        this.push(new CountryRenewableCalloutsItem(
        {
            index: 5,
            label: `31 TWh`,
            value: 31
        }));
        this.push(new CountryRenewableCalloutsItem(
        {
            index: 6,
            label: `19 TWh`,
            value: 19
        }));
        this.push(new CountryRenewableCalloutsItem(
        {
            index: 7,
            label: `52 TWh`,
            value: 52
        }));
        this.push(new CountryRenewableCalloutsItem(
        {
            index: 8,
            label: `50 TWh`,
            value: 50
        }));
        this.push(new CountryRenewableCalloutsItem(
        {
            index: 9,
            label: `34 TWh`,
            value: 34
        }));
        this.push(new CountryRenewableCalloutsItem(
        {
            index: 10,
            label: `38 TWh`,
            value: 34
        }));
        this.push(new CountryRenewableCalloutsItem(
        {
            index: 11,
            label: `38 TWh`,
            value: 38
        }));
    }
}
