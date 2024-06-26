export class HealthDataForGermanyItem {
    public constructor(init: Partial<HealthDataForGermanyItem>) {
        Object.assign(this, init);
    }

    public year: number;
    public healthExpense: number;
    public lifeExpectancy: number;
    public name: string;

}
export class HealthDataForGermany extends Array<HealthDataForGermanyItem> {
    public constructor(items: Array<HealthDataForGermanyItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new HealthDataForGermanyItem(
                {
                    year: 1985,
                    healthExpense: 2579.64,
                    lifeExpectancy: 74.05,
                    name: `Germany`
                }),
                new HealthDataForGermanyItem(
                {
                    year: 1986,
                    healthExpense: 2603.94,
                    lifeExpectancy: 74.31,
                    name: `Germany`
                }),
                new HealthDataForGermanyItem(
                {
                    year: 1987,
                    healthExpense: 2668.49,
                    lifeExpectancy: 74.56,
                    name: `Germany`
                }),
                new HealthDataForGermanyItem(
                {
                    year: 1988,
                    healthExpense: 2812.94,
                    lifeExpectancy: 74.79,
                    name: `Germany`
                }),
                new HealthDataForGermanyItem(
                {
                    year: 1989,
                    healthExpense: 2689.51,
                    lifeExpectancy: 75.01,
                    name: `Germany`
                }),
                new HealthDataForGermanyItem(
                {
                    year: 1990,
                    healthExpense: 2774.68,
                    lifeExpectancy: 75.23,
                    name: `Germany`
                }),
                new HealthDataForGermanyItem(
                {
                    year: 1992,
                    healthExpense: 2909.85,
                    lifeExpectancy: 75.82,
                    name: `Germany`
                }),
                new HealthDataForGermanyItem(
                {
                    year: 1993,
                    healthExpense: 2853.09,
                    lifeExpectancy: 75.87,
                    name: `Germany`
                }),
                new HealthDataForGermanyItem(
                {
                    year: 1994,
                    healthExpense: 2989.64,
                    lifeExpectancy: 76.27,
                    name: `Germany`
                }),
                new HealthDataForGermanyItem(
                {
                    year: 1995,
                    healthExpense: 3122.13,
                    lifeExpectancy: 76.42,
                    name: `Germany`
                }),
                new HealthDataForGermanyItem(
                {
                    year: 1996,
                    healthExpense: 3241.89,
                    lifeExpectancy: 76.67,
                    name: `Germany`
                }),
                new HealthDataForGermanyItem(
                {
                    year: 1997,
                    healthExpense: 3257.29,
                    lifeExpectancy: 77.07,
                    name: `Germany`
                }),
                new HealthDataForGermanyItem(
                {
                    year: 1998,
                    healthExpense: 3327.26,
                    lifeExpectancy: 77.48,
                    name: `Germany`
                }),
                new HealthDataForGermanyItem(
                {
                    year: 1999,
                    healthExpense: 3414.57,
                    lifeExpectancy: 77.73,
                    name: `Germany`
                }),
                new HealthDataForGermanyItem(
                {
                    year: 2000,
                    healthExpense: 3536.35,
                    lifeExpectancy: 77.93,
                    name: `Germany`
                }),
                new HealthDataForGermanyItem(
                {
                    year: 2001,
                    healthExpense: 3603.77,
                    lifeExpectancy: 78.33,
                    name: `Germany`
                }),
                new HealthDataForGermanyItem(
                {
                    year: 2002,
                    healthExpense: 3687.38,
                    lifeExpectancy: 78.23,
                    name: `Germany`
                }),
                new HealthDataForGermanyItem(
                {
                    year: 2003,
                    healthExpense: 3745.14,
                    lifeExpectancy: 78.38,
                    name: `Germany`
                }),
                new HealthDataForGermanyItem(
                {
                    year: 2004,
                    healthExpense: 3704.96,
                    lifeExpectancy: 78.68,
                    name: `Germany`
                }),
                new HealthDataForGermanyItem(
                {
                    year: 2005,
                    healthExpense: 3787.13,
                    lifeExpectancy: 78.93,
                    name: `Germany`
                }),
                new HealthDataForGermanyItem(
                {
                    year: 2006,
                    healthExpense: 3875.14,
                    lifeExpectancy: 79.13,
                    name: `Germany`
                }),
                new HealthDataForGermanyItem(
                {
                    year: 2007,
                    healthExpense: 3950.17,
                    lifeExpectancy: 79.53,
                    name: `Germany`
                }),
                new HealthDataForGermanyItem(
                {
                    year: 2008,
                    healthExpense: 4079.09,
                    lifeExpectancy: 79.74,
                    name: `Germany`
                }),
                new HealthDataForGermanyItem(
                {
                    year: 2009,
                    healthExpense: 4232.58,
                    lifeExpectancy: 79.84,
                    name: `Germany`
                }),
                new HealthDataForGermanyItem(
                {
                    year: 2010,
                    healthExpense: 4358.61,
                    lifeExpectancy: 79.99,
                    name: `Germany`
                }),
                new HealthDataForGermanyItem(
                {
                    year: 2011,
                    healthExpense: 4396.44,
                    lifeExpectancy: 80.44,
                    name: `Germany`
                }),
                new HealthDataForGermanyItem(
                {
                    year: 2012,
                    healthExpense: 4516.99,
                    lifeExpectancy: 80.54,
                    name: `Germany`
                }),
                new HealthDataForGermanyItem(
                {
                    year: 2013,
                    healthExpense: 4589.37,
                    lifeExpectancy: 80.49,
                    name: `Germany`
                }),
                new HealthDataForGermanyItem(
                {
                    year: 2014,
                    healthExpense: 4684.49,
                    lifeExpectancy: 81.09,
                    name: `Germany`
                }),
                new HealthDataForGermanyItem(
                {
                    year: 2015,
                    healthExpense: 4772.33,
                    lifeExpectancy: 80.64,
                    name: `Germany`
                }),
            ];
            super(...newItems.slice(0));
        }
    }
}
