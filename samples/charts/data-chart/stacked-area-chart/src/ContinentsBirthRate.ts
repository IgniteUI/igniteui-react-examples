export class ContinentsBirthRateItem {
    public constructor(init: Partial<ContinentsBirthRateItem>) {
        Object.assign(this, init);
    }

    public year: string;
    public asia: number;
    public africa: number;
    public europe: number;
    public northAmerica: number;
    public southAmerica: number;
    public oceania: number;

}
export class ContinentsBirthRate extends Array<ContinentsBirthRateItem> {
    public constructor() {
        super();
        this.push(new ContinentsBirthRateItem(
        {
            year: `1950`,
            asia: 62,
            africa: 13,
            europe: 10,
            northAmerica: 4,
            southAmerica: 8,
            oceania: 1
        }));
        this.push(new ContinentsBirthRateItem(
        {
            year: `1960`,
            asia: 68,
            africa: 12,
            europe: 15,
            northAmerica: 4,
            southAmerica: 9,
            oceania: 2
        }));
        this.push(new ContinentsBirthRateItem(
        {
            year: `1970`,
            asia: 80,
            africa: 17,
            europe: 11,
            northAmerica: 3,
            southAmerica: 9,
            oceania: 1
        }));
        this.push(new ContinentsBirthRateItem(
        {
            year: `1980`,
            asia: 77,
            africa: 21,
            europe: 12,
            northAmerica: 3,
            southAmerica: 10,
            oceania: 2
        }));
        this.push(new ContinentsBirthRateItem(
        {
            year: `1990`,
            asia: 87,
            africa: 24,
            europe: 9,
            northAmerica: 3,
            southAmerica: 10,
            oceania: 1
        }));
        this.push(new ContinentsBirthRateItem(
        {
            year: `2000`,
            asia: 79,
            africa: 28,
            europe: 8,
            northAmerica: 4,
            southAmerica: 9,
            oceania: 3
        }));
        this.push(new ContinentsBirthRateItem(
        {
            year: `2010`,
            asia: 78,
            africa: 35,
            europe: 10,
            northAmerica: 4,
            southAmerica: 8,
            oceania: 2
        }));
        this.push(new ContinentsBirthRateItem(
        {
            year: `2020`,
            asia: 75,
            africa: 43,
            europe: 7,
            northAmerica: 4,
            southAmerica: 7,
            oceania: 4
        }));
    }
}
