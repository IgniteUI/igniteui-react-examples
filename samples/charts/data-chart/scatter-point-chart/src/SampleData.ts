export class DataEuropeItem {
    public constructor(init: Partial<DataEuropeItem>) {
        Object.assign(this, init);
    }
    
    public population: number;
    public birthRate: number;
    public deathRate: number;
    public name: string;

}
export class DataEurope extends Array<DataEuropeItem> {
    public constructor() {
        super();
        this.push(new DataEuropeItem(
        {
            population: 2891000,
            birthRate: 11.88,
            deathRate: 7.22,
            name: `Albania`
        }));
        this.push(new DataEuropeItem(
        {
            population: 8679000,
            birthRate: 9.8,
            deathRate: 9.6,
            name: `Austria`
        }));
        this.push(new DataEuropeItem(
        {
            population: 9439000,
            birthRate: 12.5,
            deathRate: 12.6,
            name: `Belarus`
        }));
        this.push(new DataEuropeItem(
        {
            population: 11288000,
            birthRate: 10.8,
            deathRate: 9.8,
            name: `Belgium`
        }));
        this.push(new DataEuropeItem(
        {
            population: 3429000,
            birthRate: 9.12,
            deathRate: 10.89,
            name: `Bosnia`
        }));
        this.push(new DataEuropeItem(
        {
            population: 7200000,
            birthRate: 9.2,
            deathRate: 15.3,
            name: `Bulgaria`
        }));
        this.push(new DataEuropeItem(
        {
            population: 165000,
            birthRate: 9.39,
            deathRate: 8.97,
            name: `Channel Islands`
        }));
        this.push(new DataEuropeItem(
        {
            population: 4233000,
            birthRate: 8.9,
            deathRate: 12.9,
            name: `Croatia`
        }));
        this.push(new DataEuropeItem(
        {
            population: 1161000,
            birthRate: 10.98,
            deathRate: 6.84,
            name: `Cyprus`
        }));
        this.push(new DataEuropeItem(
        {
            population: 10601000,
            birthRate: 10.5,
            deathRate: 10.5,
            name: `Czechia`
        }));
        this.push(new DataEuropeItem(
        {
            population: 5689000,
            birthRate: 10.2,
            deathRate: 9.2,
            name: `Denmark`
        }));
        this.push(new DataEuropeItem(
        {
            population: 1315000,
            birthRate: 10.6,
            deathRate: 11.6,
            name: `Estonia`
        }));
        this.push(new DataEuropeItem(
        {
            population: 48000,
            birthRate: 12.4,
            deathRate: 7.7,
            name: `Faeroe Islands`
        }));
        this.push(new DataEuropeItem(
        {
            population: 5481000,
            birthRate: 10.1,
            deathRate: 9.6,
            name: `Finland`
        }));
        this.push(new DataEuropeItem(
        {
            population: 64453000,
            birthRate: 12,
            deathRate: 8.9,
            name: `France`
        }));
        this.push(new DataEuropeItem(
        {
            population: 81787000,
            birthRate: 9,
            deathRate: 11.3,
            name: `Germany`
        }));
        this.push(new DataEuropeItem(
        {
            population: 10660000,
            birthRate: 8.5,
            deathRate: 11.2,
            name: `Greece`
        }));
        this.push(new DataEuropeItem(
        {
            population: 9778000,
            birthRate: 9.4,
            deathRate: 13.4,
            name: `Hungary`
        }));
        this.push(new DataEuropeItem(
        {
            population: 330000,
            birthRate: 12.5,
            deathRate: 6.6,
            name: `Iceland`
        }));
        this.push(new DataEuropeItem(
        {
            population: 4652000,
            birthRate: 14.1,
            deathRate: 6.5,
            name: `Ireland`
        }));
        this.push(new DataEuropeItem(
        {
            population: 60578000,
            birthRate: 8,
            deathRate: 10.7,
            name: `Italy`
        }));
        this.push(new DataEuropeItem(
        {
            population: 1998000,
            birthRate: 11.1,
            deathRate: 14.4,
            name: `Latvia`
        }));
        this.push(new DataEuropeItem(
        {
            population: 37000,
            birthRate: 8.7,
            deathRate: 6.7,
            name: `Liechtenstein`
        }));
        this.push(new DataEuropeItem(
        {
            population: 2932000,
            birthRate: 10.8,
            deathRate: 14.4,
            name: `Lithuania`
        }));
        this.push(new DataEuropeItem(
        {
            population: 567000,
            birthRate: 10.7,
            deathRate: 7,
            name: `Luxembourg`
        }));
        this.push(new DataEuropeItem(
        {
            population: 2079000,
            birthRate: 11.3,
            deathRate: 9.75,
            name: `North Macedonia`
        }));
        this.push(new DataEuropeItem(
        {
            population: 434000,
            birthRate: 10,
            deathRate: 8,
            name: `Malta`
        }));
        this.push(new DataEuropeItem(
        {
            population: 4071000,
            birthRate: 10.52,
            deathRate: 11.42,
            name: `Moldova`
        }));
        this.push(new DataEuropeItem(
        {
            population: 38000,
            birthRate: 8.1,
            deathRate: 7.6,
            name: `Monaco`
        }));
        this.push(new DataEuropeItem(
        {
            population: 627000,
            birthRate: 11.52,
            deathRate: 9.8,
            name: `Montenegro`
        }));
        this.push(new DataEuropeItem(
        {
            population: 16938000,
            birthRate: 10.1,
            deathRate: 8.7,
            name: `Netherlands`
        }));
        this.push(new DataEuropeItem(
        {
            population: 5200000,
            birthRate: 11.3,
            deathRate: 7.8,
            name: `Norway`
        }));
        this.push(new DataEuropeItem(
        {
            population: 38034000,
            birthRate: 9.7,
            deathRate: 10.4,
            name: `Poland`
        }));
        this.push(new DataEuropeItem(
        {
            population: 10368000,
            birthRate: 8.3,
            deathRate: 10.5,
            name: `Portugal`
        }));
        this.push(new DataEuropeItem(
        {
            population: 19925000,
            birthRate: 10,
            deathRate: 13.2,
            name: `Romania`
        }));
        this.push(new DataEuropeItem(
        {
            population: 144984992,
            birthRate: 13.3,
            deathRate: 13,
            name: `Russia`
        }));
        this.push(new DataEuropeItem(
        {
            population: 33000,
            birthRate: 8.2,
            deathRate: 7.1,
            name: `San Marino`
        }));
        this.push(new DataEuropeItem(
        {
            population: 8877000,
            birthRate: 9.3,
            deathRate: 14.6,
            name: `Serbia`
        }));
        this.push(new DataEuropeItem(
        {
            population: 5436000,
            birthRate: 10.3,
            deathRate: 9.9,
            name: `Slovakia`
        }));
        this.push(new DataEuropeItem(
        {
            population: 2071000,
            birthRate: 10,
            deathRate: 9.6,
            name: `Slovenia`
        }));
        this.push(new DataEuropeItem(
        {
            population: 46672000,
            birthRate: 9,
            deathRate: 9.1,
            name: `Spain`
        }));
        this.push(new DataEuropeItem(
        {
            population: 9765000,
            birthRate: 11.7,
            deathRate: 9.3,
            name: `Sweden`
        }));
        this.push(new DataEuropeItem(
        {
            population: 8297000,
            birthRate: 10.5,
            deathRate: 8.2,
            name: `Switzerland`
        }));
        this.push(new DataEuropeItem(
        {
            population: 44922000,
            birthRate: 10.7,
            deathRate: 14.9,
            name: `Ukraine`
        }));
        this.push(new DataEuropeItem(
        {
            population: 65860000,
            birthRate: 11.9,
            deathRate: 9.2,
            name: `UK`
        }));
    }
}
export class DataAfricaItem {
    public constructor(init: Partial<DataAfricaItem>) {
        Object.assign(this, init);
    }
    
