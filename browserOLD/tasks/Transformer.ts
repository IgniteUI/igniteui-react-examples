
export class Transformer {

    public static repoRootName = "igniteui-react-examples";

    public getRelative(filePath: string): string {
        if (filePath.indexOf(Transformer.repoRootName) > -1) {
            return filePath.split(Transformer.repoRootName)[1];
        }
        console.log("failed on getRelative " + filePath);
        return filePath;
    }

    public test(filePath: string) {
        console.log("Transformer test " + filePath);
    }
}