// let gulp = require('gulp');
// let rename = require('gulp-rename');
// let fs = require('fs.extra');
// let path = require('path');
// let flatten = require('gulp-flatten');
// let del = require('del');
// let es = require('event-stream');
// let shell = require('gulp-shell');
// let replace = require('gulp-replace');
// let contains = require('gulp-contains');

// let browserRootPath = "./tmp";
// let samplesRootPath = "../samples";
// // let repoRootPath = "C:/REPOS/GitInternalDocs/igniteui-react-examples"
// let repositoryName = "igniteui-react-examples";

// // var igConfig = require('./tasks/gulp-config.js')
// // var TransformerFile = require('./tasks/Transformer2.ts')

// function log(msg) {
//     console.log('gulp-browser.ts ' + msg);

// }
// log('loaded');


// // eval(require('typescript')
// //     .transpile(require('fs')
// //     .readFileSync("./tasks/Transformer.ts").toString()));

// // gulp.task('task', () => console.log('task default'));

// var transformerFile = null;
// // var transformer: Transformer = null;
// var transformer = null;

// function initTransformer() {
//     if (transformerFile == null) {
//         log('initTransformer');
//         // transformerFile = require('./tasks/Transformer');
//         // transformerFile = require('./src/tasks/Transformer');
//         // transformerFile = require('./src/tasks/Transformer');
//         // transformer = new transformerFile.Transformer();

//         // transformer = new transformerFile.Transformer();
//         transformer = new Transformer();
//         transformer.test();


//         // docs = require("./browserConfig.json");
//     }
// } exports.initTransformer = initTransformer;

// function task1(cb) {
//     log('task1  ');
//     cb();
// } exports.task1 = task1;

// function task2(cb) {
//     log('task2  ');
//     cb();
// } exports.task2 = task2;

// var sampleFolders = [];

// function getSampleFolders(cb) {
//     // clean();
//     // initTransformer();
//     log('getSampleFolders ' + samplesRootPath);
//     gulp.src([
//         // samplesRootPath + '/excel-library/**',
//         // samplesRootPath + '/excel-library/**/*',
//         // samplesRootPath + '/**/**/**/**/Excel*.tsx',
//         samplesRootPath + '/**/readme.md',
//         // samplesRootPath + '/*.tsx',
//         // samplesRootPath + '/**/**/*',
//         // samplesRootPath + '/maps/**',
//         // samplesSourcePath + '/maps/**/*.tsx',
//     ])
//     // .pipe(flatten({ "includeParents": -1 }))
//     .pipe(es.map(function(file, cb2) {
//         // let filePath = file.dirname + "\\" + file.basename;
//         // let fileDir = Transformer.getRelative(filePath);
//         // log(' ' + file.basename);
//         // let item = '..' + file.dirname.replace(repoRootPath, '');
//         let item = file.dirname + '/' + file.basename;
//         log(' ' + item);
//         // log(' ' + file.basename);
//         // return item;
//         cb2(null, file);
//     }))
//     .on("end", function() {
//         cb();
//     });

// } exports.getSampleFolders = getSampleFolders;

// // function defaultTask(cb) {
// //     // del.sync(browserRootPath + "/**/*.*", {force:true});
// //     // del.sync(browserTargetPath);
// //     console.log('defaultTask');
// //     let str = "";

// //     cb();
// // } exports.default = defaultTask;

// function updateSamples(cb) {
// //     // del.sync(browserRootPath + "/**/*.*", {force:true});
// //     // del.sync(browserTargetPath);
// //     log('updateSamples')
//     initTransformer();
//     getSampleFolders(cb);
// //     log('updateSamples end')
//     // gulp.series(initTransformer, getSampleFolders, initTransformer);
//         cb();

// } exports.updateSamples = updateSamples;

// // exports.updateSamples = updateSamples = gulp.series(initTransformer, getSampleFolders)

// function dirSamples(cb) {
//     // clean();
//     // initTransformer();
//     log('dirSamples()');
//     return gulp.src([
//         // samplesRootPath + '/excel-library/**',
//         // samplesRootPath + '/excel-library/**/*',
//         samplesRootPath + '/**/**/**/**/Excel*.tsx',
//         // samplesRootPath + '/maps/**',
//         // samplesSourcePath + '/maps/**/*.tsx',
//     ])
//     // .pipe(flatten({ "includeParents": -1 }))
//     .pipe(es.map(function(file, cb2) {
//         let filePath = file.dirname + "\\" + file.basename;
//         // let fileDir = Transformer.getRelative(filePath);
//         log(' ' + file.basename);
//         // let item = '..' + file.dirname.replace(repoRootPath, '');
//         // item += '/' + file.basename;
//         // log(' ' + item);
//         // log(' ' + file.basename);
//         // return item;
//         // cb2();
//     }));

//     // cb();
// } exports.dirSamples = dirSamples;


// // class Transformer {

// //     // public static repositoryName = "igniteui-react-examples";

// //     public test() {
// //         // console.log("Transformer test ");
// //     }

// //     public static getRelative(filePath: string): string {
// //         if (filePath.indexOf(repositoryName) > -1) {
// //             return filePath.split(repositoryName)[1];
// //         }
// //         console.log("failed on getRelative " + filePath);
// //         return filePath;
// //     }
// // }