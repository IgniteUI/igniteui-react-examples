const URL = `https://services.odata.org/V4/Northwind/Northwind.svc/`;

export function getData(dataState?: any): any {
    return fetch(buildUrl(dataState))
        .then((result) => result.json())
        .then((data) => data["value"]);
}

function buildUrl(dataState: any) {
    let qS = "";
    if (dataState) {
        qS += `${dataState.key}?`;

        if (!dataState.rootLevel) {
            if (typeof dataState.parentID === "string") {
                qS += `$filter=${dataState.parentKey} eq '${dataState.parentID}'`;
            } else {
                qS += `$filter=${dataState.parentKey} eq ${dataState.parentID}`;
            }
        }
    }
    return `${URL}${qS}`;
}