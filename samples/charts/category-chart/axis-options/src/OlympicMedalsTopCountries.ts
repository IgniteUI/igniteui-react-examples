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
    public constructor(items: Array<OlympicMedalsTopCountriesItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new OlympicMedalsTopCountriesItem({ year: `1996`, america: 148, china: 110, russia: 95 }),
                new OlympicMedalsTopCountriesItem({ year: `2000`, america: 142, china: 115, russia: 91 }),
                new OlympicMedalsTopCountriesItem({ year: `2004`, america: 134, china: 121, russia: 86 }),
                new OlympicMedalsTopCountriesItem({ year: `2008`, america: 131, china: 129, russia: 65 }),
                new OlympicMedalsTopCountriesItem({ year: `2012`, america: 135, china: 115, russia: 77 }),
                new OlympicMedalsTopCountriesItem({ year: `2016`, america: 146, china: 112, russia: 88 }),
            ];
            super(...newItems.slice(0));
        }
    }
}
