export class CountryStatsAfricaItem {
    public constructor(init: Partial<CountryStatsAfricaItem>) {
        Object.assign(this, init);
    }

    public code: string;
    public population: number;
    public workedHours: number;
    public gDP: number;
    public name: string;

}
export class CountryStatsAfrica extends Array<CountryStatsAfricaItem> {
    public constructor(items: Array<CountryStatsAfricaItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new CountryStatsAfricaItem(
                {
                    code: `DZA`,
                    population: 39728000,
                    workedHours: 47.5,
                    gDP: 13725,
                    name: `Algeria`
                }),
                new CountryStatsAfricaItem(
                {
                    code: `AGO`,
                    population: 27884000,
                    workedHours: 39.8,
                    gDP: 6228,
                    name: `Angola`
                }),
                new CountryStatsAfricaItem(
                {
                    code: `BEN`,
                    population: 10576000,
                    workedHours: 43.7,
                    gDP: 1987,
                    name: `Benin`
                }),
                new CountryStatsAfricaItem(
                {
                    code: `BWA`,
                    population: 2121000,
                    workedHours: 41.2,
                    gDP: 15357,
                    name: `Botswana`
                }),
                new CountryStatsAfricaItem(
                {
                    code: `BFA`,
                    population: 18111000,
                    workedHours: 39.3,
                    gDP: 1596,
                    name: `Burkina Faso`
                }),
                new CountryStatsAfricaItem(
                {
                    code: `BDI`,
                    population: 10160000,
                    workedHours: 36.4,
                    gDP: 748,
                    name: `Burundi`
                }),
                new CountryStatsAfricaItem(
                {
                    code: `CMR`,
                    population: 23298000,
                    workedHours: 42,
                    gDP: 3289,
                    name: `Cameroon`
                }),
                new CountryStatsAfricaItem(
                {
                    code: `CPV`,
                    population: 525000,
                    workedHours: 45,
                    gDP: 5915,
                    name: `Cape Verde`
                }),
                new CountryStatsAfricaItem(
                {
                    code: `CAF`,
                    population: 4493000,
                    workedHours: 38,
                    gDP: 622,
                    name: `Central African Republic`
                }),
                new CountryStatsAfricaItem(
                {
                    code: `TCD`,
                    population: 14111000,
                    workedHours: 40.4,
                    gDP: 2067,
                    name: `Chad`
                }),
                new CountryStatsAfricaItem(
                {
                    code: `COM`,
                    population: 777000,
                    workedHours: 40.1,
                    gDP: 1413,
                    name: `Comoros`
                }),
                new CountryStatsAfricaItem(
                {
                    code: `COG`,
                    population: 4856000,
                    workedHours: 38.1,
                    gDP: 5543,
                    name: `Congo`
                }),
                new CountryStatsAfricaItem(
                {
                    code: `CIV`,
                    population: 23226000,
                    workedHours: 39.7,
                    gDP: 3242,
                    name: `Cote Ivoire`
                }),
                new CountryStatsAfricaItem(
                {
                    code: `COD`,
                    population: 76245000,
                    workedHours: 44,
                    gDP: 812,
                    name: `Democratic Republic of Congo`
                }),
                new CountryStatsAfricaItem(
                {
                    code: `EGY`,
                    population: 92443000,
                    workedHours: 39.7,
                    gDP: 10096,
                    name: `Egypt`
                }),
                new CountryStatsAfricaItem(
                {
                    code: `GNQ`,
                    population: 1169000,
                    workedHours: 38.8,
                    gDP: 27554,
                    name: `Equatorial Guinea`
                }),
                new CountryStatsAfricaItem(
                {
                    code: `SWZ`,
                    population: 1104000,
                    workedHours: 45.7,
                    gDP: 7759,
                    name: `Eswatini`
                }),
                new CountryStatsAfricaItem(
                {
                    code: `ETH`,
                    population: 101000000,
                    workedHours: 40.1,
                    gDP: 1533,
                    name: `Ethiopia`
                }),
                new CountryStatsAfricaItem(
                {
                    code: `GAB`,
                    population: 1948000,
                    workedHours: 40.5,
                    gDP: 16837,
                    name: `Gabon`
                }),
                new CountryStatsAfricaItem(
                {
                    code: `GMB`,
                    population: 2086000,
                    workedHours: 40.3,
                    gDP: 1568,
                    name: `Gambia`
                }),
                new CountryStatsAfricaItem(
                {
                    code: `GHA`,
                    population: 27849000,
                    workedHours: 47.6,
                    gDP: 3927,
                    name: `Ghana`
                }),
                new CountryStatsAfricaItem(
                {
                    code: `GIN`,
                    population: 11432000,
                    workedHours: 43.4,
                    gDP: 1758,
                    name: `Guinea`
                }),
                new CountryStatsAfricaItem(
                {
                    code: `GNB`,
                    population: 1737000,
                    workedHours: 35.1,
                    gDP: 1446,
                    name: `Guinea-Bissau`
                }),
                new CountryStatsAfricaItem(
                {
                    code: `KEN`,
                    population: 47878000,
                    workedHours: 43.9,
                    gDP: 2836,
                    name: `Kenya`
                }),
                new CountryStatsAfricaItem(
                {
                    code: `LSO`,
                    population: 2059000,
                    workedHours: 47.6,
                    gDP: 2708,
                    name: `Lesotho`
                }),
                new CountryStatsAfricaItem(
                {
                    code: `LBR`,
                    population: 4472000,
                    workedHours: 40.3,
                    gDP: 785,
                    name: `Liberia`
                }),
                new CountryStatsAfricaItem(
                {
                    code: `LBY`,
                    population: 6418000,
                    workedHours: 42.5,
                    gDP: 14847,
                    name: `Libya`
                }),
                new CountryStatsAfricaItem(
                {
                    code: `MDG`,
                    population: 24234000,
                    workedHours: 40.8,
                    gDP: 1377,
                    name: `Madagascar`
                }),
                new CountryStatsAfricaItem(
                {
                    code: `MWI`,
                    population: 16745000,
                    workedHours: 44.5,
                    gDP: 1089,
                    name: `Malawi`
                }),
                new CountryStatsAfricaItem(
                {
                    code: `MLI`,
                    population: 17439000,
                    workedHours: 40.6,
                    gDP: 1919,
                    name: `Mali`
                }),
                new CountryStatsAfricaItem(
                {
                    code: `MRT`,
                    population: 4046000,
                    workedHours: 45.9,
                    gDP: 3602,
                    name: `Mauritania`
                }),
                new CountryStatsAfricaItem(
                {
                    code: `MUS`,
                    population: 1259000,
                    workedHours: 44.4,
                    gDP: 18864,
                    name: `Mauritius`
                }),
                new CountryStatsAfricaItem(
                {
                    code: `MAR`,
                    population: 34664000,
                    workedHours: 39.6,
                    gDP: 7297,
                    name: `Morocco`
                }),
                new CountryStatsAfricaItem(
                {
                    code: `MOZ`,
                    population: 27042000,
                    workedHours: 46.7,
                    gDP: 1118,
                    name: `Mozambique`
                }),
                new CountryStatsAfricaItem(
                {
                    code: `NAM`,
                    population: 2315000,
                    workedHours: 43.1,
                    gDP: 9975,
                    name: `Namibia`
                }),
                new CountryStatsAfricaItem(
                {
                    code: `NER`,
                    population: 20002000,
                    workedHours: 45,
                    gDP: 908,
                    name: `Niger`
                }),
                new CountryStatsAfricaItem(
                {
                    code: `NGA`,
                    population: 181000000,
                    workedHours: 32.76,
                    gDP: 5671,
                    name: `Nigeria`
                }),
                new CountryStatsAfricaItem(
                {
                    code: `RWA`,
                    population: 11369000,
                    workedHours: 46.3,
                    gDP: 1731,
                    name: `Rwanda`
                }),
                new CountryStatsAfricaItem(
                {
                    code: `STP`,
                    population: 199000,
                    workedHours: 38.2,
                    gDP: 2948,
                    name: `Sao Tome`
                }),
                new CountryStatsAfricaItem(
                {
                    code: `SEN`,
                    population: 14578000,
                    workedHours: 46.8,
                    gDP: 2294,
                    name: `Senegal`
                }),
                new CountryStatsAfricaItem(
                {
                    code: `SYC`,
                    population: 95000,
                    workedHours: 39.8,
                    gDP: 24857,
                    name: `Seychelles`
                }),
                new CountryStatsAfricaItem(
                {
                    code: `SLE`,
                    population: 7172000,
                    workedHours: 35.4,
                    gDP: 1314,
                    name: `Sierra Leone`
                }),
                new CountryStatsAfricaItem(
                {
                    code: `ZAF`,
                    population: 55386000,
                    workedHours: 42.48,
                    gDP: 12378,
                    name: `South Africa`
                }),
                new CountryStatsAfricaItem(
                {
                    code: `SSD`,
                    population: 10716000,
                    workedHours: 39.3,
                    gDP: 1875,
                    name: `South Sudan`
                }),
                new CountryStatsAfricaItem(
                {
                    code: `SDN`,
                    population: 38903000,
                    workedHours: 36.3,
                    gDP: 4290,
                    name: `Sudan`
                }),
                new CountryStatsAfricaItem(
                {
                    code: `TZA`,
                    population: 51483000,
                    workedHours: 38,
                    gDP: 2491,
                    name: `Tanzania`
                }),
                new CountryStatsAfricaItem(
                {
                    code: `TGO`,
                    population: 7323000,
                    workedHours: 38.8,
                    gDP: 1351,
                    name: `Togo`
                }),
                new CountryStatsAfricaItem(
                {
                    code: `TUN`,
                    population: 11180000,
                    workedHours: 35.2,
                    gDP: 10766,
                    name: `Tunisia`
                }),
                new CountryStatsAfricaItem(
                {
                    code: `UGA`,
                    population: 38225000,
                    workedHours: 38.6,
                    gDP: 1666,
                    name: `Uganda`
                }),
                new CountryStatsAfricaItem(
                {
                    code: `ZMB`,
                    population: 15879000,
                    workedHours: 46.6,
                    gDP: 3627,
                    name: `Zambia`
                }),
                new CountryStatsAfricaItem(
                {
                    code: `ZWE`,
                    population: 13815000,
                    workedHours: 41.4,
                    gDP: 1912,
                    name: `Zimbabwe`
                }),
            ];
            super(...(newItems.slice(0, items)));
        }
    }
}
