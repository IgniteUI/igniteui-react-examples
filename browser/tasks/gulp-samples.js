/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-unused-vars */

let gulp = require('gulp');
let gulpIgnore = require('gulp-ignore');
let uglify = require('gulp-uglify');

// let gSort = require('gulp-sort');
let rename = require('gulp-rename');
let fs = require('fs.extra');
let path = require('path');
let flatten = require('gulp-flatten');
let del = require('del');
let es = require('event-stream');

var igConfig = require('./gulp-config.js')

eval(require('typescript')
.transpile(require('fs')
.readFileSync("./tasks/Transformer.ts").toString()));

function log(msg) {
    console.log('' + msg);
}
log('loaded');

// NOTE you can comment out strings in this array to run subset of samples
var sampleSource = [
    // including samples for all components:
    igConfig.SampleCopyPath + '/**/package.json',

    // including individual samples:
    // igConfig.SampleCopyPath + '/layouts/**/overview/package.json',
    // igConfig.SampleCopyPath + '/maps/**/binding-data-model/package.json',
    // igConfig.SampleCopyPath + '/charts/pie-chart/overview/package.json',
    // igConfig.SampleCopyPath + '/layouts/expansion-panel/**/package.json',
    // igConfig.SampleCopyPath + '/charts/category-chart/high-frequency/package.json',
    // igConfig.SampleCopyPath + '/charts/category-chart/high-volume/package.json',
    // igConfig.SampleCopyPath + '/charts/data-chart/chart-performance/package.json',
    // igConfig.SampleCopyPath + '/charts/financial-chart/high-frequency/package.json',
    // igConfig.SampleCopyPath + '/charts/financial-chart/high-volume/package.json',
    // igConfig.SampleCopyPath + '/charts/data-chart/data-annotation-multiple-with-stocks/package.json',

    // including samples for specific components:
    // igConfig.SampleCopyPath + '/charts/category-chart/**/package.json',
    // igConfig.SampleCopyPath + '/charts/data-chart/**/package.json',
    // igConfig.SampleCopyPath + '/charts/doughnut-chart/**/package.json',
    // igConfig.SampleCopyPath + '/charts/financial-chart/**/package.json',
    // igConfig.SampleCopyPath + '/charts/pie-chart/**/package.json',
    // igConfig.SampleCopyPath + '/charts/sparkline/**/package.json',
    // igConfig.SampleCopyPath + '/charts/tree-map/**/package.json',
    // igConfig.SampleCopyPath + '/charts/zoomslider/**/package.json',
    // igConfig.SampleCopyPath + '/charts/toolbar/**/package.json',
    // igConfig.SampleCopyPath + '/maps/**/package.json',
    // igConfig.SampleCopyPath + '/excel/excel-library/**/package.json',
    // igConfig.SampleCopyPath + '/excel/spreadsheet/**/package.json',
    // igConfig.SampleCopyPath + '/gauges/bullet-graph/**/package.json',
    // igConfig.SampleCopyPath + '/gauges/linear-gauge/**/package.json',
    // igConfig.SampleCopyPath + '/gauges/radial-gauge/**/package.json',
    // igConfig.SampleCopyPath + '/grids/**/package.json',
    // igConfig.SampleCopyPath + '/grids/data-grid/**/package.json',
    // igConfig.SampleCopyPath + '/grids/grid/**/package.json',
    // igConfig.SampleCopyPath + '/grids/list/**/package.json',
    // igConfig.SampleCopyPath + '/grids/tree/**/package.json',
    // igConfig.SampleCopyPath + '/layouts/**/package.json',
    // igConfig.SampleCopyPath + '/inputs/**/package.json',
    // igConfig.SampleCopyPath + '/editors/**/package.json',
    // igConfig.SampleCopyPath + '/menus/**/package.json',
    // igConfig.SampleCopyPath + '/notifications/**/package.json',
    // igConfig.SampleCopyPath + '/scheduling/**/package.json',

    // excluding package.json in node_modules sub folders
    "!" + igConfig.SampleCopyPath + '/**/node_modules/**/package.json',
    '!' + igConfig.SampleCopyPath + '/**/node_modules/**',
    '!' + igConfig.SampleCopyPath + '/**/node_modules',
];

// this variable stores detailed information about all samples in ./samples/ folder
var samplesList = [];

var sampleOutputFolder = '';

function cleanSamples() {
    // cleaning up obsolete files in individual samples
    del.sync("./samples/**/src/sandbox.config.json", {force:true});
    del.sync("./samples/**/manifest.json", {force:true});
}

