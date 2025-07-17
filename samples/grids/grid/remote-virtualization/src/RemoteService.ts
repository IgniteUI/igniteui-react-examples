const DATA_URL = 'https://services.odata.org/V4/Northwind/Northwind.svc/Products';

export class RemoteService {
  private static cachedData: any[] = [];
  private static totalCount: number = 0;

  public static async getData(skip: number = 0, take: number = 50): Promise<any[]> {
    if (this.cachedData.length === 0) {
      const res = await fetch(`${DATA_URL}?$count=true&$skip=0&$top=1`);
      const json = await res.json();
      this.totalCount = json['@odata.count'];
      this.cachedData = new Array(this.totalCount).fill({ emptyRec: true });
    }

    const slice = this.cachedData.slice(skip, skip + take);
    const allLoaded = slice.every(row => row.emptyRec !== true);
    if (allLoaded) return slice;

    const res = await fetch(`${DATA_URL}?$count=true&$skip=${skip}&$top=${take}`);
    const json = await res.json();

    for (let i = 0; i < json.value.length; i++) {
      this.cachedData[skip + i] = json.value[i];
    }

    return this.cachedData.slice(skip, skip + take);
  }

  public static getTotalCount(): number {
    return this.totalCount;
  }
}
