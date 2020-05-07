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
        packageKeyword: "igniteui",
        packageVersion: "^16.11.7",
        platformCode: "tsx",
        platformName: "React",
        browserHostUrl: "http://localhost:8080/",
        browserRoute: "/samples",
        browserRootPath: "./tmp",
        // samplesRootPath: "../samples",
        samplesRootPath: "./samples",
        samplesCopyFiles: [".tsx", ".ts", ".css", ".csv", ".html", ".png", ".svg" ],
        samplesFileExtension: ".tsx",
        samplesFileExclusions: ["Component.ts", "State.ts", "Props.ts", "Base.ts", "Data.ts", "index.tsx"],
        // samplesFileExclusions: ["Component.ts", "State.ts", "Props.ts", "Base.ts", "index.tsx"],

        docsUrl: "https://infragistics.com/{platformName}site/components/{componentFolder}.html",
                 //  "https://infragistics.com/reactsite/components/data-chart.html",

        repositoryOrg: "IgniteUI",
        repositoryName: "igniteui-react-examples",
        repositoryPath: "github/{repositoryOrg}/{repositoryName}/tree/master/samples/{componentGroup}/{componentFolder}/{sampleFolder}",
        repositoryUrl: "https://github.com/{repositoryOrg}/{repositoryName}",
        sandboxUrlOptions: "fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/{sampleFile}",
        sandboxUrlView: "https://codesandbox.io/embed/{repositoryPath}?{sandboxUrlOptions}",
        sandboxUrlEdit: "https://codesandbox.io/s/{repositoryPath}?{sandboxUrlOptions}",
    },
}
// exporting only config for one platform since SB do not need other variables
module.exports = config[platformTarget];
