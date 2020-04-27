
class Transformer2 {

    public static repoRootName = "igniteui-react-examples";

    public getRelative(filePath: string): string {
        if (filePath.indexOf(repoRootName) > -1) {
            return filePath.split(repoRootName)[1];
        }
        console.log("failed on getRelative " + filePath);
        return filePath;
    }

    public test() {
        console.log("Transformer2 test ");
    }
}