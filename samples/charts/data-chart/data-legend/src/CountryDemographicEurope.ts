export class CountryDemographicEuropeItem {
    public constructor(init: Partial<CountryDemographicEuropeItem>) {
        Object.assign(this, init);
    }
    
    public population: number;
    public birthRate: number;
    public deathRate: number;
    public name: string;

}
export class CountryDemographicEurope extends Array<CountryDemographicEuropeItem> {
    public constructor() {
        super();
        this.push(new CountryDemographicEuropeItem(
        {
            population: 2891000,
            birthRate: 11.88,
            deathRate: 7.22,
            name: `Albania`
        }));
        this.push(new CountryDemographicEuropeItem(
        {
            population: 8679000,
            birthRate: 9.8,
            deathRate: 9.6,
            name: `Austria`
        }));
        this.push(new CountryDemographicEuropeItem(
        {
            population: 9439000,
            birthRate: 12.5,
            deathRate: 12.6,
            name: `Belarus`
        }));
        this.push(new CountryDemographicEuropeItem(
        {
            population: 11288000,
            birthRate: 10.8,
            deathRate: 9.8,
            name: `Belgium`
        }));
        this.push(new CountryDemographicEuropeItem(
        {
            population: 3429000,
            birthRate: 9.12,
            deathRate: 10.89,
            name: `Bosnia`
        }));
        this.push(new CountryDemographicEuropeItem(
        {
            population: 7200000,
            birthRate: 9.2,
            deathRate: 15.3,
            name: `Bulgaria`
        }));
        this.push(new CountryDemographicEuropeItem(
        {
            population: 165000,
            birthRate: 9.39,
            deathRate: 8.97,
            name: `Channel Islands`
        }));
        this.push(new CountryDemographicEuropeItem(
        {
            population: 4233000,
            birthRate: 8.9,
            deathRate: 12.9,
            name: `Croatia`
        }));
        this.push(new CountryDemographicEuropeItem(
        {
            population: 1161000,
            birthRate: 10.98,
            deathRate: 6.84,
            name: `Cyprus`
        }));
        this.push(new CountryDemographicEuropeItem(
        {
            population: 10601000,
            birthRate: 10.5,
            deathRate: 10.5,
            name: `Czech Republic`
        }));
        this.push(new CountryDemographicEuropeItem(
        {
            population: 5689000,
            birthRate: 10.2,
            deathRate: 9.2,
            name: `Denmark`
        }));
        this.push(new CountryDemographicEuropeItem(
        {
            population: 1315000,
            birthRate: 10.6,
            deathRate: 11.6,
            name: `Estonia`
        }));
        this.push(new CountryDemographicEuropeItem(
        {
            population: 48000,
            birthRate: 12.4,
            deathRate: 7.7,
            name: `Faeroe Islands`
        }));
        this.push(new CountryDemographicEuropeItem(
        {
            population: 5481000,
            birthRate: 10.1,
            deathRate: 9.6,
            name: `Finland`
        }));
        this.push(new CountryDemographicEuropeItem(
        {
            population: 64453000,
            birthRate: 12,
            deathRate: 8.9,
            name: `France`
        }));
        this.push(new CountryDemographicEuropeItem(
        {
            population: 81787000,
            birthRate: 9,
            deathRate: 11.3,
            name: `Germany`
        }));
        this.push(new CountryDemographicEuropeItem(
        {
            population: 10660000,
            birthRate: 8.5,
            deathRate: 11.2,
            name: `Greece`
        }));
        this.push(new CountryDemographicEuropeItem(
        {
            population: 9778000,
            birthRate: 9.4,
            deathRate: 13.4,
            name: `Hungary`
        }));
        this.push(new CountryDemographicEuropeItem(
        {
            population: 330000,
            birthRate: 12.5,
            deathRate: 6.6,
            name: `Iceland`
        }));
        this.push(new CountryDemographicEuropeItem(
        {
            population: 4652000,
            birthRate: 14.1,
            deathRate: 6.5,
            name: `Ireland`
        }));
        this.push(new CountryDemographicEuropeItem(
        {
            population: 60578000,
            birthRate: 8,
            deathRate: 10.7,
            name: `Italy`
        }));
        this.push(new CountryDemographicEuropeItem(
        {
            population: 1998000,
            birthRate: 11.1,
            deathRate: 14.4,
            name: `Latvia`
        }));
        this.push(new CountryDemographicEuropeItem(
        {
            population: 37000,
            birthRate: 8.7,
            deathRate: 6.7,
            name: `Liechtenstein`
        }));
        this.push(new CountryDemographicEuropeItem(
        {
            population: 2932000,
            birthRate: 10.8,
            deathRate: 14.4,
            name: `Lithuania`
        }));
        this.push(new CountryDemographicEuropeItem(
        {
            population: 567000,
            birthRate: 10.7,
            deathRate: 7,
            name: `Luxembourg`
        }));
        this.push(new CountryDemographicEuropeItem(
        {
            population: 2079000,
            birthRate: 11.3,
            deathRate: 9.75,
            name: `Macedonia`
        }));
        this.push(new CountryDemographicEuropeItem(
        {
            population: 434000,
            birthRate: 10,
            deathRate: 8,
            name: `Malta`
        }));
        this.push(new CountryDemographicEuropeItem(
        {
            population: 4071000,
            birthRate: 10.52,
            deathRate: 11.42,
            name: `Moldova`
        }));
        this.push(new CountryDemographicEuropeItem(
        {
            population: 38000,
            birthRate: 8.1,
            deathRate: 7.6,
            name: `Monaco`
        }));
        this.push(new CountryDemographicEuropeItem(
        {
            population: 627000,
            birthRate: 11.52,
            deathRate: 9.8,
            name: `Montenegro`
        }));
        this.push(new CountryDemographicEuropeItem(
        {
            population: 16938000,
            birthRate: 10.1,
            deathRate: 8.7,
            name: `Netherlands`
        }));
        this.push(new CountryDemographicEuropeItem(
        {
            population: 5200000,
            birthRate: 11.3,
            deathRate: 7.8,
            name: `Norway`
        }));
        this.push(new CountryDemographicEuropeItem(
        {
            population: 38034000,
            birthRate: 9.7,
            deathRate: 10.4,
            name: `Poland`
        }));
        this.push(new CountryDemographicEuropeItem(
        {
            population: 10368000,
            birthRate: 8.3,
            deathRate: 10.5,
            name: `Portugal`
        }));
        this.push(new CountryDemographicEuropeItem(
        {
            population: 19925000,
            birthRate: 10,
            deathRate: 13.2,
            name: `Romania`
        }));
        this.push(new CountryDemographicEuropeItem(
        {
            population: 144984992,
            birthRate: 13.3,
            deathRate: 13,
            name: `Russia`
        }));
        this.push(new CountryDemographicEuropeItem(
        {
            population: 33000,
            birthRate: 8.2,
            deathRate: 7.1,
            name: `San Marino`
        }));
        this.push(new CountryDemographicEuropeItem(
        {
            population: 8877000,
            birthRate: 9.3,
            deathRate: 14.6,
            name: `Serbia`
        }));
        this.push(new CountryDemographicEuropeItem(
        {
            population: 5436000,
            birthRate: 10.3,
            deathRate: 9.9,
            name: `Slovakia`
        }));
        this.push(new CountryDemographicEuropeItem(
        {
            population: 2071000,
            birthRate: 10,
            deathRate: 9.6,
            name: `Slovenia`
        }));
        this.push(new CountryDemographicEuropeItem(
        {
            population: 46672000,
            birthRate: 9,
            deathRate: 9.1,
            name: `Spain`
        }));
        this.push(new CountryDemographicEuropeItem(
        {
            population: 9765000,
            birthRate: 11.7,
            deathRate: 9.3,
            name: `Sweden`
        }));
        this.push(new CountryDemographicEuropeItem(
        {
            population: 8297000,
            birthRate: 10.5,
            deathRate: 8.2,
            name: `Switzerland`
        }));
        this.push(new CountryDemographicEuropeItem(
        {
            population: 44922000,
            birthRate: 10.7,
            deathRate: 14.9,
            name: `Ukraine`
        }));
        this.push(new CountryDemographicEuropeItem(
        {
            population: 65860000,
            birthRate: 11.9,
            deathRate: 9.2,
            name: `United Kingdom`
        }));
    }
}
