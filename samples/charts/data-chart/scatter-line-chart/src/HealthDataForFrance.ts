export class HealthDataForFranceItem {
    public constructor(init: Partial<HealthDataForFranceItem>) {
        Object.assign(this, init);
    }
    
    public label: string;
    public shoes: number;
    public hats: number;
    public coats: number;
    public scarves: number;

}
export class HealthDataForFrance extends Array<HealthDataForFranceItem> {
    public constructor() {
        super();
        this.push(new HealthDataForFranceItem(
        {
            label: `2000`,
            shoes: 21,
            hats: 40,
            coats: 8,
            scarves: 14
        }));
        this.push(new HealthDataForFranceItem(
        {
            label: `2001`,
            shoes: 24,
            hats: 38,
            coats: 9,
            scarves: 16
        }));
        this.push(new HealthDataForFranceItem(
        {
            label: `2002`,
            shoes: 26,
            hats: 38,
            coats: 8,
            scarves: 18
        }));
        this.push(new HealthDataForFranceItem(
        {
            label: `2003`,
            shoes: 31,
            hats: 36,
            coats: 10,
            scarves: 20
        }));
        this.push(new HealthDataForFranceItem(
        {
            label: `2004`,
            shoes: 36,
            hats: 36,
            coats: 11,
            scarves: 20
        }));
        this.push(new HealthDataForFranceItem(
        {
            label: `2005`,
            shoes: 30,
            hats: 32,
            coats: 12,
            scarves: 22
        }));
    }
}
