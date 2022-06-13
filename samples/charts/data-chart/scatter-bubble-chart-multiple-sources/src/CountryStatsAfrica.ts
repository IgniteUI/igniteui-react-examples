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
    public constructor() {
        super();
        this.push(new CountryStatsAfricaItem(
        {
            code: `DZA`,
            population: 39728000,
            workedHours: 47.5,
            gDP: 13725,
            name: `Algeria`
        }));
        this.push(new CountryStatsAfricaItem(
        {
            code: `AGO`,
            population: 27884000,
            workedHours: 39.8,
            gDP: 6228,
            name: `Angola`
        }));
        this.push(new CountryStatsAfricaItem(
        {
            code: `BEN`,
            population: 10576000,
            workedHours: 43.7,
            gDP: 1987,
            name: `Benin`
        }));
        this.push(new CountryStatsAfricaItem(
        {
            code: `BWA`,
            population: 2121000,
            workedHours: 41.2,
            gDP: 15357,
            name: `Botswana`
        }));
        this.push(new CountryStatsAfricaItem(
        {
            code: `BFA`,
            population: 18111000,
            workedHours: 39.3,
            gDP: 1596,
            name: `Burkina Faso`
        }));
        this.push(new CountryStatsAfricaItem(
        {
            code: `BDI`,
            population: 10160000,
            workedHours: 36.4,
            gDP: 748,
            name: `Burundi`
        }));
        this.push(new CountryStatsAfricaItem(
        {
            code: `CMR`,
            population: 23298000,
            workedHours: 42,
            gDP: 3289,
            name: `Cameroon`
        }));
        this.push(new CountryStatsAfricaItem(
        {
            code: `CPV`,
            population: 525000,
            workedHours: 45,
            gDP: 5915,
            name: `Cape Verde`
        }));
        this.push(new CountryStatsAfricaItem(
        {
            code: `CAF`,
            population: 4493000,
            workedHours: 38,
            gDP: 622,
            name: `C.A.R`
        }));
        this.push(new CountryStatsAfricaItem(
        {
            code: `TCD`,
            population: 14111000,
            workedHours: 40.4,
            gDP: 2067,
            name: `Chad`
        }));
        this.push(new CountryStatsAfricaItem(
        {
            code: `COM`,
            population: 777000,
            workedHours: 40.1,
            gDP: 1413,
            name: `Comoros`
        }));
        this.push(new CountryStatsAfricaItem(
        {
            code: `COG`,
            population: 4856000,
            workedHours: 38.1,
            gDP: 5543,
            name: `Congo`
        }));
        this.push(new CountryStatsAfricaItem(
        {
            code: `CIV`,
            population: 23226000,
            workedHours: 39.7,
            gDP: 3242,
            name: `Cote Ivoire`
        }));
        this.push(new CountryStatsAfricaItem(
        {
            code: `COD`,
            population: 76245000,
            workedHours: 44,
            gDP: 812,
            name: `DRC`
        }));
        this.push(new CountryStatsAfricaItem(
        {
            code: `EGY`,
            population: 92443000,
            workedHours: 39.7,
            gDP: 10096,
            name: `Egypt`
        }));
        this.push(new CountryStatsAfricaItem(
        {
            code: `GNQ`,
            population: 1169000,
            workedHours: 38.8,
            gDP: 27554,
            name: `Equatorial Guinea`
        }));
        this.push(new CountryStatsAfricaItem(
        {
            code: `SWZ`,
            population: 1104000,
            workedHours: 45.7,
            gDP: 7759,
            name: `Eswatini`
        }));
        this.push(new CountryStatsAfricaItem(
        {
            code: `ETH`,
            population: 101000000,
            workedHours: 40.1,
            gDP: 1533,
            name: `Ethiopia`
        }));
        this.push(new CountryStatsAfricaItem(
        {
            code: `GAB`,
            population: 1948000,
            workedHours: 40.5,
            gDP: 16837,
            name: `Gabon`
        }));
        this.push(new CountryStatsAfricaItem(
        {
            code: `GMB`,
            population: 2086000,
            workedHours: 40.3,
            gDP: 1568,
            name: `Gambia`
        }));
        this.push(new CountryStatsAfricaItem(
        {
            code: `GHA`,
            population: 27849000,
            workedHours: 47.6,
            gDP: 3927,
            name: `Ghana`
        }));
        this.push(new CountryStatsAfricaItem(
        {
            code: `GIN`,
            population: 11432000,
            workedHours: 43.4,
            gDP: 1758,
            name: `Guinea`
        }));
        this.push(new CountryStatsAfricaItem(
        {
            code: `GNB`,
            population: 1737000,
            workedHours: 35.1,
            gDP: 1446,
            name: `Guinea-Bissau`
        }));
        this.push(new CountryStatsAfricaItem(
        {
            code: `KEN`,
            population: 47878000,
            workedHours: 43.9,
            gDP: 2836,
            name: `Kenya`
        }));
        this.push(new CountryStatsAfricaItem(
        {
            code: `LSO`,
            population: 2059000,
            workedHours: 47.6,
            gDP: 2708,
            name: `Lesotho`
        }));
        this.push(new CountryStatsAfricaItem(
        {
            code: `LBR`,
            population: 4472000,
            workedHours: 40.3,
            gDP: 785,
            name: `Liberia`
        }));
        this.push(new CountryStatsAfricaItem(
        {
            code: `LBY`,
            population: 6418000,
            workedHours: 42.5,
            gDP: 14847,
            name: `Libya`
        }));
        this.push(new CountryStatsAfricaItem(
        {
            code: `MDG`,
            population: 24234000,
            workedHours: 40.8,
            gDP: 1377,
            name: `Madagascar`
        }));
        this.push(new CountryStatsAfricaItem(
        {
            code: `MWI`,
            population: 16745000,
            workedHours: 44.5,
            gDP: 1089,
            name: `Malawi`
        }));
        this.push(new CountryStatsAfricaItem(
        {
            code: `MLI`,
            population: 17439000,
            workedHours: 40.6,
            gDP: 1919,
            name: `Mali`
        }));
    }
}
