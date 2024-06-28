export class CalendarSeasonsItem {
    public constructor(init: Partial<CalendarSeasonsItem>) {
        Object.assign(this, init);
    }

    public value: number;
    public label: string;

}
export class CalendarSeasons extends Array<CalendarSeasonsItem> {
    public constructor(items: Array<CalendarSeasonsItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new CalendarSeasonsItem(
                {
                    value: 4,
                    label: `Winter`
                }),
                new CalendarSeasonsItem(
                {
                    value: 4,
                    label: `Spring`
                }),
                new CalendarSeasonsItem(
                {
                    value: 4,
                    label: `Summer`
                }),
                new CalendarSeasonsItem(
                {
                    value: 4,
                    label: `Fall`
                }),
            ];
            super(...newItems.slice(0));
        }
    }
}
