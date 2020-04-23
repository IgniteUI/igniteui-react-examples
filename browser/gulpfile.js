// imports for gulp
let gulp = require('gulp');
let rename = require('gulp-rename');
let fs = require('fs.extra');
path = require('path');
let flatten = require('gulp-flatten');
let del = require('del');
const es = require('event-stream');
const shell = require('gulp-shell');
let replace = require('gulp-replace');
let contains = require('gulp-contains');

// package version
let packageVersion = '"^16.11.7"';
//additional dependencies
let addDependencies = [];
// globals
let scriptsPath = './github/';
let templates = './templates-samples/';
let templatesShared = './templates-shared/';
let templatesSampleBrowser = './templates-sample-browser/';
let templateFiles = [];
let templateSharedFiles = [];

// **delete root**
function clean(cb) {
    del.sync("./github/**/*.*", {force:true});
    del.sync("./github");
    cb();
}
exports.clean = clean;

// * Pack every sample into it's own dir.
function pack() {

    // move each tsx file into their own folder
   return gulp.src(['./src/samples/**/*.tsx',
        '!./src/samples/**/ExcelUtility*.tsx',
        '!./src/samples/**/LegendItem*.tsx',
        '!./src/samples/**/LegendOverlay*.tsx',
        '!./src/samples/**/SourceInfo*.tsx',
        '!./src/samples/**/Shared*.tsx',
        '!./src/samples/**/Sample*.tsx',
        '!./src/samples/**/Stocks*.tsx',
        '!./src/samples/**/Shared*.tsx',
        '!./src/samples/**/Pager*.tsx',
        '!./src/samples/**/Test*.tsx',
        '!./src/samples/**/Igr*.tsx',
        '!./src/samples/**/World*.tsx',
    ])
    .pipe(flatten({ "includeParents": -1 }))
    .pipe(rename(function (path) {
        path.dirname += "/" + path.basename;
    }))
    .pipe(gulp.dest('./github/'))

    // CreateManifest file
    .pipe(es.map(function(file, cb) {
        let manifest = `
{
    "additionalDependencies": "@@AdditionalDependencies",
    "sampleName": "${file.basename.replace('.tsx', '')}",
    "sharedFiles": "@@SharedFiles"
}
        `;
        fs.writeFileSync(file.dirname + "/manifest.json", manifest);
        cb(null, file);
    }))
    // Create README file
    .pipe(es.map(function(file, cb) {
        let getResources = path.join(file.dirname, "../");
        let original = path.basename(getResources);
        let config = `
# View on CodeSandbox
[Run this sample in CodeSandbox](https://codesandbox.io/embed/github/IgniteUI/igniteui-react-examples/tree/master/samples/${original + "/" + file.basename.replace('.tsx','')}?fontsize=14&hidenavigation=1&theme=dark&view=preview)

# Edit on CodeSandbox

<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
    <body>
        <a target="_blank" href="https://codesandbox.io/s/github/IgniteUI/igniteui-react-examples/tree/master/samples/${original + "/" + file.basename.replace('.tsx','')}?fontsize=14&hidenavigation=1&theme=dark&view=preview">
            <img alt="Edit Sample" src="https://codesandbox.io/static/img/play-codesandbox.svg"/>
        </a>
    </body>
</html>
        `;
        fs.writeFileSync(file.dirname + "/README.md", config);
        cb(null, file);
    }))
}
exports.pack = pack;

// * Cross sample static specific Copy Template Files
function getTemplates() {
    return gulp.src(templates + './**/*')
        .pipe(es.map(function(file, cb) {
            let t = path.relative(templates, file.path);
            let stat = fs.lstatSync(file.path);
                if(!stat.isDirectory()) {
                    let f = fs.readFileSync(file.path);
                    templateFiles.push({name: t, content: f.toString()});
                }
            cb();
    }));
}
exports.getTemplates = getTemplates;

//Get SharedTemplate Files
function getSharedFiles() {
    return gulp.src(templatesShared + './*')
        .pipe(es.map(function(file, cb) {
            let t = path.relative(templatesShared, file.path);
            let stat = fs.lstatSync(file.path);
            if(!stat.isDirectory()) {
                let f = fs.readFileSync(file.path);
                templateSharedFiles.push({name: t, content: f.toString()});
            }
            cb();
    }));
}
exports.getSharedFiles = getSharedFiles;

