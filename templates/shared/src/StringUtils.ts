

export default class StringUtils {

    public static stringEndsWith(str: string, check: string): boolean {
        let ind = str.lastIndexOf(check);
        return ind >= 0 && ind === str.length - check.length;
    }
}
