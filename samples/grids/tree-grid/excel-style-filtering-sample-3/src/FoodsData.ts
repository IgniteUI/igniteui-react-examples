export class FoodsDataItem {
    public constructor(init: Partial<FoodsDataItem>) {
        Object.assign(this, init);
    }

    public ID: number;
    public ParentID: number;
    public Name: string;
    public UnitPrice: number;
    public AddedDate: string;
    public Discontinued: boolean;

}
export class FoodsData extends Array<FoodsDataItem> {
    public constructor(items: Array<FoodsDataItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new FoodsDataItem({ ID: 1, ParentID: -1, Name: `Foods`, UnitPrice: 0, AddedDate: `2009-06-19`, Discontinued: false }),
                new FoodsDataItem({ ID: 101, ParentID: 1, Name: `Chef Antons Gumbo Mix`, UnitPrice: 21.35, AddedDate: `2011-11-11`, Discontinued: true }),
                new FoodsDataItem({ ID: 102, ParentID: 1, Name: `Grandmas Boysenberry Spread`, UnitPrice: 25, AddedDate: `2017-12-17`, Discontinued: false }),
                new FoodsDataItem({ ID: 103, ParentID: 1, Name: `Uncle Bobs Organic Dried Pears`, UnitPrice: 30, AddedDate: `2016-07-17`, Discontinued: false }),
                new FoodsDataItem({ ID: 104, ParentID: 1, Name: `Mishi Kobe Niku`, UnitPrice: 97, AddedDate: `2010-02-17`, Discontinued: true }),
                new FoodsDataItem({ ID: 105, ParentID: 1, Name: `Queso Cabrales`, UnitPrice: 21, AddedDate: `2009-11-17`, Discontinued: false }),
                new FoodsDataItem({ ID: 106, ParentID: 1, Name: `Queso Manchego La Pastora`, UnitPrice: 38, AddedDate: `2015-11-17`, Discontinued: false }),
                new FoodsDataItem({ ID: 107, ParentID: 1, Name: `Konbu`, UnitPrice: 6, AddedDate: `2025-03-17`, Discontinued: false }),
                new FoodsDataItem({ ID: 108, ParentID: 1, Name: `Tofu`, UnitPrice: 23.25, AddedDate: `2019-06-17`, Discontinued: false }),
                new FoodsDataItem({ ID: 109, ParentID: 1, Name: `Ikura`, UnitPrice: 31, AddedDate: `2010-05-17`, Discontinued: false }),
                new FoodsDataItem({ ID: 110, ParentID: 1, Name: `Pavlova`, UnitPrice: 17.45, AddedDate: `2018-03-28`, Discontinued: false }),
                new FoodsDataItem({ ID: 111, ParentID: 1, Name: `Alice Mutton`, UnitPrice: 39, AddedDate: `2015-08-17`, Discontinued: true }),
                new FoodsDataItem({ ID: 112, ParentID: 1, Name: `Carnarvon Tigers`, UnitPrice: 62.5, AddedDate: `2015-09-27`, Discontinued: false }),
                new FoodsDataItem({ ID: 113, ParentID: 1, Name: `Teatime Chocolate Biscuits`, UnitPrice: 9.2, AddedDate: `2011-03-17`, Discontinued: false }),
                new FoodsDataItem({ ID: 2, ParentID: -1, Name: `Beverages`, UnitPrice: 0, AddedDate: `2009-06-19`, Discontinued: false }),
                new FoodsDataItem({ ID: 201, ParentID: 2, Name: `Chai`, UnitPrice: 18, AddedDate: `2012-02-12`, Discontinued: false }),
                new FoodsDataItem({ ID: 202, ParentID: 2, Name: `Chang`, UnitPrice: 19, AddedDate: `2013-03-17`, Discontinued: false }),
                new FoodsDataItem({ ID: 3, ParentID: -1, Name: `Sauces`, UnitPrice: 0, AddedDate: `2009-06-19`, Discontinued: false }),
                new FoodsDataItem({ ID: 301, ParentID: 3, Name: `Aniseed Syrup`, UnitPrice: 10, AddedDate: `2016-03-17`, Discontinued: false }),
                new FoodsDataItem({ ID: 302, ParentID: 3, Name: `Chef Antons Cajun Seasoning`, UnitPrice: 22, AddedDate: `2012-03-17`, Discontinued: true }),
                new FoodsDataItem({ ID: 303, ParentID: 3, Name: `Northwoods Cranberry Sauce`, UnitPrice: 40, AddedDate: `2012-01-17`, Discontinued: false }),
                new FoodsDataItem({ ID: 304, ParentID: 3, Name: `Genen Shouyu`, UnitPrice: 15.5, AddedDate: `2010-03-17`, Discontinued: false }),
                new FoodsDataItem({ ID: 305, ParentID: 3, Name: `Sir Rodneys Marmalade`, UnitPrice: 18, AddedDate: `2015-03-17`, Discontinued: false }),
            ];
            super(...newItems.slice(0));
        }
    }
}
