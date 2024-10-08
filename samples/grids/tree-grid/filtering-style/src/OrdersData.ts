export class OrdersDataItem {
    public constructor(init: Partial<OrdersDataItem>) {
        Object.assign(this, init);
    }

    public ID: number;
    public ParentID: number;
    public Name: string;
    public Category: string;
    public OrderDate: string;
    public Units: number;
    public UnitPrice: number;
    public Price: number;
    public Delivered: boolean;

}
export class OrdersData extends Array<OrdersDataItem> {
    public constructor(items: Array<OrdersDataItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new OrdersDataItem(
                {
                    ID: 1,
                    ParentID: -1,
                    Name: `Order 1`,
                    Category: ``,
                    OrderDate: `2010-02-17`,
                    Units: 1844,
                    UnitPrice: 3.73,
                    Price: 6884.38,
                    Delivered: true
                }),
                new OrdersDataItem(
                {
                    ID: 101,
                    ParentID: 1,
                    Name: `Chocolate Chip Cookies`,
                    Category: `Cookies`,
                    OrderDate: `2010-02-17`,
                    Units: 834,
                    UnitPrice: 3.59,
                    Price: 2994.06,
                    Delivered: true
                }),
                new OrdersDataItem(
                {
                    ID: 102,
                    ParentID: 1,
                    Name: `Red Apples`,
                    Category: `Fruit`,
                    OrderDate: `2010-02-17`,
                    Units: 371,
                    UnitPrice: 3.66,
                    Price: 1357.86,
                    Delivered: true
                }),
                new OrdersDataItem(
                {
                    ID: 103,
                    ParentID: 1,
                    Name: `Butter`,
                    Category: `Diary`,
                    OrderDate: `2010-02-17`,
                    Units: 260,
                    UnitPrice: 3.45,
                    Price: 897,
                    Delivered: true
                }),
                new OrdersDataItem(
                {
                    ID: 104,
                    ParentID: 1,
                    Name: `Potato Chips`,
                    Category: `Snack`,
                    OrderDate: `2010-02-17`,
                    Units: 118,
                    UnitPrice: 1.96,
                    Price: 231.28,
                    Delivered: true
                }),
                new OrdersDataItem(
                {
                    ID: 105,
                    ParentID: 1,
                    Name: `Orange Juice`,
                    Category: `Beverages`,
                    OrderDate: `2010-02-17`,
                    Units: 261,
                    UnitPrice: 5.38,
                    Price: 1404.18,
                    Delivered: true
                }),
                new OrdersDataItem(
                {
                    ID: 2,
                    ParentID: -1,
                    Name: `Order 2`,
                    Category: ``,
                    OrderDate: `2022-05-27`,
                    Units: 1831,
                    UnitPrice: 8.23,
                    Price: 15062.77,
                    Delivered: false
                }),
                new OrdersDataItem(
                {
                    ID: 201,
                    ParentID: 2,
                    Name: `Frozen Shrimps`,
                    Category: `Seafood`,
                    OrderDate: `2022-05-27`,
                    Units: 120,
                    UnitPrice: 20.45,
                    Price: 2454,
                    Delivered: false
                }),
                new OrdersDataItem(
                {
                    ID: 202,
                    ParentID: 2,
                    Name: `Ice Tea`,
                    Category: `Beverages`,
                    OrderDate: `2022-05-27`,
                    Units: 840,
                    UnitPrice: 7,
                    Price: 5880,
                    Delivered: false
                }),
                new OrdersDataItem(
                {
                    ID: 203,
                    ParentID: 2,
                    Name: `Fresh Cheese`,
                    Category: `Diary`,
                    OrderDate: `2022-05-27`,
                    Units: 267,
                    UnitPrice: 16.55,
                    Price: 4418.85,
                    Delivered: false
                }),
                new OrdersDataItem(
                {
                    ID: 204,
                    ParentID: 2,
                    Name: `Carrots`,
                    Category: `Vegetables`,
                    OrderDate: `2022-05-27`,
                    Units: 360,
                    UnitPrice: 2.77,
                    Price: 997.2,
                    Delivered: false
                }),
                new OrdersDataItem(
                {
                    ID: 205,
                    ParentID: 2,
                    Name: `Apple Juice`,
                    Category: `Beverages`,
                    OrderDate: `2022-05-27`,
                    Units: 244,
                    UnitPrice: 5.38,
                    Price: 1312.72,
                    Delivered: false
                }),
                new OrdersDataItem(
                {
                    ID: 3,
                    ParentID: -1,
                    Name: `Order 3`,
                    Category: ``,
                    OrderDate: `2022-08-04`,
                    Units: 1972,
                    UnitPrice: 3.47,
                    Price: 6849.18,
                    Delivered: true
                }),
                new OrdersDataItem(
                {
                    ID: 301,
                    ParentID: 3,
                    Name: `Skimmed Milk 1L`,
                    Category: `Diary`,
                    OrderDate: `2022-08-04`,
                    Units: 1028,
                    UnitPrice: 3.56,
                    Price: 3659.68,
                    Delivered: true
                }),
                new OrdersDataItem(
                {
                    ID: 302,
                    ParentID: 3,
                    Name: `Bananas 5 Pack`,
                    Category: `Fruit`,
                    OrderDate: `2022-08-04`,
                    Units: 370,
                    UnitPrice: 6.36,
                    Price: 2353.2,
                    Delivered: true
                }),
                new OrdersDataItem(
                {
                    ID: 303,
                    ParentID: 3,
                    Name: `Cauliflower`,
                    Category: `Vegetables`,
                    OrderDate: `2022-08-04`,
                    Units: 283,
                    UnitPrice: 0.95,
                    Price: 268.85,
                    Delivered: true
                }),
                new OrdersDataItem(
                {
                    ID: 304,
                    ParentID: 3,
                    Name: `White Chocolate Cookies`,
                    Category: `Cookies`,
                    OrderDate: `2022-08-04`,
                    Units: 291,
                    UnitPrice: 1.95,
                    Price: 567.45,
                    Delivered: true
                }),
                new OrdersDataItem(
                {
                    ID: 4,
                    ParentID: -1,
                    Name: `Order 4`,
                    Category: ``,
                    OrderDate: `2023-01-04`,
                    Units: 1065,
                    UnitPrice: 5.56,
                    Price: 5923.5,
                    Delivered: true
                }),
                new OrdersDataItem(
                {
                    ID: 401,
                    ParentID: 4,
                    Name: `Mini Milk Chocolate Cookie Bites`,
                    Category: `Cookies`,
                    OrderDate: `2023-01-04`,
                    Units: 68,
                    UnitPrice: 2.25,
                    Price: 153,
                    Delivered: true
                }),
                new OrdersDataItem(
                {
                    ID: 402,
                    ParentID: 4,
                    Name: `Wild Salmon Fillets`,
                    Category: `Seafood`,
                    OrderDate: `2023-01-04`,
                    Units: 320,
                    UnitPrice: 16.15,
                    Price: 5168,
                    Delivered: true
                }),
                new OrdersDataItem(
                {
                    ID: 403,
                    ParentID: 4,
                    Name: `Diet Lemonade`,
                    Category: `Beverages`,
                    OrderDate: `2023-01-04`,
                    Units: 437,
                    UnitPrice: 0.5,
                    Price: 218.5,
                    Delivered: true
                }),
                new OrdersDataItem(
                {
                    ID: 404,
                    ParentID: 4,
                    Name: `Potatoes`,
                    Category: `Vegetables`,
                    OrderDate: `2023-01-04`,
                    Units: 240,
                    UnitPrice: 1.6,
                    Price: 384,
                    Delivered: true
                }),
            ];
            super(...newItems.slice(0));
        }
    }
}
