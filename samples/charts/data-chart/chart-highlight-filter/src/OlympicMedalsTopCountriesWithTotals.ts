export class OlympicMedalsTopCountriesWithTotalsItem {
    public constructor(init: Partial<OlympicMedalsTopCountriesWithTotalsItem>) {
        Object.assign(this, init);
    }

    public year: string;
    public america: number;
    public china: number;
    public russia: number;
    public total: number;

}
export class OlympicMedalsTopCountriesWithTotals extends Array<OlympicMedalsTopCountriesWithTotalsItem> {
    public constructor() {
        super();
        this.push(new OlympicMedalsTopCountriesWithTotalsItem(
        {
            year: `1996`,
            america: 148,
            china: 110,
            russia: 95,
            total: 353
        }));
        this.push(new OlympicMedalsTopCountriesWithTotalsItem(
        {
            year: `2000`,
            america: 142,
            china: 115,
            russia: 91,
            total: 348
        }));
        this.push(new OlympicMedalsTopCountriesWithTotalsItem(
        {
            year: `2004`,
            america: 134,
            china: 121,
            russia: 86,
            total: 341
        }));
        this.push(new OlympicMedalsTopCountriesWithTotalsItem(
        {
            year: `2008`,
            america: 131,
            china: 129,
            russia: 65,
            total: 325
        }));
        this.push(new OlympicMedalsTopCountriesWithTotalsItem(
        {
            year: `2012`,
            america: 135,
            china: 115,
            russia: 77,
            total: 327
        }));
        this.push(new OlympicMedalsTopCountriesWithTotalsItem(
        {
            year: `2016`,
            america: 146,
            china: 112,
            russia: 88,
            total: 346
        }));
    }
}
