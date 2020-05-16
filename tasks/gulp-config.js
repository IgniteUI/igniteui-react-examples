// let gulp = require('gulp');

function log(msg) {
    console.log('gulp-config.js ' + msg);
}

// change this variable depending on which platform
let platformTarget = "React";

log('loaded for ' + platformTarget + ' platform' );

// this configuration defines variables for each platform
let config = {
    React: {
        PackageKeyword: "igniteui",
        PackageVersion: "^16.11.7",
        PlatformCode: "tsx",
        PlatformName: "React",
        BrowserHostUrl: "http://localhost:3000/",
        BrowserRoute: "/samples",
        BrowserRootPath: "./tmp",
        // SamplesRootPath: "../samples",
        SamplesRootPath: "./samples",
        SamplesCopyFiles: [".tsx", ".ts", ".css", ".csv", ".html", ".png", ".svg" ],
        SamplesFileExtension: ".tsx",
        SamplesFileExclusions: ["Component.ts", "State.ts", "Props.ts", "Base.ts", "Data.ts", "index.tsx", "Pager.tsx", "LegendOverlay.tsx"],
        // SamplesFileExclusions: ["Component.ts", "State.ts", "Props.ts", "Base.ts", "index.tsx"],

        DocsUrl: "https://infragistics.com/{PlatformName}site/components/{ComponentFolder}.html",
                 //  "https://infragistics.com/reactsite/components/data-chart.html",

        RepositoryOrg: "IgniteUI",
        RepositoryName: "igniteui-react-examples",
        RepositoryPath: "github/{RepositoryOrg}/{RepositoryName}/tree/master/samples/{ComponentGroup}/{ComponentFolder}/{SampleFolderName}",
        RepositoryUrl: "https://github.com/{RepositoryOrg}/{RepositoryName}",
        RepositoryWarning: "NOTE: do not change this file because it will be auto re-generated from template file:",

        SandboxUrlOptions: "fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/{sampleFile}",
        SandboxUrlView: "https://codesandbox.io/embed/{RepositoryPath}?{SandboxUrlOptions}",
        SandboxUrlEdit: "https://codesandbox.io/s/{RepositoryPath}?{SandboxUrlOptions}",
    },
}
// exporting only config for one platform since SB do not need other variables
module.exports = config[platformTarget];
