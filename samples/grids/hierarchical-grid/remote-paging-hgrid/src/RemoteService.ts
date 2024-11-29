const BASE_URL = `https://data-northwind.indigo.design/`;
const CUSTOMERS_URL = `${BASE_URL}Customers/GetCustomersWithPage`;

export class RemoteService {

    public static getCustomersDataWithPaging(pageIndex?: number, pageSize?: number) {
        return fetch(this.buildUrl(CUSTOMERS_URL, pageIndex, pageSize))
        .then((result) => result.json());
    }

    public static getHierarchyDataById(parentEntityName: string, parentId: string, childEntityName: string) {
        return fetch(`${BASE_URL}${parentEntityName}/${parentId}/${childEntityName}`)
        .then((result) => result.json());
    }

    private static buildUrl(baseUrl: string, pageIndex?: number, pageSize?: number) {
        let qS = "";
        if (baseUrl) {
                qS += `${baseUrl}`;
        }

        // Add pageIndex and size to the query string if they are defined
        if (pageIndex !== undefined) {
            qS += `?pageIndex=${pageIndex}`;
            if (pageSize !== undefined) {
                qS += `&size=${pageSize}`;
            }
        } else if (pageSize !== undefined) {
            qS += `?perPage=${pageSize}`;
        }

        return `${qS}`;
    }
}