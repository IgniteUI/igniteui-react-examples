let transFS = require('fs.extra');

// var platform = "React";
// var igConfig = require('./gulp-config.js')[platform];

var igConfig = require('./gulp-config.js')

// function log(msg) {
//     console.log('Transformer.ts ' + msg);
// }
// log('loaded');

class PackageJson {
    public name?: string;
    public description?: string;
    public author?: string;
    public homepage?: string;
    public version?: string;
    public private?: boolean;
    public scripts: any;
    public dependencies: any;
    public devDependencies: any;
    public browserslist?: string[];
}

class PackageDependency {
    public name: string;
    public version: string;

    public samples?: SampleInfo[];

    constructor() {
        this.samples = [];
    }

    public toString() : string {
        return '"' + this.name + `": "` + this.version + '"';
    }
}

// this class provides information about a sample that is implemented in /samples folder
class SampleInfo {
    public componentGroup: string;     // maps
    public componentFolder: string;    // geo-map
    public componentName: string;      // Geo Map
    public sampleDirOnDisk: string;    // C:\repo\igniteui-react-examples\samples\maps\geo-map\binding-csv-points\
    public sampleDirRelative: string;  // /samples/maps/geo-map/binding-csv-points/
    public sampleRoute: string;        // /maps/geo-map/binding-csv-points/
    public sampleFolder: string;       // binding-csv-points
    public sampleDisplayName: string;  // Binding Data CSV
    public sampleFileName: string;     // MapBindingDataCSV.tsx
    public sampleFilePath: string;     // /samples/maps/geo-map/binding-csv-points//src/MapBindingDataCSV.tsx
    public sampleSourcePath: string;   // /src/MapBindingDataCSV.tsx
    public sampleSourceCode: string;   // source code from /src/MapBindingDataCSV.tsx file
    public sampleReadMe: string;       // content of ReadMe.md file generated for /samples/maps/geo-map/binding-csv-points/
    public sampleFiles: string[];      // relative path to all file in sample folder: /samples/maps/geo-map/binding-csv-points/
    public docsUrl: string             // https://infragistics.com/Reactsite/components/geo-map.html
    public sandboxUrlView: string;     // https://codesandbox.io/embed/github/IgniteUI/igniteui-react-examples/tree/master/samples/maps/geo-map/binding-csv-points
    public sandboxUrlEdit: string;     //     https://codesandbox.io/s/github/IgniteUI/igniteui-react-examples/tree/master/samples/maps/geo-map/binding-csv-points

    public packageFileContent: PackageJson;
    public packageDependencies: PackageDependency[];

    constructor() {
        this.sampleSourceCode = 'let str = "TODO";';
        this.sampleFiles = [];
        this.packageDependencies = [];
    }
}

class Transformer {

    public static getDependencies(sampleInfo: SampleInfo): PackageDependency[] {
        let dependencies: PackageDependency[] = [];
        let packageJson = sampleInfo.packageFileContent;
        if (packageJson && packageJson.dependencies) {
            dependencies = [];

            let packages = packageJson.dependencies;

            for (var name in packages) {
                if (packages.hasOwnProperty(name)) {
                    let dependency = new PackageDependency();
                    dependency.name = name;
                    dependency.version = packages[name];
                    dependencies.push(dependency);
                    console.log(name + ": " + packages[name]);
                }
            }
        }
        return dependencies;
    }

    public static sort(samples: SampleInfo[]): void {
        samples.sort((a, b) => { return a.sampleDirOnDisk > b.sampleDirOnDisk ? 1 : -1});
    }

    public static printNames(samples: SampleInfo[]): void {
        for (const info of samples) {
            console.log(info.sampleDirRelative + " => " + info.sampleDisplayName);
        }
    }
    public static printRoutes(samples: SampleInfo[]): void {
        for (const info of samples) {
            console.log(info.sampleDirRelative + " => " + info.sampleRoute);
        }
    }
    public static printUrls(samples: SampleInfo[]): void {
        for (const info of samples) {
            console.log(info.sampleDirRelative + " => " + info.sandboxUrlEdit);
        }
    }


