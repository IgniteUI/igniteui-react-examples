//begin async data
export class MultipleStocks extends Array<Array<StockItem>> {
    public static async fetch(): Promise<MultipleStocks> {
        const dataSources: any[] = [
          //await this.getAmazonStock(),
          await this.getGoogleStock(),
          await this.getAmazonStock(),
          //await this.getTeslaStock()
        ];
        return new Promise<MultipleStocks>((resolve, reject) => {
        resolve(dataSources);
        });
    }

    /** gets Amazon stock OHLC prices from a .JSON file */
    public static async getAmazonStock(): Promise<StockItem[]> {
      let url = "https://static.infragistics.com/xplatform/data/stocks/stockAmazon.json";
      let response = await fetch(url);
      let jsonData = await response.json();
      let stockData = this.convertData(jsonData);
      // setting data intent for Series Title, e.g. FinancialChart usage
      (stockData as any).__dataIntents = {
        close: ["SeriesTitle/Amazon"]
      };
      // console.log("fetchAmazonStock: ", stockData.length);

      return new Promise<StockItem[]>((resolve, reject) => {
        resolve(stockData);
      });
    }

    /** gets Tesla stock OHLC prices from a .JSON file */
    public static async getTeslaStock(): Promise<StockItem[]> {
      let url = "https://static.infragistics.com/xplatform/data/stocks/stockTesla.json";
      let response = await fetch(url);
      let jsonData = await response.json();
      let stockData = this.convertData(jsonData);
      // setting data intent for Series Title, e.g. FinancialChart usage
      (stockData as any).__dataIntents = {
        close: ["SeriesTitle/Tesla"]
      };
      return new Promise<StockItem[]>((resolve, reject) => {
        resolve(stockData);
      });
    }

    /** gets Microsoft stock OHLC prices from a .JSON file */
    public static async getMicrosoftStock(): Promise<StockItem[]> {
      let url = "https://static.infragistics.com/xplatform/data/stocks/stockMicrosoft.json";
      let response = await fetch(url);
      let jsonData = await response.json();
      let stockData = this.convertData(jsonData);
      // setting data intent for Series Title, e.g. FinancialChart usage
      (stockData as any).__dataIntents = {
        close: ["SeriesTitle/Microsoft"]
      };
      return new Promise<StockItem[]>((resolve, reject) => {
        resolve(stockData);
      });
    }

    /** gets Google stock OHLC prices from a .JSON file */
    public static async getGoogleStock(): Promise<StockItem[]> {
      let url = "https://static.infragistics.com/xplatform/data/stocks/stockGoogle.json";
      let response = await fetch(url);
      let jsonData = await response.json();
      let stockData = this.convertData(jsonData);
      // setting data intent for Series Title, e.g. FinancialChart usage
      (stockData as any).__dataIntents = {
        close: ["SeriesTitle/Google"]
      };
      return new Promise<StockItem[]>((resolve, reject) => {
        resolve(stockData);
      });
    }

    public static convertData(jsonData: any[]): StockItem[] {
      let stockItems: StockItem[] = [];

      for (let json of jsonData) {
        let parts = json.date.split("-"); // "2020-01-01"
        let item = new StockItem();
        item.date = new Date(parts[0], parts[1], parts[2],13,0,0);
        item.open = json.open;
        item.high = json.high;
        item.low = json.low;
        item.close = json.close;
        item.volume = json.volume;
        stockItems.push(item);

      }

      return stockItems;
    }
  }

  export class StockItem {
    public open?: number;
    public close?: number;
    public high?: number;
    public low?: number;
    public volume?: number;

    public date?: Date;

  }
//end async data