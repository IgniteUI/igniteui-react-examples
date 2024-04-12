import { DATA } from "./data";

export async function getData(dataState?: any): Promise<any[]> {
    const key = dataState.key as "Customers" | "Orders" | "Order_Details";
    let resultData: any[] = DATA[key];

    if (!dataState.rootLevel) {
        resultData = resultData.filter((record: any) => record[dataState.parentKey] === dataState.parentID);
    } 

    return new Promise<any[]>((resolve) => {
        setTimeout(() => {
            resolve(resultData);
        }, 1000);
    });
}