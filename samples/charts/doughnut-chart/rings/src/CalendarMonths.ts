export class CalendarMonthsItem {
    public constructor(init: Partial<CalendarMonthsItem>) {
        Object.assign(this, init);
    }

    public value: number;
    public label: string;

}
export class CalendarMonths extends Array<CalendarMonthsItem> {
    public constructor() {
        super();
        this.push(new CalendarMonthsItem(
        {
            value: 1,
            label: `December`
        }));
        this.push(new CalendarMonthsItem(
        {
            value: 1,
            label: `January`
        }));
        this.push(new CalendarMonthsItem(
        {
            value: 1,
            label: `February`
        }));
        this.push(new CalendarMonthsItem(
        {
            value: 1,
            label: `March`
        }));
        this.push(new CalendarMonthsItem(
        {
            value: 1,
            label: `April`
        }));
        this.push(new CalendarMonthsItem(
        {
            value: 1,
            label: `May`
        }));
        this.push(new CalendarMonthsItem(
        {
            value: 1,
            label: `June`
        }));
        this.push(new CalendarMonthsItem(
        {
            value: 1,
            label: `July`
        }));
        this.push(new CalendarMonthsItem(
        {
            value: 1,
            label: `August`
        }));
        this.push(new CalendarMonthsItem(
        {
            value: 1,
            label: `September`
        }));
        this.push(new CalendarMonthsItem(
        {
            value: 1,
            label: `October`
        }));
        this.push(new CalendarMonthsItem(
        {
            value: 1,
            label: `November`
        }));
    }
}