    public static process(samples: SampleInfo[]): void {

        for (const info of samples) {
            let sampleDirectory = info.sampleDirOnDisk;

            // info.packageDependencies = this.getDependencies(info);

            // ../samples/maps/geo-map/binding-csv-points
            let relativePath = this.getRelative(sampleDirectory);
            // .., samples, maps, geo-map, binding-csv-points
            let folders = relativePath.split('/');

            if (folders.length > 2) info.componentGroup = folders[2];
            if (folders.length > 3) info.componentFolder = folders[3];
            if (folders.length > 4) info.sampleFolder = folders[4];

            info.componentName = StringUtils.toTitleCase(info.componentFolder, '-');

            info.sampleFiles = info.sampleFiles;
            // info.sampleDirOnDisk = sampleDirectory;
            info.sampleDirRelative = relativePath;
            // info.sampleRoute = "/" +  info.componentGroup + "/" + info.componentFolder + "/" + info.sampleFolder;

            let sampleFileNames = [];
            for (const filePath of info.sampleFiles) {
                if (StringUtils.includes(filePath, igConfig.samplesFileExtension) &&
                    StringUtils.excludes(filePath, igConfig.samplesFileExclusions)) {
                    sampleFileNames.push(filePath);
                    // console.log(filePath);
                    // && !filePath.includes("index.tsx")
                    // info.sampleFilePath = filePath;
                    // info.sampleFileName = this.getFileName(filePath);;
                }
            }

            if (sampleFileNames.length === 0) {
                console.log("ERROR Transformer cannot find any " + igConfig.samplesFileExtension + " files for sample name");
            } else if (sampleFileNames.length > 1) {
                console.log("ERROR Transformer cannot decide which " + igConfig.samplesFileExtension + " file to use for sample name: ");
                console.log(" - " + sampleFileNames.join("\n - "));
            } else {
                info.sampleFilePath = sampleFileNames[0];
                info.sampleFileName = this.getFileName(info.sampleFilePath);
                info.sampleSourcePath = "./src" + info.sampleFileName;
                info.sampleSourceCode = transFS.readFileSync(info.sampleFilePath, "utf8");

                info.sampleDisplayName = StringUtils.splitCamel(info.sampleFileName)
                info.sampleDisplayName = StringUtils.replace(info.sampleDisplayName, igConfig.samplesFileExtension, "");

                info.sandboxUrlView = this.getSandboxUrl(info, igConfig.sandboxUrlView);
                info.sandboxUrlEdit = this.getSandboxUrl(info, igConfig.sandboxUrlEdit);

                info.docsUrl = this.getDocsUrl(info);
                // console.log("SAMPLE " + info.sampleFilePath);
                console.log("SAMPLE " + info.sampleFilePath + " => " + info.sampleDisplayName);
            }

            // console.log(info.sampleDirRelative + " => " + info.sampleRoute + " => " + info.sampleDisplayName);

        }
    }


    public static getSandboxUrl(sampleInfo: SampleInfo, sandboxUrlFormat: string): string {
        let url = sandboxUrlFormat + "";

        url = StringUtils.replace(url, "{sandboxUrlOptions}", igConfig.sandboxUrlOptions);
        url = StringUtils.replace(url, "{repositoryPath}", igConfig.repositoryPath);
        url = StringUtils.replace(url, "{repositoryOrg}", igConfig.repositoryOrg);
        url = StringUtils.replace(url, "{repositoryName}", igConfig.repositoryName);
        url = StringUtils.replace(url, "{componentGroup}", sampleInfo.componentGroup);
        url = StringUtils.replace(url, "{componentFolder}", sampleInfo.componentFolder);
        url = StringUtils.replace(url, "{sampleFolder}", sampleInfo.sampleFolder);
        url = StringUtils.replace(url, "{sampleFile}", sampleInfo.sampleFileName);

        return url;
    }

    public static getDocsUrl(sampleInfo: SampleInfo): string {
        let url = igConfig.docsUrl + "";

        url = StringUtils.replace(url, "{platformName}", igConfig.platformName);
        url = StringUtils.replace(url, "{componentFolder}", sampleInfo.componentFolder);

        return url;
    }

