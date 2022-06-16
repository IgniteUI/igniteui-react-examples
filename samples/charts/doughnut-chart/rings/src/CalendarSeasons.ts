export class CalendarSeasonsItem {
    public constructor(init: Partial<CalendarSeasonsItem>) {
        Object.assign(this, init);
    }
    
    public value: number;
    public label: string;

}
export class CalendarSeasons extends Array<CalendarSeasonsItem> {
    public constructor() {
        super();
        this.push(new CalendarSeasonsItem(
        {
            value: 4,
            label: `Winter`
        }));
        this.push(new CalendarSeasonsItem(
        {
            value: 4,
            label: `Spring`
        }));
        this.push(new CalendarSeasonsItem(
        {
            value: 4,
            label: `Summer`
        }));
        this.push(new CalendarSeasonsItem(
        {
            value: 4,
            label: `Fall`
        }));
    }
}
