export class CompanyIncomeDataItem {
    public constructor(init: Partial<CompanyIncomeDataItem>) {
        Object.assign(this, init);
    }

    public costs: number;
    public netIncome: number;
    public category: string;

}
export class CompanyIncomeData extends Array<CompanyIncomeDataItem> {
    public constructor(items: Array<CompanyIncomeDataItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new CompanyIncomeDataItem(
                {
                    costs: 55,
                    netIncome: null,
                    category: `Revenue`
                }),
                new CompanyIncomeDataItem(
                {
                    costs: 45,
                    netIncome: null,
                    category: `Expenses`
                }),
                new CompanyIncomeDataItem(
                {
                    costs: 35,
                    netIncome: null,
                    category: `Research`
                }),
                new CompanyIncomeDataItem(
                {
                    costs: 28,
                    netIncome: null,
                    category: `Marketing`
                }),
                new CompanyIncomeDataItem(
                {
                    costs: 25,
                    netIncome: null,
                    category: `Administration`
                }),
                new CompanyIncomeDataItem(
                {
                    costs: 55,
                    netIncome: null,
                    category: `Total Costs`
                }),
                new CompanyIncomeDataItem(
                {
                    costs: 0,
                    netIncome: 25,
                    category: `Net Income`
                }),
            ];
            super(...(newItems.slice(0, items)));
        }
    }
}