    public static verifyPackage(browsersPackage: PackageJson, templatePackage: PackageJson): string[] {

        let errors: string[] = [];

        // if (browsersPackage.author !== templatePackage.author)
        // errors.push("author", "does not match author in browser's package.json");

        // checking if the template has same dependencies as the browser
        for (var name in browsersPackage.dependencies) {
            if (templatePackage.dependencies.hasOwnProperty(name) &&
                browsersPackage.dependencies.hasOwnProperty(name)) {
                let browsersDep = browsersPackage.dependencies[name];
                let templateDep = templatePackage.dependencies[name];
                if (templateDep !== browsersDep) {
                    errors.push("- template's package.json has \"" + name + "\" with \"" + templateDep + "\" while \"" + browsersDep + "\" is in browser's package.json");
                }
            }
        }

        // checking if the browser has same dependencies as the template
        // for (var name in templatePackage.dependencies) {
        //     if (templatePackage.dependencies.hasOwnProperty(name) &&
        //         browsersPackage.dependencies.hasOwnProperty(name)) {
        //         let browsersDep = browsersPackage.dependencies[name];
        //         let templateDep = templatePackage.dependencies[name];
        //         if (templateDep !== browsersDep) {
        //             errors.push("- browser's package.json has \"" + name + "\" with \"" + browsersDep + "\" while \"" + templateDep + "\" in template's package.json");
        //         }
        //     }
        // }

        if (errors.length > 0) {
            console.log("ERRORS found in package.json files: \n" + errors.join('\n'))
        }

        return errors;
    }

    // gets updated package.json file for a sample using a template
    public static getPackage(sample: SampleInfo, temptePackage: PackageJson): string {
        let samplePackage = sample.packageFileContent;

        // samplePackage.name = temptePackage.name;
        // samplePackage.description = temptePackage.description;
        samplePackage.author = temptePackage.author;
        samplePackage.homepage = temptePackage.homepage;
        samplePackage.version = temptePackage.version;
        samplePackage.private = temptePackage.private;
        samplePackage.browserslist = temptePackage.browserslist;

        samplePackage.scripts = temptePackage.scripts;

        // updating scripts in a sample using scripts from the template
        // for (var name in temptePackage.scripts) {
        //     if (temptePackage.scripts.hasOwnProperty(name) &&
        //         samplePackage.scripts.hasOwnProperty(name)) {
        //         samplePackage.scripts[name] = temptePackage.scripts[name]
        //     }
        // }

        // updating version of dependencies in a sample using dependencies from the template
        for (var name in temptePackage.dependencies) {
            if (temptePackage.dependencies.hasOwnProperty(name) &&
                samplePackage.dependencies.hasOwnProperty(name)) {
                samplePackage.dependencies[name] = temptePackage.dependencies[name]
            }
        }

        // updating devDependencies in a sample using devDependencies from the template
        for (var name in temptePackage.devDependencies) {
            if (temptePackage.devDependencies.hasOwnProperty(name) &&
                samplePackage.devDependencies.hasOwnProperty(name)) {
                samplePackage.devDependencies[name] = temptePackage.devDependencies[name]
            }
        }

        return JSON.stringify(samplePackage, null, '  ');
    }

    public static getSampleInfo(samplePackageFile: any, sampleFiles?: string[]): SampleInfo {

        let info = new SampleInfo();

        // info.sampleFiles = sampleFiles;
        info.sampleDirOnDisk = samplePackageFile.dirname; // sampleDirectory;
        info.packageFileContent = JSON.parse(samplePackageFile.contents.toString());

        // info.packageFileContent = JSON.parse(fs.readFileSync(samplePackageFile));


        return info;
    }

    public static getRelative(path: string): string {
        // let path = filePath;
        if (path.indexOf(igConfig.repositoryName) > -1) {
            path = path.split(igConfig.repositoryName)[1];
            path = path.split("\\").join("/");
            return "." + path;
        }

        console.log("failed on getRelative " + path);
        return path;
    }

    public static getFileName(relativePath: string): string {
        // ./samples/maps/geo-map/display-esri-imagery/src/FileName.tsx
        let parts = relativePath.split("/");
        if (parts.length > 0) {
            return parts[parts.length - 1]; // FileName.tsx
        }
        console.log("failed on getFileName " + relativePath);
        return "";
    }

