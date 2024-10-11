const URL = `https://data-northwind.indigo.design/`;

export class RemoteService {

public getData(dataState: any, index?: number, perPage?: number): any {
    return fetch(this.buildUrl(dataState, index, perPage))
        .then((result) => result.json());
}

private buildUrl(dataState: any, index?: number, perPage?: number) {
    let qS = "";
    if (dataState) {
            qS += `${dataState.key}`;
    }

    // Add index and perPage to the query string if they are defined
    if (index !== undefined) {
        qS += `?index=${index}`;
        if (perPage !== undefined) {
            qS += `&perPage=${perPage}`;
        }
    } else if (perPage !== undefined) {
        qS += `?perPage=${perPage}`;
    }

    return `${URL}${qS}`;
}

public getDataLength(dataState: any): Promise<number> {
    return fetch(this.buildUrl(dataState))
        .then((result) => result.json())
        .then((data) => data.length);
}
}