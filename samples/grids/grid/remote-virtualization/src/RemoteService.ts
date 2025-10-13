const DATA_URL = 'https://services.odata.org/V4/Northwind/Northwind.svc/Products';

interface CachedDataItem {
  emptyRec?: boolean;
  [key: string]: any;
}

interface ODataResponse {
  '@odata.count': number;
  value: any[];
}

export class RemoteService {
  private static cachedData: CachedDataItem[] = [];
  private static totalCount: number = 0;
  private static isInitialized: boolean = false;

  public static getData(skip: number = 0, take: number = 50): Promise<any[]> {
    try {
      if (skip < 0 || take <= 0) {
        console.warn('Invalid parameters: skip must be >= 0 and take must be > 0');
        return Promise.resolve([]);
      }

      if (!this.isInitialized) {
        return this.initializeCache().then(() => this.fetchDataFromCache(skip, take));
      }

      return this.fetchDataFromCache(skip, take);
      
    } catch (error) {
      console.error('Error in getData:', error);
      return Promise.resolve([]);
    }
  }

  public static getTotalCount(): number {
    return this.totalCount;
  }

  public static clearCache(): void {
    this.cachedData = [];
    this.totalCount = 0;
    this.isInitialized = false;
  }

  private static fetchDataFromCache(skip: number, take: number): Promise<any[]> {
    const slice = this.cachedData.slice(skip, skip + take);
    const allLoaded = slice.every(row => row.emptyRec !== true);
    
    if (allLoaded) {
      return Promise.resolve(slice);
    }
    return this.fetchAndCacheData(skip, take);
  }

  private static initializeCache(): Promise<void> {
    const url = `${DATA_URL}?$count=true&$skip=0&$top=1`;
    
    return fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((json: ODataResponse) => {
        if (typeof json['@odata.count'] !== 'number') {
          throw new Error('Invalid response: missing or invalid count');
        }

        this.totalCount = json['@odata.count'];
        this.cachedData = new Array(this.totalCount).fill({ emptyRec: true });
        this.isInitialized = true;
      })
      .catch(error => {
        console.error('Error initializing cache:', error);
        this.totalCount = 0;
        this.cachedData = [];
        this.isInitialized = false;
        throw error;
      });
  }

  private static fetchAndCacheData(skip: number, take: number): Promise<any[]> {
    const url = `${DATA_URL}?$count=true&$skip=${skip}&$top=${take}`;
    
    return fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((json: ODataResponse) => {
        if (!Array.isArray(json.value)) {
          throw new Error('Invalid response: missing or invalid data array');
        }

        // Cache the fetched data
        for (let i = 0; i < json.value.length; i++) {
          const cacheIndex = skip + i;
          if (cacheIndex < this.cachedData.length) {
            this.cachedData[cacheIndex] = json.value[i];
          }
        }

        return this.cachedData.slice(skip, skip + take);
      })
      .catch(error => {
        console.error(`Error fetching data (skip: ${skip}, take: ${take}):`, error);
        return this.cachedData.slice(skip, skip + take);
      });
  }
}
