export class CountryStatsEuropeItem {
    public constructor(init: Partial<CountryStatsEuropeItem>) {
        Object.assign(this, init);
    }
    
    public code: string;
    public population: number;
    public workedHours: number;
    public gDP: number;
    public name: string;

}
export class CountryStatsEurope extends Array<CountryStatsEuropeItem> {
    public constructor() {
        super();
        this.push(new CountryStatsEuropeItem(
        {
            code: `ALB`,
            population: 2891000,
            workedHours: 41,
            gDP: 10970,
            name: `Albania`
        }));
        this.push(new CountryStatsEuropeItem(
        {
            code: `AUT`,
            population: 8679000,
            workedHours: 30.75,
            gDP: 44305,
            name: `Austria`
        }));
        this.push(new CountryStatsEuropeItem(
        {
            code: `BLR`,
            population: 9439000,
            workedHours: 43.5,
            gDP: 17230,
            name: `Belarus`
        }));
        this.push(new CountryStatsEuropeItem(
        {
            code: `BEL`,
            population: 11288000,
            workedHours: 29.7,
            gDP: 41708,
            name: `Belgium`
        }));
        this.push(new CountryStatsEuropeItem(
        {
            code: `BIH`,
            population: 3429000,
            workedHours: 46.5,
            gDP: 10932,
            name: `Bosnia and Herzegovina`
        }));
        this.push(new CountryStatsEuropeItem(
        {
            code: `BGR`,
            population: 7200000,
            workedHours: 31.62,
            gDP: 17000,
            name: `Bulgaria`
        }));
        this.push(new CountryStatsEuropeItem(
        {
            code: `HRV`,
            population: 4233000,
            workedHours: 35.15,
            gDP: 20984,
            name: `Croatia`
        }));
        this.push(new CountryStatsEuropeItem(
        {
            code: `CYP`,
            population: 1161000,
            workedHours: 34.42,
            gDP: 30549,
            name: `Cyprus`
        }));
        this.push(new CountryStatsEuropeItem(
        {
            code: `CZE`,
            population: 10601000,
            workedHours: 33.77,
            gDP: 30605,
            name: `Czechia`
        }));
        this.push(new CountryStatsEuropeItem(
        {
            code: `DNK`,
            population: 5689000,
            workedHours: 27.16,
            gDP: 45459,
            name: `Denmark`
        }));
        this.push(new CountryStatsEuropeItem(
        {
            code: `EST`,
            population: 1315000,
            workedHours: 35.61,
            gDP: 27550,
            name: `Estonia`
        }));
        this.push(new CountryStatsEuropeItem(
        {
            code: `FIN`,
            population: 5481000,
            workedHours: 31.48,
            gDP: 38942,
            name: `Finland`
        }));
        this.push(new CountryStatsEuropeItem(
        {
            code: `FRA`,
            population: 64453000,
            workedHours: 29.03,
            gDP: 37766,
            name: `France`
        }));
        this.push(new CountryStatsEuropeItem(
        {
            code: `DEU`,
            population: 81787000,
            workedHours: 26.31,
            gDP: 43938,
            name: `Germany`
        }));
        this.push(new CountryStatsEuropeItem(
        {
            code: `GRC`,
            population: 10660000,
            workedHours: 39.06,
            gDP: 24170,
            name: `Greece`
        }));
        this.push(new CountryStatsEuropeItem(
        {
            code: `HUN`,
            population: 9778000,
            workedHours: 36.99,
            gDP: 25034,
            name: `Hungary`
        }));
        this.push(new CountryStatsEuropeItem(
        {
            code: `ISL`,
            population: 330000,
            workedHours: 29.02,
            gDP: 43048,
            name: `Iceland`
        }));
        this.push(new CountryStatsEuropeItem(
        {
            code: `IRL`,
            population: 4652000,
            workedHours: 33.47,
            gDP: 60818,
            name: `Ireland`
        }));
        this.push(new CountryStatsEuropeItem(
        {
            code: `ITA`,
            population: 60578000,
            workedHours: 33.04,
            gDP: 34302,
            name: `Italy`
        }));
        this.push(new CountryStatsEuropeItem(
        {
            code: `LVA`,
            population: 1998000,
            workedHours: 36.57,
            gDP: 23019,
            name: `Latvia`
        }));
        this.push(new CountryStatsEuropeItem(
        {
            code: `LTU`,
            population: 2932000,
            workedHours: 35.76,
            gDP: 27046,
            name: `Lithuania`
        }));
        this.push(new CountryStatsEuropeItem(
        {
            code: `LUX`,
            population: 567000,
            workedHours: 29.25,
            gDP: 94089,
            name: `Luxembourg`
        }));
        this.push(new CountryStatsEuropeItem(
        {
            code: `MLT`,
            population: 434000,
            workedHours: 37.78,
            gDP: 34087,
            name: `Malta`
        }));
        this.push(new CountryStatsEuropeItem(
        {
            code: `MDA`,
            population: 4071000,
            workedHours: 41,
            gDP: 4747,
            name: `Moldova`
        }));
        this.push(new CountryStatsEuropeItem(
        {
            code: `MNE`,
            population: 627000,
            workedHours: 47.2,
            gDP: 15290,
            name: `Montenegro`
        }));
        this.push(new CountryStatsEuropeItem(
        {
            code: `NLD`,
            population: 16938000,
            workedHours: 27.38,
            gDP: 46494,
            name: `Netherlands`
        }));
        this.push(new CountryStatsEuropeItem(
        {
            code: `MKD`,
            population: 2079000,
            workedHours: 36.6,
            gDP: 12760,
            name: `North Macedonia`
        }));
        this.push(new CountryStatsEuropeItem(
        {
            code: `NOR`,
            population: 5200000,
            workedHours: 27.36,
            gDP: 64008,
            name: `Norway`
        }));
        this.push(new CountryStatsEuropeItem(
        {
            code: `POL`,
            population: 38034000,
            workedHours: 39.4,
            gDP: 25300,
            name: `Poland`
        }));
        this.push(new CountryStatsEuropeItem(
        {
            code: `PRT`,
            population: 10368000,
            workedHours: 36.06,
            gDP: 26608,
            name: `Portugal`
        }));
    }
}