// Inject packages for package.json
let packageMap = [
    { name: "BulletGraph", package: `"igniteui-react-gauges"` },
    { name: "CategoryChart", package: `"igniteui-react-charts"`},
    { name: "DataChart", package: `"igniteui-react-charts"` },
    { name: "DataGrid", package: `"igniteui-react-grids"`},
    { name: "DataGridBindingRemoteData", package: `"igniteui-react-datasources"`},
    { name: "DataGridBindingLiveData", package: `"igniteui-react-charts"`},
    { name: "DoughnutChart", package: `"igniteui-react-charts"`},
    // Check if Spreadsheet is used
    { name: "ExcelLibrary", package: `"igniteui-react-excel"`},
    { name: "ExcelLibraryCharts", package: `"igniteui-react-charts"`+ `:` + packageVersion + `,
    ` + `"igniteui-react-grids"`},
    { name: "ExcelLibrarySparklines", package: `"igniteui-react-grids"`},
    { name: "FinancialChart", package: `"igniteui-react-charts"`},
    // Check if Chart is used
    { name: "Map", package: `"igniteui-react-maps"`+ `:` + packageVersion + `,
    ` + `"igniteui-react-charts"`},
    { name: "LinearGauge", package: `"igniteui-react-gauges"`},
    { name: "PieChart", package: `"igniteui-react-charts"`},
    { name: "RadialGauge", package: `"igniteui-react-gauges"`},
    { name: "Sparkline", package: `"igniteui-react-charts"`},
    { name: "SparklineGrid", package: `"igniteui-react-grids"`},
    // Check if Excel, Chart Adapter is used
    { name: "Spreadsheet", package: `"igniteui-react-spreadsheet"` + `:` + packageVersion + `,
    ` + `"igniteui-react-excel"`},
    { name: "SpreadsheetAdapter", package: `"igniteui-react-spreadsheet-chart-adapter"`},
    { name: "TreeMap", package: `"igniteui-react-charts"`},
    { name: "ZoomSlider", package: `"igniteui-react-charts"`},
]

let dependencyMap = [
    { name: "BulletGraph", package: `"igniteui-react-gauges"` },
    { name: "CategoryChart", package: `"igniteui-react-charts"`},
    { name: "DataChart", package: `"igniteui-react-charts"` },
    { name: "DataGrid", package: `"igniteui-react-grids"`},
    { name: "DataGridBindingRemoteData", package: `"igniteui-react-grids", "igniteui-react-datasources"`},
    { name: "DataGridBindingLiveData", package: `"igniteui-react-grids", "igniteui-react-charts`},
    { name: "DoughnutChart", package: `"igniteui-react-charts"`},
    // Check if Spreadsheet is used
    { name: "ExcelLibrary", package: `"igniteui-react-excel"`},
    { name: "ExcelLibraryCharts", package: `"igniteui-react-charts", "igniteui-react-grids"`},
    { name: "ExcelLibrarySparklines", package: `"igniteui-react-grids"`},
    { name: "FinancialChart", package: `"igniteui-react-charts"`},
    // Check if Chart is used
    { name: "Map", package: `"igniteui-react-maps"` + `,
    ` + `"igniteui-react-charts"`},
    { name: "LinearGauge", package: `"igniteui-react-gauges"`},
    { name: "PieChart", package: `"igniteui-react-charts"`},
    { name: "RadialGauge", package: `"igniteui-react-gauges"`},
    { name: "Sparkline", package: `"igniteui-react-charts"`},
    { name: "SparklineGrid", package: `igniteui-react-grids`},
    // Check if Excel, Chart Adapter is used
    { name: "Spreadsheet", package: `"igniteui-react-spreadsheet"` + `,
    ` + `"igniteui-react-excel"`},
    { name: "SpreadsheetAdapter", package: `"igniteui-react-spreadsheet-chart-adapter"`+ `,
    ` + `"igniteui-react-excel"`},
    { name: "TreeMap", package: `"igniteui-react-charts"`},
    { name: "ZoomSlider", package: `"igniteui-react-charts"`},
]

function getPackageNames(additionalDependencies, fileName) {
    let dependencies = [];
    for (let i = 0; i < packageMap.length; i++) {
        let currPackage = packageMap[i];
        if (fileName.indexOf(currPackage.name) === 0) {

            if (dependencies.indexOf(currPackage.package) === -1) {
                dependencies.push(currPackage.package)
            }
        }
        if (additionalDependencies && additionalDependencies.indexOf(currPackage.name) >= 0) {
            if (dependencies.indexOf(currPackage.package) === -1) {
                dependencies.push(currPackage.package)
            }
        }
    }
    return dependencies;
}

function getDependencyNames(additionalDependencies, fileName) {
    let dependencies = [];
    for (let i = 0; i < dependencyMap.length; i++) {
        let currPackage = dependencyMap[i];
        if (fileName.indexOf(currPackage.name) === 0) {

            if (dependencies.indexOf(currPackage.package) === -1) {
                dependencies.push(currPackage.package)
            }
        }
        if (additionalDependencies && additionalDependencies.indexOf(currPackage.name) >= 0) {
            if (dependencies.indexOf(currPackage.package) === -1) {
                dependencies.push(currPackage.package)
            }
        }
    }
    return dependencies;
}

