export class HealthDataForFranceItem {
    public constructor(init: Partial<HealthDataForFranceItem>) {
        Object.assign(this, init);
    }

    public year: number;
    public healthExpense: number;
    public lifeExpectancy: number;
    public name: string;

}
export class HealthDataForFrance extends Array<HealthDataForFranceItem> {
    public constructor(items: Array<HealthDataForFranceItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new HealthDataForFranceItem(
                {
                    year: 1985,
                    healthExpense: 2025.98,
                    lifeExpectancy: 75.92,
                    name: `Norway`
                }),
                new HealthDataForFranceItem(
                {
                    year: 1986,
                    healthExpense: 2075.21,
                    lifeExpectancy: 76.24,
                    name: `Norway`
                }),
                new HealthDataForFranceItem(
                {
                    year: 1987,
                    healthExpense: 2140.51,
                    lifeExpectancy: 76.08,
                    name: `Norway`
                }),
                new HealthDataForFranceItem(
                {
                    year: 1988,
                    healthExpense: 2119.07,
                    lifeExpectancy: 76.22,
                    name: `Norway`
                }),
                new HealthDataForFranceItem(
                {
                    year: 1989,
                    healthExpense: 2112.67,
                    lifeExpectancy: 76.5,
                    name: `Norway`
                }),
                new HealthDataForFranceItem(
                {
                    year: 1990,
                    healthExpense: 2519.81,
                    lifeExpectancy: 76.54,
                    name: `Norway`
                }),
                new HealthDataForFranceItem(
                {
                    year: 1991,
                    healthExpense: 2660.33,
                    lifeExpectancy: 76.98,
                    name: `Norway`
                }),
                new HealthDataForFranceItem(
                {
                    year: 1992,
                    healthExpense: 2737.93,
                    lifeExpectancy: 77.18,
                    name: `Norway`
                }),
                new HealthDataForFranceItem(
                {
                    year: 1993,
                    healthExpense: 2761.36,
                    lifeExpectancy: 77.15,
                    name: `Norway`
                }),
                new HealthDataForFranceItem(
                {
                    year: 1994,
                    healthExpense: 2800.17,
                    lifeExpectancy: 77.69,
                    name: `Norway`
                }),
                new HealthDataForFranceItem(
                {
                    year: 1995,
                    healthExpense: 2863.39,
                    lifeExpectancy: 77.74,
                    name: `Norway`
                }),
                new HealthDataForFranceItem(
                {
                    year: 1996,
                    healthExpense: 3034.79,
                    lifeExpectancy: 78.15,
                    name: `Norway`
                }),
                new HealthDataForFranceItem(
                {
                    year: 1997,
                    healthExpense: 3426.25,
                    lifeExpectancy: 78.14,
                    name: `Norway`
                }),
                new HealthDataForFranceItem(
                {
                    year: 1998,
                    healthExpense: 3639.47,
                    lifeExpectancy: 78.33,
                    name: `Norway`
                }),
                new HealthDataForFranceItem(
                {
                    year: 1999,
                    healthExpense: 3826.04,
                    lifeExpectancy: 78.28,
                    name: `Norway`
                }),
                new HealthDataForFranceItem(
                {
                    year: 2000,
                    healthExpense: 4003.97,
                    lifeExpectancy: 78.63,
                    name: `Norway`
                }),
                new HealthDataForFranceItem(
                {
                    year: 2001,
                    healthExpense: 4139.3,
                    lifeExpectancy: 78.79,
                    name: `Norway`
                }),
                new HealthDataForFranceItem(
                {
                    year: 2002,
                    healthExpense: 4504.06,
                    lifeExpectancy: 78.99,
                    name: `Norway`
                }),
                new HealthDataForFranceItem(
                {
                    year: 2003,
                    healthExpense: 4633.59,
                    lifeExpectancy: 79.39,
                    name: `Norway`
                }),
                new HealthDataForFranceItem(
                {
                    year: 2004,
                    healthExpense: 4734.15,
                    lifeExpectancy: 79.84,
                    name: `Norway`
                }),
                new HealthDataForFranceItem(
                {
                    year: 2005,
                    healthExpense: 4822.75,
                    lifeExpectancy: 80.04,
                    name: `Norway`
                }),
                new HealthDataForFranceItem(
                {
                    year: 2006,
                    healthExpense: 4846.36,
                    lifeExpectancy: 80.34,
                    name: `Norway`
                }),
                new HealthDataForFranceItem(
                {
                    year: 2007,
                    healthExpense: 4965.14,
                    lifeExpectancy: 80.4,
                    name: `Norway`
                }),
                new HealthDataForFranceItem(
                {
                    year: 2008,
                    healthExpense: 5149.6,
                    lifeExpectancy: 80.59,
                    name: `Norway`
                }),
                new HealthDataForFranceItem(
                {
                    year: 2009,
                    healthExpense: 5254.08,
                    lifeExpectancy: 80.8,
                    name: `Norway`
                }),
                new HealthDataForFranceItem(
                {
                    year: 2010,
                    healthExpense: 5240.42,
                    lifeExpectancy: 81,
                    name: `Norway`
                }),
                new HealthDataForFranceItem(
                {
                    year: 2011,
                    healthExpense: 5387.98,
                    lifeExpectancy: 81.3,
                    name: `Norway`
                }),
                new HealthDataForFranceItem(
                {
                    year: 2012,
                    healthExpense: 5499.09,
                    lifeExpectancy: 81.45,
                    name: `Norway`
                }),
                new HealthDataForFranceItem(
                {
                    year: 2013,
                    healthExpense: 5557.2,
                    lifeExpectancy: 81.75,
                    name: `Norway`
                }),
                new HealthDataForFranceItem(
                {
                    year: 2014,
                    healthExpense: 5730.16,
                    lifeExpectancy: 82.1,
                    name: `Norway`
                }),
                new HealthDataForFranceItem(
                {
                    year: 2015,
                    healthExpense: 5926.44,
                    lifeExpectancy: 82.3,
                    name: `Norway`
                }),
            ];
            super(...(newItems.slice(0, items)));
        }
    }
}
