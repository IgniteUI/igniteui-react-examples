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

let browserPath = "./tmp";
let samplesPath = "../samples";
// let repoRootPath = "C:/REPOS/GitInternalDocs/igniteui-react-examples"
let repoRootName = "igniteui-react-examples"
let repoRootPath = "C:\\REPOS\\GitInternalDocs\\igniteui-react-examples"

function log(msg) {
    console.log('gulp-browser.ts ' + msg);
}
log('loaded');

// gulp.task('task', () => console.log('task default'));

var transformerFile = null;
var transformer = null;

function initTransformer() {
    if (transformerFile == null) {
        log('initTransformer');
        // transformerFile = require('./tasks/Transformer');
        // transformerFile = require('./src/tasks/Transformer');
        // transformer = new transformerFile.Transformer();

        transformer = new Transformer();
        transformer.test();

        // docs = require("./browserConfig.json");
    }
} exports.initTransformer = initTransformer;

function task2(cb) {
    // del.sync(browserPath + "/**/*.*", {force:true});
    // del.sync(browserTargetPath);
    log('task2')
    initTransformer();
    log('task2 end')
    // cb();
} exports.task2 = task2;

function defaultTask(cb) {
    // del.sync(browserPath + "/**/*.*", {force:true});
    // del.sync(browserTargetPath);
    console.log('defaultTask');
    let str = "";

    cb();
} exports.default = defaultTask;


function dirSamples(cb) {
    // clean();
    // initTransformer();
    log('dirSamples()');
    return gulp.src([
        // samplesPath + '/excel-library/**',
        samplesPath + '/excel-library/**/*',
        // samplesPath + '/maps/**',
        // samplesSourcePath + '/maps/**/*.tsx',
    ])
    // .pipe(flatten({ "includeParents": -1 }))
    .pipe(es.map(function(file, cb2) {
        let filePath = file.dirname + "\\" + file.basename;
        let fileDir = Transformer.getRelative(filePath);
        log(' ' + fileDir);
        // let item = '..' + file.dirname.replace(repoRootPath, '');
        // item += '/' + file.basename;
        // log(' ' + item);
        // log(' ' + file.basename);
        // return item;
        // cb2();
    }));

    // cb();
} exports.dirSamples = dirSamples;


class Transformer {

    // public static repoRootName = "igniteui-react-examples";

    public test() {
        console.log("Transformer test ");
    }

    public static getRelative(filePath: string): string {
        if (filePath.indexOf(repoRootName) > -1) {
            return filePath.split(repoRootName)[1];
        }
        console.log("failed on getRelative " + filePath);
        return filePath;
    }
}