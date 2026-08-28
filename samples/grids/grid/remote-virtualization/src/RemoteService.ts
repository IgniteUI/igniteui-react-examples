const DATA_URL = 'https://services.odata.org/V4/Northwind/Northwind.svc/Products';

interface CachedDataItem {
  emptyRec?: boolean;
  [key: string]: any;
}

interface ODataResponse {
  '@odata.count': number;
  value: any[];
}

export interface DataResult {
  data: any[];
  totalCount: number;
  fromCache: boolean;
}

export class RemoteService {
  private static cachedData: CachedDataItem[] = [];
  private static totalCount: number = 0;
  private static isInitialized: boolean = false;
  private static currentAbortController: AbortController | null = null;
  private static pendingRequests: Map<string, Promise<any[]>> = new Map();

  /**
   * Gets data with immediate cache response pattern.
   * Returns cached data immediately for fast UI feedback, then fetches fresh data
   * and calls onFreshData callback when it arrives.
   */
  public static getData(
    skip: number = 0,
    take: number = 50,
    onFreshData?: (result: DataResult) => void
  ): DataResult {
    if (skip < 0 || take <= 0) {
      console.warn('Invalid parameters: skip must be >= 0 and take must be > 0');
      return { data: [], totalCount: 0, fromCache: false };
    }

    // If data is fully cached, return immediately without network request
    if (this.isInitialized && this.isRangeFullyCached(skip, take)) {
      return {
        data: this.cachedData.slice(skip, skip + take),
        totalCount: this.totalCount,
        fromCache: true
      };
    }

    // Return cached data immediately (even if partial/stale) for fast UI feedback
    const cachedResult: DataResult = {
      data: this.isInitialized ? this.cachedData.slice(skip, skip + take) : [],
      totalCount: this.totalCount,
      fromCache: true
    };

    // Cancel any pending request before starting a new one
    this.cancelPendingRequest();

    // Fetch fresh data in background
    this.fetchAndCacheData(skip, take).then(freshData => {
      if (onFreshData && freshData.length > 0) {
        onFreshData({
          data: freshData,
          totalCount: this.totalCount,
          fromCache: false
        });
      }
    });

    return cachedResult;
  }

  public static getTotalCount(): number {
    return this.totalCount;
  }

  public static clearCache(): void {
    this.cancelPendingRequest();
    this.cachedData = [];
    this.totalCount = 0;
    this.isInitialized = false;
    this.pendingRequests.clear();
  }

  public static cancelPendingRequest(): void {
    if (this.currentAbortController) {
      this.currentAbortController.abort();
      this.currentAbortController = null;
    }
  }

  private static isRangeFullyCached(skip: number, take: number): boolean {
    if (!this.isInitialized || this.cachedData.length === 0) {
      return false;
    }
    const end = Math.min(skip + take, this.cachedData.length);
    for (let i = skip; i < end; i++) {
      if (this.cachedData[i]?.emptyRec === true) {
        return false;
      }
    }
    return true;
  }

  private static fetchAndCacheData(skip: number, take: number): Promise<any[]> {
    const requestKey = `${skip}-${take}`;

    // Check if there's already a pending request for the same range
    const existingRequest = this.pendingRequests.get(requestKey);
    if (existingRequest) {
      return existingRequest;
    }

    // Create new AbortController for this request
    this.currentAbortController = new AbortController();
    const { signal } = this.currentAbortController;

    const url = `${DATA_URL}?$count=true&$skip=${skip}&$top=${take}`;

    const requestPromise = fetch(url, { signal })
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

        if (!this.isInitialized) {
          if (typeof json['@odata.count'] !== 'number') {
            throw new Error('Invalid response: missing or invalid count');
          }
          this.totalCount = json['@odata.count'];
          // Create cache array with unique empty objects to avoid reference issues
          this.cachedData = Array.from({ length: this.totalCount }, () => ({ emptyRec: true }));
          this.isInitialized = true;
        }

        // Cache the fetched data
        for (let i = 0; i < json.value.length; i++) {
          const cacheIndex = skip + i;
          if (cacheIndex < this.cachedData.length) {
            this.cachedData[cacheIndex] = json.value[i];
          }
        }

        this.pendingRequests.delete(requestKey);
        return this.cachedData.slice(skip, skip + take);
      })
      .catch(error => {
        this.pendingRequests.delete(requestKey);

        // Don't log abort errors - they're expected when cancelling
        if (error.name === 'AbortError') {
          return [];
        }

        console.error(`Error fetching data (skip: ${skip}, take: ${take}):`, error);
        // Return cached data if available, otherwise empty array
        if (this.isInitialized) {
          return this.cachedData.slice(skip, skip + take);
        }
        return [];
      });

    this.pendingRequests.set(requestKey, requestPromise);
    return requestPromise;
  }
}
