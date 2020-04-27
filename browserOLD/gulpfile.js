var gulp = require('gulp');

console.log('============================================================');
// console.log('using gulpfile.js');
// require("./gulpfile-browser.js")();

function log(msg) {
    console.log('gulpfile.js ' + msg);
}
log('loaded');

var igBrowser = require('./gulp-browser.js')
var igSamples = require('./gulp-samples.js')

function copySamples(cb) {
    log('copySamples()');
    igBrowser.copySamples(cb);
    // igSamples.copyTemplates(cb);
    cb();
} exports.copySamples = copySamples;

function defaultTask(cb) {
    log('default()');
    igBrowser.dirSamples(cb);
    cb();
} exports.default = defaultTask

// gulp.task('test2', function () {
//     console.log('test2 browser');

//     gulp.series(igBrowser.test);


// });

// exports.buildReact = buildReact = gulp.series(cleanReact, buildReactCore);
