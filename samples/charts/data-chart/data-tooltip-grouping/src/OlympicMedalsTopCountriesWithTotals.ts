export class OlympicMedalsTopCountriesWithTotalsItem {
    public constructor(init: Partial<OlympicMedalsTopCountriesWithTotalsItem>) {
        Object.assign(this, init);
    }

    public year: string;
    public america: number;
    public americaGold: number;
    public china: number;
    public chinaGold: number;
    public russia: number;
    public russiaGold: number;
    public total: number;

}
export class OlympicMedalsTopCountriesWithTotals extends Array<OlympicMedalsTopCountriesWithTotalsItem> {
    public constructor(items: Array<OlympicMedalsTopCountriesWithTotalsItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new OlympicMedalsTopCountriesWithTotalsItem({ year: `1996`, america: 148, americaGold: 50, china: 110, chinaGold: 40, russia: 95, russiaGold: 20, total: 353 }),
                new OlympicMedalsTopCountriesWithTotalsItem({ year: `2000`, america: 142, americaGold: 40, china: 115, chinaGold: 45, russia: 91, russiaGold: 40, total: 348 }),
                new OlympicMedalsTopCountriesWithTotalsItem({ year: `2004`, america: 134, americaGold: 35, china: 121, chinaGold: 55, russia: 86, russiaGold: 25, total: 341 }),
                new OlympicMedalsTopCountriesWithTotalsItem({ year: `2008`, america: 131, americaGold: 20, china: 129, chinaGold: 35, russia: 65, russiaGold: 35, total: 325 }),
                new OlympicMedalsTopCountriesWithTotalsItem({ year: `2012`, america: 135, americaGold: 25, china: 115, chinaGold: 50, russia: 77, russiaGold: 15, total: 327 }),
                new OlympicMedalsTopCountriesWithTotalsItem({ year: `2016`, america: 146, americaGold: 45, china: 112, chinaGold: 45, russia: 88, russiaGold: 30, total: 346 }),
            ];
            super(...newItems.slice(0));
        }
    }
}