    public static getSourcePath(relativePath: string): string {
        // ./samples/maps/geo-map/display-esri-imagery/src/FileName.tsx
        let parts = relativePath.split("/src");
        if (parts.length > 0) {
            return "./src" + parts[parts.length - 1]; // ./src/FileName.tsx
        }
        console.log("failed on getSourcePath " + relativePath);
        return "";
    }

    public static getParent(path: string): string {
        const folders = path.split('\\');
        if (folders.length > 1) {
            return folders[folders.length  - 1];
        }
        return "";
    }


    public test() {
        console.log("Transformer.ts test ");
    }


    public static getReadme(sample: SampleInfo, template: string): string {

        // let componentGroup = "maps";
        // let componentFolder = "geo-map";
        // let sampleFolder = "binding-csv-points";
        // let sampleFile = "MapBindingDataCSV.tsx";

        let readMe = template + "";

        // replacing variables with values that were generated while processing each sample:
        // readMe = StringUtils.replace(readMe, "{sandboxUrlView}", igConfig.sandboxUrlView);
        // readMe = StringUtils.replace(readMe, "{sandboxUrlEdit}", igConfig.sandboxUrlEdit);
        // readMe = StringUtils.replace(readMe, "{sandboxUrlOptions}", igConfig.sandboxUrlOptions);
        readMe = StringUtils.replace(readMe, "{sandboxUrlView}", sample.sandboxUrlView);
        readMe = StringUtils.replace(readMe, "{sandboxUrlEdit}", sample.sandboxUrlEdit);
        readMe = StringUtils.replace(readMe, "{componentFolder}", sample.componentFolder);
        readMe = StringUtils.replace(readMe, "{componentGroup}", sample.componentGroup);
        readMe = StringUtils.replace(readMe, "{componentName}", sample.componentName);
        readMe = StringUtils.replace(readMe, "{sampleFilePath}", sample.sampleFilePath);
        readMe = StringUtils.replace(readMe, "{sampleFileName}", sample.sampleFileName);
        readMe = StringUtils.replace(readMe, "{sampleDisplayName}", sample.sampleDisplayName);
        readMe = StringUtils.replace(readMe, "{sampleDirRelative}", sample.sampleDirRelative);
        readMe = StringUtils.replace(readMe, "{sampleFolder}", sample.sampleFolder);
        readMe = StringUtils.replace(readMe, "{sampleSourceCode}", sample.sampleSourceCode);
        readMe = StringUtils.replace(readMe, "{docsUrl}", sample.docsUrl);

        readMe = StringUtils.replace(readMe, "{repositoryUrl}", igConfig.repositoryUrl);
        readMe = StringUtils.replace(readMe, "{repositoryPath}", igConfig.repositoryPath);
        readMe = StringUtils.replace(readMe, "{repositoryOrg}", igConfig.repositoryOrg);
        readMe = StringUtils.replace(readMe, "{repositoryName}", igConfig.repositoryName);
        readMe = StringUtils.replace(readMe, "{platformCode}", igConfig.platformCode);
        readMe = StringUtils.replace(readMe, "{platformName}", igConfig.platformName);

        readMe = StringUtils.replace(readMe, "{browserHostUrl}", igConfig.browserHostUrl);
        readMe = StringUtils.replace(readMe, "{browserRootPath}", igConfig.browserRootPath);

        // console.log("====== ReadMe.md File =======================");
        // console.log(readMe);
        // console.log("====== ReadMe.md File =======================");
        return readMe;
    }
}

class StringUtils {

    public static excludes(str: string, exclusions: string[]): boolean {
        for (const exclusion of exclusions) {
            if (str.includes(exclusion)) { return false; }
        }
        return true;
    }

    public static includes(str: string, pattern: string): boolean {
        return str.includes(pattern);
    }

    public static replace(orgStr: string, oldStr: string, newStr: string): string {
        return orgStr.split(oldStr).join(newStr);
    }

    public static toTitleCase(str: string, separator?: string) {
        if (separator === undefined) { separator = ' '; }
        return str.toLowerCase().split(separator).map(function(word) {
          return (word.charAt(0).toUpperCase() + word.slice(1));
        }).join(' ');
      }

    public static splitCamel(orgStr: string): string {
        return orgStr.replace(/([a-z0-9])([A-Z])/g, '$1 $2');
    }

    // .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
    //   .split(/(?=[A-Z])/) v
}
