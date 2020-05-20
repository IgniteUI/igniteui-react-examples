
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

//     getSampleFolderNames(cb);
//     // cb();
// } exports.updateSamples = updateSamples;

// exports.updateSamples = updateSamples = gulp.series(getSampleFolderNames, task2);
// exports.updateSamples = updateSamples = gulp.series(browser.task1, browser.dirSamples, browser.task2);
exports.updateSamples = updateSamples = gulp.series(
    samples.getSamples,
    samples.updateReadme,
    samples.updatePackages,
    samples.updateIndex,
    samples.updateSharedFiles,
);

exports.updateBrowser = updateBrowser = gulp.series(
    samples.getSamples,
    // samples.updateReadme,
    // samples.updatePackages,
    // samples.updateIndex,
    // samples.updateSharedFiles,
    samples.copySamples,
);

exports.default = updateSamples;

exports.logPublicFiles = samples.logPublicFiles;
exports.logSourceFiles = samples.logSourceFiles;
exports.logUniqueFiles = samples.logUniqueFiles;
exports.logRootFiles   = samples.logRootFiles;
