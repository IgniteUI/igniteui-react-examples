export class OlympicMedalsTopCountriesItem {
    public constructor(init: Partial<OlympicMedalsTopCountriesItem>) {
        Object.assign(this, init);
    }
    
    public year: string;
    public america: number;
    public china: number;
    public russia: number;

}
export class OlympicMedalsTopCountries extends Array<OlympicMedalsTopCountriesItem> {
    public constructor() {
        super();
        this.push(new OlympicMedalsTopCountriesItem(
        {
            year: `1996`,
            america: 148,
            china: 110,
            russia: 95
        }));
        this.push(new OlympicMedalsTopCountriesItem(
        {
            year: `2000`,
            america: 142,
            china: 115,
            russia: 91
        }));
        this.push(new OlympicMedalsTopCountriesItem(
        {
            year: `2004`,
            america: 134,
            china: 121,
            russia: 86
        }));
        this.push(new OlympicMedalsTopCountriesItem(
        {
            year: `2008`,
            america: 131,
            china: 129,
            russia: 65
        }));
        this.push(new OlympicMedalsTopCountriesItem(
        {
            year: `2012`,
            america: 135,
            china: 115,
            russia: 77
        }));
        this.push(new OlympicMedalsTopCountriesItem(
        {
            year: `2016`,
            america: 146,
            china: 112,
            russia: 88
        }));
    }
}
