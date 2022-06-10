export class CountryRenewableElectricityItem {
    public constructor(init: Partial<CountryRenewableElectricityItem>) {
        Object.assign(this, init);
    }
    
    public year: string;
    public europe: number;
    public china: number;
    public america: number;

}
export class CountryRenewableElectricity extends Array<CountryRenewableElectricityItem> {
    public constructor() {
        super();
        this.push(new CountryRenewableElectricityItem(
        {
            year: `2009`,
            europe: 34,
            china: 21,
            america: 19
        }));
        this.push(new CountryRenewableElectricityItem(
        {
            year: `2010`,
            europe: 43,
            china: 26,
            america: 24
        }));
        this.push(new CountryRenewableElectricityItem(
        {
            year: `2011`,
            europe: 66,
            china: 29,
            america: 28
        }));
        this.push(new CountryRenewableElectricityItem(
        {
            year: `2012`,
            europe: 69,
            china: 32,
            america: 26
        }));
        this.push(new CountryRenewableElectricityItem(
        {
            year: `2013`,
            europe: 58,
            china: 47,
            america: 38
        }));
        this.push(new CountryRenewableElectricityItem(
        {
            year: `2014`,
            europe: 40,
            china: 46,
            america: 31
        }));
        this.push(new CountryRenewableElectricityItem(
        {
            year: `2015`,
            europe: 78,
            china: 50,
            america: 19
        }));
        this.push(new CountryRenewableElectricityItem(
        {
            year: `2016`,
            europe: 13,
            china: 90,
            america: 52
        }));
        this.push(new CountryRenewableElectricityItem(
        {
            year: `2017`,
            europe: 78,
            china: 132,
            america: 50
        }));
        this.push(new CountryRenewableElectricityItem(
        {
            year: `2018`,
            europe: 40,
            china: 134,
            america: 34
        }));
        this.push(new CountryRenewableElectricityItem(
        {
            year: `2018`,
            europe: 40,
            china: 134,
            america: 34
        }));
        this.push(new CountryRenewableElectricityItem(
        {
            year: `2019`,
            europe: 80,
            china: 96,
            america: 38
        }));
    }
}