function getSharedComponent(additionalComponent, fileName) {
    let component = [];
    for (let i = 0; i < sharedComponent.length; i++) {
        let currComponent = sharedComponent[i]
        if (fileName.indexOf(currComponent.name) === 0) {

            if (css.indexOf(currComponent.component) === -1) {
                css.push(currComponent.component)
                //console.log(css);
            }
        }
    }

    return css;
}

// * Parse sample folders with templates.
// Read manifest file and update files respectfully.
// Move sample file into src folder
function scripts(cb) {
    gulp.src(scriptsPath + "**/manifest.json")
    .pipe(es.map(function(file, cb2) {
        let manifestContent = fs.readFileSync(file.path);
        let m = manifestContent.toString();
        let manifest = JSON.parse(manifestContent.toString());
        let sampleName = manifest.sampleName;
        let dependencies = manifest.additionalDependencies;
        let sharedFiles = manifest.sharedFiles;

        // Move Sample file to src folder
        let sampleRootName = sampleName + '.tsx';
        let sampleFile = file.dirname + '\\' + sampleRootName;
        let sampleDest = file.dirname + '\\' + 'src';

        //Discover imports / iterate templates shared files
        if(fs.existsSync(sampleFile)) {

            let f = fs.readFileSync(sampleFile);

            let readFile = f.toString();
            sharedFiles = `[`;

            let isFirst = true;
            //console.log(templateSharedFiles);
            for(let i = 0; i < templateSharedFiles.length; i++)
            {
                let fileName = path.parse(templateSharedFiles[i].name).name;

                if(readFile.includes(fileName))
                {
                    if(isFirst === true) {
                        sharedFiles += `"${templateSharedFiles[i].name}"`;
                    }
                    else {
                        sharedFiles += `, "${templateSharedFiles[i].name}"`;
                    }
                    isFirst = false;

                    //gulp copy
                    gulp.src("./templates-shared/" + templateSharedFiles[i].name)
                    .pipe(gulp.dest(file.dirname + "/src"));

                }
            }

            sharedFiles += `]`;

            // general style css
            let isStylesCssContent = readFile.includes('import "../styles.css";');
            if(isStylesCssContent === true) {
                gulp.src("./src/samples/styles.css")
                .pipe(gulp.dest(file.dirname))
            }

            // move and delete sample
            gulp.src(sampleFile)
            .pipe(replace("./pager/", "./"))
            .pipe(replace("../tree-map/", "./"))
            .pipe(replace("../data-chart/", "./"))
            .pipe(replace('../../utilities/', './'))
            .pipe(replace('../../excel-library/', './'))
            .pipe(replace('../excel-library/', './') )
            .pipe(replace('../../components/', './'))
            .pipe(replace('../../', './'))
            .pipe(gulp.dest(sampleDest))
            .on('end', function() {
                del(sampleFile);
            });
        }



        // Add Common Dependency
        let packageNames = getPackageNames(dependencies, sampleName);
        let dependencyNames = getDependencyNames(dependencies, sampleName);
        let packageString = `"igniteui-react-core":` + packageVersion + `,
        `;

        let allPackages;
        // Add Additional Dependencies
        dependencies = dependencies.replace("@@AdditionalDependencies", "");
        for (let i = 0; i< packageNames.length; i++) {
            packageString += `${packageNames[i]}` + dependencies + `:` + packageVersion +`,
            `;
            allPackages = `[` + `${dependencyNames[i]}`  + dependencies + `]`;

        }
        // Parse template files. Update build flags
        for (let i = 0; i < templateFiles.length; i++) {

            let currTemplate = templateFiles[i];
            let newContent = currTemplate.content.replace(/@@SampleName/gm, sampleName);
            newContent = newContent.replace(/@@Dependencies/gm, packageString);
            let ind = currTemplate.name.lastIndexOf("\\");
            let pathPath = currTemplate.name.substr(0, ind);
            fs.mkdirSync(file.dirname + "/" + pathPath, {recursive: true});
            fs.writeFileSync(file.dirname + "/" + currTemplate.name, newContent);
        }

        // Update manifest
        let currTemplate = m;
        let updateManifest = currTemplate.replace("\"@@AdditionalDependencies\"", allPackages)
                                         .replace("\"@@SharedFiles\"", sharedFiles);
        fs.writeFileSync(file.dirname + "/" + "manifest.json", updateManifest);
        cb2();
    }));
    cb();
}

function scriptSharedFiles(cb) {}

function scriptSharedData(cb){}

function scriptSharedComponent(cb){}

exports.scripts = gulp.series(getTemplates, scripts);
exports.default = gulp.series(pack, scripts);
exports.all = gulp.series(pack,
     getTemplates,
     getSharedFiles,
     scripts);