    public population: number;
    public birthRate: number;
    public deathRate: number;
    public name: string;

}
export class DataAfrica extends Array<DataAfricaItem> {
    public constructor() {
        super();
        this.push(new DataAfricaItem(
        {
            population: 39728000,
            birthRate: 23.9,
            deathRate: 4.77,
            name: `Algeria`
        }));
        this.push(new DataAfricaItem(
        {
            population: 27884000,
            birthRate: 42.32,
            deathRate: 8.68,
            name: `Angola`
        }));
        this.push(new DataAfricaItem(
        {
            population: 10576000,
            birthRate: 37.43,
            deathRate: 9.32,
            name: `Benin`
        }));
        this.push(new DataAfricaItem(
        {
            population: 2121000,
            birthRate: 24.14,
            deathRate: 7.02,
            name: `Botswana`
        }));
        this.push(new DataAfricaItem(
        {
            population: 18111000,
            birthRate: 39.44,
            deathRate: 8.82,
            name: `Burkina Faso`
        }));
        this.push(new DataAfricaItem(
        {
            population: 10160000,
            birthRate: 42.66,
            deathRate: 11.03,
            name: `Burundi`
        }));
        this.push(new DataAfricaItem(
        {
            population: 23298000,
            birthRate: 36.84,
            deathRate: 10.35,
            name: `Cameroon`
        }));
        this.push(new DataAfricaItem(
        {
            population: 525000,
            birthRate: 21.14,
            deathRate: 5.61,
            name: `Cape Verde`
        }));
        this.push(new DataAfricaItem(
        {
            population: 4493000,
            birthRate: 36.11,
            deathRate: 14.01,
            name: `CAR`
        }));
        this.push(new DataAfricaItem(
        {
            population: 14111000,
            birthRate: 43.86,
            deathRate: 13.22,
            name: `Chad`
        }));
        this.push(new DataAfricaItem(
        {
            population: 777000,
            birthRate: 33.33,
            deathRate: 7.49,
            name: `Comoros`
        }));
        this.push(new DataAfricaItem(
        {
            population: 4856000,
            birthRate: 35.23,
            deathRate: 7.56,
            name: `Congo`
        }));
        this.push(new DataAfricaItem(
        {
            population: 23226000,
            birthRate: 37.1,
            deathRate: 12.54,
            name: `Ivory Coast`
        }));
        this.push(new DataAfricaItem(
        {
            population: 76245000,
            birthRate: 42.81,
            deathRate: 10.19,
            name: `DRC`
        }));
        this.push(new DataAfricaItem(
        {
            population: 914000,
            birthRate: 23.35,
            deathRate: 8.37,
            name: `Djibouti`
        }));
        this.push(new DataAfricaItem(
        {
            population: 92443000,
            birthRate: 27.2,
            deathRate: 5.96,
            name: `Egypt`
        }));
        this.push(new DataAfricaItem(
        {
            population: 1169000,
            birthRate: 34.64,
            deathRate: 10.34,
            name: `Equatorial Guinea`
        }));
        this.push(new DataAfricaItem(
        {
            population: 3343000,
            birthRate: 32.83,
            deathRate: 7.07,
            name: `Eritrea`
        }));
        this.push(new DataAfricaItem(
        {
            population: 100835000,
            birthRate: 32.3,
            deathRate: 7,
            name: `Ethiopia`
        }));
        this.push(new DataAfricaItem(
        {
            population: 1948000,
            birthRate: 30.09,
            deathRate: 7.82,
            name: `Gabon`
        }));
        this.push(new DataAfricaItem(
        {
            population: 2086000,
            birthRate: 39.99,
            deathRate: 8.2,
            name: `Gambia`
        }));
        this.push(new DataAfricaItem(
        {
            population: 27849000,
            birthRate: 31.56,
            deathRate: 8.31,
            name: `Ghana`
        }));
        this.push(new DataAfricaItem(
        {
            population: 11432000,
            birthRate: 36.36,
            deathRate: 9.58,
            name: `Guinea`
        }));
        this.push(new DataAfricaItem(
        {
            population: 1737000,
            birthRate: 37.15,
            deathRate: 10.78,
            name: `Guinea-Bissau`
        }));
        this.push(new DataAfricaItem(
        {
            population: 47878000,
            birthRate: 31.78,
            deathRate: 5.84,
            name: `Kenya`
        }));
        this.push(new DataAfricaItem(
        {
            population: 2059000,
            birthRate: 28.16,
            deathRate: 12.92,
            name: `Lesotho`
        }));
        this.push(new DataAfricaItem(
        {
            population: 4472000,
            birthRate: 34.72,
            deathRate: 8.12,
            name: `Liberia`
        }));
        this.push(new DataAfricaItem(
        {
            population: 6418000,
            birthRate: 20.19,
            deathRate: 5.2,
            name: `Libya`
        }));
        this.push(new DataAfricaItem(
        {
            population: 24234000,
            birthRate: 33.4,
            deathRate: 6.48,
            name: `Madagascar`
        }));
        this.push(new DataAfricaItem(
        {
            population: 16745000,
            birthRate: 37.05,
            deathRate: 7.5,
            name: `Malawi`
        }));
        this.push(new DataAfricaItem(
        {
            population: 17439000,
            birthRate: 43.22,
            deathRate: 10.67,
            name: `Mali`
        }));
        this.push(new DataAfricaItem(
        {
            population: 4046000,
            birthRate: 34.57,
            deathRate: 7.96,
            name: `Mauritania`
        }));
        this.push(new DataAfricaItem(
        {
            population: 1259000,
            birthRate: 10.1,
            deathRate: 7.7,
            name: `Mauritius`
        }));
        this.push(new DataAfricaItem(
        {
            population: 34664000,
            birthRate: 20.4,
            deathRate: 5.15,
            name: `Morocco`
        }));
        this.push(new DataAfricaItem(
        {
            population: 27042000,
            birthRate: 39.36,
            deathRate: 10.38,
            name: `Mozambique`
        }));
        this.push(new DataAfricaItem(
        {
            population: 2315000,
            birthRate: 29.59,
            deathRate: 7.46,
            name: `Namibia`
        }));
        this.push(new DataAfricaItem(
        {
            population: 20002000,
            birthRate: 48.44,
            deathRate: 9.94,
            name: `Niger`
        }));
        this.push(new DataAfricaItem(
        {
            population: 181136992,
            birthRate: 39.37,
            deathRate: 12.77,
            name: `Nigeria`
        }));
        this.push(new DataAfricaItem(
        {
            population: 11369000,
            birthRate: 31.79,
            deathRate: 6.13,
            name: `Rwanda`
        }));
        this.push(new DataAfricaItem(
        {
            population: 199000,
            birthRate: 34.33,
            deathRate: 6.81,
            name: `Sao Tome`
        }));
        this.push(new DataAfricaItem(
        {
            population: 14578000,
            birthRate: 36.21,
            deathRate: 6.07,
            name: `Senegal`
        }));
        this.push(new DataAfricaItem(
        {
            population: 95000,
            birthRate: 17,
            deathRate: 7.5,
            name: `Seychelles`
        }));
        this.push(new DataAfricaItem(
        {
            population: 7172000,
            birthRate: 35.61,
            deathRate: 13.03,
            name: `Sierra Leone`
        }));
        this.push(new DataAfricaItem(
        {
            population: 13797000,
            birthRate: 43.66,
            deathRate: 11.63,
            name: `Somalia`
        }));
        this.push(new DataAfricaItem(
        {
            population: 55386000,
            birthRate: 21.3,
            deathRate: 10.1,
            name: `South Africa`
        }));
        this.push(new DataAfricaItem(
        {
            population: 10716000,
            birthRate: 36.32,
            deathRate: 11.24,
            name: `South Sudan`
        }));
        this.push(new DataAfricaItem(
        {
            population: 38903000,
            birthRate: 33.32,
            deathRate: 7.52,
            name: `Sudan`
        }));
        this.push(new DataAfricaItem(
        {
            population: 1104000,
            birthRate: 29.27,
            deathRate: 9.86,
            name: `Swaziland`
        }));
        this.push(new DataAfricaItem(
        {
            population: 51483000,
            birthRate: 38.64,
            deathRate: 7.02,
            name: `Tanzania`
        }));
        this.push(new DataAfricaItem(
        {
            population: 7323000,
            birthRate: 34.53,
            deathRate: 8.83,
            name: `Togo`
        }));
        this.push(new DataAfricaItem(
        {
            population: 11180000,
            birthRate: 18.65,
            deathRate: 6.36,
            name: `Tunisia`
        }));
        this.push(new DataAfricaItem(
        {
            population: 38225000,
            birthRate: 42.63,
            deathRate: 8.87,
            name: `Uganda`
        }));
        this.push(new DataAfricaItem(
        {
            population: 15879000,
            birthRate: 38.44,
            deathRate: 8,
            name: `Zambia`
        }));
        this.push(new DataAfricaItem(
        {
            population: 13815000,
            birthRate: 33.94,
            deathRate: 8.4,
            name: `Zimbabwe`
        }));
    }
}