function lintSamples(cb) {

    // del.sync("./sample-test-files/**/*.*", {force:true}); LinearGaugeLabels.tsx

    gulp.src([
        // './templates/**/**/*.ts',
        // './templates/**/**/*.tsx',
        './samples/**/**/index.tsx',
        // './samples/**/**/**/*.tsx',
        //'!./samples/**/**/**/index.tsx',
          '!./samples/**/node_modules/**/*.tsx',
    ], {base: './'})
    // .pipe(gSort( { asc: false } ))
    .pipe(es.map(function(file, fileCallback) {

        let fileLocation = Transformer.getRelative(file.dirname) + '/' + file.basename;
        let fileContent = file.contents.toString();
        // log('linting ' + fileLocation);

        let newContent = Transformer.lintSample(fileLocation, fileContent,
            (err, results) => {
              if (err) {
                fileCallback(err, null);
              }
            //   file.contents = Buffer.from(results);
            //   fileCallback(null, file);
            });
        if (newContent !== fileContent) {
            log('changed: ' + fileLocation);
            file.contents = Buffer.from(newContent);
            // fileCallback(null, file);
        } else {
            // fileCallback(null, null);
        }
        fileCallback(null, file);
    }))
    .pipe(gulp.dest('./'))
    .on("end", function() {
        cb();
    });
} exports.lintSamples = lintSamples;

let skipSamples = [
    // '../samples/grids/data-grid/binding-live-data',
    // '../samples/grids/data-grid/load-save-layout',

    // skip samples with bugs in exporting CompanyMarketCapItemized with null values:
    '../samples/charts/data-chart/itemized-bar-chart',
    '../samples/charts/data-chart/itemized-column-chart',
    '../samples/charts/data-chart/itemized-stacked-bar-chart',
    '../samples/charts/data-chart/itemized-stacked-column-chart',
];

function getSamples(cb) {

    cleanSamples();

    samplesList = [];

    gulp.src(sampleSource)
    // .pipe(gSort( { asc: false } ))
    .pipe(es.map(function(samplePackage, sampleCallback) {

        let sampleFolderName = Transformer.getRelative(samplePackage.dirname);

        if (skipSamples.indexOf(sampleFolderName) >= 0) {
            // skip until material UI components are replaced in samples
            log("skipping sample: " + sampleFolderName);
            sampleCallback(null, samplePackage);
        } else {
            let sampleFiles = [];
            gulp.src([
                  sampleFolderName + "/src/*.*",
            "!" + sampleFolderName + "/src/*.d.ts"])
            .pipe(flatten({ "includeParents": -1 }))
            // .pipe(gSort( { asc: false } ))
            .pipe(es.map(function(file, fileCallback) {
                let fileDir = Transformer.getRelative(file.dirname);
                sampleFiles.push(fileDir + "/" + file.basename);
                fileCallback(null, file);
            }))
            .on("end", function() {
                // log(sampleFolderName);

                let sampleInfo = Transformer.getSampleInfo(samplePackage, sampleFiles);
                samplesList.push(sampleInfo);

                sampleCallback(null, samplePackage);
            });
        }

        // sampleCallback(null, sample);
    }))
    .on("end", function() {
        Transformer.sort(samplesList);
        Transformer.process(samplesList);
        // Transformer.verify(samplesList);
        // Transformer.print(samplesList);
        // Transformer.getGroups(samplesList);

        log('getSamples found ' + samplesList.length + " samples");
        // for (const sample of samplesList) {
        //     log(' ' + sample.SampleFolderPath);
        // }
        // let last = samplesList[samplesList.length - 1];
        // log('package name ' + last.PackageFileContent.name);
        // last.PackageDependencies = Transformer.getDependencies(last);
        // log('packages \n' + last.PackageFileContent.dependencies);
        // log('dependencies: \n' + last.PackageDependencies);

        cb();
    });


} exports.getSamples = getSamples;

function makeDirectoryFor(filePath) {
    var dirname = path.dirname(filePath);
    if (fs.existsSync(dirname)) {
      return true;
    }
    makeDirectoryFor(dirname);
    fs.mkdirSync(dirname);
    // fs.mkdir(sampleOutputFolder + 'src', { recursive: true }, (err) => { if (err) throw err; });
}

function copyExclude(files) {
    return es.map(function(file, cb) {
        if (files.indexOf(file.basename) >= 0) {
            // log('+ share data ' + file.basename);
            cb(null, file);
        } else {
            // log('- share data ' + file.basename);
            cb(null);
        }
    });
}

