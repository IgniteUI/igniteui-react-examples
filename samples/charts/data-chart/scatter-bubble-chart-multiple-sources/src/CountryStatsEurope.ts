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
    public constructor(items: Array<CountryStatsEuropeItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new CountryStatsEuropeItem({ code: `ALB`, population: 2891000, workedHours: 41, gDP: 10970, name: `Albania` }),
                new CountryStatsEuropeItem({ code: `AUT`, population: 8679000, workedHours: 30.75, gDP: 44305, name: `Austria` }),
                new CountryStatsEuropeItem({ code: `BLR`, population: 9439000, workedHours: 43.5, gDP: 17230, name: `Belarus` }),
                new CountryStatsEuropeItem({ code: `BEL`, population: 11288000, workedHours: 29.7, gDP: 41708, name: `Belgium` }),
                new CountryStatsEuropeItem({ code: `BIH`, population: 3429000, workedHours: 46.5, gDP: 10932, name: `Bosnia` }),
                new CountryStatsEuropeItem({ code: `BGR`, population: 7200000, workedHours: 31.62, gDP: 17000, name: `Bulgaria` }),
                new CountryStatsEuropeItem({ code: `HRV`, population: 4233000, workedHours: 35.15, gDP: 20984, name: `Croatia` }),
                new CountryStatsEuropeItem({ code: `CYP`, population: 1161000, workedHours: 34.42, gDP: 30549, name: `Cyprus` }),
                new CountryStatsEuropeItem({ code: `CZE`, population: 10601000, workedHours: 33.77, gDP: 30605, name: `Czechia` }),
                new CountryStatsEuropeItem({ code: `DNK`, population: 5689000, workedHours: 27.16, gDP: 45459, name: `Denmark` }),
                new CountryStatsEuropeItem({ code: `EST`, population: 1315000, workedHours: 35.61, gDP: 27550, name: `Estonia` }),
                new CountryStatsEuropeItem({ code: `FIN`, population: 5481000, workedHours: 31.48, gDP: 38942, name: `Finland` }),
                new CountryStatsEuropeItem({ code: `FRA`, population: 64453000, workedHours: 29.03, gDP: 37766, name: `France` }),
                new CountryStatsEuropeItem({ code: `DEU`, population: 81787000, workedHours: 26.31, gDP: 43938, name: `Germany` }),
                new CountryStatsEuropeItem({ code: `GRC`, population: 10660000, workedHours: 39.06, gDP: 24170, name: `Greece` }),
                new CountryStatsEuropeItem({ code: `HUN`, population: 9778000, workedHours: 36.99, gDP: 25034, name: `Hungary` }),
                new CountryStatsEuropeItem({ code: `ISL`, population: 330000, workedHours: 29.02, gDP: 43048, name: `Iceland` }),
                new CountryStatsEuropeItem({ code: `IRL`, population: 4652000, workedHours: 33.47, gDP: 60818, name: `Ireland` }),
                new CountryStatsEuropeItem({ code: `ITA`, population: 60578000, workedHours: 33.04, gDP: 34302, name: `Italy` }),
                new CountryStatsEuropeItem({ code: `LVA`, population: 1998000, workedHours: 36.57, gDP: 23019, name: `Latvia` }),
                new CountryStatsEuropeItem({ code: `LTU`, population: 2932000, workedHours: 35.76, gDP: 27046, name: `Lithuania` }),
                new CountryStatsEuropeItem({ code: `LUX`, population: 567000, workedHours: 29.25, gDP: 94089, name: `Luxembourg` }),
                new CountryStatsEuropeItem({ code: `MLT`, population: 434000, workedHours: 37.78, gDP: 34087, name: `Malta` }),
                new CountryStatsEuropeItem({ code: `MDA`, population: 4071000, workedHours: 41, gDP: 4747, name: `Moldova` }),
                new CountryStatsEuropeItem({ code: `MNE`, population: 627000, workedHours: 47.2, gDP: 15290, name: `Montenegro` }),
                new CountryStatsEuropeItem({ code: `NLD`, population: 16938000, workedHours: 27.38, gDP: 46494, name: `Netherlands` }),
                new CountryStatsEuropeItem({ code: `MKD`, population: 2079000, workedHours: 36.6, gDP: 12760, name: `North Macedonia` }),
                new CountryStatsEuropeItem({ code: `NOR`, population: 5200000, workedHours: 27.36, gDP: 64008, name: `Norway` }),
                new CountryStatsEuropeItem({ code: `POL`, population: 38034000, workedHours: 39.4, gDP: 25300, name: `Poland` }),
                new CountryStatsEuropeItem({ code: `PRT`, population: 10368000, workedHours: 36.06, gDP: 26608, name: `Portugal` }),
                new CountryStatsEuropeItem({ code: `ROU`, population: 19925000, workedHours: 34.34, gDP: 20556, name: `Romania` }),
                new CountryStatsEuropeItem({ code: `RUS`, population: 145000000, workedHours: 38.04, gDP: 24517, name: `Russia` }),
                new CountryStatsEuropeItem({ code: `SMR`, population: 33000, workedHours: 40.1, gDP: 56372, name: `San Marino` }),
                new CountryStatsEuropeItem({ code: `SRB`, population: 8877000, workedHours: 46.5, gDP: 13278, name: `Serbia` }),
                new CountryStatsEuropeItem({ code: `SVK`, population: 5436000, workedHours: 33.73, gDP: 28309, name: `Slovakia` }),
                new CountryStatsEuropeItem({ code: `SVN`, population: 2071000, workedHours: 32.46, gDP: 29038, name: `Slovenia` }),
                new CountryStatsEuropeItem({ code: `ESP`, population: 46672000, workedHours: 32.68, gDP: 32291, name: `Spain` }),
                new CountryStatsEuropeItem({ code: `SWE`, population: 9765000, workedHours: 30.96, gDP: 45679, name: `Sweden` }),
                new CountryStatsEuropeItem({ code: `CHE`, population: 8297000, workedHours: 30.57, gDP: 57264, name: `Switzerland` }),
                new CountryStatsEuropeItem({ code: `UKR`, population: 44922000, workedHours: 38.6, gDP: 7465, name: `Ukraine` }),
                new CountryStatsEuropeItem({ code: `GBR`, population: 65860000, workedHours: 32.1, gDP: 38839, name: `United Kingdom` }),
            ];
            super(...newItems.slice(0));
        }
    }
}
