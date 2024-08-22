export class CountryDemographicAfricanItem {
    public constructor(init: Partial<CountryDemographicAfricanItem>) {
        Object.assign(this, init);
    }

    public population: number;
    public birthRate: number;
    public deathRate: number;
    public name: string;

}
export class CountryDemographicAfrican extends Array<CountryDemographicAfricanItem> {
    public constructor(items: Array<CountryDemographicAfricanItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new CountryDemographicAfricanItem(
                {
                    population: 39728000,
                    birthRate: 23.9,
                    deathRate: 4.77,
                    name: `Algeria`
                }),
                new CountryDemographicAfricanItem(
                {
                    population: 27884000,
                    birthRate: 42.32,
                    deathRate: 8.68,
                    name: `Angola`
                }),
                new CountryDemographicAfricanItem(
                {
                    population: 10576000,
                    birthRate: 37.43,
                    deathRate: 9.32,
                    name: `Benin`
                }),
                new CountryDemographicAfricanItem(
                {
                    population: 2121000,
                    birthRate: 24.14,
                    deathRate: 7.02,
                    name: `Botswana`
                }),
                new CountryDemographicAfricanItem(
                {
                    population: 18111000,
                    birthRate: 39.44,
                    deathRate: 8.82,
                    name: `Burkina Faso`
                }),
                new CountryDemographicAfricanItem(
                {
                    population: 10160000,
                    birthRate: 42.66,
                    deathRate: 11.03,
                    name: `Burundi`
                }),
                new CountryDemographicAfricanItem(
                {
                    population: 23298000,
                    birthRate: 36.84,
                    deathRate: 10.35,
                    name: `Cameroon`
                }),
                new CountryDemographicAfricanItem(
                {
                    population: 525000,
                    birthRate: 21.14,
                    deathRate: 5.61,
                    name: `Cape Verde`
                }),
                new CountryDemographicAfricanItem(
                {
                    population: 4493000,
                    birthRate: 36.11,
                    deathRate: 14.01,
                    name: `C.A.R.`
                }),
                new CountryDemographicAfricanItem(
                {
                    population: 14111000,
                    birthRate: 43.86,
                    deathRate: 13.22,
                    name: `Chad`
                }),
                new CountryDemographicAfricanItem(
                {
                    population: 777000,
                    birthRate: 33.33,
                    deathRate: 7.49,
                    name: `Comoros`
                }),
                new CountryDemographicAfricanItem(
                {
                    population: 4856000,
                    birthRate: 35.23,
                    deathRate: 7.56,
                    name: `Congo`
                }),
                new CountryDemographicAfricanItem(
                {
                    population: 23226000,
                    birthRate: 37.1,
                    deathRate: 12.54,
                    name: `Cote Ivoire`
                }),
                new CountryDemographicAfricanItem(
                {
                    population: 76245000,
                    birthRate: 42.81,
                    deathRate: 10.19,
                    name: `DCongo`
                }),
                new CountryDemographicAfricanItem(
                {
                    population: 914000,
                    birthRate: 23.35,
                    deathRate: 8.37,
                    name: `Djibouti`
                }),
                new CountryDemographicAfricanItem(
                {
                    population: 92443000,
                    birthRate: 27.2,
                    deathRate: 5.96,
                    name: `Egypt`
                }),
                new CountryDemographicAfricanItem(
                {
                    population: 1169000,
                    birthRate: 34.64,
                    deathRate: 10.34,
                    name: `Equatorial Guinea`
                }),
                new CountryDemographicAfricanItem(
                {
                    population: 3343000,
                    birthRate: 32.83,
                    deathRate: 7.07,
                    name: `Eritrea`
                }),
                new CountryDemographicAfricanItem(
                {
                    population: 100835000,
                    birthRate: 32.3,
                    deathRate: 7,
                    name: `Ethiopia`
                }),
                new CountryDemographicAfricanItem(
                {
                    population: 1948000,
                    birthRate: 30.09,
                    deathRate: 7.82,
                    name: `Gabon`
                }),
                new CountryDemographicAfricanItem(
                {
                    population: 2086000,
                    birthRate: 39.99,
                    deathRate: 8.2,
                    name: `Gambia`
                }),
                new CountryDemographicAfricanItem(
                {
                    population: 27849000,
                    birthRate: 31.56,
                    deathRate: 8.31,
                    name: `Ghana`
                }),
                new CountryDemographicAfricanItem(
                {
                    population: 11432000,
                    birthRate: 36.36,
                    deathRate: 9.58,
                    name: `Guinea`
                }),
                new CountryDemographicAfricanItem(
                {
                    population: 1737000,
                    birthRate: 37.15,
                    deathRate: 10.78,
                    name: `Guinea-Bissau`
                }),
                new CountryDemographicAfricanItem(
                {
                    population: 47878000,
                    birthRate: 31.78,
                    deathRate: 5.84,
                    name: `Kenya`
                }),
                new CountryDemographicAfricanItem(
                {
                    population: 2059000,
                    birthRate: 28.16,
                    deathRate: 12.92,
                    name: `Lesotho`
                }),
                new CountryDemographicAfricanItem(
                {
                    population: 4472000,
                    birthRate: 34.72,
                    deathRate: 8.12,
                    name: `Liberia`
                }),
                new CountryDemographicAfricanItem(
                {
                    population: 6418000,
                    birthRate: 20.19,
                    deathRate: 5.2,
                    name: `Libya`
                }),
                new CountryDemographicAfricanItem(
                {
                    population: 24234000,
                    birthRate: 33.4,
                    deathRate: 6.48,
                    name: `Madagascar`
                }),
                new CountryDemographicAfricanItem(
                {
                    population: 16745000,
                    birthRate: 37.05,
                    deathRate: 7.5,
                    name: `Malawi`
                }),
                new CountryDemographicAfricanItem(
                {
                    population: 17439000,
                    birthRate: 43.22,
                    deathRate: 10.67,
                    name: `Mali`
                }),
                new CountryDemographicAfricanItem(
                {
                    population: 4046000,
                    birthRate: 34.57,
                    deathRate: 7.96,
                    name: `Mauritania`
                }),
                new CountryDemographicAfricanItem(
                {
                    population: 1259000,
                    birthRate: 10.1,
                    deathRate: 7.7,
                    name: `Mauritius`
                }),
                new CountryDemographicAfricanItem(
                {
                    population: 34664000,
                    birthRate: 20.4,
                    deathRate: 5.15,
                    name: `Morocco`
                }),
                new CountryDemographicAfricanItem(
                {
                    population: 27042000,
                    birthRate: 39.36,
                    deathRate: 10.38,
                    name: `Mozambique`
                }),
                new CountryDemographicAfricanItem(
                {
                    population: 2315000,
                    birthRate: 29.59,
                    deathRate: 7.46,
                    name: `Namibia`
                }),
                new CountryDemographicAfricanItem(
                {
                    population: 20002000,
                    birthRate: 48.44,
                    deathRate: 9.94,
                    name: `Niger`
                }),
                new CountryDemographicAfricanItem(
                {
                    population: 181136992,
                    birthRate: 39.37,
                    deathRate: 12.77,
                    name: `Nigeria`
                }),
                new CountryDemographicAfricanItem(
                {
                    population: 11369000,
                    birthRate: 31.79,
                    deathRate: 6.13,
                    name: `Rwanda`
                }),
                new CountryDemographicAfricanItem(
                {
                    population: 199000,
                    birthRate: 34.33,
                    deathRate: 6.81,
                    name: `Sao Tome and Principe`
                }),
                new CountryDemographicAfricanItem(
                {
                    population: 14578000,
                    birthRate: 36.21,
                    deathRate: 6.07,
                    name: `Senegal`
                }),
                new CountryDemographicAfricanItem(
                {
                    population: 95000,
                    birthRate: 17,
                    deathRate: 7.5,
                    name: `Seychelles`
                }),
                new CountryDemographicAfricanItem(
                {
                    population: 7172000,
                    birthRate: 35.61,
                    deathRate: 13.03,
                    name: `Sierra Leone`
                }),
                new CountryDemographicAfricanItem(
                {
                    population: 13797000,
                    birthRate: 43.66,
                    deathRate: 11.63,
                    name: `Somalia`
                }),
                new CountryDemographicAfricanItem(
                {
                    population: 55386000,
                    birthRate: 21.3,
                    deathRate: 10.1,
                    name: `South Africa`
                }),
                new CountryDemographicAfricanItem(
                {
                    population: 10716000,
                    birthRate: 36.32,
                    deathRate: 11.24,
                    name: `South Sudan`
                }),
                new CountryDemographicAfricanItem(
                {
                    population: 38903000,
                    birthRate: 33.32,
                    deathRate: 7.52,
                    name: `Sudan`
                }),
                new CountryDemographicAfricanItem(
                {
                    population: 1104000,
                    birthRate: 29.27,
                    deathRate: 9.86,
                    name: `Swaziland`
                }),
                new CountryDemographicAfricanItem(
                {
                    population: 51483000,
                    birthRate: 38.64,
                    deathRate: 7.02,
                    name: `Tanzania`
                }),
                new CountryDemographicAfricanItem(
                {
                    population: 7323000,
                    birthRate: 34.53,
                    deathRate: 8.83,
                    name: `Togo`
                }),
                new CountryDemographicAfricanItem(
                {
                    population: 11180000,
                    birthRate: 18.65,
                    deathRate: 6.36,
                    name: `Tunisia`
                }),
                new CountryDemographicAfricanItem(
                {
                    population: 38225000,
                    birthRate: 42.63,
                    deathRate: 8.87,
                    name: `Uganda`
                }),
                new CountryDemographicAfricanItem(
                {
                    population: 15879000,
                    birthRate: 38.44,
                    deathRate: 8,
                    name: `Zambia`
                }),
                new CountryDemographicAfricanItem(
                {
                    population: 13815000,
                    birthRate: 33.94,
                    deathRate: 8.4,
                    name: `Zimbabwe`
                }),
            ];
            super(...newItems.slice(0));
        }
    }
}
