export class DataEuropeItem {
    public constructor(init: Partial<DataEuropeItem>) {
        Object.assign(this, init);
    }
    
    public code: string;
    public population: number;
    public workedHours: number;
    public gDP: number;
    public name: string;

}
export class DataEurope extends Array<DataEuropeItem> {
    public constructor() {
        super();
        this.push(new DataEuropeItem(
        {
            code: `ALB`,
            population: 2891000,
            workedHours: 41,
            gDP: 10970,
            name: `Albania`
        }));
        this.push(new DataEuropeItem(
        {
            code: `AUT`,
            population: 8679000,
            workedHours: 30.75,
            gDP: 44305,
            name: `Austria`
        }));
        this.push(new DataEuropeItem(
        {
            code: `BLR`,
            population: 9439000,
            workedHours: 43.5,
            gDP: 17230,
            name: `Belarus`
        }));
        this.push(new DataEuropeItem(
        {
            code: `BEL`,
            population: 11288000,
            workedHours: 29.7,
            gDP: 41708,
            name: `Belgium`
        }));
        this.push(new DataEuropeItem(
        {
            code: `BIH`,
            population: 3429000,
            workedHours: 46.5,
            gDP: 10932,
            name: `Bosnia and Herzegovina`
        }));
        this.push(new DataEuropeItem(
        {
            code: `BGR`,
            population: 7200000,
            workedHours: 31.62,
            gDP: 17000,
            name: `Bulgaria`
        }));
        this.push(new DataEuropeItem(
        {
            code: `HRV`,
            population: 4233000,
            workedHours: 35.15,
            gDP: 20984,
            name: `Croatia`
        }));
        this.push(new DataEuropeItem(
        {
            code: `CYP`,
            population: 1161000,
            workedHours: 34.42,
            gDP: 30549,
            name: `Cyprus`
        }));
        this.push(new DataEuropeItem(
        {
            code: `CZE`,
            population: 10601000,
            workedHours: 33.77,
            gDP: 30605,
            name: `Czechia`
        }));
        this.push(new DataEuropeItem(
        {
            code: `DNK`,
            population: 5689000,
            workedHours: 27.16,
            gDP: 45459,
            name: `Denmark`
        }));
        this.push(new DataEuropeItem(
        {
            code: `EST`,
            population: 1315000,
            workedHours: 35.61,
            gDP: 27550,
            name: `Estonia`
        }));
        this.push(new DataEuropeItem(
        {
            code: `FIN`,
            population: 5481000,
            workedHours: 31.48,
            gDP: 38942,
            name: `Finland`
        }));
        this.push(new DataEuropeItem(
        {
            code: `FRA`,
            population: 64453000,
            workedHours: 29.03,
            gDP: 37766,
            name: `France`
        }));
        this.push(new DataEuropeItem(
        {
            code: `DEU`,
            population: 81787000,
            workedHours: 26.31,
            gDP: 43938,
            name: `Germany`
        }));
        this.push(new DataEuropeItem(
        {
            code: `GRC`,
            population: 10660000,
            workedHours: 39.06,
            gDP: 24170,
            name: `Greece`
        }));
        this.push(new DataEuropeItem(
        {
            code: `HUN`,
            population: 9778000,
            workedHours: 36.99,
            gDP: 25034,
            name: `Hungary`
        }));
        this.push(new DataEuropeItem(
        {
            code: `ISL`,
            population: 330000,
            workedHours: 29.02,
            gDP: 43048,
            name: `Iceland`
        }));
        this.push(new DataEuropeItem(
        {
            code: `IRL`,
            population: 4652000,
            workedHours: 33.47,
            gDP: 60818,
            name: `Ireland`
        }));
        this.push(new DataEuropeItem(
        {
            code: `ITA`,
            population: 60578000,
            workedHours: 33.04,
            gDP: 34302,
            name: `Italy`
        }));
        this.push(new DataEuropeItem(
        {
            code: `LVA`,
            population: 1998000,
            workedHours: 36.57,
            gDP: 23019,
            name: `Latvia`
        }));
        this.push(new DataEuropeItem(
        {
            code: `LTU`,
            population: 2932000,
            workedHours: 35.76,
            gDP: 27046,
            name: `Lithuania`
        }));
        this.push(new DataEuropeItem(
        {
            code: `LUX`,
            population: 567000,
            workedHours: 29.25,
            gDP: 94089,
            name: `Luxembourg`
        }));
        this.push(new DataEuropeItem(
        {
            code: `MLT`,
            population: 434000,
            workedHours: 37.78,
            gDP: 34087,
            name: `Malta`
        }));
        this.push(new DataEuropeItem(
        {
            code: `MDA`,
            population: 4071000,
            workedHours: 41,
            gDP: 4747,
            name: `Moldova`
        }));
        this.push(new DataEuropeItem(
        {
            code: `MNE`,
            population: 627000,
            workedHours: 47.2,
            gDP: 15290,
            name: `Montenegro`
        }));
        this.push(new DataEuropeItem(
        {
            code: `NLD`,
            population: 16938000,
            workedHours: 27.38,
            gDP: 46494,
            name: `Netherlands`
        }));
        this.push(new DataEuropeItem(
        {
            code: `MKD`,
            population: 2079000,
            workedHours: 36.6,
            gDP: 12760,
            name: `North Macedonia`
        }));
        this.push(new DataEuropeItem(
        {
            code: `NOR`,
            population: 5200000,
            workedHours: 27.36,
            gDP: 64008,
            name: `Norway`
        }));
        this.push(new DataEuropeItem(
        {
            code: `POL`,
            population: 38034000,
            workedHours: 39.4,
            gDP: 25300,
            name: `Poland`
        }));
        this.push(new DataEuropeItem(
        {
            code: `PRT`,
            population: 10368000,
            workedHours: 36.06,
            gDP: 26608,
            name: `Portugal`
        }));
    }
}
export class DataAfricaItem {
    public constructor(init: Partial<DataAfricaItem>) {
        Object.assign(this, init);
    }
    
