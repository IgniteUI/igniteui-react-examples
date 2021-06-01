export class MonthsItem {
    public constructor(init: Partial<MonthsItem>) {
        Object.assign(this, init);
    }
    
    public value: number;
    public label: string;

}
export class Months extends Array<MonthsItem> {
    public constructor() {
        super();
        this.push(new MonthsItem(
        {
            value: 1,
            label: `December`
        }));
        this.push(new MonthsItem(
        {
            value: 1,
            label: `January`
        }));
        this.push(new MonthsItem(
        {
            value: 1,
            label: `February`
        }));
        this.push(new MonthsItem(
        {
            value: 1,
            label: `March`
        }));
        this.push(new MonthsItem(
        {
            value: 1,
            label: `April`
        }));
        this.push(new MonthsItem(
        {
            value: 1,
            label: `May`
        }));
        this.push(new MonthsItem(
        {
            value: 1,
            label: `June`
        }));
        this.push(new MonthsItem(
        {
            value: 1,
            label: `July`
        }));
        this.push(new MonthsItem(
        {
            value: 1,
            label: `August`
        }));
        this.push(new MonthsItem(
        {
            value: 1,
            label: `September`
        }));
        this.push(new MonthsItem(
        {
            value: 1,
            label: `October`
        }));
        this.push(new MonthsItem(
        {
            value: 1,
            label: `November`
        }));
    }
}
export class SeasonsItem {
    public constructor(init: Partial<SeasonsItem>) {
        Object.assign(this, init);
    }
    
    public value: number;
    public label: string;

}
export class Seasons extends Array<SeasonsItem> {
    public constructor() {
        super();
        this.push(new SeasonsItem(
        {
            value: 4,
            label: `Winter`
        }));
        this.push(new SeasonsItem(
        {
            value: 4,
            label: `Spring`
        }));
        this.push(new SeasonsItem(
        {
            value: 4,
            label: `Summer`
        }));
        this.push(new SeasonsItem(
        {
            value: 4,
            label: `Fall`
        }));
    }
}
