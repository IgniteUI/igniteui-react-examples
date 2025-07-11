const CUSTOMERS_URL = `https://data-northwind.indigo.design/Customers/GetCustomersWithPage`;

export class RemoteService {
  public static getDataWithFilter(filterText: string = '') {
    const url = this.buildUrl(CUSTOMERS_URL, filterText);
    return fetch(url).then((res) => res.json());
  }

  private static buildUrl(baseUrl: string, filterText?: string) {
    const params = new URLSearchParams();

    if (filterText) {
      params.append("name", filterText); // Adjust "name" if your backend expects a different filter key
    }

    return `${baseUrl}?${params.toString()}`;
  }
}