function deleteSamples() {

    log('deleting sample files... ');
    del.sync("./src/samples/**/*.*", {force:true});
    del.sync("./src/samples/*.*", {force:true});
    del.sync("./src/samples/*", {force:true});

    // del.sync("./samples-test-files/public", {force:true});
    // del.sync("./samples-test-files/**/*.md", {force:true});
    // del.sync("./samples-test-files/**/*.ts", {force:true});
    // del.sync("./samples-test-files/**/*.css", {force:true});
    // del.sync("./samples-test-files/**/*.json", {force:true});
    // del.sync("./samples-test-files/*.json", {force:true});

}

function copySamples(cb) {

    deleteSamples();
    log('copying sample files... ');
    for (const sample of samplesList) {
        let outputPath = './src' + sample.SampleFolderPath.replace('..','');
        log('copying to ' + outputPath + '/index.tsx');

        gulp.src([
              sample.SampleFolderPath + '/src/*.*',
        // '!' + sample.SampleFolderPath + '/src/index.css',
        '!' + sample.SampleFolderPath + '/src/*.d.ts',
        ])
        .pipe(es.map(function(file, fileCallback) {
            let code = file.contents.toString();

            code = code.replace(/(const root = ReactDOM.createRoot\(document.getElementById\(['"]root['"]\)\);)/g, "");
            code = code.replace("root.render(<" + sample.SampleImportName + "/>);", "");
            code = code.replace(/root.render(.*(?<![^a-z]))((?![^a-z]).*)/g, "");
            code = code.replace("root.render(<Sample/>);", "");

            code = code.replace("import ReactDOM from 'react-dom';","");
            code = code.replace('import ReactDOM from "react-dom";',"");
            code = code.replace("import ReactDOM from 'react-dom/*';","");
            code = code.replace('import ReactDOM from "react-dom/*";',"");
            code = code.replace("import ReactDOM from 'react-dom/client';", "");
            code = code.replace('import ReactDOM from "react-dom/client";', "");

            code = code.replace("// rendering above class to the React DOM","");
            code = code.replace(/ReactDOM.*/g,"");
            // code = code.replace("import './index.css';","");
            // code = code.replace('import "./index.css";',"");
            code = code.replace("// rendering above component in the React DOM","");
            code = code.replace(" var "," let ");
            code = code.replace(", MarkerType_$type","");
            // auto fix TS lint issue in import statements:
            code = code.replace('from "igniteui-react";', "from 'igniteui-react';");
            code = code.replace('from "igniteui-react-core";', "from 'igniteui-react-core';");
            code = code.replace('from "igniteui-react-dashboards";', "from 'igniteui-react-dashboards';");
            code = code.replace('from "igniteui-react-charts";', "from 'igniteui-react-charts';");
            code = code.replace('from "igniteui-react-maps";', "from 'igniteui-react-maps';");
            code = code.replace('from "igniteui-react-gauges";', "from 'igniteui-react-gauges';");
            code = code.replace('from "igniteui-react-grids";', "from 'igniteui-react-grids';");
            code = code.replace('from "igniteui-react-data-grids";', "from 'igniteui-react-data-grids';");
            code = code.replace('from "igniteui-react-inputs";', "from 'igniteui-react-inputs';");
            code = code.replace('from "igniteui-react-layouts";', "from 'igniteui-react-layouts';");

            file.contents = Buffer.from(code);
            fileCallback(null, file);
         }))
        // .pipe(logFile())
        .pipe(gulp.dest(outputPath))
    }

    let routingGroups = Transformer.getRoutingGroups(samplesList);

    for (const group of routingGroups) {
        let outputPath = "./src/samples/" + group.Name + "/RoutingData.ts";
        makeDirectoryFor(outputPath);

        // log('created ' + outputPath);
        let routingFile = Transformer.getRoutingFile(group);
        fs.writeFileSync(outputPath, routingFile);
    }

    cb();
} exports.copySamples = copySamples;

function updateReadme(cb) {

    var changeFilesCount = 0;
    var template = fs.readFileSync("./templates/sample/ReadMe.md", "utf8");
    for (const sample of samplesList) {

        let readmePath = sampleOutputFolder + sample.SampleFolderPath + "/ReadMe.md";
        makeDirectoryFor(readmePath);

        let readmeNewFile = Transformer.updateReadme(sample, template);
        readmeNewFile = readmeNewFile.replace("../samples", "./samples")

        let readmeOldFile = ""; 
        if (fs.existsSync(readmePath)) {
            readmeOldFile = fs.readFileSync(readmePath).toString(); 
        }

        if (readmeNewFile !== readmeOldFile) {
            console.log('UPDATED: ' + readmePath)
            changeFilesCount++;
            fs.writeFileSync(readmePath, readmeNewFile);
        }
    }
    if (changeFilesCount > 0) {
        console.log('WARNING: you must commit above ' + changeFilesCount + ' readme files in a pull request')
    }
    cb();
} exports.updateReadme = updateReadme;

// TODO modify and move this logic to updateIG function
// updating package.json files for all sample using a template
// function updatePackages(cb) {
//     // getting content of package.json file from templates
//     let templatePackageFile = fs.readFileSync("./templates/sample/package.json");
//     let templatePackageJson = JSON.parse(templatePackageFile.toString());

//     for (const sample of samplesList) {
//         let outputPath = sampleOutputFolder + sample.SampleFolderPath + "/package.json";
//         let oldPackageFile = fs.readFileSync(outputPath).toString();

//         makeDirectoryFor(outputPath);
//         let newPackageFile = Transformer.getPackage(sample, templatePackageJson);
//         if (newPackageFile !== oldPackageFile) {
//             // log('updated: ' + outputPath);
//             fs.writeFileSync(outputPath, newPackageFile);
//         }
//     }
//     cb();
// } exports.updatePackages = updatePackages;

// updating browser's package.json file using template's package.json
function copyPackageJson(cb) {

    // getting content of package.json file from templates
    let templatePackageFile = fs.readFileSync("./templates/sample/package.json");
    let templatePackageJson = JSON.parse(templatePackageFile.toString());

    // getting content of package.json file from the browser
    let browserPackageFile = fs.readFileSync("./package.json");
    let browserPackageJson = JSON.parse(browserPackageFile.toString());

    let browserPackageNew = Transformer.updatePackage(browserPackageJson, templatePackageJson);
    if (browserPackageNew !== browserPackageFile) {
        fs.writeFileSync(sampleOutputFolder + "package.json", browserPackageNew);
        // console.log("updated browser's package.json file");
    }

    cb();
} exports.copyPackageJson = copyPackageJson;

// updates ./public/meta.json with version in ./package.json file
function updateVersion(cb) {

    const appDate = new Date()
    const appTime = appDate.toISOString().split('T')[0] + " " + appDate.toTimeString().split(' ')[0];
    const appPackage = require('../package.json');
    const appVersion = appPackage.version;
    const appInfo = appVersion + " at " + appTime;
    const jsonData = { version: appVersion, date: appTime, note: "this file is auto-generated" };
    const jsonContent = JSON.stringify(jsonData);

    const metaFile = './public/meta.json';
    fs.writeFile(metaFile, jsonContent, 'utf8', function(err) {
        if (err) {
            console.log('gulp cannot update ' + metaFile + ' file: \n' + err);
            return console.log(err);
        }
        console.log('gulp updated ' + metaFile + ' file with ' + appInfo);
    });

    const cacheSourceFile = './src/navigation/SamplesBrowser.json';
    fs.writeFile(cacheSourceFile, jsonContent, 'utf8', function(err) {
        if (err) {
            console.log('gulp cannot update ' + cacheSourceFile + ' file: \n' + err);
            return console.log(err);
        }
        console.log('gulp updated ' + cacheSourceFile + ' file with ' + appInfo);
    });
    cb();

} exports.updateVersion = updateVersion;

function updateIndex(cb) {

    var template = fs.readFileSync("./templates/sample/src/index.tsx", "utf8");
    for (const sample of samplesList) {

        let outputPath = sampleOutputFolder + sample.SampleFolderPath + "/src/index.tsx";
        let oldIndexFile = fs.readFileSync(outputPath).toString();

        makeDirectoryFor(outputPath);
        let newIndexFile = Transformer.updateIndex(sample, template);
        if (newIndexFile !== oldIndexFile) {
            // log('updated: ' + outputPath);
            fs.writeFileSync(outputPath, newIndexFile);
        }
        // fs.mkdir(sampleOutputFolder + 'src', { recursive: true }, (err) => { if (err) throw err; });
        // fs.writeFileSync(outputPath, indexFile);
        // break;
    }
    cb();
} exports.updateIndex = updateIndex;

function updateSharedFiles(cb) {

    // always override these shared files
    gulp.src([
        './templates/sample/src/index.css',
        './templates/sample/src/react-app-env.d.ts',
        './templates/sample/sandbox.config.json',
        './templates/sample/tsconfig.json',
        // './templates/sample/.gitignore',
        './templates/sample/.eslintrc.js',
    ])
    .pipe(flatten({ "includeParents": -1 }))
    .pipe(es.map(function(file, fileCallback) {
        let sourceContent = file.contents.toString();
        let sourcePath = Transformer.getRelative(file.dirname);
        sourcePath = sourcePath.replace('./templates/sample', '');
        sourcePath = sourcePath.replace('./templates/shared', '');

        for (const sample of samplesList) {
            // if (sample.isUsingFileName(file.basename)) {
                let samplePath = sampleOutputFolder + sample.SampleFolderPath;
                let targetPath = samplePath + sourcePath + '/' + file.basename;

                if (fs.existsSync(targetPath)) {
                    let targetContent = fs.readFileSync(targetPath, "utf8");
                    if (sourceContent !== targetContent) {
                        fs.writeFileSync(targetPath , sourceContent);
                        log('updated ' + targetPath);
                    }
                } else {
                    fs.writeFileSync(targetPath, sourceContent);
                    log('added ' + targetPath);
                }
        }
        fileCallback(null, file);
        // SampleFiles.push(fileDir + "/" + file.basename);
    }))

    // update these shared files if a sample is using them
    gulp.src(['./templates/shared/src/*.*'])
    .pipe(flatten({ "includeParents": -1 }))
    .pipe(es.map(function(file, fileCallback) {
        let sourceContent = file.contents.toString();
        let sourcePath = Transformer.getRelative(file.dirname);
        sourcePath = sourcePath.replace('./templates/sample', '');
        sourcePath = sourcePath.replace('./templates/shared', '');

        for (const sample of samplesList) {
            if (sample.isUsingFileName(file.basename)) {

                let samplePath = sampleOutputFolder + sample.SampleFolderPath;
                let targetPath = samplePath + sourcePath + '/' + file.basename;

                if (fs.existsSync(targetPath)) {
                    let targetContent = fs.readFileSync(targetPath, "utf8");
                    if (sourceContent !== targetContent) {
                        fs.writeFileSync(targetPath , sourceContent);
                        log('updated ' + targetPath);
                    }
                } else {
                    fs.writeFileSync(targetPath, sourceContent);
                    log('added ' + targetPath);
                }

                // let targetPath = sampleOutputFolder + sample.SampleFolderPath + '/src/' + file.basename;
                // let targetContent = fs.readFileSync(targetPath, "utf8");
                // if (sourceContent !== targetContent) {
                //     fs.writeFileSync(targetPath, sourceContent);
                //     // log('updated ' + file.basename + ' in ' + sample.SampleFilePath)
                //     log('updated ' + targetPath);
                // }
            }
        }
        fileCallback(null, file);
    }))
    .on("end", function() {
        cb();
    });


} exports.updateSharedFiles = updateSharedFiles;

function task1(cb) {
    log('task1  ');
    cb();
} exports.task1 = task1;

function task2(cb) {
    log('task2  ');
    cb();
} exports.task2 = task2;


// testing

function logRoutes(cb) {
    let routes = [];
    for (const sample of samplesList) {
        routes.push(sample.SampleRoute)
    }
    routes.sort();
    for (const route of routes) {
        console.log(route);
    }
    cb();
} exports.logRoutes = logRoutes;


function logFile() {
    return es.map(function(file, cb) {
        let relative = Transformer.getRelative(file.dirname);
        log(relative + '/' + file.basename);
        // log(path.relative(path.join(file.cwd, file.base), file.path))
        cb(null, file);
    });
}

function logPublicFiles(cb) {
    gulp.src([
        './samples/**/public/*.*',
    ])
    .pipe(logFile())
    .on("end", function() { cb(); });
} exports.logPublicFiles = logPublicFiles;

function logSourceFiles(cb) {
    gulp.src([
        './samples/**/src/*.ts',
       '!./samples/**/src/index.*',
    ])
    .pipe(logFile())
    .on("end", function() { cb(); });
} exports.logSourceFiles = logSourceFiles;

function logRootFiles(cb) {
    gulp.src([
        '../samples/**/*.*',
       '!../samples/**/src/*.*',
       '!../samples/**/*.tsx',
       '!../samples/**/*.ts',
       '!../samples/**/*.css',
       '!../samples/**/index.*',
       '!../samples/**/manifest.json',
       '!../samples/**/package.json',
       '!../samples/**/tsconfig.json',
    ])
    .pipe(es.map(function(file, cbFile) {
        let relative = Transformer.getRelative(file.dirname);
        log(file.basename + ' ' + relative + '/' + file.basename);
        cbFile(null, file);
    }))
    .on("end", function() { cb(); });
} exports.logRootFiles = logRootFiles;

function logUniqueFiles(cb) {

    let fileNames = [];
    gulp.src([
        './samples/**/src/*.ts',
       '!./samples/**/src/index.*',
    ])
    .pipe(es.map(function(file, cbFile) {
        if (fileNames.indexOf(file.basename) === -1) {
            fileNames.push(file.basename);
        }
        cbFile(null, file);
    }))
    .on("end", function() {
        fileNames.sort();
        for (const name of fileNames) {
            log(name);
        }
        cb();
    });

} exports.logUniqueFiles = logUniqueFiles;


function logSandboxUrls(cb) {

    let content = "";
    for (const sample of samplesList) {
        console.log("" + sample.SandboxUrlShort);
        content += sample.SandboxUrlShort + "\n";

    }
    let output = "./sandbox-react.txt";
    fs.writeFileSync(output, content);

    cb();
} exports.logSandboxUrls = logSandboxUrls;

function updateCodeViewer(cb) {

    del.sync("./public/code-viewer/**");

    for (const sample of samplesList) {

        var codeViewFilePath = sample.SampleRouteNew;
        var codeViewPath = "./public/code-viewer" + codeViewFilePath + ".json";

        log("generating: " + codeViewPath);

        var content = "{\r\n \"sampleFiles\":\r\n";

        var dataFiles = [];
        var contentItems = [];
        var tsxItem = new CodeViewer(sample.SampleFilePath, sample.SampleFileSourceCode, "tsx", "tsx", true);

        contentItems.push(tsxItem);

        for (const file of sample.SampleFilePaths) {
            if (file.indexOf(".css") > 0) {
                var cssContent = fs.readFileSync(file, "utf8");
                var cssItem = new CodeViewer(file, cssContent, "css", "css", true);
                contentItems.push(cssItem);
            }
            else if (file.indexOf(".ts") > 0 && file.indexOf("index.tsx") === -1) {
                var tsContent = fs.readFileSync(file, "utf8");
                var tsItem = new CodeViewer(file, tsContent, "ts", "DATA", true);
                dataFiles.push(tsItem);
            }
        }

        if (dataFiles.length === 1) {
            contentItems.push(dataFiles[0]);
        } else if (dataFiles.length > 1) {
            // combining multiple data files into one data source
            var dataPath = dataFiles[0].path;
            var dataFolder = dataPath.substring(0, dataPath.lastIndexOf("/"));
            var dataContent = "// NOTE this file contains multiple data sources:\r\n";
            for (let i = 0; i < dataFiles.length; i++) {
                const data = dataFiles[i];
                dataContent += "\r\n\r\n" + "// Data Source #" + (i+1) + "\r\n";
                dataContent += data.content + "\r\n";
            }
            var dataItem = new CodeViewer(dataFolder + "/DataSources.ts", dataContent, "ts", "DATA", true);
            contentItems.push(dataItem);
        }

        content += JSON.stringify(contentItems, null, ' ');
        content += "\r\n}";

        makeDirectoryFor(codeViewPath);
        fs.writeFileSync(codeViewPath, content);
    }

    cb();
} exports.updateCodeViewer = updateCodeViewer;

function logPackages(cb) {
    let fileNames = [];
    gulp.src([
        './node_modules/igniteui*/package.json',
        './node_modules/@infragistics/igniteui*/package.json',
        './node_modules/@types/react*/package.json',
        // './node_modules/classnames/package.json',
        // './node_modules/file-saver/package.json',
        // './node_modules/prop*/package.json',
        './node_modules/react*/package.json',
        './node_modules/typescript/package.json',
        './node_modules/webpack/package.json',
        './node_modules/worker-loader/package.json',
       '!./node_modules/**/node_modules/**/package.json',
    ])
    .pipe(es.map(function(file, cbFile) {
        // console.log("logPackages " + filePath);
        var fileContent = file.contents.toString();
        var fileLines = fileContent.split('\n');
        let v = false;
        let n = false;
        for (const line of fileLines) {
            // console.log(line);
            if (line.indexOf('"name":') >= 0) {
                n = line.replace('"name":', '').replace(',', '').trim();
                n = n.split('"').join('');
            }
            if (line.indexOf('"version":') >= 0) {
                v = line.replace('"version":', '').replace(',', '').trim();
                v = v.split('"').join('');
                v = '"' + v + '",';
                v = v.padEnd(Math.max(14, v.length), ' ');
            }
            if (n && v) {
                fileNames.push('{ "version": ' + v + ' "name": "' + n + '" }');
                break;
            }
        }

        cbFile(null, file);
    }))
    .on("end", function() {
        const outputPath = "./src/navigation/BrowserInfo.json";
        // let outputContent = JSON.stringify(fileNames, null, ' ');
        let outputContent = '[\n' + fileNames.join(',\n') + '\n]';
        fs.writeFileSync(outputPath, outputContent);
        console.log(">> using packages: ");
        console.log(outputContent);
        cb();
    });
} exports.logPackages = logPackages;

function simplifySamples(cb) {

    // var skipFiles = ["react-app-env.d.ts", "index.tsx", "index.css", ""];

    for (const sample of samplesList) {

        // var sourcePath = sample.SampleFolderPath + "/src/" + sample.SampleFileName;
        var sourcePath = sample.SampleFolderPath + "/src/index.tsx";
        var outputPath = sample.SampleFolderPath + "/src/index.tsx";
        // console.log("simplifying: " + sourcePath); // + " >> " + outputPath);

        // if (sourcePath.indexOf("/category-chart/") > 0 &&
        //     sourcePath.indexOf("/annotations/") > 0) {

            sample.SampleFileSourceCode = sample.SampleFileSourceCode.replace("import * as React from 'react';", "");
            let code = "";
            // code += "import React from 'react';\n";
            // code += "import ReactDOM from 'react-dom';\n\n";
            // code += "import './index.css';\n\n";
            // code += sample.SampleFileSourceCode;
            // code += "\n";
            // code += "// rendering above class to the React DOM\n";
            // code += "ReactDOM.render(<" + sample.SampleImportName + " />, document.getElementById('root'));";

            code += sample.SampleFileSourceCode;
            let importExp = new RegExp(/(import.React.from)/g);
            let importMatches = code.match(importExp);
            if (importMatches.length > 1) {
                code = code.replace("\r\nimport React from 'react';\r\n","");
                console.log("replaced: " + sourcePath);
            }
            // code = code.replace("import React from 'react';\n","");

            // code = code.replace(/\n\n\n/g,"\n");
            // code = Strings.replace(code, "\r\n\r\n", "\r\n");
            fs.writeFileSync(outputPath, code);
            // del.sync(sourcePath, {force:true});
        // }
    }
    cb();

} exports.simplifySamples = simplifySamples;


let verifyBuildSpecs = [
    { files: [], pattern: "./build/code-viewer/**/*.json" },
    { files: [], pattern: "./build/static/**/*.js" },
    { files: [], pattern: "./build/web.config" },
    { files: [], pattern: "./build/index.html" },
    { files: [], pattern: "./build/manifest.json" },
];

function verifyBuildStats(cb) {
    for (const info of verifyBuildSpecs) {
        if (info.files.length === 0)
            console.log(">> verifyBuild ERROR cannot find any " + info.pattern + " files");
        else
            console.log(">> verifyBuild found " + info.files.length + " files in " + info.pattern);
    }
    cb();
}

function verifyBuild(cb) {
    let verifiedPatterns = 0;
    for (const info of verifyBuildSpecs) {
        gulp.src([info.pattern]).pipe(es.map(function(file, fileCallback) {
            info.files.push(file.basename);
            fileCallback(null, file);
        }))
        .on("end", function() {
            verifiedPatterns++;
            if (verifiedPatterns >= verifyBuildSpecs.length) {
                verifyBuildStats(cb);
                cb();
            }
        });
    }
} exports.verifyBuild = verifyBuild;

function sortByKeys(dependencies)
{
    let keys = Object.keys(dependencies);
    keys.sort();
 
    var sorted = {};
    for (const key of keys) {
        sorted[key] = dependencies[key];
    }
    return sorted;
}

// cleanup individual samples if they have node_modules installed
function cleanupSamples(cb) {
    console.log("removing ./samples/**/node_modules/**/*.* files")
    del.sync("./samples/**/node_modules/**/*.*", {force:true});
    del.sync("./samples/**/node_modules/**", {force:true});
    del.sync("./samples/**/node_modules", {force:true});
    cb();
}
exports.cleanupSamples = cleanupSamples;

function updateIG(cb) {

    // cleanup packages to speedup this gulp script

    // NOTE: change this array with new version of packages and optionally use "@infragistics/" proget prefix, e.g.
    // { name: "@infragistics/igniteui-react-charts", version: "22.1.62" }, // proget
    // { name:               "igniteui-react-charts", version: "16.16.2" }, // npm
    let packageUpgrades = [
        // these IG packages are often updated:
        { version: "19.0.0", name: "igniteui-react-core" },
        { version: "19.0.0", name: "igniteui-react-charts" },
        { version: "19.0.0", name: "igniteui-react-excel" },
        { version: "19.0.0", name: "igniteui-react-gauges" },
        { version: "19.0.0", name: "igniteui-react-data-grids" },
        { version: "19.0.2", name: "igniteui-react-grids" },
        { version: "19.0.0", name: "igniteui-react-inputs" },
        { version: "19.0.0", name: "igniteui-react-layouts" },
        { version: "19.0.0", name: "igniteui-react-maps" },
        { version: "19.0.0", name: "igniteui-react-spreadsheet-chart-adapter" },
        { version: "19.0.0", name: "igniteui-react-spreadsheet" },
        { version: "19.0.0", name: "igniteui-react-datasources" },
        { version: "19.0.0", name: "igniteui-react-dashboards" },
        { version: "19.0.2", name: "igniteui-react" },
        // these IG packages are sometimes updated:
        { version: "6.0.0" , name: "igniteui-webcomponents" },
        { version: "1.16.1", name: "igniteui-dockmanager" },
        // main react packages
        { version: "^18.2.0", name: "react" },
        { version: "^18.2.0", name: "react-dom" },
        { version: "^5.0.1",  name: "react-scripts" },
        // { version: "^2.4.0", name: "tslib" },
        // { version: "^2.2.0", name: "lit-html" },
        { version: "^8.33.0", name: "eslint" },
        { version: "^1.1.7",  name: "eslint-config-react" },
        { version: "^7.20.0", name: "eslint-plugin-react" },

        { version: "^29.2.0",  name: "@types/jest" },
        { version: "^18.11.7", name: "@types/node" },
        { version: "^18.0.24", name: "@types/react" },
        { version: "^18.0.8",  name: "@types/react-dom" },
        { version: "^2.2.1",   name: "react-app-rewired" },
        { version: "^4.8.4",   name: "typescript" },
    ];

    // NOTE you can comment out strings in this array to run these function only on a subset of samples
    var packagePaths = [
        './package.json', // browser
        '../samples/**/package.json',
        // '../samples/charts/**/package.json',
        // '../samples/gauges/**/package.json',

        // skip packages in node_modules folders
       '!../samples/**/node_modules/**/package.json',
       '!../samples/**/node_modules/**',
       '!../samples/**/node_modules',
    ];

    // creating package mapping without proget prefix so we can upgrade to/from proget packages
    let packageMappings = {};
    for (const item of packageUpgrades) {
        item.id = item.name.replace("@infragistics/", "");
        packageMappings[item.id] = item;
    }

    let updatedPackages = 0;
    // gulp all package.json files in samples/browser
    gulp.src(packagePaths, {allowEmpty: true})
    .pipe(es.map(function(file, fileCallback) {
        let filePath = file.dirname + "\\" + file.basename;
        console.log("processing " + filePath);
        var fileContent = file.contents.toString();
        var fileLines = fileContent.split('\n');

        var fileChanged = false;
        for (let i = 0; i < fileLines.length; i++) {
            const line = fileLines[i];
            let words = line.split(":");
            if (words.length === 2) {
                // matching packages
                let packageName = words[0].replace("@infragistics/", "").replace('"', '').replace('"', '').trim();
                let packageInfo = packageMappings[packageName];
                if (packageInfo !== undefined) {
                    let newLine = '    "' + packageInfo.name + '": "' + packageInfo.version + '",';
                    if (fileLines[i].trim() !== newLine.trim()) {
                        fileLines[i] = newLine;
                        fileChanged = true;
                    }
                }
            }
        }

        let newContent = fileLines.join('\n'); 
        let jsonPackages = JSON.parse(newContent);
        // sort package dependencies by their names
        let sortPackages = sortByKeys(jsonPackages.dependencies);
        if (JSON.stringify(sortPackages) !== JSON.stringify(jsonPackages.dependencies)) {
            jsonPackages.dependencies = sortPackages;
            jsonPackages.devDependencies = sortByKeys(jsonPackages.devDependencies); 
            newContent = JSON.stringify(jsonPackages, null, '  ') + '\n';
            fileChanged = true;
        }
        
        if (fileChanged || fileContent.trim() !== newContent.trim()) {
            updatedPackages++;
            fs.writeFileSync(filePath, newContent);
            log("updated: " + filePath);
        }
        fileCallback(null, file);
    }))
    .on("end", function() {
        log("updated: " + updatedPackages + " package files");
        cb();
    });

} exports.updateIG = updateIG;


