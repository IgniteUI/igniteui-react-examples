var gulp = require('gulp');
var del = require('del');

function log(msg) {
    console.log('gulp-samples.js ' + msg);
}
log('loaded');

function copyTemplates(cb) {
    log('copyTemplates');
    // cb();
}
exports.copyTemplates = copyTemplates;

// gulp.task('test', function () {
//     console.log('test browser');
//     // igBrowser.test();
// });