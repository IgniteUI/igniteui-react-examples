const URL = `https://data-northwind.indigo.design/`;

export function getData(dataState: any): any {
    return fetch(buildUrl(dataState))
        .then((result) => result.json());
}

function buildUrl(dataState: any) {
    let qS = "";
    if (dataState) {
        if (dataState.rootLevel) {
            qS += `${dataState.key}`;
        } else {
            qS += `${dataState.parentKey}/${dataState.parentID}/${dataState.key}`;
        }
    }
    return `${URL}${qS}`;
}