export class CalendarMonthsItem {
    public constructor(init: Partial<CalendarMonthsItem>) {
        Object.assign(this, init);
    }

    public value: number;
    public label: string;

}
export class CalendarMonths extends Array<CalendarMonthsItem> {
    public constructor(items: Array<CalendarMonthsItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new CalendarMonthsItem({ value: 1, label: `December` }),
                new CalendarMonthsItem({ value: 1, label: `January` }),
                new CalendarMonthsItem({ value: 1, label: `February` }),
                new CalendarMonthsItem({ value: 1, label: `March` }),
                new CalendarMonthsItem({ value: 1, label: `April` }),
                new CalendarMonthsItem({ value: 1, label: `May` }),
                new CalendarMonthsItem({ value: 1, label: `June` }),
                new CalendarMonthsItem({ value: 1, label: `July` }),
                new CalendarMonthsItem({ value: 1, label: `August` }),
                new CalendarMonthsItem({ value: 1, label: `September` }),
                new CalendarMonthsItem({ value: 1, label: `October` }),
                new CalendarMonthsItem({ value: 1, label: `November` }),
            ];
            super(...newItems.slice(0));
        }
    }
}
