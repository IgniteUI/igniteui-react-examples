const DATA_URL: string =
  "https://services.odata.org/V4/Northwind/Northwind.svc/Products";

const cachedData = <any>[];
let prevRequestChunk: number = 0;

export async function loadDataForPage(
  page: number,
  pageSize: number,
  callback?: (args: any) => void
) : Promise<void>{
  const url = buildDataUrl(page, pageSize);
  const response = await fetch(url);
  const data = await response.json();
  const startIndex = (page - 1) * pageSize;
  updateData(data, startIndex);
  callback({data});
}

export function getCachedData(virtualizationArgs: {startIndex: number, chunkSize: number}) {
    const virtArgsEndIndex = virtualizationArgs.startIndex + virtualizationArgs.chunkSize;
        let data = [];
        if (virtArgsEndIndex > cachedData.length) {
            data = cachedData.slice(cachedData.length - prevRequestChunk + 1);
        } else {
            data = cachedData.slice(virtualizationArgs.startIndex, virtArgsEndIndex);
            prevRequestChunk = virtualizationArgs.chunkSize;
        }
        return data;
}

function buildDataUrl(page: number, pageSize: number): string {
  let baseQueryString = `${DATA_URL}?$count=true&`;
  const skip = (page - 1) * pageSize;
  const pageQuery = `$skip=${skip}&$top=${pageSize}`;
  baseQueryString += pageQuery;
  return baseQueryString;
}

function updateData(data: any, startIndex: number) {
    for(let i=0; i< data.value.length; i++) {
        cachedData[i+startIndex] = data.value[i];
    }
}

