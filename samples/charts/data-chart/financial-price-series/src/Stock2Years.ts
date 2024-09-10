export class Stock2YearsItem {
    public constructor(init: Partial<Stock2YearsItem>) {
        Object.assign(this, init);
    }

    public month: string;
    public open: number;
    public high: number;
    public low: number;
    public close: number;
    public volume: number;

}
export class Stock2Years extends Array<Stock2YearsItem> {
    public constructor(items: Array<Stock2YearsItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new Stock2YearsItem(
                {
                    month: `2020`,
                    open: 41.1,
                    high: 41.6,
                    low: 41.1,
                    close: 41.4,
                    volume: 32610
                }),
                new Stock2YearsItem(
                {
                    month: `FEB`,
                    open: 41.4,
                    high: 41.7,
                    low: 41.2,
                    close: 41.4,
                    volume: 28666
                }),
                new Stock2YearsItem(
                {
                    month: `MAR`,
                    open: 41.3,
                    high: 41.3,
                    low: 40.7,
                    close: 41,
                    volume: 30139
                }),
                new Stock2YearsItem(
                {
                    month: `APR`,
                    open: 41.3,
                    high: 41.4,
                    low: 39.6,
                    close: 39.9,
                    volume: 51409
                }),
                new Stock2YearsItem(
                {
                    month: `MAY`,
                    open: 40,
                    high: 40.3,
                    low: 39.7,
                    close: 39.8,
                    volume: 37559
                }),
                new Stock2YearsItem(
                {
                    month: `JUN`,
                    open: 39.8,
                    high: 39.9,
                    low: 39.2,
                    close: 39.8,
                    volume: 35919
                }),
                new Stock2YearsItem(
                {
                    month: `JUL`,
                    open: 39.9,
                    high: 40.5,
                    low: 39.9,
                    close: 40.5,
                    volume: 27398
                }),
                new Stock2YearsItem(
                {
                    month: `AUG`,
                    open: 40.4,
                    high: 40.7,
                    low: 39.1,
                    close: 39.4,
                    volume: 45960
                }),
                new Stock2YearsItem(
                {
                    month: `SEP`,
                    open: 39,
                    high: 39.8,
                    low: 39,
                    close: 39.2,
                    volume: 34333
                }),
                new Stock2YearsItem(
                {
                    month: `OCT`,
                    open: 39.1,
                    high: 39.4,
                    low: 38.9,
                    close: 39.2,
                    volume: 32006
                }),
                new Stock2YearsItem(
                {
                    month: `NOV`,
                    open: 39.3,
                    high: 40,
                    low: 39,
                    close: 39.8,
                    volume: 33978
                }),
                new Stock2YearsItem(
                {
                    month: `DEC`,
                    open: 40.1,
                    high: 40.4,
                    low: 39.9,
                    close: 40.4,
                    volume: 30616
                }),
                new Stock2YearsItem(
                {
                    month: `2021`,
                    open: 40,
                    high: 40.2,
                    low: 39.5,
                    close: 40,
                    volume: 36689
                }),
                new Stock2YearsItem(
                {
                    month: `FEB`,
                    open: 40.1,
                    high: 40.1,
                    low: 39.8,
                    close: 39.9,
                    volume: 22222
                }),
                new Stock2YearsItem(
                {
                    month: `MAR`,
                    open: 40,
                    high: 40.1,
                    low: 39.8,
                    close: 40,
                    volume: 27057
                }),
                new Stock2YearsItem(
                {
                    month: `APR`,
                    open: 40,
                    high: 40,
                    low: 39.5,
                    close: 39.7,
                    volume: 24602
                }),
                new Stock2YearsItem(
                {
                    month: `MAY`,
                    open: 39.7,
                    high: 40,
                    low: 39.3,
                    close: 39.9,
                    volume: 42381
                }),
                new Stock2YearsItem(
                {
                    month: `JUN`,
                    open: 40.3,
                    high: 40.7,
                    low: 39.8,
                    close: 39.9,
                    volume: 56883
                }),
                new Stock2YearsItem(
                {
                    month: `JUL`,
                    open: 40.1,
                    high: 41.3,
                    low: 40.1,
                    close: 40.9,
                    volume: 50610
                }),
                new Stock2YearsItem(
                {
                    month: `AUG`,
                    open: 41.1,
                    high: 41.2,
                    low: 40.4,
                    close: 40.5,
                    volume: 29637
                }),
                new Stock2YearsItem(
                {
                    month: `SEP`,
                    open: 39,
                    high: 39.8,
                    low: 39,
                    close: 39.2,
                    volume: 34333
                }),
                new Stock2YearsItem(
                {
                    month: `OCT`,
                    open: 39.1,
                    high: 39.4,
                    low: 38.9,
                    close: 39.2,
                    volume: 32006
                }),
                new Stock2YearsItem(
                {
                    month: `NOV`,
                    open: 39.3,
                    high: 40,
                    low: 39,
                    close: 39.8,
                    volume: 33978
                }),
                new Stock2YearsItem(
                {
                    month: `DEC`,
                    open: 40.1,
                    high: 40.4,
                    low: 39.9,
                    close: 40.4,
                    volume: 30616
                }),
            ];
            super(...newItems.slice(0));
        }
    }
}
