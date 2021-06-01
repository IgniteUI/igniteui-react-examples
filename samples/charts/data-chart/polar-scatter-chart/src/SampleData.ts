export class DataItem {
    public constructor(init: Partial<DataItem>) {
        Object.assign(this, init);
    }
    
    public direction: number;
    public boatSpeed: number;
    public windSpeed: number;

}
export class Data extends Array<DataItem> {
    public constructor() {
        super();
        this.push(new DataItem(
        {
            direction: 0,
            boatSpeed: 70,
            windSpeed: 90
        }));
        this.push(new DataItem(
        {
            direction: 45,
            boatSpeed: 35,
            windSpeed: 65
        }));
        this.push(new DataItem(
        {
            direction: 90,
            boatSpeed: 25,
            windSpeed: 45
        }));
        this.push(new DataItem(
        {
            direction: 135,
            boatSpeed: 15,
            windSpeed: 25
        }));
        this.push(new DataItem(
        {
            direction: 180,
            boatSpeed: 0,
            windSpeed: 0
        }));
        this.push(new DataItem(
        {
            direction: 225,
            boatSpeed: 15,
            windSpeed: 25
        }));
        this.push(new DataItem(
        {
            direction: 270,
            boatSpeed: 25,
            windSpeed: 45
        }));
        this.push(new DataItem(
        {
            direction: 315,
            boatSpeed: 35,
            windSpeed: 65
        }));
        this.push(new DataItem(
        {
            direction: 360,
            boatSpeed: 70,
            windSpeed: 90
        }));
    }
}
