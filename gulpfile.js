
let gulp = require('gulp');

function log(msg) {
    console.log('gulpfile.js ' + msg);
}

var samples = require('./tasks/gulp-samples.js')
// var browser = require('./tasks/gulp-browser.js')

// function updateSamples(cb) {
//     eval(require('typescript')
//     .transpile(require('fs')
//     .readFileSync("./tasks/gulp-browser.ts").toString()));

//     getSampleFolders(cb);
//     // cb();
// } exports.updateSamples = updateSamples;

// exports.updateSamples = updateSamples = gulp.series(getSampleFolders, task2);
// exports.updateSamples = updateSamples = gulp.series(browser.task1, browser.dirSamples, browser.task2);
exports.updateSamples = updateSamples = gulp.series(
    samples.getSamples,
    samples.updateReadme,
    samples.updatePackages,
    // samples.task2
    );

function updateSamples2(cb) {

    eval(require('typescript')
        .transpile(require('fs')
        .readFileSync("./tasks/gulp-browser.ts").toString()));

    // eval(require('typescript')
    //         .transpile(require('fs')
    //         .readFileSync("./tasks/Transformer.ts").toString()));
    // var trans = new Transformer2();
    // trans.test();

    // log('calling updateSamples')
    // updateSamples(cb);
    dirSamples();
    cb();
 } exports.updateSamples2 = updateSamples2;

// function defaultTask(cb) {
//     log('default()');
//     // igBrowser.initTransformer();
//     // igBrowser.dirSamples(cb);
//     cb();
// }
exports.default = updateSamples


// function updateSamples(cb) {
//     // del.sync(browserRootPath + "/**/*.*", {force:true});
//     // del.sync(browserTargetPath);
//     log('updateSamples');
//     gulp-samples.updateReadme();
//     cb();
// } exports.updateSamples = updateSamples;