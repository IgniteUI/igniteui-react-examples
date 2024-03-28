export class WorldDebtAndPopulationItem {
    public constructor(init: Partial<WorldDebtAndPopulationItem>) {
        Object.assign(this, init);
    }

    public countryCode: string;
    public countryName: string;
    public gdpPerCapita: number;
    public unemploymentRate: number;
    public televisions: number;
    public publicDebt: number;
    public population: number;
    public oilProduction: number;
    public medianAge: number;
    public internetUsers: number;
    public electricityProduction: number;
    public birthRate: number;

}
export class WorldDebtAndPopulation extends Array<WorldDebtAndPopulationItem> {
    public constructor(items: Array<WorldDebtAndPopulationItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new WorldDebtAndPopulationItem(
                {
                    countryCode: `AL`,
                    countryName: `Albania`,
                    gdpPerCapita: 5800,
                    unemploymentRate: 13,
                    televisions: 700000,
                    publicDebt: 51,
                    population: 3619778,
                    oilProduction: 7006,
                    medianAge: 30,
                    internetUsers: 471200,
                    electricityProduction: 5385,
                    birthRate: 15
                }),
                new WorldDebtAndPopulationItem(
                {
                    countryCode: `DZ`,
                    countryName: `Algeria`,
                    gdpPerCapita: 6700,
                    unemploymentRate: 12,
                    televisions: 3100000,
                    publicDebt: 18,
                    population: 33769668,
                    oilProduction: 1358000,
                    medianAge: 26,
                    internetUsers: 3500000,
                    electricityProduction: 31910,
                    birthRate: 17
                }),
                new WorldDebtAndPopulationItem(
                {
                    countryCode: `AO`,
                    countryName: `Angola`,
                    gdpPerCapita: 7800,
                    unemploymentRate: 0,
                    televisions: 196000,
                    publicDebt: 12,
                    population: 12531357,
                    oilProduction: 1712000,
                    medianAge: 18,
                    internetUsers: 100000,
                    electricityProduction: 2585,
                    birthRate: 44
                }),
                new WorldDebtAndPopulationItem(
                {
                    countryCode: `AR`,
                    countryName: `Argentina`,
                    gdpPerCapita: 13100,
                    unemploymentRate: 9,
                    televisions: 7950000,
                    publicDebt: 56,
                    population: 40134425,
                    oilProduction: 730000,
                    medianAge: 30,
                    internetUsers: 9309000,
                    electricityProduction: 101100,
                    birthRate: 18
                }),
                new WorldDebtAndPopulationItem(
                {
                    countryCode: `AW`,
                    countryName: `Aruba`,
                    gdpPerCapita: 21800,
                    unemploymentRate: 7,
                    televisions: 20000,
                    publicDebt: 46,
                    population: 101541,
                    oilProduction: 2356,
                    medianAge: 38,
                    internetUsers: 24000,
                    electricityProduction: 770,
                    birthRate: 13
                }),
                new WorldDebtAndPopulationItem(
                {
                    countryCode: `AU`,
                    countryName: `Australia`,
                    gdpPerCapita: 37300,
                    unemploymentRate: 4,
                    televisions: 10150000,
                    publicDebt: 16,
                    population: 21007310,
                    oilProduction: 540000,
                    medianAge: 37,
                    internetUsers: 11240000,
                    electricityProduction: 236700,
                    birthRate: 13
                }),
                new WorldDebtAndPopulationItem(
                {
                    countryCode: `AT`,
                    countryName: `Austria`,
                    gdpPerCapita: 39300,
                    unemploymentRate: 4,
                    televisions: 10150000,
                    publicDebt: 59,
                    population: 8205533,
                    oilProduction: 23320,
                    medianAge: 42,
                    internetUsers: 4277000,
                    electricityProduction: 61020,
                    birthRate: 9
                }),
                new WorldDebtAndPopulationItem(
                {
                    countryCode: `AZ`,
                    countryName: `Azerbaijan`,
                    gdpPerCapita: 8000,
                    unemploymentRate: 1,
                    televisions: 170000,
                    publicDebt: 7,
                    population: 8177717,
                    oilProduction: 934700,
                    medianAge: 28,
                    internetUsers: 1036000,
                    electricityProduction: 23800,
                    birthRate: 18
                }),
                new WorldDebtAndPopulationItem(
                {
                    countryCode: `BH`,
                    countryName: `Bahrain`,
                    gdpPerCapita: 33900,
                    unemploymentRate: 15,
                    televisions: 275000,
                    publicDebt: 31,
                    population: 718306,
                    oilProduction: 184300,
                    medianAge: 30,
                    internetUsers: 250000,
                    electricityProduction: 8187,
                    birthRate: 17
                }),
                new WorldDebtAndPopulationItem(
                {
                    countryCode: `BD`,
                    countryName: `Bangladesh`,
                    gdpPerCapita: 1400,
                    unemploymentRate: 3,
                    televisions: 770000,
                    publicDebt: 37,
                    population: 153546896,
                    oilProduction: 6746,
                    medianAge: 23,
                    internetUsers: 500000,
                    electricityProduction: 21350,
                    birthRate: 29
                }),
                new WorldDebtAndPopulationItem(
                {
                    countryCode: `BE`,
                    countryName: `Belgium`,
                    gdpPerCapita: 36200,
                    unemploymentRate: 8,
                    televisions: 4720000,
                    publicDebt: 85,
                    population: 10403951,
                    oilProduction: 9000,
                    medianAge: 41,
                    internetUsers: 5220000,
                    electricityProduction: 80840,
                    birthRate: 10
                }),
                new WorldDebtAndPopulationItem(
                {
                    countryCode: `BT`,
                    countryName: `Bhutan`,
                    gdpPerCapita: 5200,
                    unemploymentRate: 3,
                    televisions: 11000,
                    publicDebt: 81,
                    population: 682321,
                    oilProduction: 0,
                    medianAge: 24,
                    internetUsers: 40000,
                    electricityProduction: 2000,
                    birthRate: 21
                }),
                new WorldDebtAndPopulationItem(
                {
                    countryCode: `BO`,
                    countryName: `Bolivia`,
                    gdpPerCapita: 4400,
                    unemploymentRate: 8,
                    televisions: 900000,
                    publicDebt: 46,
                    population: 9247816,
                    oilProduction: 46470,
                    medianAge: 23,
                    internetUsers: 1000000,
                    electricityProduction: 5293,
                    birthRate: 22
                }),
                new WorldDebtAndPopulationItem(
                {
                    countryCode: `BA`,
                    countryName: `Bosnia and Herzegovina`,
                    gdpPerCapita: 6100,
                    unemploymentRate: 46,
                    televisions: 0,
                    publicDebt: 34,
                    population: 4590310,
                    oilProduction: 0,
                    medianAge: 39,
                    internetUsers: 1055000,
                    electricityProduction: 12220,
                    birthRate: 9
                }),
                new WorldDebtAndPopulationItem(
                {
                    countryCode: `BW`,
                    countryName: `Botswana`,
                    gdpPerCapita: 14300,
                    unemploymentRate: 8,
                    televisions: 31000,
                    publicDebt: 5,
                    population: 1842323,
                    oilProduction: 0,
                    medianAge: 21,
                    internetUsers: 80000,
                    electricityProduction: 912,
                    birthRate: 23
                }),
                new WorldDebtAndPopulationItem(
                {
                    countryCode: `BR`,
                    countryName: `Brazil`,
                    gdpPerCapita: 9500,
                    unemploymentRate: 9,
                    televisions: 36500000,
                    publicDebt: 45,
                    population: 196342592,
                    oilProduction: 1797000,
                    medianAge: 28,
                    internetUsers: 50000000,
                    electricityProduction: 396400,
                    birthRate: 19
                }),
                new WorldDebtAndPopulationItem(
                {
                    countryCode: `BG`,
                    countryName: `Bulgaria`,
                    gdpPerCapita: 11800,
                    unemploymentRate: 8,
                    televisions: 3310000,
                    publicDebt: 11,
                    population: 7262675,
                    oilProduction: 3661,
                    medianAge: 41,
                    internetUsers: 1899000,
                    electricityProduction: 45700,
                    birthRate: 10
                }),
                new WorldDebtAndPopulationItem(
                {
                    countryCode: `CM`,
                    countryName: `Cameroon`,
                    gdpPerCapita: 2200,
                    unemploymentRate: 30,
                    televisions: 450000,
                    publicDebt: 16,
                    population: 18467692,
                    oilProduction: 85300,
                    medianAge: 19,
                    internetUsers: 370000,
                    electricityProduction: 4090,
                    birthRate: 35
                }),
                new WorldDebtAndPopulationItem(
                {
                    countryCode: `CA`,
                    countryName: `Canada`,
                    gdpPerCapita: 38600,
                    unemploymentRate: 6,
                    televisions: 21500000,
                    publicDebt: 64,
                    population: 33212696,
                    oilProduction: 3310000,
                    medianAge: 40,
                    internetUsers: 28000000,
                    electricityProduction: 609600,
                    birthRate: 10
                }),
                new WorldDebtAndPopulationItem(
                {
                    countryCode: `CL`,
                    countryName: `Chile`,
                    gdpPerCapita: 14300,
                    unemploymentRate: 7,
                    televisions: 3150000,
                    publicDebt: 4,
                    population: 16454143,
                    oilProduction: 15100,
                    medianAge: 31,
                    internetUsers: 557000,
                    electricityProduction: 47600,
                    birthRate: 15
                }),
                new WorldDebtAndPopulationItem(
                {
                    countryCode: `CN`,
                    countryName: `China`,
                    gdpPerCapita: 5400,
                    unemploymentRate: 4,
                    televisions: 400000000,
                    publicDebt: 18,
                    population: 1330044544,
                    oilProduction: 3725000,
                    medianAge: 34,
                    internetUsers: 253000000,
                    electricityProduction: 3256000,
                    birthRate: 14
                }),
                new WorldDebtAndPopulationItem(
                {
                    countryCode: `CO`,
                    countryName: `Colombia`,
                    gdpPerCapita: 7400,
                    unemploymentRate: 11,
                    televisions: 4590000,
                    publicDebt: 53,
                    population: 45013672,
                    oilProduction: 531300,
                    medianAge: 27,
                    internetUsers: 12100000,
                    electricityProduction: 50470,
                    birthRate: 20
                }),
                new WorldDebtAndPopulationItem(
                {
                    countryCode: `CR`,
                    countryName: `Costa Rica`,
                    gdpPerCapita: 11100,
                    unemploymentRate: 5,
                    televisions: 525000,
                    publicDebt: 47,
                    population: 4195914,
                    oilProduction: 0,
                    medianAge: 27,
                    internetUsers: 1500000,
                    electricityProduction: 8349,
                    birthRate: 18
                }),
                new WorldDebtAndPopulationItem(
                {
                    countryCode: `IV`,
                    countryName: `Ivory Coast`,
                    gdpPerCapita: 1700,
                    unemploymentRate: 0,
                    televisions: 1090000,
                    publicDebt: 75,
                    population: 20179602,
                    oilProduction: 48370,
                    medianAge: 19,
                    internetUsers: 300000,
                    electricityProduction: 5305,
                    birthRate: 33
                }),
                new WorldDebtAndPopulationItem(
                {
                    countryCode: `HR`,
                    countryName: `Croatia`,
                    gdpPerCapita: 15500,
                    unemploymentRate: 12,
                    televisions: 1220000,
                    publicDebt: 48,
                    population: 4491543,
                    oilProduction: 17100,
                    medianAge: 41,
                    internetUsers: 1995000,
                    electricityProduction: 11990,
                    birthRate: 10
                }),
                new WorldDebtAndPopulationItem(
                {
                    countryCode: `CU`,
                    countryName: `Cuba`,
                    gdpPerCapita: 11000,
                    unemploymentRate: 2,
                    televisions: 2640000,
                    publicDebt: 37,
                    population: 11423952,
                    oilProduction: 58300,
                    medianAge: 37,
                    internetUsers: 1310000,
                    electricityProduction: 16450,
                    birthRate: 11
                }),
                new WorldDebtAndPopulationItem(
                {
                    countryCode: `CY`,
                    countryName: `Cyprus`,
                    gdpPerCapita: 27100,
                    unemploymentRate: 4,
                    televisions: 0,
                    publicDebt: 60,
                    population: 792604,
                    oilProduction: 0,
                    medianAge: 35,
                    internetUsers: 380000,
                    electricityProduction: 4618,
                    birthRate: 13
                }),
                new WorldDebtAndPopulationItem(
                {
                    countryCode: `CZ`,
                    countryName: `Czech Republic`,
                    gdpPerCapita: 24500,
                    unemploymentRate: 7,
                    televisions: 3405834,
                    publicDebt: 26,
                    population: 10220911,
                    oilProduction: 18030,
                    medianAge: 40,
                    internetUsers: 4400000,
                    electricityProduction: 77380,
                    birthRate: 9
                }),
                new WorldDebtAndPopulationItem(
                {
                    countryCode: `DK`,
                    countryName: `Denmark`,
                    gdpPerCapita: 37200,
                    unemploymentRate: 3,
                    televisions: 3121000,
                    publicDebt: 26,
                    population: 5484723,
                    oilProduction: 342000,
                    medianAge: 40,
                    internetUsers: 3500000,
                    electricityProduction: 43350,
                    birthRate: 11
                }),
                new WorldDebtAndPopulationItem(
                {
                    countryCode: `DO`,
                    countryName: `Dominican Republic`,
                    gdpPerCapita: 6600,
                    unemploymentRate: 16,
                    televisions: 770000,
                    publicDebt: 41,
                    population: 9507133,
                    oilProduction: 12,
                    medianAge: 25,
                    internetUsers: 1677000,
                    electricityProduction: 12220,
                    birthRate: 23
                }),
                new WorldDebtAndPopulationItem(
                {
                    countryCode: `EC`,
                    countryName: `Ecuador`,
                    gdpPerCapita: 7200,
                    unemploymentRate: 9,
                    televisions: 2500000,
                    publicDebt: 33,
                    population: 13927650,
                    oilProduction: 511100,
                    medianAge: 24,
                    internetUsers: 1549000,
                    electricityProduction: 12940,
                    birthRate: 22
                }),
                new WorldDebtAndPopulationItem(
                {
                    countryCode: `EG`,
                    countryName: `Egypt`,
                    gdpPerCapita: 5000,
                    unemploymentRate: 9,
                    televisions: 7700000,
                    publicDebt: 106,
                    population: 81713520,
                    oilProduction: 665000,
                    medianAge: 25,
                    internetUsers: 8620000,
                    electricityProduction: 102500,
                    birthRate: 22
                }),
                new WorldDebtAndPopulationItem(
                {
                    countryCode: `SV`,
                    countryName: `El Salvador`,
                    gdpPerCapita: 6000,
                    unemploymentRate: 6,
                    televisions: 600000,
                    publicDebt: 37,
                    population: 7066403,
                    oilProduction: 0,
                    medianAge: 22,
                    internetUsers: 700000,
                    electricityProduction: 5316,
                    birthRate: 26
                }),
                new WorldDebtAndPopulationItem(
                {
                    countryCode: `GQ`,
                    countryName: `Equatorial Guinea`,
                    gdpPerCapita: 28200,
                    unemploymentRate: 30,
                    televisions: 4000,
                    publicDebt: 2,
                    population: 616459,
                    oilProduction: 385500,
                    medianAge: 19,
                    internetUsers: 8000,
                    electricityProduction: 28,
                    birthRate: 37
                }),
                new WorldDebtAndPopulationItem(
                {
                    countryCode: `EE`,
                    countryName: `Estonia`,
                    gdpPerCapita: 21800,
                    unemploymentRate: 5,
                    televisions: 605000,
                    publicDebt: 3,
                    population: 1307605,
                    oilProduction: 6930,
                    medianAge: 40,
                    internetUsers: 780000,
                    electricityProduction: 9599,
                    birthRate: 10
                }),
                new WorldDebtAndPopulationItem(
                {
                    countryCode: `ET`,
                    countryName: `Ethiopia`,
                    gdpPerCapita: 700,
                    unemploymentRate: 0,
                    televisions: 682000,
                    publicDebt: 45,
                    population: 82544840,
                    oilProduction: 7,
                    medianAge: 17,
                    internetUsers: 291000,
                    electricityProduction: 2864,
                    birthRate: 44
                }),
                new WorldDebtAndPopulationItem(
                {
                    countryCode: `FI`,
                    countryName: `Finland`,
                    gdpPerCapita: 36000,
                    unemploymentRate: 7,
                    televisions: 3200000,
                    publicDebt: 36,
                    population: 5244749,
                    oilProduction: 8951,
                    medianAge: 42,
                    internetUsers: 3600000,
                    electricityProduction: 73470,
                    birthRate: 10
                }),
                new WorldDebtAndPopulationItem(
                {
                    countryCode: `GA`,
                    countryName: `Gabon`,
                    gdpPerCapita: 14000,
                    unemploymentRate: 21,
                    televisions: 63000,
                    publicDebt: 53,
                    population: 1485832,
                    oilProduction: 240000,
                    medianAge: 19,
                    internetUsers: 145000,
                    electricityProduction: 1520,
                    birthRate: 36
                }),
                new WorldDebtAndPopulationItem(
                {
                    countryCode: `DE`,
                    countryName: `Germany`,
                    gdpPerCapita: 34100,
                    unemploymentRate: 9,
                    televisions: 51400000,
                    publicDebt: 65,
                    population: 82369552,
                    oilProduction: 141700,
                    medianAge: 43,
                    internetUsers: 42500000,
                    electricityProduction: 579400,
                    birthRate: 8
                }),
                new WorldDebtAndPopulationItem(
                {
                    countryCode: `GH`,
                    countryName: `Ghana`,
                    gdpPerCapita: 1400,
                    unemploymentRate: 11,
                    televisions: 1900000,
                    publicDebt: 59,
                    population: 23382848,
                    oilProduction: 700,
                    medianAge: 20,
                    internetUsers: 650000,
                    electricityProduction: 7042,
                    birthRate: 29
                }),
                new WorldDebtAndPopulationItem(
                {
                    countryCode: `GI`,
                    countryName: `Gibraltar`,
                    gdpPerCapita: 38200,
                    unemploymentRate: 3,
                    televisions: 10000,
                    publicDebt: 16,
                    population: 28002,
                    oilProduction: 0,
                    medianAge: 40,
                    internetUsers: 6200,
                    electricityProduction: 141,
                    birthRate: 11
                }),
                new WorldDebtAndPopulationItem(
                {
                    countryCode: `GR`,
                    countryName: `Greece`,
                    gdpPerCapita: 30600,
                    unemploymentRate: 8,
                    televisions: 2540000,
                    publicDebt: 90,
                    population: 10722816,
                    oilProduction: 5687,
                    medianAge: 42,
                    internetUsers: 2540000,
                    electricityProduction: 56130,
                    birthRate: 10
                }),
                new WorldDebtAndPopulationItem(
                {
                    countryCode: `GT`,
                    countryName: `Guatemala`,
                    gdpPerCapita: 5100,
                    unemploymentRate: 3,
                    televisions: 1323000,
                    publicDebt: 21,
                    population: 13002206,
                    oilProduction: 13000,
                    medianAge: 19,
                    internetUsers: 1320000,
                    electricityProduction: 7281,
                    birthRate: 29
                }),
                new WorldDebtAndPopulationItem(
                {
                    countryCode: `HN`,
                    countryName: `Honduras`,
                    gdpPerCapita: 4300,
                    unemploymentRate: 28,
                    televisions: 570000,
                    publicDebt: 24,
                    population: 7639327,
                    oilProduction: 0,
                    medianAge: 20,
                    internetUsers: 344100,
                    electricityProduction: 5339,
                    birthRate: 27
                }),
                new WorldDebtAndPopulationItem(
                {
                    countryCode: `HU`,
                    countryName: `Hungary`,
                    gdpPerCapita: 19300,
                    unemploymentRate: 7,
                    televisions: 4420000,
                    publicDebt: 67,
                    population: 9930915,
                    oilProduction: 42180,
                    medianAge: 39,
                    internetUsers: 4200000,
                    electricityProduction: 33690,
                    birthRate: 10
                }),
                new WorldDebtAndPopulationItem(
                {
                    countryCode: `IS`,
                    countryName: `Iceland`,
                    gdpPerCapita: 40400,
                    unemploymentRate: 1,
                    televisions: 98000,
                    publicDebt: 28,
                    population: 304367,
                    oilProduction: 0,
                    medianAge: 35,
                    internetUsers: 202300,
                    electricityProduction: 8533,
                    birthRate: 14
                }),
                new WorldDebtAndPopulationItem(
                {
                    countryCode: `IN`,
                    countryName: `India`,
                    gdpPerCapita: 2600,
                    unemploymentRate: 7,
                    televisions: 63000000,
                    publicDebt: 58,
                    population: 1147995904,
                    oilProduction: 810000,
                    medianAge: 25,
                    internetUsers: 80000000,
                    electricityProduction: 661600,
                    birthRate: 22
                }),
                new WorldDebtAndPopulationItem(
                {
                    countryCode: `ID`,
                    countryName: `Indonesia`,
                    gdpPerCapita: 3600,
                    unemploymentRate: 9,
                    televisions: 13750000,
                    publicDebt: 34,
                    population: 237512352,
                    oilProduction: 837500,
                    medianAge: 27,
                    internetUsers: 13000000,
                    electricityProduction: 125900,
                    birthRate: 19
                }),
                new WorldDebtAndPopulationItem(
                {
                    countryCode: `IR`,
                    countryName: `Iran`,
                    gdpPerCapita: 11700,
                    unemploymentRate: 12,
                    televisions: 4610000,
                    publicDebt: 17,
                    population: 65875224,
                    oilProduction: 3956000,
                    medianAge: 26,
                    internetUsers: 23000000,
                    electricityProduction: 170400,
                    birthRate: 17
                }),
                new WorldDebtAndPopulationItem(
                {
                    countryCode: `IE`,
                    countryName: `Ireland`,
                    gdpPerCapita: 46600,
                    unemploymentRate: 5,
                    televisions: 1820000,
                    publicDebt: 25,
                    population: 4156119,
                    oilProduction: 0,
                    medianAge: 35,
                    internetUsers: 1708000,
                    electricityProduction: 24130,
                    birthRate: 14
                }),
                new WorldDebtAndPopulationItem(
                {
                    countryCode: `IL`,
                    countryName: `Israel`,
                    gdpPerCapita: 26600,
                    unemploymentRate: 7,
                    televisions: 1690000,
                    publicDebt: 81,
                    population: 7112359,
                    oilProduction: 100,
                    medianAge: 29,
                    internetUsers: 2000000,
                    electricityProduction: 46850,
                    birthRate: 20
                }),
                new WorldDebtAndPopulationItem(
                {
                    countryCode: `IT`,
                    countryName: `Italy`,
                    gdpPerCapita: 30900,
                    unemploymentRate: 6,
                    televisions: 30300000,
                    publicDebt: 104,
                    population: 58145320,
                    oilProduction: 164800,
                    medianAge: 43,
                    internetUsers: 32000000,
                    electricityProduction: 278500,
                    birthRate: 8
                }),
                new WorldDebtAndPopulationItem(
                {
                    countryCode: `JM`,
                    countryName: `Jamaica`,
                    gdpPerCapita: 7400,
                    unemploymentRate: 10,
                    televisions: 460000,
                    publicDebt: 127,
                    population: 2804332,
                    oilProduction: 0,
                    medianAge: 23,
                    internetUsers: 1500000,
                    electricityProduction: 6985,
                    birthRate: 20
                }),
                new WorldDebtAndPopulationItem(
                {
                    countryCode: `JP`,
                    countryName: `Japan`,
                    gdpPerCapita: 33500,
                    unemploymentRate: 4,
                    televisions: 86500000,
                    publicDebt: 170,
                    population: 127288416,
                    oilProduction: 125000,
                    medianAge: 44,
                    internetUsers: 88110000,
                    electricityProduction: 1025000,
                    birthRate: 8
                }),
                new WorldDebtAndPopulationItem(
                {
                    countryCode: `JO`,
                    countryName: `Jordan`,
                    gdpPerCapita: 4700,
                    unemploymentRate: 14,
                    televisions: 500000,
                    publicDebt: 72,
                    population: 6198677,
                    oilProduction: 0,
                    medianAge: 24,
                    internetUsers: 1127000,
                    electricityProduction: 9074,
                    birthRate: 20
                }),
                new WorldDebtAndPopulationItem(
                {
                    countryCode: `KZ`,
                    countryName: `Kazakhstan`,
                    gdpPerCapita: 11000,
                    unemploymentRate: 7,
                    televisions: 3880000,
                    publicDebt: 8,
                    population: 15340533,
                    oilProduction: 1355000,
                    medianAge: 29,
                    internetUsers: 1901000,
                    electricityProduction: 76340,
                    birthRate: 16
                }),
                new WorldDebtAndPopulationItem(
                {
                    countryCode: `KE`,
                    countryName: `Kenya`,
                    gdpPerCapita: 1700,
                    unemploymentRate: 40,
                    televisions: 730000,
                    publicDebt: 49,
                    population: 37953840,
                    oilProduction: 0,
                    medianAge: 19,
                    internetUsers: 3000000,
                    electricityProduction: 5502,
                    birthRate: 38
                }),
                new WorldDebtAndPopulationItem(
                {
                    countryCode: `KR`,
                    countryName: `Korea, South`,
                    gdpPerCapita: 25000,
                    unemploymentRate: 3,
                    televisions: 15900000,
                    publicDebt: 28,
                    population: 48379392,
                    oilProduction: 17050,
                    medianAge: 37,
                    internetUsers: 35590000,
                    electricityProduction: 403200,
                    birthRate: 9
                }),
                new WorldDebtAndPopulationItem(
                {
                    countryCode: `KW`,
                    countryName: `Kuwait`,
                    gdpPerCapita: 55900,
                    unemploymentRate: 2,
                    televisions: 875000,
                    publicDebt: 10,
                    population: 2596799,
                    oilProduction: 2440000,
                    medianAge: 26,
                    internetUsers: 900000,
                    electricityProduction: 41110,
                    birthRate: 22
                }),
                new WorldDebtAndPopulationItem(
                {
                    countryCode: `LV`,
                    countryName: `Latvia`,
                    gdpPerCapita: 17700,
                    unemploymentRate: 6,
                    televisions: 1220000,
                    publicDebt: 7,
                    population: 2245423,
                    oilProduction: 0,
                    medianAge: 40,
                    internetUsers: 1770000,
                    electricityProduction: 4778,
                    birthRate: 10
                }),
                new WorldDebtAndPopulationItem(
                {
                    countryCode: `LB`,
                    countryName: `Lebanon`,
                    gdpPerCapita: 10300,
                    unemploymentRate: 20,
                    televisions: 1180000,
                    publicDebt: 187,
                    population: 3971941,
                    oilProduction: 0,
                    medianAge: 29,
                    internetUsers: 950000,
                    electricityProduction: 9183,
                    birthRate: 18
                }),
                new WorldDebtAndPopulationItem(
                {
                    countryCode: `LY`,
                    countryName: `Libya`,
                    gdpPerCapita: 12400,
                    unemploymentRate: 30,
                    televisions: 730000,
                    publicDebt: 5,
                    population: 6173579,
                    oilProduction: 1712000,
                    medianAge: 24,
                    internetUsers: 260000,
                    electricityProduction: 21150,
                    birthRate: 26
                }),
                new WorldDebtAndPopulationItem(
                {
                    countryCode: `LT`,
                    countryName: `Lithuania`,
                    gdpPerCapita: 16800,
                    unemploymentRate: 4,
                    televisions: 1700000,
                    publicDebt: 17,
                    population: 3565205,
                    oilProduction: 13160,
                    medianAge: 39,
                    internetUsers: 1330000,
                    electricityProduction: 13480,
                    birthRate: 9
                }),
                new WorldDebtAndPopulationItem(
                {
                    countryCode: `LU`,
                    countryName: `Luxembourg`,
                    gdpPerCapita: 79400,
                    unemploymentRate: 4,
                    televisions: 285000,
                    publicDebt: 6,
                    population: 486006,
                    oilProduction: 0,
                    medianAge: 39,
                    internetUsers: 345000,
                    electricityProduction: 3156,
                    birthRate: 12
                }),
                new WorldDebtAndPopulationItem(
                {
                    countryCode: `MK`,
                    countryName: `Macedonia`,
                    gdpPerCapita: 8400,
                    unemploymentRate: 35,
                    televisions: 510000,
                    publicDebt: 31,
                    population: 2061315,
                    oilProduction: 0,
                    medianAge: 35,
                    internetUsers: 685000,
                    electricityProduction: 6051,
                    birthRate: 12
                }),
                new WorldDebtAndPopulationItem(
                {
                    countryCode: `MW`,
                    countryName: `Malawi`,
                    gdpPerCapita: 800,
                    unemploymentRate: 0,
                    televisions: 0,
                    publicDebt: 51,
                    population: 13931831,
                    oilProduction: 0,
                    medianAge: 17,
                    internetUsers: 139500,
                    electricityProduction: 1397,
                    birthRate: 42
                }),
                new WorldDebtAndPopulationItem(
                {
                    countryCode: `MY`,
                    countryName: `Malaysia`,
                    gdpPerCapita: 14500,
                    unemploymentRate: 3,
                    televisions: 10800000,
                    publicDebt: 42,
                    population: 25274132,
                    oilProduction: 757500,
                    medianAge: 25,
                    internetUsers: 15868000,
                    electricityProduction: 82360,
                    birthRate: 22
                }),
                new WorldDebtAndPopulationItem(
                {
                    countryCode: `MU`,
                    countryName: `Mauritius`,
                    gdpPerCapita: 11300,
                    unemploymentRate: 9,
                    televisions: 258000,
                    publicDebt: 63,
                    population: 1274189,
                    oilProduction: 0,
                    medianAge: 32,
                    internetUsers: 340000,
                    electricityProduction: 2350,
                    birthRate: 15
                }),
                new WorldDebtAndPopulationItem(
                {
                    countryCode: `MX`,
                    countryName: `Mexico`,
                    gdpPerCapita: 12400,
                    unemploymentRate: 4,
                    televisions: 25600000,
                    publicDebt: 23,
                    population: 109955400,
                    oilProduction: 3083000,
                    medianAge: 26,
                    internetUsers: 22812000,
                    electricityProduction: 222400,
                    birthRate: 20
                }),
                new WorldDebtAndPopulationItem(
                {
                    countryCode: `MD`,
                    countryName: `Moldova`,
                    gdpPerCapita: 2300,
                    unemploymentRate: 2,
                    televisions: 1260000,
                    publicDebt: 23,
                    population: 4324450,
                    oilProduction: 0,
                    medianAge: 34,
                    internetUsers: 700000,
                    electricityProduction: 3881,
                    birthRate: 11
                }),
                new WorldDebtAndPopulationItem(
                {
                    countryCode: `MA`,
                    countryName: `Morocco`,
                    gdpPerCapita: 3700,
                    unemploymentRate: 10,
                    televisions: 3100000,
                    publicDebt: 67,
                    population: 34343220,
                    oilProduction: 300,
                    medianAge: 25,
                    internetUsers: 7300000,
                    electricityProduction: 21370,
                    birthRate: 21
                }),
                new WorldDebtAndPopulationItem(
                {
                    countryCode: `MZ`,
                    countryName: `Mozambique`,
                    gdpPerCapita: 800,
                    unemploymentRate: 21,
                    televisions: 67600,
                    publicDebt: 22,
                    population: 21284700,
                    oilProduction: 0,
                    medianAge: 17,
                    internetUsers: 200000,
                    electricityProduction: 13170,
                    birthRate: 38
                }),
                new WorldDebtAndPopulationItem(
                {
                    countryCode: `NA`,
                    countryName: `Namibia`,
                    gdpPerCapita: 5200,
                    unemploymentRate: 5,
                    televisions: 60000,
                    publicDebt: 22,
                    population: 2088669,
                    oilProduction: 0,
                    medianAge: 21,
                    internetUsers: 101000,
                    electricityProduction: 1688,
                    birthRate: 23
                }),
                new WorldDebtAndPopulationItem(
                {
                    countryCode: `NL`,
                    countryName: `Netherlands`,
                    gdpPerCapita: 39000,
                    unemploymentRate: 5,
                    televisions: 8100000,
                    publicDebt: 46,
                    population: 16645313,
                    oilProduction: 76000,
                    medianAge: 40,
                    internetUsers: 15000000,
                    electricityProduction: 94340,
                    birthRate: 11
                }),
                new WorldDebtAndPopulationItem(
                {
                    countryCode: `NZ`,
                    countryName: `New Zealand`,
                    gdpPerCapita: 27200,
                    unemploymentRate: 4,
                    televisions: 1926000,
                    publicDebt: 21,
                    population: 4173460,
                    oilProduction: 25880,
                    medianAge: 36,
                    internetUsers: 3360000,
                    electricityProduction: 42060,
                    birthRate: 14
                }),
                new WorldDebtAndPopulationItem(
                {
                    countryCode: `NI`,
                    countryName: `Nicaragua`,
                    gdpPerCapita: 2800,
                    unemploymentRate: 5,
                    televisions: 320000,
                    publicDebt: 63,
                    population: 5785846,
                    oilProduction: 0,
                    medianAge: 22,
                    internetUsers: 155000,
                    electricityProduction: 2778,
                    birthRate: 24
                }),
                new WorldDebtAndPopulationItem(
                {
                    countryCode: `NG`,
                    countryName: `Nigeria`,
                    gdpPerCapita: 2100,
                    unemploymentRate: 5,
                    televisions: 6900000,
                    publicDebt: 14,
                    population: 146255312,
                    oilProduction: 2166000,
                    medianAge: 19,
                    internetUsers: 10000000,
                    electricityProduction: 22530,
                    birthRate: 37
                }),
                new WorldDebtAndPopulationItem(
                {
                    countryCode: `NO`,
                    countryName: `Norway`,
                    gdpPerCapita: 53300,
                    unemploymentRate: 3,
                    televisions: 2030000,
                    publicDebt: 83,
                    population: 4644457,
                    oilProduction: 2560000,
                    medianAge: 39,
                    internetUsers: 3800000,
                    electricityProduction: 135800,
                    birthRate: 11
                }),
                new WorldDebtAndPopulationItem(
                {
                    countryCode: `OM`,
                    countryName: `Oman`,
                    gdpPerCapita: 1900,
                    unemploymentRate: 15,
                    televisions: 1600000,
                    publicDebt: 4,
                    population: 3311640,
                    oilProduction: 710800,
                    medianAge: 19,
                    internetUsers: 340000,
                    electricityProduction: 11890,
                    birthRate: 35
                }),
                new WorldDebtAndPopulationItem(
                {
                    countryCode: `PK`,
                    countryName: `Pakistan`,
                    gdpPerCapita: 2400,
                    unemploymentRate: 6,
                    televisions: 3100000,
                    publicDebt: 51,
                    population: 172800048,
                    oilProduction: 62000,
                    medianAge: 21,
                    internetUsers: 17500000,
                    electricityProduction: 89820,
                    birthRate: 28
                }),
                new WorldDebtAndPopulationItem(
                {
                    countryCode: `PA`,
                    countryName: `Panama`,
                    gdpPerCapita: 10700,
                    unemploymentRate: 6,
                    televisions: 510000,
                    publicDebt: 53,
                    population: 3309679,
                    oilProduction: 0,
                    medianAge: 27,
                    internetUsers: 525200,
                    electricityProduction: 5661,
                    birthRate: 21
                }),
                new WorldDebtAndPopulationItem(
                {
                    countryCode: `PG`,
                    countryName: `Papua New Guinea`,
                    gdpPerCapita: 2100,
                    unemploymentRate: 2,
                    televisions: 59841,
                    publicDebt: 40,
                    population: 5931769,
                    oilProduction: 47800,
                    medianAge: 22,
                    internetUsers: 110000,
                    electricityProduction: 3698,
                    birthRate: 28
                }),
                new WorldDebtAndPopulationItem(
                {
                    countryCode: `PY`,
                    countryName: `Paraguay`,
                    gdpPerCapita: 4000,
                    unemploymentRate: 6,
                    televisions: 990000,
                    publicDebt: 27,
                    population: 6831306,
                    oilProduction: 0,
                    medianAge: 22,
                    internetUsers: 280000,
                    electricityProduction: 70000,
                    birthRate: 28
                }),
                new WorldDebtAndPopulationItem(
                {
                    countryCode: `PE`,
                    countryName: `Peru`,
                    gdpPerCapita: 7600,
                    unemploymentRate: 7,
                    televisions: 3060000,
                    publicDebt: 29,
                    population: 29180900,
                    oilProduction: 119000,
                    medianAge: 26,
                    internetUsers: 7636000,
                    electricityProduction: 24970,
                    birthRate: 20
                }),
                new WorldDebtAndPopulationItem(
                {
                    countryCode: `PH`,
                    countryName: `Philippines`,
                    gdpPerCapita: 3200,
                    unemploymentRate: 7,
                    televisions: 3700000,
                    publicDebt: 56,
                    population: 96061680,
                    oilProduction: 0,
                    medianAge: 22,
                    internetUsers: 5300000,
                    electricityProduction: 53670,
                    birthRate: 26
                }),
                new WorldDebtAndPopulationItem(
                {
                    countryCode: `PL`,
                    countryName: `Poland`,
                    gdpPerCapita: 16200,
                    unemploymentRate: 13,
                    televisions: 13050000,
                    publicDebt: 43,
                    population: 38500696,
                    oilProduction: 0,
                    medianAge: 38,
                    internetUsers: 16000000,
                    electricityProduction: 146200,
                    birthRate: 10
                }),
                new WorldDebtAndPopulationItem(
                {
                    countryCode: `PT`,
                    countryName: `Portugal`,
                    gdpPerCapita: 21800,
                    unemploymentRate: 8,
                    televisions: 3310000,
                    publicDebt: 64,
                    population: 10676910,
                    oilProduction: 9500,
                    medianAge: 39,
                    internetUsers: 3549000,
                    electricityProduction: 49040,
                    birthRate: 10
                }),
                new WorldDebtAndPopulationItem(
                {
                    countryCode: `QA`,
                    countryName: `Qatar`,
                    gdpPerCapita: 87600,
                    unemploymentRate: 1,
                    televisions: 230000,
                    publicDebt: 11,
                    population: 824789,
                    oilProduction: 797500,
                    medianAge: 31,
                    internetUsers: 351000,
                    electricityProduction: 13540,
                    birthRate: 16
                }),
                new WorldDebtAndPopulationItem(
                {
                    countryCode: `RO`,
                    countryName: `Romania`,
                    gdpPerCapita: 11100,
                    unemploymentRate: 4,
                    televisions: 5250000,
                    publicDebt: 13,
                    population: 22246862,
                    oilProduction: 115000,
                    medianAge: 37,
                    internetUsers: 12000000,
                    electricityProduction: 60520,
                    birthRate: 11
                }),
                new WorldDebtAndPopulationItem(
                {
                    countryCode: `RU`,
                    countryName: `Russia`,
                    gdpPerCapita: 14800,
                    unemploymentRate: 6,
                    televisions: 60500000,
                    publicDebt: 6,
                    population: 140702096,
                    oilProduction: 9870000,
                    medianAge: 38,
                    internetUsers: 30000000,
                    electricityProduction: 1000000,
                    birthRate: 11
                }),
                new WorldDebtAndPopulationItem(
                {
                    countryCode: `SA`,
                    countryName: `Saudi Arabia`,
                    gdpPerCapita: 19800,
                    unemploymentRate: 13,
                    televisions: 5100000,
                    publicDebt: 24,
                    population: 28146656,
                    oilProduction: 11000000,
                    medianAge: 22,
                    internetUsers: 6200000,
                    electricityProduction: 165600,
                    birthRate: 29
                }),
                new WorldDebtAndPopulationItem(
                {
                    countryCode: `SN`,
                    countryName: `Senegal`,
                    gdpPerCapita: 1700,
                    unemploymentRate: 48,
                    televisions: 361000,
                    publicDebt: 23,
                    population: 12853259,
                    oilProduction: 0,
                    medianAge: 19,
                    internetUsers: 820000,
                    electricityProduction: 2159,
                    birthRate: 37
                }),
                new WorldDebtAndPopulationItem(
                {
                    countryCode: `SC`,
                    countryName: `Seychelles`,
                    gdpPerCapita: 16600,
                    unemploymentRate: 2,
                    televisions: 11000,
                    publicDebt: 92,
                    population: 82247,
                    oilProduction: 0,
                    medianAge: 29,
                    internetUsers: 32000,
                    electricityProduction: 252,
                    birthRate: 16
                }),
                new WorldDebtAndPopulationItem(
                {
                    countryCode: `SG`,
                    countryName: `Singapore`,
                    gdpPerCapita: 49900,
                    unemploymentRate: 2,
                    televisions: 1330000,
                    publicDebt: 96,
                    population: 4608167,
                    oilProduction: 9836,
                    medianAge: 38,
                    internetUsers: 3105000,
                    electricityProduction: 39440,
                    birthRate: 9
                }),
                new WorldDebtAndPopulationItem(
                {
                    countryCode: `SK`,
                    countryName: `Slovakia`,
                    gdpPerCapita: 20200,
                    unemploymentRate: 8,
                    televisions: 2620000,
                    publicDebt: 36,
                    population: 5455407,
                    oilProduction: 12840,
                    medianAge: 37,
                    internetUsers: 2350000,
                    electricityProduction: 29890,
                    birthRate: 11
                }),
                new WorldDebtAndPopulationItem(
                {
                    countryCode: `SI`,
                    countryName: `Slovenia`,
                    gdpPerCapita: 28000,
                    unemploymentRate: 8,
                    televisions: 710000,
                    publicDebt: 24,
                    population: 2007711,
                    oilProduction: 5,
                    medianAge: 41,
                    internetUsers: 1300000,
                    electricityProduction: 14900,
                    birthRate: 9
                }),
                new WorldDebtAndPopulationItem(
                {
                    countryCode: `ZA`,
                    countryName: `South Africa`,
                    gdpPerCapita: 9700,
                    unemploymentRate: 24,
                    televisions: 6000000,
                    publicDebt: 31,
                    population: 48782756,
                    oilProduction: 200000,
                    medianAge: 24,
                    internetUsers: 5100000,
                    electricityProduction: 264000,
                    birthRate: 20
                }),
                new WorldDebtAndPopulationItem(
                {
                    countryCode: `ES`,
                    countryName: `Spain`,
                    gdpPerCapita: 33600,
                    unemploymentRate: 8,
                    televisions: 16200000,
                    publicDebt: 36,
                    population: 40491052,
                    oilProduction: 29350,
                    medianAge: 41,
                    internetUsers: 19690000,
                    electricityProduction: 270300,
                    birthRate: 10
                }),
                new WorldDebtAndPopulationItem(
                {
                    countryCode: `LK`,
                    countryName: `Sri Lanka`,
                    gdpPerCapita: 4000,
                    unemploymentRate: 6,
                    televisions: 1530000,
                    publicDebt: 86,
                    population: 21128772,
                    oilProduction: 0,
                    medianAge: 30,
                    internetUsers: 771700,
                    electricityProduction: 8411,
                    birthRate: 17
                }),
                new WorldDebtAndPopulationItem(
                {
                    countryCode: `SD`,
                    countryName: `Sudan`,
                    gdpPerCapita: 1900,
                    unemploymentRate: 19,
                    televisions: 2380000,
                    publicDebt: 106,
                    population: 40218456,
                    oilProduction: 484500,
                    medianAge: 19,
                    internetUsers: 1500000,
                    electricityProduction: 3944,
                    birthRate: 34
                }),
                new WorldDebtAndPopulationItem(
                {
                    countryCode: `SE`,
                    countryName: `Sweden`,
                    gdpPerCapita: 37500,
                    unemploymentRate: 6,
                    televisions: 4600000,
                    publicDebt: 42,
                    population: 9045389,
                    oilProduction: 2350,
                    medianAge: 41,
                    internetUsers: 7000000,
                    electricityProduction: 153200,
                    birthRate: 10
                }),
                new WorldDebtAndPopulationItem(
                {
                    countryCode: `CH`,
                    countryName: `Switzerland`,
                    gdpPerCapita: 40100,
                    unemploymentRate: 3,
                    televisions: 3310000,
                    publicDebt: 44,
                    population: 7581520,
                    oilProduction: 3202,
                    medianAge: 41,
                    internetUsers: 4610000,
                    electricityProduction: 56100,
                    birthRate: 10
                }),
                new WorldDebtAndPopulationItem(
                {
                    countryCode: `SY`,
                    countryName: `Syria`,
                    gdpPerCapita: 4700,
                    unemploymentRate: 9,
                    televisions: 1050000,
                    publicDebt: 38,
                    population: 19747586,
                    oilProduction: 379000,
                    medianAge: 21,
                    internetUsers: 3470000,
                    electricityProduction: 153200,
                    birthRate: 27
                }),
                new WorldDebtAndPopulationItem(
                {
                    countryCode: `TW`,
                    countryName: `Taiwan`,
                    gdpPerCapita: 30100,
                    unemploymentRate: 4,
                    televisions: 8800000,
                    publicDebt: 28,
                    population: 22920946,
                    oilProduction: 600,
                    medianAge: 36,
                    internetUsers: 14760000,
                    electricityProduction: 235000,
                    birthRate: 9
                }),
                new WorldDebtAndPopulationItem(
                {
                    countryCode: `TZ`,
                    countryName: `Tanzania`,
                    gdpPerCapita: 1300,
                    unemploymentRate: 0,
                    televisions: 103000,
                    publicDebt: 20,
                    population: 40213160,
                    oilProduction: 0,
                    medianAge: 18,
                    internetUsers: 400000,
                    electricityProduction: 1880,
                    birthRate: 35
                }),
                new WorldDebtAndPopulationItem(
                {
                    countryCode: `TH`,
                    countryName: `Thailand`,
                    gdpPerCapita: 8000,
                    unemploymentRate: 1,
                    televisions: 15190000,
                    publicDebt: 38,
                    population: 65493296,
                    oilProduction: 310000,
                    medianAge: 33,
                    internetUsers: 13416000,
                    electricityProduction: 124600,
                    birthRate: 14
                }),
                new WorldDebtAndPopulationItem(
                {
                    countryCode: `TN`,
                    countryName: `Tunisia`,
                    gdpPerCapita: 7400,
                    unemploymentRate: 14,
                    televisions: 920000,
                    publicDebt: 55,
                    population: 10383577,
                    oilProduction: 76900,
                    medianAge: 29,
                    internetUsers: 1722000,
                    electricityProduction: 12850,
                    birthRate: 16
                }),
                new WorldDebtAndPopulationItem(
                {
                    countryCode: `TR`,
                    countryName: `Turkey`,
                    gdpPerCapita: 12000,
                    unemploymentRate: 10,
                    televisions: 20900000,
                    publicDebt: 39,
                    population: 71892808,
                    oilProduction: 45460,
                    medianAge: 29,
                    internetUsers: 13150000,
                    electricityProduction: 154200,
                    birthRate: 16
                }),
                new WorldDebtAndPopulationItem(
                {
                    countryCode: `UG`,
                    countryName: `Uganda`,
                    gdpPerCapita: 1000,
                    unemploymentRate: 0,
                    televisions: 500000,
                    publicDebt: 21,
                    population: 31367972,
                    oilProduction: 0,
                    medianAge: 15,
                    internetUsers: 2000000,
                    electricityProduction: 1983,
                    birthRate: 48
                }),
                new WorldDebtAndPopulationItem(
                {
                    countryCode: `UA`,
                    countryName: `Ukraine`,
                    gdpPerCapita: 7000,
                    unemploymentRate: 2,
                    televisions: 18050000,
                    publicDebt: 12,
                    population: 45994288,
                    oilProduction: 90400,
                    medianAge: 39,
                    internetUsers: 10000000,
                    electricityProduction: 192100,
                    birthRate: 10
                }),
                new WorldDebtAndPopulationItem(
                {
                    countryCode: `AE`,
                    countryName: `United Arab Emirates`,
                    gdpPerCapita: 37000,
                    unemploymentRate: 2,
                    televisions: 310000,
                    publicDebt: 21,
                    population: 4621399,
                    oilProduction: 2510000,
                    medianAge: 30,
                    internetUsers: 2300000,
                    electricityProduction: 57060,
                    birthRate: 16
                }),
                new WorldDebtAndPopulationItem(
                {
                    countryCode: `UK`,
                    countryName: `United Kingdom`,
                    gdpPerCapita: 35000,
                    unemploymentRate: 5,
                    televisions: 30500000,
                    publicDebt: 44,
                    population: 60943912,
                    oilProduction: 1636000,
                    medianAge: 40,
                    internetUsers: 40200000,
                    electricityProduction: 372600,
                    birthRate: 11
                }),
                new WorldDebtAndPopulationItem(
                {
                    countryCode: `US`,
                    countryName: `United States`,
                    gdpPerCapita: 45800,
                    unemploymentRate: 5,
                    televisions: 219000000,
                    publicDebt: 61,
                    population: 303824640,
                    oilProduction: 7460000,
                    medianAge: 37,
                    internetUsers: 223000000,
                    electricityProduction: 4062000,
                    birthRate: 14
                }),
                new WorldDebtAndPopulationItem(
                {
                    countryCode: `UY`,
                    countryName: `Uruguay`,
                    gdpPerCapita: 10800,
                    unemploymentRate: 9,
                    televisions: 782000,
                    publicDebt: 65,
                    population: 3477778,
                    oilProduction: 27830,
                    medianAge: 33,
                    internetUsers: 968000,
                    electricityProduction: 9200,
                    birthRate: 14
                }),
                new WorldDebtAndPopulationItem(
                {
                    countryCode: `UZ`,
                    countryName: `Uzbekistan`,
                    gdpPerCapita: 2400,
                    unemploymentRate: 1,
                    televisions: 6400000,
                    publicDebt: 19,
                    population: 27345026,
                    oilProduction: 109400,
                    medianAge: 24,
                    internetUsers: 1200000,
                    electricityProduction: 49000,
                    birthRate: 18
                }),
                new WorldDebtAndPopulationItem(
                {
                    countryCode: `VE`,
                    countryName: `Venezuela`,
                    gdpPerCapita: 12800,
                    unemploymentRate: 9,
                    televisions: 4100000,
                    publicDebt: 19,
                    population: 26414816,
                    oilProduction: 2398000,
                    medianAge: 25,
                    internetUsers: 5720000,
                    electricityProduction: 99200,
                    birthRate: 21
                }),
                new WorldDebtAndPopulationItem(
                {
                    countryCode: `VN`,
                    countryName: `Vietnam`,
                    gdpPerCapita: 2600,
                    unemploymentRate: 4,
                    televisions: 3570000,
                    publicDebt: 42,
                    population: 86116560,
                    oilProduction: 324000,
                    medianAge: 27,
                    internetUsers: 17870000,
                    electricityProduction: 59010,
                    birthRate: 16
                }),
                new WorldDebtAndPopulationItem(
                {
                    countryCode: `WF`,
                    countryName: `Wallis and Futuna`,
                    gdpPerCapita: 3800,
                    unemploymentRate: 15,
                    televisions: 0,
                    publicDebt: 6,
                    population: 15237,
                    oilProduction: 0,
                    medianAge: 0,
                    internetUsers: 900,
                    electricityProduction: 0,
                    birthRate: 0
                }),
                new WorldDebtAndPopulationItem(
                {
                    countryCode: `YE`,
                    countryName: `Yemen`,
                    gdpPerCapita: 2500,
                    unemploymentRate: 35,
                    televisions: 470000,
                    publicDebt: 34,
                    population: 23013376,
                    oilProduction: 339200,
                    medianAge: 17,
                    internetUsers: 320000,
                    electricityProduction: 4456,
                    birthRate: 42
                }),
                new WorldDebtAndPopulationItem(
                {
                    countryCode: `ZM`,
                    countryName: `Zambia`,
                    gdpPerCapita: 1400,
                    unemploymentRate: 50,
                    televisions: 277000,
                    publicDebt: 28,
                    population: 11669534,
                    oilProduction: 150,
                    medianAge: 17,
                    internetUsers: 500000,
                    electricityProduction: 8850,
                    birthRate: 41
                }),
                new WorldDebtAndPopulationItem(
                {
                    countryCode: `ZW`,
                    countryName: `Zimbabwe`,
                    gdpPerCapita: 200,
                    unemploymentRate: 80,
                    televisions: 370000,
                    publicDebt: 218,
                    population: 11350111,
                    oilProduction: 0,
                    medianAge: 18,
                    internetUsers: 1351000,
                    electricityProduction: 9950,
                    birthRate: 32
                }),
            ];
            super(...(newItems.slice(0, items)));
        }
    }
}
