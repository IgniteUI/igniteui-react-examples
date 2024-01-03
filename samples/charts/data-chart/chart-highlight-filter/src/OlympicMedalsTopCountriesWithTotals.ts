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
    public constructor(items: Array<OlympicMedalsTopCountriesWithTotalsItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new OlympicMedalsTopCountriesWithTotalsItem(
                {
                    year: `1996`,
                    america: 148,
                    china: 110,
                    russia: 95,
                    total: 353
                }),
                new OlympicMedalsTopCountriesWithTotalsItem(
                {
                    year: `2000`,
                    america: 142,
                    china: 115,
                    russia: 91,
                    total: 348
                }),
                new OlympicMedalsTopCountriesWithTotalsItem(
                {
                    year: `2004`,
                    america: 134,
                    china: 121,
                    russia: 86,
                    total: 341
                }),
                new OlympicMedalsTopCountriesWithTotalsItem(
                {
                    year: `2008`,
                    america: 131,
                    china: 129,
                    russia: 65,
                    total: 325
                }),
                new OlympicMedalsTopCountriesWithTotalsItem(
                {
                    year: `2012`,
                    america: 135,
                    china: 115,
                    russia: 77,
                    total: 327
                }),
                new OlympicMedalsTopCountriesWithTotalsItem(
                {
                    year: `2016`,
                    america: 146,
                    china: 112,
                    russia: 88,
                    total: 346
                }),
            ];
            super(...(newItems.slice(0, items)));
        }
    }
}
