/* eslint-disable no-unused-vars */

var gulp = require('gulp');

console.log('============================================================');
// console.log('using gulpfile.js');
// require("./gulpfile-browser.js")();

function log(msg) {
    console.log('gulpfile.js ' + msg);
} log('loaded');


var igBrowser = require('./tasks/gulp-browser.js')

function defaultTask(cb) {
    log('default()');
    igBrowser.initTransformer();
    // igBrowser.dirSamples(cb);
    cb();
} exports.default = defaultTask