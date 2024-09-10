export class ContinentsBirthRateItem {
    public constructor(init: Partial<ContinentsBirthRateItem>) {
        Object.assign(this, init);
    }

    public Year: string;
    public Asia: number;
    public Africa: number;
    public Europe: number;
    public NorthAmerica: number;
    public SouthAmerica: number;
    public Oceania: number;

}
export class ContinentsBirthRate extends Array<ContinentsBirthRateItem> {
    public constructor(items: Array<ContinentsBirthRateItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new ContinentsBirthRateItem(
                {
                    Year: `1950`,
                    Asia: 62,
                    Africa: 13,
                    Europe: 10,
                    NorthAmerica: 4,
                    SouthAmerica: 8,
                    Oceania: 1
                }),
                new ContinentsBirthRateItem(
                {
                    Year: `1960`,
                    Asia: 68,
                    Africa: 12,
                    Europe: 15,
                    NorthAmerica: 4,
                    SouthAmerica: 9,
                    Oceania: 2
                }),
                new ContinentsBirthRateItem(
                {
                    Year: `1970`,
                    Asia: 80,
                    Africa: 17,
                    Europe: 11,
                    NorthAmerica: 3,
                    SouthAmerica: 9,
                    Oceania: 1
                }),
                new ContinentsBirthRateItem(
                {
                    Year: `1980`,
                    Asia: 77,
                    Africa: 21,
                    Europe: 12,
                    NorthAmerica: 3,
                    SouthAmerica: 10,
                    Oceania: 2
                }),
                new ContinentsBirthRateItem(
                {
                    Year: `1990`,
                    Asia: 87,
                    Africa: 24,
                    Europe: 9,
                    NorthAmerica: 3,
                    SouthAmerica: 10,
                    Oceania: 1
                }),
                new ContinentsBirthRateItem(
                {
                    Year: `2000`,
                    Asia: 79,
                    Africa: 28,
                    Europe: 8,
                    NorthAmerica: 4,
                    SouthAmerica: 9,
                    Oceania: 3
                }),
                new ContinentsBirthRateItem(
                {
                    Year: `2010`,
                    Asia: 78,
                    Africa: 35,
                    Europe: 10,
                    NorthAmerica: 4,
                    SouthAmerica: 8,
                    Oceania: 2
                }),
                new ContinentsBirthRateItem(
                {
                    Year: `2020`,
                    Asia: 75,
                    Africa: 43,
                    Europe: 7,
                    NorthAmerica: 4,
                    SouthAmerica: 7,
                    Oceania: 4
                }),
            ];
            super(...newItems.slice(0));
        }
    }
}
