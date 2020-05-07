/* eslint-disable no-unused-vars */

// imports for gulp
let gulp = require('gulp');
let rename = require('gulp-rename');
let fs = require('fs.extra');
let path = require('path');
let flatten = require('gulp-flatten');
let del = require('del');
let es = require('event-stream');
let shell = require('gulp-shell');
let replace = require('gulp-replace');
let contains = require('gulp-contains');

// let sequence = require("run-sequence");
// let exec = require('child_process').exec;
// let cp = require('child_process');
// let browserSync = require('browser-sync').create();
// let autoprefixer = require('gulp-autoprefixer');
// let argv = require('yargs').argv;
// https://www.tutorialspoint.com/gulp/gulp_quick_guide.htm


// https://gulpjs.com/docs/en/getting-started/async-completion/
// https://stackoverflow.com/questions/36897877/gulp-error-the-following-tasks-did-not-complete-did-you-forget-to-signal-async
// series https://github.com/gulpjs/gulp/blob/master/docs/CLI.md
// tasks https://codeburst.io/switching-to-gulp-4-0-271ae63530c0
// gulp https://gulpjs.com/docs/en/api/concepts

function log(msg) {
    console.log('gulp-browser.js ' + msg);
}
log('loaded');

let browserRootPath = "./tmp";
let samplesRootPath = "../samples";
// let repoRootPath = "C:/REPOS/GitInternalDocs/igniteui-react-examples"
let repositoryName = "igniteui-react-examples"
let repoRootPath = "C:\\REPOS\\GitInternalDocs\\igniteui-react-examples"

function getRelative(filePath) {
    return filePath.split(repositoryName);
}

var transformerFile = null;
var transformer = null;

// function initTransformer() {
//     if (transformerFile == null) {
//         transformerFile = require('../src/tasks/Transformer');
//         transformer = new transformerFile.Transformer();
//         transformer.test("some file");

//         // docs = require("./browserConfig.json");
//     }
// } exports.initTransformer = initTransformer;

function clean(cb) {
    del.sync(browserRootPath + "/**/*.*", {force:true});
    // del.sync(browserTargetPath);
    // cb();
} exports.clean = clean;

function dirSamples(cb) {
    // clean();
    // initTransformer();
    log('dirSamples start');
    gulp.src([
        // samplesRootPath + '/excel-library/**',
        // samplesRootPath + '/**/**/**/**/Excel*.tsx',
        samplesRootPath + '/**/readme.md',
        // samplesRootPath + '/maps/**',
        // samplesSourcePath + '/maps/**/*.tsx',
    ])
    .pipe(flatten({ "includeParents": -1 }))
    .pipe(es.map(function(file, cb2) {
        // let item = '..' + file.dirname.replace(repoRootPath, '');
        // item += '/' + file.basename;
        // log(' ' + item);
        log(' ' + file.basename);
        // return item;
        // cb2();
        cb2(null, file);
    }))
    .on("end", function() {
        cb();
    })
    .on("error", (err) => {
        console.log("error in dirSamples");
        cb(err);
    });

} exports.dirSamples = dirSamples;

function task1(cb) {
    log('task1  ');
    cb();
} exports.task1 = task1;

function task2(cb) {
    log('task2  ');
    cb();
} exports.task2 = task2;

function copySamples(cb) {
    clean();
    log('copySamples()');
    return gulp.src([
        samplesRootPath + '/maps/**',
        // samplesSourcePath + '/maps/**/*.tsx',
    ])
    // .pipe(gulp.dest(browserRootPath))
    .pipe(flatten({ "includeParents": -1 }))
    .pipe(es.map(function(file, cb2) {
        log(' ' + file.basename);
        return file;
    }));

    // cb();
} exports.copySamples = copySamples;

// gulp.task('test', function () {
//     console.log('test browser');
//     // igBrowser.test();
// });