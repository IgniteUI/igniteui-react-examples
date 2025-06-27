const URL = `https://data-northwind.indigo.design/`;

export async function getData(dataState: any): Promise<any> {
    const response = await fetch(buildUrl(dataState));
    const data = await response.json();
    return data;
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