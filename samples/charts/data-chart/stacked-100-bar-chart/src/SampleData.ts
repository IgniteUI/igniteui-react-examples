export class DataItem {
    public constructor(init: Partial<DataItem>) {
        Object.assign(this, init);
    }
    
    public location: string;
    public year: number;
    public hydro: number;
    public solar: number;
    public wind: number;
    public other: number;

}
export class Data extends Array<DataItem> {
    public constructor() {
        super();
        this.push(new DataItem(
        {
            location: `China`,
            year: 2019,
            hydro: 1269.67,
            solar: 223.8,
            wind: 405.7,
            other: 102.83
        }));
        this.push(new DataItem(
        {
            location: `Europe`,
            year: 2019,
            hydro: 632.54,
            solar: 154.66,
            wind: 461.59,
            other: 220.34
        }));
        this.push(new DataItem(
        {
            location: `United States`,
            year: 2019,
            hydro: 271.16,
            solar: 108.36,
            wind: 303.1,
            other: 78.34
        }));
        this.push(new DataItem(
        {
            location: `Brazil`,
            year: 2019,
            hydro: 399.3,
            solar: 5.56,
            wind: 55.83,
            other: 56.25
        }));
        this.push(new DataItem(
        {
            location: `Canadas`,
            year: 2019,
            hydro: 381.98,
            solar: 4.31,
            wind: 34.17,
            other: 10.81
        }));
    }
}