    public code: string;
    public population: number;
    public workedHours: number;
    public gDP: number;
    public name: string;

}
export class DataAfrica extends Array<DataAfricaItem> {
    public constructor() {
        super();
        this.push(new DataAfricaItem(
        {
            code: `DZA`,
            population: 39728000,
            workedHours: 47.5,
            gDP: 13725,
            name: `Algeria`
        }));
        this.push(new DataAfricaItem(
        {
            code: `AGO`,
            population: 27884000,
            workedHours: 39.8,
            gDP: 6228,
            name: `Angola`
        }));
        this.push(new DataAfricaItem(
        {
            code: `BEN`,
            population: 10576000,
            workedHours: 43.7,
            gDP: 1987,
            name: `Benin`
        }));
        this.push(new DataAfricaItem(
        {
            code: `BWA`,
            population: 2121000,
            workedHours: 41.2,
            gDP: 15357,
            name: `Botswana`
        }));
        this.push(new DataAfricaItem(
        {
            code: `BFA`,
            population: 18111000,
            workedHours: 39.3,
            gDP: 1596,
            name: `Burkina Faso`
        }));
        this.push(new DataAfricaItem(
        {
            code: `BDI`,
            population: 10160000,
            workedHours: 36.4,
            gDP: 748,
            name: `Burundi`
        }));
        this.push(new DataAfricaItem(
        {
            code: `CMR`,
            population: 23298000,
            workedHours: 42,
            gDP: 3289,
            name: `Cameroon`
        }));
        this.push(new DataAfricaItem(
        {
            code: `CPV`,
            population: 525000,
            workedHours: 45,
            gDP: 5915,
            name: `Cape Verde`
        }));
        this.push(new DataAfricaItem(
        {
            code: `CAF`,
            population: 4493000,
            workedHours: 38,
            gDP: 622,
            name: `Central African Republic`
        }));
        this.push(new DataAfricaItem(
        {
            code: `TCD`,
            population: 14111000,
            workedHours: 40.4,
            gDP: 2067,
            name: `Chad`
        }));
        this.push(new DataAfricaItem(
        {
            code: `COM`,
            population: 777000,
            workedHours: 40.1,
            gDP: 1413,
            name: `Comoros`
        }));
        this.push(new DataAfricaItem(
        {
            code: `COG`,
            population: 4856000,
            workedHours: 38.1,
            gDP: 5543,
            name: `Congo`
        }));
        this.push(new DataAfricaItem(
        {
            code: `CIV`,
            population: 23226000,
            workedHours: 39.7,
            gDP: 3242,
            name: `Cote Ivoire`
        }));
        this.push(new DataAfricaItem(
        {
            code: `COD`,
            population: 76245000,
            workedHours: 44,
            gDP: 812,
            name: `Democratic Republic of Congo`
        }));
        this.push(new DataAfricaItem(
        {
            code: `EGY`,
            population: 92443000,
            workedHours: 39.7,
            gDP: 10096,
            name: `Egypt`
        }));
        this.push(new DataAfricaItem(
        {
            code: `GNQ`,
            population: 1169000,
            workedHours: 38.8,
            gDP: 27554,
            name: `Equatorial Guinea`
        }));
        this.push(new DataAfricaItem(
        {
            code: `SWZ`,
            population: 1104000,
            workedHours: 45.7,
            gDP: 7759,
            name: `Eswatini`
        }));
        this.push(new DataAfricaItem(
        {
            code: `ETH`,
            population: 101000000,
            workedHours: 40.1,
            gDP: 1533,
            name: `Ethiopia`
        }));
        this.push(new DataAfricaItem(
        {
            code: `GAB`,
            population: 1948000,
            workedHours: 40.5,
            gDP: 16837,
            name: `Gabon`
        }));
        this.push(new DataAfricaItem(
        {
            code: `GMB`,
            population: 2086000,
            workedHours: 40.3,
            gDP: 1568,
            name: `Gambia`
        }));
        this.push(new DataAfricaItem(
        {
            code: `GHA`,
            population: 27849000,
            workedHours: 47.6,
            gDP: 3927,
            name: `Ghana`
        }));
        this.push(new DataAfricaItem(
        {
            code: `GIN`,
            population: 11432000,
            workedHours: 43.4,
            gDP: 1758,
            name: `Guinea`
        }));
        this.push(new DataAfricaItem(
        {
            code: `GNB`,
            population: 1737000,
            workedHours: 35.1,
            gDP: 1446,
            name: `Guinea-Bissau`
        }));
        this.push(new DataAfricaItem(
        {
            code: `KEN`,
            population: 47878000,
            workedHours: 43.9,
            gDP: 2836,
            name: `Kenya`
        }));
        this.push(new DataAfricaItem(
        {
            code: `LSO`,
            population: 2059000,
            workedHours: 47.6,
            gDP: 2708,
            name: `Lesotho`
        }));
        this.push(new DataAfricaItem(
        {
            code: `LBR`,
            population: 4472000,
            workedHours: 40.3,
            gDP: 785,
            name: `Liberia`
        }));
        this.push(new DataAfricaItem(
        {
            code: `LBY`,
            population: 6418000,
            workedHours: 42.5,
            gDP: 14847,
            name: `Libya`
        }));
        this.push(new DataAfricaItem(
        {
            code: `MDG`,
            population: 24234000,
            workedHours: 40.8,
            gDP: 1377,
            name: `Madagascar`
        }));
        this.push(new DataAfricaItem(
        {
            code: `MWI`,
            population: 16745000,
            workedHours: 44.5,
            gDP: 1089,
            name: `Malawi`
        }));
        this.push(new DataAfricaItem(
        {
            code: `MLI`,
            population: 17439000,
            workedHours: 40.6,
            gDP: 1919,
            name: `Mali`
        }));
    }
}
