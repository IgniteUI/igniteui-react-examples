export class DataItem {
    public constructor(init: Partial<DataItem>) {
        Object.assign(this, init);
    }
    
    public location: string;
    public solar: number;
    public coal: number;
    public hydro: number;
    public wind: number;
    public nuclear: number;

}
export class Data extends Array<DataItem> {
    public constructor() {
        super();
        this.push(new DataItem(
        {
            location: `World`,
            solar: 23,
            coal: -1,
            hydro: 1,
            wind: 12,
            nuclear: 3
        }));
        this.push(new DataItem(
        {
            location: `China`,
            solar: 26,
            coal: 2,
            hydro: 5,
            wind: 10,
            nuclear: 18
        }));
        this.push(new DataItem(
        {
            location: `U.S.`,
            solar: 15,
            coal: -15,
            hydro: -7,
            wind: 10,
            nuclear: 1
        }));
        this.push(new DataItem(
        {
            location: `EU`,
            solar: 11,
            coal: -12,
            hydro: -2,
            wind: 14,
            nuclear: -1
        }));
    }
}
