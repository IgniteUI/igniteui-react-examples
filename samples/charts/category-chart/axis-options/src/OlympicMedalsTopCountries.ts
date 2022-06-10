export class OlympicMedalsTopCountriesItem {
    public constructor(init: Partial<OlympicMedalsTopCountriesItem>) {
        Object.assign(this, init);
    }
    
    public year: string;
    public uSA: number;
    public cHN: number;
    public rUS: number;

}
export class OlympicMedalsTopCountries extends Array<OlympicMedalsTopCountriesItem> {
    public constructor() {
        super();
        this.push(new OlympicMedalsTopCountriesItem(
        {
            year: `1996`,
            uSA: 148,
            cHN: 110,
            rUS: 95
        }));
        this.push(new OlympicMedalsTopCountriesItem(
        {
            year: `2000`,
            uSA: 142,
            cHN: 115,
            rUS: 91
        }));
        this.push(new OlympicMedalsTopCountriesItem(
        {
            year: `2004`,
            uSA: 134,
            cHN: 121,
            rUS: 86
        }));
        this.push(new OlympicMedalsTopCountriesItem(
        {
            year: `2008`,
            uSA: 131,
            cHN: 129,
            rUS: 65
        }));
        this.push(new OlympicMedalsTopCountriesItem(
        {
            year: `2012`,
            uSA: 135,
            cHN: 115,
            rUS: 77
        }));
        this.push(new OlympicMedalsTopCountriesItem(
        {
            year: `2016`,
            uSA: 146,
            cHN: 112,
            rUS: 88
        }));
    }
}
