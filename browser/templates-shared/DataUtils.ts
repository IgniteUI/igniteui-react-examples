export default class DataUtils {

    public static getPublicURL(): string {
        let path = "";
        // console.log("DataUtils NODE_ENV: " + process.env.NODE_ENV);
        if (process.env.NODE_ENV === "development") {
            path = "https://static.infragistics.com/xplatform-staging";
        } else {
            path = "https://static.infragistics.com/xplatform";
        }
        return path;
    }

    public static stringEndsWith(str: string, check: string): boolean {
        let ind = str.lastIndexOf(check);
        return ind >= 0 && ind === str.length - check.length;
    }
}