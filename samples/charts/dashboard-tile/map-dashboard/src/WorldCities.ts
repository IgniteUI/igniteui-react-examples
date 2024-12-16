export class WorldCitiesItem {
    public constructor(init: Partial<WorldCitiesItem>) {
        Object.assign(this, init);
    }

    public capital: boolean;
    public population: number;
    public y: number;
    public x: number;
    public country: string;
    public name: string;

}
export class WorldCities extends Array<WorldCitiesItem> {
    public constructor(items: Array<WorldCitiesItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new WorldCitiesItem(
                {
                    capital: true,
                    population: 23.62,
                    y: 35.68,
                    x: 139.81,
                    country: `Japan`,
                    name: `Tokyo`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 16.47,
                    y: 40.75,
                    x: -74.1,
                    country: `US`,
                    name: `New York`
                }),
                new WorldCitiesItem(
                {
                    capital: true,
                    population: 15.85,
                    y: 37.54,
                    x: 126.94,
                    country: `South Korea`,
                    name: `Seoul`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 15.18,
                    y: -23.58,
                    x: -46.62,
                    country: `Brazil`,
                    name: `Sao Paulo`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 15.04,
                    y: 34.64,
                    x: 135.52,
                    country: `Japan`,
                    name: `Osaka`
                }),
                new WorldCitiesItem(
                {
                    capital: true,
                    population: 14.1,
                    y: 19.43,
                    x: -99.13,
                    country: `Mexico`,
                    name: `Mexico City`
                }),
                new WorldCitiesItem(
                {
                    capital: true,
                    population: 13.1,
                    y: 55.75,
                    x: 37.7,
                    country: `Russia`,
                    name: `Moscow`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 11.1,
                    y: 22.54,
                    x: 88.33,
                    country: `India`,
                    name: `Calcutta`
                }),
                new WorldCitiesItem(
                {
                    capital: true,
                    population: 11.1,
                    y: 51.49,
                    x: -0.18,
                    country: `UK`,
                    name: `London`
                }),
                new WorldCitiesItem(
                {
                    capital: true,
                    population: 10.75,
                    y: -34.67,
                    x: -58.41,
                    country: `Argentina`,
                    name: `Buenos Aires`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 10.15,
                    y: -22.72,
                    x: -43.46,
                    country: `Brazil`,
                    name: `Rio de Janeiro`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 9.95,
                    y: 19.05,
                    x: 73.17,
                    country: `India`,
                    name: `Bombay`
                }),
                new WorldCitiesItem(
                {
                    capital: true,
                    population: 9.78,
                    y: 48.88,
                    x: 2.43,
                    country: `France`,
                    name: `Paris`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 9.76,
                    y: 34,
                    x: -118.25,
                    country: `US`,
                    name: `Los Angeles`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 9.41,
                    y: 24.98,
                    x: 121.53,
                    country: `Taiwan`,
                    name: `Chingmei`
                }),
                new WorldCitiesItem(
                {
                    capital: true,
                    population: 9.3,
                    y: 30.08,
                    x: 31.25,
                    country: `Egypt`,
                    name: `Cairo`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 9.3,
                    y: 31.25,
                    x: 121.47,
                    country: `China`,
                    name: `Shanghai`
                }),
                new WorldCitiesItem(
                {
                    capital: true,
                    population: 8.6,
                    y: -6.29,
                    x: 106.76,
                    country: `Indonesia`,
                    name: `Jakarta`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 7.72,
                    y: 41.83,
                    x: -87.64,
                    country: `US`,
                    name: `Chicago`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 7.2,
                    y: 28.53,
                    x: 77.22,
                    country: `India`,
                    name: `Delhi`
                }),
                new WorldCitiesItem(
                {
                    capital: true,
                    population: 6.45,
                    y: 13.75,
                    x: 100.55,
                    country: `Thailand`,
                    name: `Bangkok`
                }),
                new WorldCitiesItem(
                {
                    capital: true,
                    population: 6.45,
                    y: 39.91,
                    x: 116.39,
                    country: `China`,
                    name: `Beijing`
                }),
                new WorldCitiesItem(
                {
                    capital: true,
                    population: 6.4,
                    y: 35.77,
                    x: 51.45,
                    country: `Iran`,
                    name: `Tehran`
                }),
                new WorldCitiesItem(
                {
                    capital: true,
                    population: 6.13,
                    y: 25.04,
                    x: 121.51,
                    country: `Taiwan`,
                    name: `Taipei`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 5.83,
                    y: 59.95,
                    x: 30.45,
                    country: `Russia`,
                    name: `Saint Petersburg`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 5.75,
                    y: 41.07,
                    x: 29.01,
                    country: `Turkey`,
                    name: `Istanbul`
                }),
                new WorldCitiesItem(
                {
                    capital: true,
                    population: 5.47,
                    y: 14.55,
                    x: 121.17,
                    country: `Philippines`,
                    name: `Manila`
                }),
                new WorldCitiesItem(
                {
                    capital: true,
                    population: 5.4,
                    y: 22.43,
                    x: 114.15,
                    country: `UK`,
                    name: `Hong Kong`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 5.3,
                    y: 24.85,
                    x: 67.03,
                    country: `Pakistan`,
                    name: `Karachi`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 5.21,
                    y: 39.93,
                    x: -75.22,
                    country: `US`,
                    name: `Philadelphia`
                }),
                new WorldCitiesItem(
                {
                    capital: true,
                    population: 5.06,
                    y: 52.52,
                    x: 13.33,
                    country: `Germany`,
                    name: `Berlin`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 4.88,
                    y: 39.13,
                    x: 117.19,
                    country: `China`,
                    name: `Tianjin`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 4.8,
                    y: 35.15,
                    x: 136.92,
                    country: `Japan`,
                    name: `Nagoya`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 4.69,
                    y: 42.39,
                    x: -83.08,
                    country: `US`,
                    name: `Detroit`
                }),
                new WorldCitiesItem(
                {
                    capital: true,
                    population: 4.65,
                    y: 40.44,
                    x: -3.69,
                    country: `Spain`,
                    name: `Madrid`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 4.47,
                    y: 13.06,
                    x: 80.25,
                    country: `India`,
                    name: `Madras`
                }),
                new WorldCitiesItem(
                {
                    capital: true,
                    population: 4.34,
                    y: -12.07,
                    x: -76.82,
                    country: `Peru`,
                    name: `Lima`
                }),
                new WorldCitiesItem(
                {
                    capital: true,
                    population: 4.26,
                    y: 4.63,
                    x: -74.08,
                    country: `Colombia`,
                    name: `Bogota`
                }),
                new WorldCitiesItem(
                {
                    capital: true,
                    population: 4.1,
                    y: -33.48,
                    x: -70.65,
                    country: `Chile`,
                    name: `Santiago`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 4.05,
                    y: 37.73,
                    x: -122.31,
                    country: `US`,
                    name: `San Francisco`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 4.04,
                    y: 41.53,
                    x: 2.17,
                    country: `Spain`,
                    name: `BarceXa`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 3.97,
                    y: 42.38,
                    x: -71.1,
                    country: `US`,
                    name: `Boston`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 3.87,
                    y: 51.35,
                    x: 7.12,
                    country: `Germany`,
                    name: `Essen`
                }),
                new WorldCitiesItem(
                {
                    capital: true,
                    population: 3.84,
                    y: 33.33,
                    x: 44.4,
                    country: `Iraq`,
                    name: `Baghdad`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 3.84,
                    y: 41.8,
                    x: 123.38,
                    country: `China`,
                    name: `Shenyang`
                }),
                new WorldCitiesItem(
                {
                    capital: true,
                    population: 3.8,
                    y: 6.45,
                    x: 3.3,
                    country: `Nigeria`,
                    name: `Lagos`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 3.8,
                    y: 35.16,
                    x: 129.05,
                    country: `South Korea`,
                    name: `Pusan`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 3.75,
                    y: 45.47,
                    x: 9.19,
                    country: `Italy`,
                    name: `Milano`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 3.65,
                    y: -26.18,
                    x: 28,
                    country: `South Africa`,
                    name: `Johannesburg`
                }),
                new WorldCitiesItem(
                {
                    capital: true,
                    population: 3.6,
                    y: 10.5,
                    x: -66.9,
                    country: `Venezuela`,
                    name: `Caracas`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 3.49,
                    y: 30.57,
                    x: 114.28,
                    country: `China`,
                    name: `Wuhan`
                }),
                new WorldCitiesItem(
                {
                    capital: true,
                    population: 3.43,
                    y: 23.71,
                    x: 90.41,
                    country: `Bangladesh`,
                    name: `Dhaka`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 3.43,
                    y: 43.72,
                    x: -79.41,
                    country: `Canada`,
                    name: `Toronto`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 3.37,
                    y: -33.89,
                    x: 151.03,
                    country: `Australia`,
                    name: `Sydney`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 3.35,
                    y: 31.07,
                    x: 29.98,
                    country: `Egypt`,
                    name: `Alexandria`
                }),
                new WorldCitiesItem(
                {
                    capital: true,
                    population: 3.22,
                    y: 38.89,
                    x: -76.95,
                    country: `US`,
                    name: `Washington D.C.`
                }),
                new WorldCitiesItem(
                {
                    capital: true,
                    population: 3.17,
                    y: 41.88,
                    x: 12.52,
                    country: `Italy`,
                    name: `Roma`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 3.1,
                    y: 10.76,
                    x: 106.66,
                    country: `Vietnam`,
                    name: `Ho Chi Minh City`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 3.05,
                    y: 23.1,
                    x: 113.29,
                    country: `China`,
                    name: `Guangzhou`
                }),
                new WorldCitiesItem(
                {
                    capital: true,
                    population: 3.03,
                    y: 38.12,
                    x: 23.65,
                    country: `Greece`,
                    name: `Athens`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 3.02,
                    y: 1.23,
                    x: 104.18,
                    country: `Singapore`,
                    name: `Singapore`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 3.02,
                    y: 31.55,
                    x: 74.34,
                    country: `Pakistan`,
                    name: `Lahore`
                }),
                new WorldCitiesItem(
                {
                    capital: true,
                    population: 3,
                    y: -4.39,
                    x: 15.47,
                    country: `Zaire`,
                    name: `Kinshasa`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 2.99,
                    y: 35.44,
                    x: 139.62,
                    country: `Japan`,
                    name: `Yokohama`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 2.95,
                    y: -19.85,
                    x: -43.91,
                    country: `Brazil`,
                    name: `Belo Horizonte`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 2.95,
                    y: 12.97,
                    x: 77.59,
                    country: `India`,
                    name: `Bangalore`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 2.92,
                    y: 45.54,
                    x: -73.65,
                    country: `Canada`,
                    name: `Montreal`
                }),
                new WorldCitiesItem(
                {
                    capital: true,
                    population: 2.9,
                    y: 50.45,
                    x: 30.5,
                    country: `Ukraine`,
                    name: `Kiev`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 2.88,
                    y: 40.83,
                    x: 14.27,
                    country: `Italy`,
                    name: `Napoli`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 2.83,
                    y: -37.85,
                    x: 145.08,
                    country: `Australia`,
                    name: `Melbourne`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 2.83,
                    y: 25.83,
                    x: -80.27,
                    country: `US`,
                    name: `Miami`
                }),
                new WorldCitiesItem(
                {
                    capital: true,
                    population: 2.8,
                    y: 16.87,
                    x: 96.12,
                    country: `Burma`,
                    name: `Rangoon`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 2.77,
                    y: 53.48,
                    x: -2.26,
                    country: `UK`,
                    name: `Manchester`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 2.75,
                    y: 17.39,
                    x: 78.49,
                    country: `India`,
                    name: `Hyderabad`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 2.75,
                    y: 29.77,
                    x: -95.41,
                    country: `US`,
                    name: `Houston`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 2.73,
                    y: 32.76,
                    x: -96.66,
                    country: `US`,
                    name: `Dallas`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 2.67,
                    y: 45.76,
                    x: 126.62,
                    country: `China`,
                    name: `Harbin`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 2.67,
                    y: 52.49,
                    x: -1.86,
                    country: `UK`,
                    name: `Birmingham`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 2.63,
                    y: -8.09,
                    x: -34.91,
                    country: `Brazil`,
                    name: `Recife`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 2.6,
                    y: -30.04,
                    x: -51.21,
                    country: `Brazil`,
                    name: `Porto Alegre`
                }),
                new WorldCitiesItem(
                {
                    capital: true,
                    population: 2.56,
                    y: 47.51,
                    x: 19.09,
                    country: `Hungary`,
                    name: `Budapest`
                }),
                new WorldCitiesItem(
                {
                    capital: true,
                    population: 2.55,
                    y: 36.6,
                    x: 2.99,
                    country: `Algeria`,
                    name: `Algiers`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 2.48,
                    y: 33.54,
                    x: -7.53,
                    country: `Morocco`,
                    name: `Casablanca`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 2.45,
                    y: 29.54,
                    x: 106.52,
                    country: `China`,
                    name: `Chongqing`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 2.4,
                    y: 23.04,
                    x: 72.57,
                    country: `India`,
                    name: `Ahmadabad`
                }),
                new WorldCitiesItem(
                {
                    capital: true,
                    population: 2.4,
                    y: 39.93,
                    x: 32.85,
                    country: `Turkey`,
                    name: `Ankara`
                }),
                new WorldCitiesItem(
                {
                    capital: true,
                    population: 2.38,
                    y: 50.84,
                    x: 4.37,
                    country: `Belgium`,
                    name: `Bruxelles`
                }),
                new WorldCitiesItem(
                {
                    capital: true,
                    population: 2.33,
                    y: 41.25,
                    x: 69.35,
                    country: `Uzbekistan`,
                    name: `Toshkent`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 2.33,
                    y: 20.67,
                    x: -103.34,
                    country: `Mexico`,
                    name: `Guadalajara`
                }),
                new WorldCitiesItem(
                {
                    capital: true,
                    population: 2.32,
                    y: 52.24,
                    x: 21.01,
                    country: `Poland`,
                    name: `Warsaw`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 2.29,
                    y: 32.05,
                    x: 118.77,
                    country: `China`,
                    name: `Nanjing`
                }),
                new WorldCitiesItem(
                {
                    capital: true,
                    population: 2.25,
                    y: 38.73,
                    x: -9.13,
                    country: `Portugal`,
                    name: `Lisboa`
                }),
                new WorldCitiesItem(
                {
                    capital: true,
                    population: 2.25,
                    y: 44.43,
                    x: 26.12,
                    country: `Romania`,
                    name: `Bucharest`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 2.23,
                    y: 53.57,
                    x: 10.03,
                    country: `Germany`,
                    name: `Hamburg`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 2.22,
                    y: 40.5,
                    x: -80,
                    country: `US`,
                    name: `Pittsburgh`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 2.22,
                    y: 41.39,
                    x: -81.73,
                    country: `US`,
                    name: `Cleveland`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 2.21,
                    y: 35.86,
                    x: 128.59,
                    country: `South Korea`,
                    name: `Taegu`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 2.2,
                    y: 38.64,
                    x: -90.34,
                    country: `US`,
                    name: `St. Louis`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 2.2,
                    y: 48.04,
                    x: 37.74,
                    country: `Ukraine`,
                    name: `Donets'k`
                }),
                new WorldCitiesItem(
                {
                    capital: true,
                    population: 2.13,
                    y: 23.05,
                    x: -82.42,
                    country: `Cuba`,
                    name: `Havana`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 2.1,
                    y: 32.76,
                    x: -117.13,
                    country: `US`,
                    name: `San Diego`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 2.1,
                    y: 6.24,
                    x: -75.59,
                    country: `Colombia`,
                    name: `Medellin`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 2.08,
                    y: 47.59,
                    x: -122.32,
                    country: `US`,
                    name: `Seattle`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 2.05,
                    y: -12.6,
                    x: -38.48,
                    country: `Brazil`,
                    name: `Salvador`
                }),
                new WorldCitiesItem(
                {
                    capital: true,
                    population: 2.05,
                    y: 7.02,
                    x: 80.09,
                    country: `Sri Lanka`,
                    name: `Colombo`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 2.05,
                    y: 34.27,
                    x: 108.88,
                    country: `China`,
                    name: `Xian`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 2.03,
                    y: -7.4,
                    x: 112.68,
                    country: `Indonesia`,
                    name: `Surabaja`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 2.02,
                    y: 25.68,
                    x: -100.32,
                    country: `Mexico`,
                    name: `Monterrey`
                }),
                new WorldCitiesItem(
                {
                    capital: true,
                    population: 2.02,
                    y: 40.32,
                    x: 49.82,
                    country: `Azerbaijan`,
                    name: `Baku`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 2.02,
                    y: 56.29,
                    x: 43.94,
                    country: `Russia`,
                    name: `Nizhniy Novgorod`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 2.01,
                    y: 44.92,
                    x: -93.31,
                    country: `US`,
                    name: `Minneapolis`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 1.96,
                    y: 33.8,
                    x: -84.35,
                    country: `US`,
                    name: `Atlanta`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 1.96,
                    y: 39.32,
                    x: -76.62,
                    country: `US`,
                    name: `Baltimore`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 1.96,
                    y: 48.14,
                    x: 11.54,
                    country: `Germany`,
                    name: `Munich`
                }),
                new WorldCitiesItem(
                {
                    capital: true,
                    population: 1.95,
                    y: 5.32,
                    x: -4.02,
                    country: `Ivory Coast`,
                    name: `Abidjan`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 1.94,
                    y: 49.99,
                    x: 36.21,
                    country: `Ukraine`,
                    name: `Kharkov`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 1.9,
                    y: 43.06,
                    x: 141.35,
                    country: `Japan`,
                    name: `Sapporo`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 1.88,
                    y: 26.46,
                    x: 80.32,
                    country: `India`,
                    name: `Kanpur`
                }),
                new WorldCitiesItem(
                {
                    capital: true,
                    population: 1.88,
                    y: 48.2,
                    x: 16.32,
                    country: `Austria`,
                    name: `Vienna`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 1.87,
                    y: 30.47,
                    x: 30.85,
                    country: `Egypt`,
                    name: `Giza`
                }),
                new WorldCitiesItem(
                {
                    capital: true,
                    population: 1.86,
                    y: 52.37,
                    x: 4.89,
                    country: `Netherlands`,
                    name: `Amsterdam`
                }),
                new WorldCitiesItem(
                {
                    capital: true,
                    population: 1.85,
                    y: 33.52,
                    x: 36.31,
                    country: `Syria`,
                    name: `Damascus`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 1.85,
                    y: 50.13,
                    x: 8.67,
                    country: `Germany`,
                    name: `Frankfurt am Main`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 1.84,
                    y: 22.67,
                    x: 120.34,
                    country: `Taiwan`,
                    name: `Kao-Hsiung`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 1.82,
                    y: -3.78,
                    x: -38.59,
                    country: `Brazil`,
                    name: `Fortaleza`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 1.81,
                    y: 30.67,
                    x: 104.07,
                    country: `China`,
                    name: `Chengdu`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 1.8,
                    y: -6.91,
                    x: 107.61,
                    country: `Indonesia`,
                    name: `Bandung`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 1.8,
                    y: 55.86,
                    x: -4.27,
                    country: `UK`,
                    name: `Glasgow`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 1.79,
                    y: -33.8,
                    x: 18.69,
                    country: `South Africa`,
                    name: `Cape Town`
                }),
                new WorldCitiesItem(
                {
                    capital: true,
                    population: 1.77,
                    y: 18.4,
                    x: -66.08,
                    country: `Puerto Rico`,
                    name: `San Juan`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 1.77,
                    y: 18.54,
                    x: 73.85,
                    country: `India`,
                    name: `Pune`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 1.76,
                    y: 50.94,
                    x: 6.93,
                    country: `Germany`,
                    name: `Koln`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 1.75,
                    y: 33.31,
                    x: 130.32,
                    country: `Japan`,
                    name: `Fukuoka`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 1.74,
                    y: 43.88,
                    x: 125.31,
                    country: `China`,
                    name: `Changchung`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 1.7,
                    y: -25.43,
                    x: -49.28,
                    country: `Brazil`,
                    name: `Curitiba`
                }),
                new WorldCitiesItem(
                {
                    capital: true,
                    population: 1.69,
                    y: 55.72,
                    x: 12.55,
                    country: `Denmark`,
                    name: `Kobenhavn`
                }),
                new WorldCitiesItem(
                {
                    capital: true,
                    population: 1.68,
                    y: 33.78,
                    x: 35.66,
                    country: `Lebanon`,
                    name: `Beirut`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 1.68,
                    y: 39.03,
                    x: 121.6,
                    country: `China`,
                    name: `Dalian`
                }),
                new WorldCitiesItem(
                {
                    capital: true,
                    population: 1.67,
                    y: 31.92,
                    x: 34.86,
                    country: `Israel`,
                    name: `Tel Aviv-Yafo`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 1.66,
                    y: 37.89,
                    x: 112.55,
                    country: `China`,
                    name: `Taiyuan`
                }),
                new WorldCitiesItem(
                {
                    capital: true,
                    population: 1.65,
                    y: 53.9,
                    x: 27.58,
                    country: `Belarus`,
                    name: `Minsk`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 1.62,
                    y: 56.85,
                    x: 60.61,
                    country: `Russia`,
                    name: `Yekaterinburg`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 1.6,
                    y: 48.42,
                    x: 35.14,
                    country: `Ukraine`,
                    name: `Dnepropetrovsk`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 1.6,
                    y: 37.59,
                    x: 126.77,
                    country: `South Korea`,
                    name: `Inch\`on`
                }),
                new WorldCitiesItem(
                {
                    capital: true,
                    population: 1.6,
                    y: 39.03,
                    x: 125.76,
                    country: `North Korea`,
                    name: `Pyongyang`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 1.6,
                    y: 55.03,
                    x: 82.94,
                    country: `Russia`,
                    name: `Novosibirsk`
                }),
                new WorldCitiesItem(
                {
                    capital: true,
                    population: 1.57,
                    y: -15.79,
                    x: -47.9,
                    country: `Brazil`,
                    name: `Brasilia`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 1.57,
                    y: 34.38,
                    x: 132.44,
                    country: `Japan`,
                    name: `Hiroshima`
                }),
                new WorldCitiesItem(
                {
                    capital: true,
                    population: 1.55,
                    y: -34.92,
                    x: -56.17,
                    country: `Uruguay`,
                    name: `Montevideo`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 1.55,
                    y: 38.44,
                    x: 27.21,
                    country: `Turkey`,
                    name: `Izmir`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 1.55,
                    y: -29.84,
                    x: 30.94,
                    country: `South Africa`,
                    name: `Durban`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 1.55,
                    y: 45.07,
                    x: 7.67,
                    country: `Italy`,
                    name: `Torino`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 1.54,
                    y: 53.81,
                    x: -1.5,
                    country: `UK`,
                    name: `Leeds`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 1.52,
                    y: 53.42,
                    x: -2.77,
                    country: `UK`,
                    name: `Liverpool`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 1.52,
                    y: 33.68,
                    x: 130.8,
                    country: `Japan`,
                    name: `Kita Kyushu`
                }),
                new WorldCitiesItem(
                {
                    capital: true,
                    population: 1.5,
                    y: 9.03,
                    x: 38.7,
                    country: `Ethiopia`,
                    name: `Adis Abeba`
                }),
                new WorldCitiesItem(
                {
                    capital: true,
                    population: 1.5,
                    y: 21.03,
                    x: 105.82,
                    country: `Vietnam`,
                    name: `Hanoi`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 1.5,
                    y: 53.14,
                    x: 50.1,
                    country: `Russia`,
                    name: `Samara`
                }),
                new WorldCitiesItem(
                {
                    capital: true,
                    population: 1.48,
                    y: 3.15,
                    x: 101.71,
                    country: `Malaysia`,
                    name: `Kuala Lumpur`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 1.48,
                    y: 33.51,
                    x: -112.11,
                    country: `US`,
                    name: `Phoenix`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 1.48,
                    y: 35.01,
                    x: 135.75,
                    country: `Japan`,
                    name: `Kyoto`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 1.48,
                    y: 39.15,
                    x: -84.48,
                    country: `US`,
                    name: `Cincinnati`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 1.48,
                    y: 42.9,
                    x: -78.85,
                    country: `US`,
                    name: `Buffalo`
                }),
                new WorldCitiesItem(
                {
                    capital: true,
                    population: 1.46,
                    y: -9,
                    x: 13.46,
                    country: `Angola`,
                    name: `Luanda`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 1.46,
                    y: 36.29,
                    x: 59.6,
                    country: `Iran`,
                    name: `Mashhad`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 1.46,
                    y: 36.66,
                    x: 116.97,
                    country: `China`,
                    name: `Jinan`
                }),
                new WorldCitiesItem(
                {
                    capital: true,
                    population: 1.46,
                    y: 41.72,
                    x: 44.78,
                    country: `Georgia`,
                    name: `Tbilisi`
                }),
                new WorldCitiesItem(
                {
                    capital: true,
                    population: 1.45,
                    y: 59.24,
                    x: 18.08,
                    country: `Sweden`,
                    name: `Stockholm`
                }),
                new WorldCitiesItem(
                {
                    capital: true,
                    population: 1.43,
                    y: 14.63,
                    x: -16.85,
                    country: `Senegal`,
                    name: `Dakar`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 1.41,
                    y: 39.75,
                    x: -105.07,
                    country: `US`,
                    name: `Denver`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 1.41,
                    y: 34.66,
                    x: 135.18,
                    country: `Japan`,
                    name: `Kobe`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 1.4,
                    y: 3.46,
                    x: -76.52,
                    country: `Colombia`,
                    name: `Cali`
                }),
                new WorldCitiesItem(
                {
                    capital: true,
                    population: 1.4,
                    y: 14.62,
                    x: -90.52,
                    country: `Guatemala`,
                    name: `Guatemala`
                }),
                new WorldCitiesItem(
                {
                    capital: true,
                    population: 1.4,
                    y: 44.8,
                    x: 20.41,
                    country: `Serbia`,
                    name: `Belgrade`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 1.39,
                    y: 22.48,
                    x: 91.83,
                    country: `Bangladesh`,
                    name: `Chittagong`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 1.38,
                    y: 49.27,
                    x: -122.96,
                    country: `Canada`,
                    name: `Vancouver`
                }),
                new WorldCitiesItem(
                {
                    capital: true,
                    population: 1.38,
                    y: 29.19,
                    x: 48,
                    country: `Kuwait`,
                    name: `Al Kuwayt`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 1.38,
                    y: 43.07,
                    x: -87.99,
                    country: `US`,
                    name: `Milwaukee`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 1.37,
                    y: 3.59,
                    x: 98.68,
                    country: `Indonesia`,
                    name: `Medan`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 1.36,
                    y: 48.71,
                    x: 44.48,
                    country: `Russia`,
                    name: `Volgograd`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 1.33,
                    y: 14.65,
                    x: 121.03,
                    country: `Philippines`,
                    name: `Quezon City`
                }),
                new WorldCitiesItem(
                {
                    capital: true,
                    population: 1.32,
                    y: 50.11,
                    x: 14.46,
                    country: `Czechia`,
                    name: `Prague`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 1.32,
                    y: 55.15,
                    x: 61.39,
                    country: `Russia`,
                    name: `Chelyabinsk`
                }),
                new WorldCitiesItem(
                {
                    capital: true,
                    population: 1.31,
                    y: 18.5,
                    x: -69.91,
                    country: `Dominican Rp`,
                    name: `Santo Domingo`
                }),
                new WorldCitiesItem(
                {
                    capital: true,
                    population: 1.31,
                    y: 40.21,
                    x: 44.53,
                    country: `Armenia`,
                    name: `Yerevan`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 1.3,
                    y: 21.62,
                    x: 39.37,
                    country: `Saudi Arabia`,
                    name: `Jiddah`
                }),
                new WorldCitiesItem(
                {
                    capital: true,
                    population: 1.3,
                    y: -6.82,
                    x: 39.25,
                    country: `Tanzania`,
                    name: `Dar es Salaam`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 1.3,
                    y: 21.16,
                    x: 79.09,
                    country: `India`,
                    name: `Nagpur`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 1.3,
                    y: 41.12,
                    x: 122.98,
                    country: `China`,
                    name: `Anshan`
                }),
                new WorldCitiesItem(
                {
                    capital: true,
                    population: 1.29,
                    y: -1.17,
                    x: 36.83,
                    country: `Kenya`,
                    name: `Nairobi`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 1.28,
                    y: 25.05,
                    x: 102.7,
                    country: `China`,
                    name: `Kunming`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 1.27,
                    y: 36.15,
                    x: 120.43,
                    country: `China`,
                    name: `Qingdao`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 1.27,
                    y: 30.25,
                    x: 120.17,
                    country: `China`,
                    name: `Hangzhou`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 1.27,
                    y: 36.11,
                    x: 103.6,
                    country: `China`,
                    name: `Lanzhou`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 1.27,
                    y: 38.99,
                    x: -94.63,
                    country: `US`,
                    name: `Kansas City`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 1.27,
                    y: 39.47,
                    x: -0.37,
                    country: `Spain`,
                    name: `Valencia`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 1.27,
                    y: 41.86,
                    x: 123.91,
                    country: `China`,
                    name: `Fushun`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 1.27,
                    y: 45.75,
                    x: 4.86,
                    country: `France`,
                    name: `Lyon`
                }),
                new WorldCitiesItem(
                {
                    capital: true,
                    population: 1.25,
                    y: 24.65,
                    x: 46.77,
                    country: `Saudi Arabia`,
                    name: `Ar Riyad`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 1.25,
                    y: -2.2,
                    x: -79.91,
                    country: `Ecuador`,
                    name: `Guayaquil`
                }),
                new WorldCitiesItem(
                {
                    capital: true,
                    population: 1.25,
                    y: 5.56,
                    x: -0.2,
                    country: `Ghana`,
                    name: `Accra`
                }),
                new WorldCitiesItem(
                {
                    capital: true,
                    population: 1.25,
                    y: 31.95,
                    x: 35.93,
                    country: `Jordan`,
                    name: `Amman`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 1.23,
                    y: 41.15,
                    x: -8.49,
                    country: `Portugal`,
                    name: `Porto`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 1.23,
                    y: 43.3,
                    x: 5.38,
                    country: `France`,
                    name: `Marseille`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 1.23,
                    y: 45.44,
                    x: -122.64,
                    country: `US`,
                    name: `Portland`
                }),
                new WorldCitiesItem(
                {
                    capital: true,
                    population: 1.23,
                    y: 36.82,
                    x: 10.17,
                    country: `Tunisia`,
                    name: `Tunis`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 1.22,
                    y: 36.22,
                    x: 37.16,
                    country: `Syria`,
                    name: `Aleppo`
                }),
                new WorldCitiesItem(
                {
                    capital: true,
                    population: 1.21,
                    y: 42.71,
                    x: 23.33,
                    country: `Bulgaria`,
                    name: `Sofia`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 1.2,
                    y: -1.61,
                    x: -48.32,
                    country: `Brazil`,
                    name: `Belem`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 1.19,
                    y: 28.2,
                    x: 112.97,
                    country: `China`,
                    name: `Changsha`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 1.19,
                    y: 29.96,
                    x: -90.1,
                    country: `US`,
                    name: `New Orleans`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 1.19,
                    y: 38.08,
                    x: 114.56,
                    country: `China`,
                    name: `Shijiazhuang`
                }),
                new WorldCitiesItem(
                {
                    capital: true,
                    population: 1.19,
                    y: 43.26,
                    x: 76.91,
                    country: `Kazakhstan`,
                    name: `Almaty`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 1.19,
                    y: 46.57,
                    x: 30.68,
                    country: `Ukraine`,
                    name: `Odessa`
                }),
                new WorldCitiesItem(
                {
                    capital: true,
                    population: 1.18,
                    y: 34.53,
                    x: 69.14,
                    country: `Afghanistan`,
                    name: `Kabul`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 1.18,
                    y: 55.06,
                    x: 73.25,
                    country: `Russia`,
                    name: `Omsk`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 1.17,
                    y: 34.76,
                    x: 113.64,
                    country: `China`,
                    name: `Zhengzhou`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 1.17,
                    y: 43.85,
                    x: 126.57,
                    country: `China`,
                    name: `Jilin`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 1.17,
                    y: 47.23,
                    x: 39.69,
                    country: `Russia`,
                    name: `Rostov-na-Donu`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 1.16,
                    y: 58,
                    x: 56.23,
                    country: `Russia`,
                    name: `Perm'`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 1.15,
                    y: -27.45,
                    x: 153.03,
                    country: `Australia`,
                    name: `Brisbane`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 1.15,
                    y: 47.34,
                    x: 123.96,
                    country: `China`,
                    name: `Qiqihar`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 1.14,
                    y: 11.01,
                    x: -74.68,
                    country: `Colombia`,
                    name: `Barranquilla`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 1.14,
                    y: 7.38,
                    x: 3.9,
                    country: `Nigeria`,
                    name: `Ibadan`
                }),
                new WorldCitiesItem(
                {
                    capital: true,
                    population: 1.14,
                    y: 53.34,
                    x: -6.26,
                    country: `Ireland`,
                    name: `Dublin`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 1.14,
                    y: 55.73,
                    x: 49.15,
                    country: `Russia`,
                    name: `Kazan'`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 1.12,
                    y: 40.65,
                    x: 109.98,
                    country: `China`,
                    name: `Baotou`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 1.11,
                    y: 51.93,
                    x: 4.49,
                    country: `Netherlands`,
                    name: `Rotterdam`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 1.1,
                    y: 31.41,
                    x: 73.08,
                    country: `Pakistan`,
                    name: `Faisalabad`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 1.1,
                    y: 51.21,
                    x: 4.43,
                    country: `Belgium`,
                    name: `Antwerp`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 1.1,
                    y: 54.82,
                    x: 56.1,
                    country: `Russia`,
                    name: `Ufa`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 1.09,
                    y: 35.5,
                    x: 139.73,
                    country: `Japan`,
                    name: `Kawasaki`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 1.07,
                    y: -31.32,
                    x: -64.18,
                    country: `Argentina`,
                    name: `Cordoba`
                }),
                new WorldCitiesItem(
                {
                    capital: true,
                    population: 1.07,
                    y: -25.96,
                    x: 32.57,
                    country: `Mozambique`,
                    name: `Maputo`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 1.06,
                    y: -23.95,
                    x: -46.31,
                    country: `Brazil`,
                    name: `Santos`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 1.06,
                    y: 26.85,
                    x: 80.92,
                    country: `India`,
                    name: `Lucknow`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 1.06,
                    y: 39.62,
                    x: 118.18,
                    country: `China`,
                    name: `Tangshan`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 1.06,
                    y: 51.78,
                    x: 19.48,
                    country: `Poland`,
                    name: `Lodz`
                }),
                new WorldCitiesItem(
                {
                    capital: true,
                    population: 1.05,
                    y: -0.23,
                    x: -78.52,
                    country: `Ecuador`,
                    name: `Quito`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 1.05,
                    y: 19.05,
                    x: -98.19,
                    country: `Mexico`,
                    name: `Puebla de Zaragoza`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 1.04,
                    y: 31.78,
                    x: -106.45,
                    country: `US`,
                    name: `El Paso`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 1.04,
                    y: -32.94,
                    x: -60.66,
                    country: `Argentina`,
                    name: `Rosario`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 1.04,
                    y: 43.78,
                    x: 87.59,
                    country: `China`,
                    name: `Urumqi`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 1.03,
                    y: 4.14,
                    x: 9.71,
                    country: `Cameroon`,
                    name: `Douala`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 1.03,
                    y: 28.67,
                    x: 115.89,
                    country: `China`,
                    name: `Nanchang`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 1.02,
                    y: -7.03,
                    x: 110.44,
                    country: `Indonesia`,
                    name: `Semarang`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 1.02,
                    y: 25.61,
                    x: 85.14,
                    country: `India`,
                    name: `Patna`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 1.02,
                    y: 26.91,
                    x: 75.8,
                    country: `India`,
                    name: `Jaipur`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 1.02,
                    y: 50.63,
                    x: 3.06,
                    country: `France`,
                    name: `Lille`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 1.01,
                    y: 26.57,
                    x: 106.7,
                    country: `China`,
                    name: `Guiyang`
                }),
                new WorldCitiesItem(
                {
                    capital: true,
                    population: 1,
                    y: 56.88,
                    x: 24.05,
                    country: `Latvia`,
                    name: `Riga`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.99,
                    y: -31.98,
                    x: 115.92,
                    country: `Australia`,
                    name: `Perth`
                }),
                new WorldCitiesItem(
                {
                    capital: true,
                    population: 0.99,
                    y: 32.75,
                    x: 13.21,
                    country: `Libya`,
                    name: `Tripoli`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.99,
                    y: -16.73,
                    x: -49.25,
                    country: `Brazil`,
                    name: `Goiania`
                }),
                new WorldCitiesItem(
                {
                    capital: true,
                    population: 0.99,
                    y: -16.5,
                    x: -68.15,
                    country: `Bolivia`,
                    name: `La Paz`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.99,
                    y: 32.65,
                    x: 51.68,
                    country: `Iran`,
                    name: `Esfahan`
                }),
                new WorldCitiesItem(
                {
                    capital: true,
                    population: 0.98,
                    y: 33.92,
                    x: -6.75,
                    country: `Morocco`,
                    name: `Rabat`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.98,
                    y: -34.92,
                    x: 138.87,
                    country: `Australia`,
                    name: `Adelaide`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.98,
                    y: 43.28,
                    x: -2.97,
                    country: `Spain`,
                    name: `Bilbao`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.97,
                    y: 29.43,
                    x: -98.52,
                    country: `US`,
                    name: `San Antonio`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.97,
                    y: 38.08,
                    x: 46.29,
                    country: `Iran`,
                    name: `Tabriz`
                }),
                new WorldCitiesItem(
                {
                    capital: true,
                    population: 0.96,
                    y: -25.73,
                    x: 28.22,
                    country: `South Africa`,
                    name: `Pretoria`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.96,
                    y: 9.91,
                    x: 78.12,
                    country: `India`,
                    name: `Madurai`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.96,
                    y: 40.04,
                    x: -82.99,
                    country: `US`,
                    name: `Columbus`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.94,
                    y: 37.37,
                    x: -5.97,
                    country: `Spain`,
                    name: `Sevilla`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.93,
                    y: 25.28,
                    x: 82.96,
                    country: `India`,
                    name: `Benares`
                }),
                new WorldCitiesItem(
                {
                    capital: true,
                    population: 0.92,
                    y: 15.55,
                    x: 32.53,
                    country: `Sudan`,
                    name: `Khartoum`
                }),
                new WorldCitiesItem(
                {
                    capital: true,
                    population: 0.92,
                    y: 13.7,
                    x: -89.2,
                    country: `El Salvador`,
                    name: `San Salvador`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.91,
                    y: 54.37,
                    x: 18.62,
                    country: `Poland`,
                    name: `Gdansk`
                }),
                new WorldCitiesItem(
                {
                    capital: true,
                    population: 0.9,
                    y: 60.2,
                    x: 24.98,
                    country: `Finland`,
                    name: `Helsinki`
                }),
                new WorldCitiesItem(
                {
                    capital: true,
                    population: 0.89,
                    y: -17.83,
                    x: 31.02,
                    country: `Zimbabwe`,
                    name: `Harare`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.89,
                    y: 10.65,
                    x: -71.64,
                    country: `Venezuela`,
                    name: `Maracaibo`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.89,
                    y: 26.07,
                    x: 119.3,
                    country: `China`,
                    name: `Fuzhou`
                }),
                new WorldCitiesItem(
                {
                    capital: true,
                    population: 0.88,
                    y: 18.53,
                    x: -72.34,
                    country: `Haiti`,
                    name: `Port-au-Prince`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.87,
                    y: 38.57,
                    x: -121.42,
                    country: `US`,
                    name: `Sacramento`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.85,
                    y: 29.63,
                    x: 52.57,
                    country: `Iran`,
                    name: `Shiraz`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.85,
                    y: -36.89,
                    x: 174.8,
                    country: `New Zealand`,
                    name: `Auckland`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.85,
                    y: 35.11,
                    x: -90,
                    country: `US`,
                    name: `Memphis`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.84,
                    y: 33.61,
                    x: 73.04,
                    country: `Pakistan`,
                    name: `Rawalpindi`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.83,
                    y: 36.79,
                    x: 118.06,
                    country: `China`,
                    name: `Zibo`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.83,
                    y: 50.06,
                    x: 19.95,
                    country: `Poland`,
                    name: `Krakow`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.82,
                    y: 43.21,
                    x: -77.64,
                    country: `US`,
                    name: `Rochester`
                }),
                new WorldCitiesItem(
                {
                    capital: true,
                    population: 0.82,
                    y: 45.37,
                    x: -75.65,
                    country: `Canada`,
                    name: `Ottawa`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.81,
                    y: 44.46,
                    x: 8.92,
                    country: `Italy`,
                    name: `Genova`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.81,
                    y: -3.12,
                    x: -60.01,
                    country: `Brazil`,
                    name: `Manaus`
                }),
                new WorldCitiesItem(
                {
                    capital: true,
                    population: 0.8,
                    y: 9.52,
                    x: -12.8,
                    country: `Guinea`,
                    name: `Conakry`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.8,
                    y: 25.38,
                    x: 68.37,
                    country: `Pakistan`,
                    name: `Hyderabad`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.8,
                    y: 36.88,
                    x: -76.27,
                    country: `US`,
                    name: `Norfolk`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.8,
                    y: 53.08,
                    x: 8.86,
                    country: `Germany`,
                    name: `Bremen`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.79,
                    y: 53.57,
                    x: -113.27,
                    country: `Canada`,
                    name: `Edmonton`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.79,
                    y: -3,
                    x: 104.83,
                    country: `Indonesia`,
                    name: `Palembang`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.79,
                    y: 49.84,
                    x: 24.03,
                    country: `Ukraine`,
                    name: `Lvov`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.78,
                    y: 22.38,
                    x: 114.23,
                    country: `UK`,
                    name: `Kowloon`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.78,
                    y: 37,
                    x: 35.32,
                    country: `Turkey`,
                    name: `Adana`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.77,
                    y: 51.9,
                    x: 4.3,
                    country: `Netherlands`,
                    name: `The Hague`
                }),
                new WorldCitiesItem(
                {
                    capital: true,
                    population: 0.77,
                    y: 18.02,
                    x: -76.8,
                    country: `Jamaica`,
                    name: `Kingston`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.76,
                    y: 21.32,
                    x: -157.81,
                    country: `US`,
                    name: `Honolulu`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.75,
                    y: 50.62,
                    x: 5.57,
                    country: `Belgium`,
                    name: `Liege`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.74,
                    y: 34.67,
                    x: 112.36,
                    country: `China`,
                    name: `Luoyang`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.74,
                    y: 35.49,
                    x: -97.53,
                    country: `US`,
                    name: `Oklahoma City`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.72,
                    y: 38.13,
                    x: 13.4,
                    country: `Italy`,
                    name: `Palermo`
                }),
                new WorldCitiesItem(
                {
                    capital: true,
                    population: 0.72,
                    y: 59.93,
                    x: 10.72,
                    country: `Norway`,
                    name: `Oslo`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.71,
                    y: 40.63,
                    x: 22.8,
                    country: `Greece`,
                    name: `ThessaXiki`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.71,
                    y: 57.75,
                    x: 12,
                    country: `Sweden`,
                    name: `Goteborg`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.71,
                    y: -5.19,
                    x: 119.72,
                    country: `Indonesia`,
                    name: `Vjuag Padang`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.71,
                    y: 24.14,
                    x: 120.67,
                    country: `Taiwan`,
                    name: `T\`ai-chung`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.71,
                    y: 53.37,
                    x: -1.46,
                    country: `UK`,
                    name: `Sheffield`
                }),
                new WorldCitiesItem(
                {
                    capital: true,
                    population: 0.7,
                    y: -25.22,
                    x: -57.67,
                    country: `Paraguay`,
                    name: `Asuncion`
                }),
                new WorldCitiesItem(
                {
                    capital: true,
                    population: 0.7,
                    y: 45.81,
                    x: 15.96,
                    country: `Croatia`,
                    name: `Zagreb`
                }),
                new WorldCitiesItem(
                {
                    capital: true,
                    population: 0.7,
                    y: 11.56,
                    x: 104.91,
                    country: `Cambodia`,
                    name: `Phnom Penh`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.7,
                    y: 51.35,
                    x: 12.4,
                    country: `Germany`,
                    name: `Leipzig`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.69,
                    y: 9.99,
                    x: 76.52,
                    country: `India`,
                    name: `Cochin`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.69,
                    y: -33.88,
                    x: 25.48,
                    country: `South Africa`,
                    name: `Port Elizabeth`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.69,
                    y: 54.59,
                    x: -5.91,
                    country: `UK`,
                    name: `Belfast`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.68,
                    y: -32.9,
                    x: -71.3,
                    country: `Chile`,
                    name: `Valparaiso`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.68,
                    y: -36.88,
                    x: -72.85,
                    country: `Chile`,
                    name: `Concepcion`
                }),
                new WorldCitiesItem(
                {
                    capital: true,
                    population: 0.68,
                    y: 12.15,
                    x: -86.27,
                    country: `Nicaragua`,
                    name: `Managua`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.68,
                    y: 40.69,
                    x: -111.89,
                    country: `US`,
                    name: `Salt Lake City`
                }),
                new WorldCitiesItem(
                {
                    capital: true,
                    population: 0.67,
                    y: 47,
                    x: 28.83,
                    country: `Moldova`,
                    name: `Kishinev`
                }),
                new WorldCitiesItem(
                {
                    capital: true,
                    population: 0.67,
                    y: 9.93,
                    x: -84.08,
                    country: `Costa Rica`,
                    name: `San Jose`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.67,
                    y: 51.03,
                    x: -114.05,
                    country: `Canada`,
                    name: `Calgary`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.67,
                    y: 51.05,
                    x: 13.71,
                    country: `Germany`,
                    name: `Dresden`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.66,
                    y: 23.17,
                    x: 120.23,
                    country: `Taiwan`,
                    name: `T\`ai-nan`
                }),
                new WorldCitiesItem(
                {
                    capital: true,
                    population: 0.66,
                    y: -18.87,
                    x: 47.5,
                    country: `Madagascar`,
                    name: `Antananarivo`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.65,
                    y: 43.13,
                    x: 131.96,
                    country: `Russia`,
                    name: `Vladivostok`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.65,
                    y: -32.9,
                    x: -68.83,
                    country: `Argentina`,
                    name: `Mendoza`
                }),
                new WorldCitiesItem(
                {
                    capital: true,
                    population: 0.65,
                    y: 3.87,
                    x: 11.51,
                    country: `Cameroon`,
                    name: `Yaounde`
                }),
                new WorldCitiesItem(
                {
                    capital: true,
                    population: 0.65,
                    y: 12.65,
                    x: -7.99,
                    country: `Mali`,
                    name: `Bamako`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.65,
                    y: 22.84,
                    x: 89.56,
                    country: `Bangladesh`,
                    name: `Khulna`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.64,
                    y: 30.33,
                    x: -81.66,
                    country: `US`,
                    name: `Jacksonville`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.64,
                    y: 43.78,
                    x: 11.21,
                    country: `Italy`,
                    name: `Firenze`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.64,
                    y: 44.84,
                    x: -0.6,
                    country: `France`,
                    name: `Bordeaux`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.64,
                    y: 51.12,
                    x: 17.04,
                    country: `Poland`,
                    name: `Wroclaw`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.63,
                    y: 37.31,
                    x: -121.85,
                    country: `US`,
                    name: `San Jose`
                }),
                new WorldCitiesItem(
                {
                    capital: true,
                    population: 0.63,
                    y: 8.95,
                    x: -79.4,
                    country: `Panama`,
                    name: `Panama`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.63,
                    y: 35.75,
                    x: -0.52,
                    country: `Algeria`,
                    name: `Oran`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.63,
                    y: 51.5,
                    x: -3.15,
                    country: `UK`,
                    name: `Cardiff`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.63,
                    y: 55.88,
                    x: -3.3,
                    country: `UK`,
                    name: `Edinburgh`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.63,
                    y: 49.92,
                    x: -97.12,
                    country: `Canada`,
                    name: `Winnipeg`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.63,
                    y: 52.32,
                    x: 104.25,
                    country: `Russia`,
                    name: `Irkutsk`
                }),
                new WorldCitiesItem(
                {
                    capital: true,
                    population: 0.62,
                    y: 42.88,
                    x: 74.77,
                    country: `Kyrgyzstan`,
                    name: `Frunze`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.62,
                    y: 10.18,
                    x: -68,
                    country: `Venezuela`,
                    name: `Valencia`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.62,
                    y: 30.5,
                    x: 47.76,
                    country: `Iraq`,
                    name: `Al Basra`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.61,
                    y: 49.88,
                    x: 73.2,
                    country: `Kazakhstan`,
                    name: `Karaganda`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.6,
                    y: 48.53,
                    x: 135.07,
                    country: `Russia`,
                    name: `Khabarovsk`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.6,
                    y: 17.75,
                    x: 83.33,
                    country: `India`,
                    name: `Vishakhapatnam`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.6,
                    y: -2.5,
                    x: -44.43,
                    country: `Brazil`,
                    name: `Sao Luis`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.6,
                    y: 53.7,
                    x: 87.17,
                    country: `Russia`,
                    name: `Novokuznetsk`
                }),
                new WorldCitiesItem(
                {
                    capital: true,
                    population: 0.6,
                    y: 2.04,
                    x: 45.34,
                    country: `Somalia`,
                    name: `Muqdisho`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.6,
                    y: 46.8,
                    x: -71.24,
                    country: `Canada`,
                    name: `Quebec`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.59,
                    y: 28,
                    x: -82.59,
                    country: `US`,
                    name: `Tampa`
                }),
                new WorldCitiesItem(
                {
                    capital: true,
                    population: 0.59,
                    y: 38.63,
                    x: 68.9,
                    country: `Tajikistan`,
                    name: `Dushanfe`
                }),
                new WorldCitiesItem(
                {
                    capital: true,
                    population: 0.59,
                    y: -4.29,
                    x: 15.29,
                    country: `Congo`,
                    name: `Brazzaville`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.59,
                    y: 31.63,
                    x: 74.87,
                    country: `India`,
                    name: `Amritsar`
                }),
                new WorldCitiesItem(
                {
                    capital: true,
                    population: 0.58,
                    y: 54.69,
                    x: 25.28,
                    country: `Lithuania`,
                    name: `Vilnius`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.57,
                    y: 36.34,
                    x: 43.14,
                    country: `Iraq`,
                    name: `Mosul`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.57,
                    y: 41.65,
                    x: -0.88,
                    country: `Spain`,
                    name: `Zaragoza`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.57,
                    y: 50.73,
                    x: 7.1,
                    country: `Germany`,
                    name: `Bonn`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.57,
                    y: 51.51,
                    x: 7.47,
                    country: `Germany`,
                    name: `Dortmund`
                }),
                new WorldCitiesItem(
                {
                    capital: true,
                    population: 0.55,
                    y: 14.1,
                    x: -87.2,
                    country: `Honduras`,
                    name: `Tegucigalpa`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.55,
                    y: 21.43,
                    x: 39.81,
                    country: `Saudi Arabia`,
                    name: `Mecca`
                }),
                new WorldCitiesItem(
                {
                    capital: true,
                    population: 0.55,
                    y: 47.93,
                    x: 106.91,
                    country: `Mongolia`,
                    name: `Ulaanbaatar`
                }),
                new WorldCitiesItem(
                {
                    capital: true,
                    population: 0.54,
                    y: -15.43,
                    x: 28.17,
                    country: `Zambia`,
                    name: `Lusaka`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.54,
                    y: -11.68,
                    x: 27.55,
                    country: `Zaire`,
                    name: `Lumumbashi`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.54,
                    y: 11.92,
                    x: 8.52,
                    country: `Nigeria`,
                    name: `Kano`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.54,
                    y: 31.15,
                    x: -8,
                    country: `Morocco`,
                    name: `Marrakech`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.54,
                    y: 34.04,
                    x: -5,
                    country: `Morocco`,
                    name: `Fes`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.54,
                    y: 43.6,
                    x: 1.44,
                    country: `France`,
                    name: `Toulouse`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.53,
                    y: 15.62,
                    x: 32.48,
                    country: `Sudan`,
                    name: `Omdurman`
                }),
                new WorldCitiesItem(
                {
                    capital: true,
                    population: 0.53,
                    y: 8.38,
                    x: -12.91,
                    country: `Sierra Leone`,
                    name: `Freetown`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.53,
                    y: 21.98,
                    x: 96.08,
                    country: `Burma`,
                    name: `Mandalay`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.52,
                    y: 51.49,
                    x: 6.78,
                    country: `Germany`,
                    name: `Duisburg`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.51,
                    y: 46.25,
                    x: 48,
                    country: `Russia`,
                    name: `Astrakhan`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.51,
                    y: -5.78,
                    x: -35.25,
                    country: `Brazil`,
                    name: `Natal`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.5,
                    y: 10.07,
                    x: -69.34,
                    country: `Venezuela`,
                    name: `Barquisimeto`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.49,
                    y: 5.35,
                    x: 100.55,
                    country: `Malaysia`,
                    name: `George Town`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.49,
                    y: 31.77,
                    x: 35.23,
                    country: `Israel`,
                    name: `Jerusalem`
                }),
                new WorldCitiesItem(
                {
                    capital: true,
                    population: 0.48,
                    y: 59.28,
                    x: 24.75,
                    country: `Estonia`,
                    name: `Tallinn`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.48,
                    y: 35.21,
                    x: -80.84,
                    country: `US`,
                    name: `Charlotte`
                }),
                new WorldCitiesItem(
                {
                    capital: true,
                    population: 0.47,
                    y: 6.52,
                    x: -10.77,
                    country: `Liberia`,
                    name: `Monrovia`
                }),
                new WorldCitiesItem(
                {
                    capital: true,
                    population: 0.47,
                    y: 4.37,
                    x: 18.56,
                    country: `Cent Af Rep`,
                    name: `Bangui`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.47,
                    y: 47.22,
                    x: -1.56,
                    country: `France`,
                    name: `Nantes`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.47,
                    y: 51.05,
                    x: 3.74,
                    country: `Belgium`,
                    name: `Gent`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.47,
                    y: 68.96,
                    x: 33.09,
                    country: `Russia`,
                    name: `Murmansk`
                }),
                new WorldCitiesItem(
                {
                    capital: true,
                    population: 0.46,
                    y: 0.32,
                    x: 32.58,
                    country: `Uganda`,
                    name: `Kampala`
                }),
                new WorldCitiesItem(
                {
                    capital: true,
                    population: 0.45,
                    y: 42,
                    x: 21.53,
                    country: `Macedonia`,
                    name: `Skopje`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.45,
                    y: 32.88,
                    x: 129.86,
                    country: `Japan`,
                    name: `Nagasaki`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.45,
                    y: -16.4,
                    x: -71.52,
                    country: `Peru`,
                    name: `Arequipa`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.45,
                    y: 49.2,
                    x: 16.62,
                    country: `Czechia`,
                    name: `Brno`
                }),
                new WorldCitiesItem(
                {
                    capital: true,
                    population: 0.44,
                    y: 12.48,
                    x: -1.67,
                    country: `Burkina Faso`,
                    name: `Ouagadouou`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.44,
                    y: -4.02,
                    x: 39.67,
                    country: `Kenya`,
                    name: `Mombasa`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.44,
                    y: 32.04,
                    x: 20.31,
                    country: `Libya`,
                    name: `Banghazi`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.44,
                    y: -17.79,
                    x: -63.2,
                    country: `Bolivia`,
                    name: `Santa Cruz de La Sierra`
                }),
                new WorldCitiesItem(
                {
                    capital: true,
                    population: 0.43,
                    y: 48.27,
                    x: 17.27,
                    country: `Slovakia`,
                    name: `Bratislava`
                }),
                new WorldCitiesItem(
                {
                    capital: true,
                    population: 0.43,
                    y: 15.36,
                    x: 44.21,
                    country: `Yemen`,
                    name: `Sanaa`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.43,
                    y: 22.24,
                    x: -97.84,
                    country: `Mexico`,
                    name: `Tampico`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.43,
                    y: 34.73,
                    x: 36.72,
                    country: `Syria`,
                    name: `Homs`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.42,
                    y: 45.42,
                    x: 12.37,
                    country: `Italy`,
                    name: `Venezia`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.42,
                    y: 64.52,
                    x: 40.65,
                    country: `Russia`,
                    name: `Arkhangelsk`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.41,
                    y: -20.2,
                    x: 28.71,
                    country: `Zimbabwe`,
                    name: `Bulawayo`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.41,
                    y: -33,
                    x: 151.91,
                    country: `Australia`,
                    name: `Newcastle`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.41,
                    y: 7.08,
                    x: 125.61,
                    country: `Philippines`,
                    name: `Davao`
                }),
                new WorldCitiesItem(
                {
                    capital: true,
                    population: 0.4,
                    y: 6.28,
                    x: 1.35,
                    country: `Togo`,
                    name: `Lome`
                }),
                new WorldCitiesItem(
                {
                    capital: true,
                    population: 0.4,
                    y: 13.6,
                    x: 2.08,
                    country: `Niger`,
                    name: `Niamey`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.4,
                    y: 20.82,
                    x: -89.55,
                    country: `Mexico`,
                    name: `Merida`
                }),
                new WorldCitiesItem(
                {
                    capital: true,
                    population: 0.4,
                    y: 37.95,
                    x: 58.39,
                    country: `Turkmenistan`,
                    name: `Ashkhabad`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.4,
                    y: 48.58,
                    x: 7.77,
                    country: `France`,
                    name: `Strasbourg`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.39,
                    y: 19.01,
                    x: -96.08,
                    country: `Mexico`,
                    name: `Veracruz`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.39,
                    y: 28.56,
                    x: -105.97,
                    country: `Mexico`,
                    name: `Chihuaha`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.39,
                    y: 20.86,
                    x: 106.68,
                    country: `Vietnam`,
                    name: `Haiphong`
                }),
                new WorldCitiesItem(
                {
                    capital: true,
                    population: 0.38,
                    y: 18,
                    x: 102.68,
                    country: `Laos`,
                    name: `Vientiane`
                }),
                new WorldCitiesItem(
                {
                    capital: true,
                    population: 0.37,
                    y: 10.64,
                    x: -61.49,
                    country: `Trinidad`,
                    name: `Port of Spain`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.37,
                    y: 39.66,
                    x: 66.95,
                    country: `Uzbekistan`,
                    name: `Samarkand`
                }),
                new WorldCitiesItem(
                {
                    capital: true,
                    population: 0.35,
                    y: -41.21,
                    x: 175.14,
                    country: `New Zealand`,
                    name: `Wellington`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.35,
                    y: -7.93,
                    x: -79,
                    country: `Peru`,
                    name: `Trujillo`
                }),
                new WorldCitiesItem(
                {
                    capital: true,
                    population: 0.34,
                    y: 43.87,
                    x: 18.43,
                    country: `Bosnia`,
                    name: `Sarajevo`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.34,
                    y: 48.3,
                    x: 14.29,
                    country: `Austria`,
                    name: `Linz`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.33,
                    y: 40.72,
                    x: -74.2,
                    country: `US`,
                    name: `Newark`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.33,
                    y: 29.96,
                    x: 32.56,
                    country: `Egypt`,
                    name: `Suez`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.33,
                    y: 47.06,
                    x: 15.43,
                    country: `Austria`,
                    name: `Graz`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.32,
                    y: 12.86,
                    x: 45.18,
                    country: `Yemen`,
                    name: `Aden`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.32,
                    y: -33.03,
                    x: 27.9,
                    country: `South Africa`,
                    name: `East Xdon`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.32,
                    y: -43.55,
                    x: 172.68,
                    country: `New Zealand`,
                    name: `Christchurch`
                }),
                new WorldCitiesItem(
                {
                    capital: true,
                    population: 0.32,
                    y: 27.71,
                    x: 85.31,
                    country: `Nepal`,
                    name: `Kathmandu`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.31,
                    y: 12.95,
                    x: 75.16,
                    country: `India`,
                    name: `Mangalore`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.31,
                    y: 34.75,
                    x: 10.76,
                    country: `Tunisia`,
                    name: `Sfax`
                }),
                new WorldCitiesItem(
                {
                    capital: true,
                    population: 0.31,
                    y: 25.2,
                    x: 51.5,
                    country: `Qatar`,
                    name: `Doha`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.3,
                    y: -0.92,
                    x: 100.48,
                    country: `Indonesia`,
                    name: `Padang`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.3,
                    y: 44.63,
                    x: -63.58,
                    country: `Canada`,
                    name: `Halifax`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.3,
                    y: 16.97,
                    x: -99.93,
                    country: `Mexico`,
                    name: `ACapulco`
                }),
                new WorldCitiesItem(
                {
                    capital: true,
                    population: 0.3,
                    y: 12.1,
                    x: 15.24,
                    country: `Chad`,
                    name: `N'Djamena`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.3,
                    y: 39.23,
                    x: 9.11,
                    country: `Italy`,
                    name: `Cagliari`
                }),
                new WorldCitiesItem(
                {
                    capital: true,
                    population: 0.3,
                    y: 46.95,
                    x: 7.45,
                    country: `Switzerland`,
                    name: `Bern`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.29,
                    y: -19.77,
                    x: 35.02,
                    country: `Mozambique`,
                    name: `Beira`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.29,
                    y: -4.64,
                    x: 12.06,
                    country: `Congo`,
                    name: `Pointe Noire`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.29,
                    y: 40.75,
                    x: 140.67,
                    country: `Japan`,
                    name: `Aomori`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.29,
                    y: 24.43,
                    x: 39.7,
                    country: `Saudi Arabia`,
                    name: `Al Madinah`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.29,
                    y: -31.62,
                    x: -60.7,
                    country: `Argentina`,
                    name: `Santa Fe`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.29,
                    y: -5.89,
                    x: 22.4,
                    country: `Zaire`,
                    name: `Kananga`
                }),
                new WorldCitiesItem(
                {
                    capital: true,
                    population: 0.28,
                    y: 18.03,
                    x: -15.78,
                    country: `Mauritania`,
                    name: `Nouakchott`
                }),
                new WorldCitiesItem(
                {
                    capital: true,
                    population: 0.28,
                    y: 15.33,
                    x: 38.97,
                    country: `Eritrea`,
                    name: `Asmara`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.28,
                    y: 29.6,
                    x: 60.83,
                    country: `Iran`,
                    name: `Zahedan`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.28,
                    y: -6.62,
                    x: -79.83,
                    country: `Peru`,
                    name: `Chiclayo`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.28,
                    y: -15.55,
                    x: -56.05,
                    country: `Brazil`,
                    name: `Cuiaba`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.28,
                    y: 0.52,
                    x: 25.2,
                    country: `Zaire`,
                    name: `Kisangani`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.27,
                    y: 53.2,
                    x: 158.72,
                    country: `Russia`,
                    name: `Petropavloski-Kamchatskiy`
                }),
                new WorldCitiesItem(
                {
                    capital: true,
                    population: 0.27,
                    y: -3.27,
                    x: 29.53,
                    country: `Burundi`,
                    name: `Bujumbura`
                }),
                new WorldCitiesItem(
                {
                    capital: true,
                    population: 0.27,
                    y: -35.35,
                    x: 149.04,
                    country: `Australia`,
                    name: `Canberra`
                }),
                new WorldCitiesItem(
                {
                    capital: true,
                    population: 0.27,
                    y: 28.57,
                    x: 77.22,
                    country: `India`,
                    name: `New Delhi`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.26,
                    y: 49.32,
                    x: 0.22,
                    country: `France`,
                    name: `Le Havre`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.26,
                    y: 48.65,
                    x: -123.57,
                    country: `Canada`,
                    name: `Victoria`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.26,
                    y: 11.88,
                    x: 13.26,
                    country: `Niger`,
                    name: `Maiduguri`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.26,
                    y: -12.04,
                    x: -76.84,
                    country: `Peru`,
                    name: `Callao`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.25,
                    y: -7.33,
                    x: 19,
                    country: `Zaire`,
                    name: `Kahemba`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.25,
                    y: 6.45,
                    x: 7.49,
                    country: `Nigeria`,
                    name: `Enugu`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.25,
                    y: 39.9,
                    x: 41.29,
                    country: `Turkey`,
                    name: `Erzurum`
                }),
                new WorldCitiesItem(
                {
                    capital: true,
                    population: 0.24,
                    y: 24.24,
                    x: 54.62,
                    country: `UAE`,
                    name: `Abu Zaby`
                }),
                new WorldCitiesItem(
                {
                    capital: true,
                    population: 0.24,
                    y: 5.93,
                    x: -55.23,
                    country: `SuriName`,
                    name: `Paramaribo`
                }),
                new WorldCitiesItem(
                {
                    capital: true,
                    population: 0.24,
                    y: -0.5,
                    x: 9.49,
                    country: `Gabon`,
                    name: `Libreville`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.24,
                    y: 60.35,
                    x: 5.49,
                    country: `Norway`,
                    name: `Bergen`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.24,
                    y: 41.32,
                    x: 36.37,
                    country: `Turkey`,
                    name: `Samsun`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.24,
                    y: 45.7,
                    x: 13.93,
                    country: `Italy`,
                    name: `Trieste`
                }),
                new WorldCitiesItem(
                {
                    capital: true,
                    population: 0.23,
                    y: -13.92,
                    x: 33.82,
                    country: `Malawi`,
                    name: `LiXgwe`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.23,
                    y: 31.97,
                    x: 54.45,
                    country: `Iran`,
                    name: `Yazd`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.23,
                    y: -29.15,
                    x: 26.26,
                    country: `South Africa`,
                    name: `Bloemfontein`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.23,
                    y: -2.46,
                    x: -54.61,
                    country: `Brazil`,
                    name: `Santarem`
                }),
                new WorldCitiesItem(
                {
                    capital: true,
                    population: 0.23,
                    y: 46.07,
                    x: 14.64,
                    country: `Slovenia`,
                    name: `Ljubljana`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.22,
                    y: 1.42,
                    x: 124.88,
                    country: `Indonesia`,
                    name: `Manado`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.22,
                    y: -8.93,
                    x: -78.45,
                    country: `Peru`,
                    name: `Chimbote`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.22,
                    y: -27.4,
                    x: -58.9,
                    country: `Argentina`,
                    name: `Resistencia`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.22,
                    y: 47.8,
                    x: 13.09,
                    country: `Austria`,
                    name: `Salzburg`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.22,
                    y: -38.73,
                    x: -62.27,
                    country: `Argentina`,
                    name: `Bahia Blanca`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.21,
                    y: -1.21,
                    x: 116.86,
                    country: `Indonesia`,
                    name: `Balikpapan`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.21,
                    y: 19.62,
                    x: 37.22,
                    country: `Sudan`,
                    name: `Bur Sudan`
                }),
                new WorldCitiesItem(
                {
                    capital: true,
                    population: 0.21,
                    y: 41.33,
                    x: 19.83,
                    country: `Albania`,
                    name: `Tirane`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.2,
                    y: 7.58,
                    x: -72.01,
                    country: `Venezuela`,
                    name: `San Cristobal`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.2,
                    y: 34.34,
                    x: 36.01,
                    country: `Lebanon`,
                    name: `Tripoli`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.2,
                    y: 31.6,
                    x: 65.5,
                    country: `Afghanistan`,
                    name: `Qandahar`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.2,
                    y: 23.36,
                    x: -106.27,
                    country: `Mexico`,
                    name: `Mazatlan`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.2,
                    y: -12.73,
                    x: 15.78,
                    country: `Angola`,
                    name: `Huambo`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.2,
                    y: -8.75,
                    x: -63.9,
                    country: `Brazil`,
                    name: `Porto Velho`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.2,
                    y: 52.11,
                    x: -106.63,
                    country: `Canada`,
                    name: `Saskatoon`
                }),
                new WorldCitiesItem(
                {
                    capital: true,
                    population: 0.2,
                    y: 33.72,
                    x: 73.06,
                    country: `Pakistan`,
                    name: `Islamabad`
                }),
                new WorldCitiesItem(
                {
                    capital: true,
                    population: 0.19,
                    y: 6.77,
                    x: -58.17,
                    country: `Guyana`,
                    name: `Georgetown`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.19,
                    y: 24.08,
                    x: 32.95,
                    country: `Egypt`,
                    name: `Aswan`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.19,
                    y: 62.01,
                    x: 129.83,
                    country: `Russia`,
                    name: `Yakutsk`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.19,
                    y: 50.41,
                    x: -104.65,
                    country: `Canada`,
                    name: `Regina`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.18,
                    y: 61.19,
                    x: -149.17,
                    country: `US`,
                    name: `Anchorage`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.18,
                    y: -23.83,
                    x: -70.23,
                    country: `Chile`,
                    name: `Antofagasta`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.18,
                    y: -13.6,
                    x: -71.86,
                    country: `Peru`,
                    name: `Cuzco`
                }),
                new WorldCitiesItem(
                {
                    capital: true,
                    population: 0.18,
                    y: -2.12,
                    x: 29.99,
                    country: `Rwanda`,
                    name: `Kigali`
                }),
                new WorldCitiesItem(
                {
                    capital: true,
                    population: 0.18,
                    y: 35.17,
                    x: 33.39,
                    country: `Cyprus`,
                    name: `Nicosia`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.18,
                    y: -3.75,
                    x: -73.19,
                    country: `Peru`,
                    name: `Iquitos`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.18,
                    y: 47.27,
                    x: 11.35,
                    country: `Austria`,
                    name: `Innsbruck`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.17,
                    y: 69.33,
                    x: 88.1,
                    country: `Russia`,
                    name: `Noril\`sk`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.17,
                    y: -43,
                    x: 147.5,
                    country: `Australia`,
                    name: `Hobart`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.17,
                    y: 50.33,
                    x: 110.75,
                    country: `Russia`,
                    name: `Chatanga`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.17,
                    y: 16.46,
                    x: 107.7,
                    country: `Vietnam`,
                    name: `Hue`
                }),
                new WorldCitiesItem(
                {
                    capital: true,
                    population: 0.16,
                    y: 6.6,
                    x: 2.63,
                    country: `Benin`,
                    name: `Porto Novo`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.16,
                    y: 34.46,
                    x: 62.21,
                    country: `Afghanistan`,
                    name: `Herat`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.15,
                    y: 16.92,
                    x: -96.94,
                    country: `Mexico`,
                    name: `Oaxaca`
                }),
                new WorldCitiesItem(
                {
                    capital: true,
                    population: 0.15,
                    y: -9.55,
                    x: 147.41,
                    country: `Papua N Guin`,
                    name: `Port Moresby`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.15,
                    y: 38.14,
                    x: 21.88,
                    country: `Greece`,
                    name: `Patras`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.15,
                    y: 39.48,
                    x: 76,
                    country: `China`,
                    name: `Kashi`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.15,
                    y: -12.72,
                    x: 13.46,
                    country: `Angola`,
                    name: `Benguela`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.15,
                    y: 59.57,
                    x: 150.78,
                    country: `Russia`,
                    name: `Magadan`
                }),
                new WorldCitiesItem(
                {
                    capital: true,
                    population: 0.14,
                    y: 64.31,
                    x: -21.34,
                    country: `Iceland`,
                    name: `Reykjavik`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.14,
                    y: 55.57,
                    x: 9.9,
                    country: `Denmark`,
                    name: `Odense`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.14,
                    y: 13.18,
                    x: 30.16,
                    country: `Sudan`,
                    name: `El Obeid`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.14,
                    y: -28.66,
                    x: 24.83,
                    country: `South Africa`,
                    name: `Kimberley`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.14,
                    y: -5.81,
                    x: 13.45,
                    country: `Zaire`,
                    name: `Matadi`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.13,
                    y: 0.05,
                    x: 18.46,
                    country: `Zaire`,
                    name: `Mbandaka`
                }),
                new WorldCitiesItem(
                {
                    capital: true,
                    population: 0.13,
                    y: 49.74,
                    x: 6.27,
                    country: `Luxembourg`,
                    name: `Luxembourg`
                }),
                new WorldCitiesItem(
                {
                    capital: true,
                    population: 0.12,
                    y: -22.57,
                    x: 17.1,
                    country: `Namibia`,
                    name: `Windhoek`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.12,
                    y: 67.8,
                    x: 64.33,
                    country: `Russia`,
                    name: `Vorkuta`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.12,
                    y: 45.34,
                    x: -65.65,
                    country: `Canada`,
                    name: `Saint John`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.12,
                    y: -0.82,
                    x: 9.15,
                    country: `Gabon`,
                    name: `Port Gentil`
                }),
                new WorldCitiesItem(
                {
                    capital: true,
                    population: 0.12,
                    y: 11.5,
                    x: 43.1,
                    country: `Djibouti`,
                    name: `Djibouti`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.11,
                    y: -20.26,
                    x: -69.91,
                    country: `Chile`,
                    name: `Iquique`
                }),
                new WorldCitiesItem(
                {
                    capital: true,
                    population: 0.11,
                    y: 11.91,
                    x: -15.65,
                    country: `GuineaBissau`,
                    name: `Bissau`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.11,
                    y: -3.39,
                    x: 129.31,
                    country: `Indonesia`,
                    name: `Ambon`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.11,
                    y: -45.86,
                    x: 170.5,
                    country: `New Zealand`,
                    name: `Dunedin`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.11,
                    y: -19.3,
                    x: 146.83,
                    country: `Australia`,
                    name: `Townsville`
                }),
                new WorldCitiesItem(
                {
                    capital: true,
                    population: 0.11,
                    y: -29.26,
                    x: 27.89,
                    country: `Lesotho`,
                    name: `Maseru`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.1,
                    y: 46.92,
                    x: -122.88,
                    country: `US`,
                    name: `Olympia`
                }),
                new WorldCitiesItem(
                {
                    capital: true,
                    population: 0.1,
                    y: 13.45,
                    x: -16.49,
                    country: `Gambia`,
                    name: `Banjul`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.1,
                    y: -45.83,
                    x: -67.5,
                    country: `Argentina`,
                    name: `Comodoro Rivadavia`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.1,
                    y: -53.15,
                    x: -70.8,
                    country: `Chile`,
                    name: `Punte Arenas`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.1,
                    y: -18.23,
                    x: 49.41,
                    country: `Madagascar`,
                    name: `Toamasina`
                }),
                new WorldCitiesItem(
                {
                    capital: true,
                    population: 0.1,
                    y: -24.66,
                    x: 25.79,
                    country: `Botswana`,
                    name: `Gaborone`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.09,
                    y: 15.95,
                    x: -16.3,
                    country: `Senegal`,
                    name: `Saint Louis`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.09,
                    y: 27,
                    x: -13.18,
                    country: `W Sahara`,
                    name: `Laayoune`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.09,
                    y: -19.04,
                    x: -65.26,
                    country: `Bolivia`,
                    name: `Sucre`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.08,
                    y: -31.31,
                    x: -57.71,
                    country: `Uruguay`,
                    name: `Salto`
                }),
                new WorldCitiesItem(
                {
                    capital: true,
                    population: 0.08,
                    y: 42.5,
                    x: 19.4,
                    country: `Montenegro`,
                    name: `Podgorica`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.08,
                    y: -41.48,
                    x: -73,
                    country: `Chile`,
                    name: `Puerto Montt`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.08,
                    y: 29.65,
                    x: 91.13,
                    country: `China`,
                    name: `Lhasa`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.07,
                    y: 61.15,
                    x: 47,
                    country: `Russia`,
                    name: `Kotlas`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.07,
                    y: -12.7,
                    x: 130.99,
                    country: `Australia`,
                    name: `Darwin`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.07,
                    y: 1.5,
                    x: 110.43,
                    country: `Malaysia`,
                    name: `Kuching`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.06,
                    y: -23.29,
                    x: 44.02,
                    country: `Madagascar`,
                    name: `Toliara`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.06,
                    y: -31,
                    x: -71.02,
                    country: `Chile`,
                    name: `Coquimbo`
                }),
                new WorldCitiesItem(
                {
                    capital: true,
                    population: 0.06,
                    y: 4.93,
                    x: 114.97,
                    country: `Brunei`,
                    name: `Bandar Seri Begawan`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.06,
                    y: -17.83,
                    x: 25.88,
                    country: `Zambia`,
                    name: `Livingstone`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.06,
                    y: -23.43,
                    x: 150.48,
                    country: `Australia`,
                    name: `Rockhampton`
                }),
                new WorldCitiesItem(
                {
                    capital: true,
                    population: 0.05,
                    y: 23.52,
                    x: 58.63,
                    country: `Oman`,
                    name: `Masqat`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.05,
                    y: -4.95,
                    x: 30,
                    country: `Tanzania`,
                    name: `Kigoma`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.05,
                    y: 16.96,
                    x: 7.98,
                    country: `Niger`,
                    name: `Agadez`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.05,
                    y: -10.26,
                    x: 40.18,
                    country: `Tanzania`,
                    name: `Mtwara`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.05,
                    y: -46.41,
                    x: 168.45,
                    country: `New Zealand`,
                    name: `Invercargill`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.05,
                    y: -6.18,
                    x: 35.75,
                    country: `Tanzania`,
                    name: `Dodoma`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.04,
                    y: 64.84,
                    x: -147.65,
                    country: `US`,
                    name: `Fairbanks`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.04,
                    y: 19.71,
                    x: -155.07,
                    country: `US`,
                    name: `Hilo`
                }),
                new WorldCitiesItem(
                {
                    capital: true,
                    population: 0.04,
                    y: 4.92,
                    x: -52.4,
                    country: `Fr Guiana`,
                    name: `Cayenne`
                }),
                new WorldCitiesItem(
                {
                    capital: true,
                    population: 0.04,
                    y: -26.3,
                    x: 31.19,
                    country: `Swaziland`,
                    name: `Mbabne`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.04,
                    y: -16.85,
                    x: 145.71,
                    country: `Australia`,
                    name: `Cairns`
                }),
                new WorldCitiesItem(
                {
                    capital: true,
                    population: 0.03,
                    y: 3.64,
                    x: 8.82,
                    country: `Eq Guinea`,
                    name: `Malabo`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.03,
                    y: 50.28,
                    x: -66.4,
                    country: `Canada`,
                    name: `Sept-Iles`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.03,
                    y: -41.3,
                    x: 173.27,
                    country: `New Zealand`,
                    name: `Nelson`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.03,
                    y: 16.76,
                    x: -3.01,
                    country: `Mali`,
                    name: `Tombouctoo`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.02,
                    y: 58.39,
                    x: -134.13,
                    country: `US`,
                    name: `Juneau`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.02,
                    y: -23.1,
                    x: 14.62,
                    country: `Namibia`,
                    name: `Walvis Bay`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.02,
                    y: 54.42,
                    x: -130.05,
                    country: `Canada`,
                    name: `Prince Rupert`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.02,
                    y: 20.9,
                    x: -16.83,
                    country: `Mauritania`,
                    name: `Nouadnibou`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.02,
                    y: 27.2,
                    x: 2.53,
                    country: `Algeria`,
                    name: `In Salah`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.02,
                    y: -32.04,
                    x: 115.93,
                    country: `Australia`,
                    name: `Fremantle`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.02,
                    y: 68.35,
                    x: 17.3,
                    country: `Norway`,
                    name: `Narvik`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.01,
                    y: 62.52,
                    x: -114.06,
                    country: `Canada`,
                    name: `Yellowknife`
                }),
                new WorldCitiesItem(
                {
                    capital: true,
                    population: 0.01,
                    y: 17.12,
                    x: -88.8,
                    country: `Belize`,
                    name: `Belmopan`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.01,
                    y: 70.39,
                    x: 23.91,
                    country: `Norway`,
                    name: `Hammerfest`
                }),
                new WorldCitiesItem(
                {
                    capital: true,
                    population: 0.01,
                    y: 64.27,
                    x: -51.58,
                    country: `Greenland`,
                    name: `Godthab`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.01,
                    y: 60.65,
                    x: -135.01,
                    country: `Canada`,
                    name: `Whitehorse`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.01,
                    y: 59.33,
                    x: 143.25,
                    country: `Russia`,
                    name: `Okhotsk`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.01,
                    y: 52.05,
                    x: 113.58,
                    country: `Russia`,
                    name: `Chita`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.01,
                    y: 55.88,
                    x: 37.75,
                    country: `Russia`,
                    name: `Druzba`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0.01,
                    y: 53.31,
                    x: -60.55,
                    country: `Canada`,
                    name: `Goose Bay`
                }),
                new WorldCitiesItem(
                {
                    capital: true,
                    population: 0.01,
                    y: 27.44,
                    x: 89.67,
                    country: `Bhutan`,
                    name: `Thimbu`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0,
                    y: 78.2,
                    x: 15.66,
                    country: `Norway`,
                    name: `Xgyearbyen`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0,
                    y: 30.14,
                    x: 9.82,
                    country: `Libya`,
                    name: `Ghadamis`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0,
                    y: 71.7,
                    x: 128.75,
                    country: `Russia`,
                    name: `Tiksi`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0,
                    y: 77.67,
                    x: -69,
                    country: `Greenland`,
                    name: `Thule`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0,
                    y: 22.83,
                    x: 5.55,
                    country: `Algeria`,
                    name: `Tamanrasset`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0,
                    y: 60.12,
                    x: -149.45,
                    country: `US`,
                    name: `Seward`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0,
                    y: 70.53,
                    x: -23,
                    country: `Greenland`,
                    name: `Scoresbyund`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0,
                    y: 66.57,
                    x: 66.58,
                    country: `Russia`,
                    name: `Salekhard`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0,
                    y: 64.59,
                    x: -165.27,
                    country: `US`,
                    name: `Nome`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0,
                    y: 68.27,
                    x: -133.67,
                    country: `Canada`,
                    name: `Inuvik`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0,
                    y: 67.35,
                    x: 86.55,
                    country: `Russia`,
                    name: `Igarka`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0,
                    y: 69.38,
                    x: -53.63,
                    country: `Greenland`,
                    name: `Godhavn`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0,
                    y: 58.71,
                    x: -94.18,
                    country: `Canada`,
                    name: `Churchill`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0,
                    y: 2.75,
                    x: -60.5,
                    country: `Brazil`,
                    name: `Boa Vista`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0,
                    y: -15.75,
                    x: 133.22,
                    country: `Australia`,
                    name: `Birdum`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0,
                    y: 65.67,
                    x: -37.31,
                    country: `Greenland`,
                    name: `Angmagssalik`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0,
                    y: 64.4,
                    x: 177.13,
                    country: `Russia`,
                    name: `Anadyr`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0,
                    y: 47.81,
                    x: 97,
                    country: `Mongolia`,
                    name: `Uliastay`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0,
                    y: -15.05,
                    x: 40.7,
                    country: `Mozambique`,
                    name: `Mocambique`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0,
                    y: -51.71,
                    x: -69.41,
                    country: `Argentina`,
                    name: `Rio Gallegos`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0,
                    y: 27.7,
                    x: -8.16,
                    country: `Algeria`,
                    name: `Tindouf`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0,
                    y: 25.91,
                    x: 13.91,
                    country: `Libya`,
                    name: `Murzuq`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0,
                    y: 21.76,
                    x: 31.28,
                    country: `Sudan`,
                    name: `Wadi Halfa`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0,
                    y: -23.63,
                    x: 133.93,
                    country: `Australia`,
                    name: `Alice Springs`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0,
                    y: 46.96,
                    x: 142.75,
                    country: `Russia`,
                    name: `Yuzhno-Sakhalinsk`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0,
                    y: 50.08,
                    x: 45.53,
                    country: `Russia`,
                    name: `Nikolayevsk`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0,
                    y: 67.58,
                    x: 133.41,
                    country: `Russia`,
                    name: `Verkhoyansk`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0,
                    y: 54.86,
                    x: -67.01,
                    country: `Canada`,
                    name: `Schefferville`
                }),
                new WorldCitiesItem(
                {
                    capital: false,
                    population: 0,
                    y: 51.33,
                    x: -80.73,
                    country: `Canada`,
                    name: `Moosonee`
                }),
            ];
            super(...newItems.slice(0));
        }
    }
}
