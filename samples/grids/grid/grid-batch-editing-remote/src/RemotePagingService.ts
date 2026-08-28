import { ProductsWithPageResponseModel } from './ProductsWithPageResponseModel';

// Simulated remote data - in a real app, this would come from an API
const ALL_PRODUCTS = [
    { ProductID: 1, ProductName: 'Chai', SupplierID: 1, CategoryID: 1, QuantityPerUnit: '10 boxes x 20 bags', UnitPrice: 18, UnitsInStock: 39, UnitsOnOrder: 30, ReorderLevel: 10, Discontinued: false },
    { ProductID: 2, ProductName: 'Chang', SupplierID: 1, CategoryID: 1, QuantityPerUnit: '24 - 12 oz bottles', UnitPrice: 19, UnitsInStock: 17, UnitsOnOrder: 40, ReorderLevel: 25, Discontinued: true },
    { ProductID: 3, ProductName: 'Aniseed Syrup', SupplierID: 1, CategoryID: 2, QuantityPerUnit: '12 - 550 ml bottles', UnitPrice: 10, UnitsInStock: 13, UnitsOnOrder: 70, ReorderLevel: 25, Discontinued: false },
    { ProductID: 4, ProductName: 'Chef Anton\'s Cajun Seasoning', SupplierID: 2, CategoryID: 2, QuantityPerUnit: '48 - 6 oz jars', UnitPrice: 22, UnitsInStock: 53, UnitsOnOrder: 0, ReorderLevel: 0, Discontinued: false },
    { ProductID: 5, ProductName: 'Chef Anton\'s Gumbo Mix', SupplierID: 2, CategoryID: 2, QuantityPerUnit: '36 boxes', UnitPrice: 21.35, UnitsInStock: 0, UnitsOnOrder: 0, ReorderLevel: 0, Discontinued: true },
    { ProductID: 6, ProductName: 'Grandma\'s Boysenberry Spread', SupplierID: 3, CategoryID: 2, QuantityPerUnit: '12 - 8 oz jars', UnitPrice: 25, UnitsInStock: 120, UnitsOnOrder: 0, ReorderLevel: 25, Discontinued: false },
    { ProductID: 7, ProductName: 'Uncle Bob\'s Organic Dried Pears', SupplierID: 3, CategoryID: 7, QuantityPerUnit: '12 - 1 lb pkgs.', UnitPrice: 30, UnitsInStock: 15, UnitsOnOrder: 0, ReorderLevel: 10, Discontinued: false },
    { ProductID: 8, ProductName: 'Northwoods Cranberry Sauce', SupplierID: 3, CategoryID: 2, QuantityPerUnit: '12 - 12 oz jars', UnitPrice: 40, UnitsInStock: 6, UnitsOnOrder: 0, ReorderLevel: 0, Discontinued: false },
    { ProductID: 9, ProductName: 'Mishi Kobe Niku', SupplierID: 4, CategoryID: 6, QuantityPerUnit: '18 - 500 g pkgs.', UnitPrice: 97, UnitsInStock: 29, UnitsOnOrder: 0, ReorderLevel: 0, Discontinued: true },
    { ProductID: 10, ProductName: 'Ikura', SupplierID: 4, CategoryID: 8, QuantityPerUnit: '12 - 200 ml jars', UnitPrice: 31, UnitsInStock: 31, UnitsOnOrder: 0, ReorderLevel: 0, Discontinued: false },
    { ProductID: 11, ProductName: 'Queso Cabrales', SupplierID: 5, CategoryID: 4, QuantityPerUnit: '1 kg pkg.', UnitPrice: 21, UnitsInStock: 22, UnitsOnOrder: 30, ReorderLevel: 30, Discontinued: false },
    { ProductID: 12, ProductName: 'Queso Manchego La Pastora', SupplierID: 5, CategoryID: 4, QuantityPerUnit: '10 - 500 g pkgs.', UnitPrice: 38, UnitsInStock: 86, UnitsOnOrder: 0, ReorderLevel: 0, Discontinued: false },
    { ProductID: 13, ProductName: 'Konbu', SupplierID: 6, CategoryID: 8, QuantityPerUnit: '2 kg box', UnitPrice: 6, UnitsInStock: 24, UnitsOnOrder: 0, ReorderLevel: 5, Discontinued: false },
    { ProductID: 14, ProductName: 'Tofu', SupplierID: 6, CategoryID: 7, QuantityPerUnit: '40 - 100 g pkgs.', UnitPrice: 23.25, UnitsInStock: 35, UnitsOnOrder: 0, ReorderLevel: 0, Discontinued: false },
    { ProductID: 15, ProductName: 'Genen Shouyu', SupplierID: 6, CategoryID: 2, QuantityPerUnit: '24 - 250 ml bottles', UnitPrice: 15.5, UnitsInStock: 39, UnitsOnOrder: 0, ReorderLevel: 5, Discontinued: false },
    { ProductID: 16, ProductName: 'Pavlova', SupplierID: 7, CategoryID: 3, QuantityPerUnit: '32 - 500 g boxes', UnitPrice: 17.45, UnitsInStock: 29, UnitsOnOrder: 0, ReorderLevel: 10, Discontinued: false },
    { ProductID: 17, ProductName: 'Alice Mutton', SupplierID: 7, CategoryID: 6, QuantityPerUnit: '20 - 1 kg tins', UnitPrice: 39, UnitsInStock: 0, UnitsOnOrder: 0, ReorderLevel: 0, Discontinued: true },
    { ProductID: 18, ProductName: 'Carnarvon Tigers', SupplierID: 7, CategoryID: 8, QuantityPerUnit: '16 kg pkg.', UnitPrice: 62.5, UnitsInStock: 42, UnitsOnOrder: 0, ReorderLevel: 0, Discontinued: false },
    { ProductID: 19, ProductName: 'Teatime Chocolate Biscuits', SupplierID: 8, CategoryID: 3, QuantityPerUnit: '10 boxes x 12 pieces', UnitPrice: 9.2, UnitsInStock: 25, UnitsOnOrder: 0, ReorderLevel: 5, Discontinued: false },
    { ProductID: 20, ProductName: 'Sir Rodney\'s Marmalade', SupplierID: 8, CategoryID: 3, QuantityPerUnit: '30 gift boxes', UnitPrice: 81, UnitsInStock: 40, UnitsOnOrder: 0, ReorderLevel: 0, Discontinued: false },
];

export class RemotePagingService {
    private static delay(ms: number): Promise<void> {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    public static async getDataWithPaging(pageIndex: number = 0, pageSize: number = 10): Promise<ProductsWithPageResponseModel> {
        // Simulate network delay
        await this.delay(300);

        const totalRecords = ALL_PRODUCTS.length;
        const totalPages = Math.ceil(totalRecords / pageSize);
        const startIndex = pageIndex * pageSize;
        const endIndex = Math.min(startIndex + pageSize, totalRecords);
        const items = ALL_PRODUCTS.slice(startIndex, endIndex);

        return {
            items,
            totalRecordsCount: totalRecords,
            pageSize,
            pageNumber: pageIndex,
            totalPages
        };
    }

    public static getTotalRecords(): number {
        return ALL_PRODUCTS.length;
    }
}
