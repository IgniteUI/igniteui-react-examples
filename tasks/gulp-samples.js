let gulp = require('gulp');
// let gSort = require('gulp-sort');
let rename = require('gulp-rename');
let fs = require('fs.extra');
let path = require('path');
let flatten = require('gulp-flatten');
let del = require('del');
let es = require('event-stream');
let shell = require('gulp-shell');
let replace = require('gulp-replace');
let contains = require('gulp-contains');

var igConfig = require('./gulp-config.js')
// var platform = "React";
// var igConfig = require('./gulp-config.js')[platform];

eval(require('typescript')
.transpile(require('fs')
.readFileSync("./tasks/Transformer.ts").toString()));

function log(msg) {
    console.log('gulp-samples.js ' + msg);
}
log('loaded');

// stores relative paths all sample, e.g. ../samples/maps/geo-map/navigation
var sampleFolders = [];

// var sampleSource = igConfig.samplesRootPath + '/**/**/package.json';
// var sampleSource = igConfig.samplesRootPath + '/excel/**/package.json';
// var sampleSource = igConfig.samplesRootPath + '/maps/**/package.json';
var sampleSource = igConfig.samplesRootPath + '/tests/**/package.json';

// this variable stores detailed information about all samples in ./samples/ folder
var samples = [];

function getSamples(cb) {

    samples = [];

    gulp.src([
        sampleSource,
    ])
    // .pipe(gSort( { asc: false } ))
    .pipe(es.map(function(samplePackage, sampleCallback) {

        let sampleFolder = Transformer.getRelative(samplePackage.dirname);
        // log(sampleFolder);

        let sampleFiles = [];
        gulp.src([sampleFolder + "/**"])
        .pipe(flatten({ "includeParents": -1 }))
        // .pipe(gSort( { asc: false } ))
        .pipe(es.map(function(file, fileCallback) {
            let fileDir = Transformer.getRelative(file.dirname);
            sampleFiles.push(fileDir + "/" + file.basename);
            fileCallback(null, file);
        }))
        .on("end", function() {
            // log(sampleFolder);

            let sampleInfo = Transformer.getSampleInfo(samplePackage, sampleFiles);
            samples.push(sampleInfo);

            sampleCallback(null, samplePackage);
        });

        // sampleCallback(null, sample);
    }))
    .on("end", function() {
        Transformer.sort(samples);
        Transformer.process(samples);
        // Transformer.verify(samples);
        // Transformer.print(samples);

        log('getSamples found ' + samples.length + " samples");

        // let last = samples[samples.length - 1];
        // log('package name ' + last.packageFileContent.name);
        // last.packageDependencies = Transformer.getDependencies(last);
        // log('packages \n' + last.packageFileContent.dependencies);
        // log('dependencies: \n' + last.packageDependencies);

        cb();
    });


} exports.getSamples = getSamples;


function updatePackages(cb) {

    // getting content of package.json file from templates
    let templatePackageFile = fs.readFileSync("./sample-template-files/package.json");
    let templatePackageJson = JSON.parse(templatePackageFile.toString());

    // getting content of package.json file from the browser
    let browserPackageFile = fs.readFileSync("./package.json");
    let browserPackageJson = JSON.parse(browserPackageFile.toString());

    Transformer.verifyPackage(browserPackageJson, templatePackageJson);


    let last = samples[samples.length - 1];

    // updating package.json files for all sample using a template
    let content = Transformer.getPackage(last, templatePackageJson);
    fs.writeFileSync("./sample-test-files/package2.json", content);

    cb();
} exports.updatePackages = updatePackages;


function updateReadme(cb) {

    var template = fs.readFileSync("./sample-template-files/ReadMe.md", "utf8");
    // Transformer.getReadme(template);

    for (const sample of samples) {

        let readme = Transformer.getReadme(sample, template);
        fs.writeFileSync("./sample-test-files/readme2.md", readme);

        break;
    }
    log('updateReadme  ');
    cb();
} exports.updateReadme = updateReadme;


function task1(cb) {
    log('task1  ');
    cb();
} exports.task1 = task1;

function task2(cb) {
    log('task2  ');
    cb();
} exports.task2 = task2;


// function updateReadme(cb) {

//     log('getSampleFolders in ' + igConfig.samplesRootPath);

//     gulp.src([
//         // samplesRootPath + '/excel-library/**',
//         // samplesRootPath + '/**/**/**/**/Excel*.tsx',
//         // igConfig.samplesRootPath + '/**/readme.md',
//         igConfig.samplesRootPath + '/**/package.json',
//         // samplesRootPath + '/maps/**',
//         // samplesSourcePath + '/maps/**/*.tsx',
//     ])
//     // .pipe(flatten({ "includeParents": -1 }))
//     .pipe(es.map(function(file, cb2) {
//         // let item = '..' + file.dirname.replace(repoRootPath, '');
//         // item += '/' + file.basename;
//         // log(' ' + item);
//         // log(file.dirname);
//         // log(file.dirname + '/' + file.basename);
//         // return item;
//         // cb2();
//         let relPath = Transformer.getRelative(file.dirname);
//         // log(relPath);

//         sampleFolders.push(relPath);
//         cb2(null, file);
//     }))
//     .on("end", function() {

//         log('getSampleFolders found ' + sampleFolders.length + " folders with samples");
//         cb();
//     })

// } exports.updateReadme = updateReadme;


// function updateReadme(cb) {
//     // del.sync(browserRootPath + "/**/*.*", {force:true});
//     // del.sync(browserTargetPath);
//     log('updateReadme');

//     getSampleFolders();

//     log('updateReadme end');
//     // cb();
// } exports.updateReadme = updateReadme;


// function getSampleFolders(cb) {

//     log('getSampleFolders in ' + igConfig.samplesRootPath);

//     gulp.src([
//         // samplesRootPath + '/excel-library/**',
//         // samplesRootPath + '/**/**/**/**/Excel*.tsx',
//         // igConfig.samplesRootPath + '/**/readme.md',
//         igConfig.samplesRootPath + '/**/package.json',
//         // samplesRootPath + '/maps/**',
//         // samplesSourcePath + '/maps/**/*.tsx',
//     ])
//     // .pipe(flatten({ "includeParents": -1 }))
//     .pipe(es.map(function(file, cb2) {
//         // let item = '..' + file.dirname.replace(repoRootPath, '');
//         // item += '/' + file.basename;
//         // log(' ' + item);
//         // log(file.dirname);
//         // log(file.dirname + '/' + file.basename);
//         // return item;
//         // cb2();
//         let relPath = Transformer.getRelative(file.dirname);
//         log(relPath);

//         sampleFolders.push(file.dirname);
//         cb2(null, file);
//     }))
//     .on("end", function() {

//         log('getSampleFolders found ' + sampleFolders.length + " folders with samples");
//         cb();
//     })

// } exports.getSampleFolders = getSampleFolders;
