
let gulp = require('gulp');

function log(msg) {
    console.log('gulpfile.js ' + msg);
}

var sb = require('./tasks/gulp-samples.js')

exports.updateSamples = updateSamples = gulp.series(
    sb.getSamples,
    sb.updateReadme,
    sb.updatePackages,
    sb.updateIndex,
    sb.updateSharedFiles,
);

exports.copySamples = copySamples = gulp.series(
    sb.getSamples,
    // sb.updateReadme,
    // sb.updatePackages,
    // sb.updateIndex,
    // sb.updateSharedFiles,
    sb.copySamples,
);

// exports.default = copySamples;

exports.logPublicFiles = sb.logPublicFiles;
exports.logSourceFiles = sb.logSourceFiles;
exports.logUniqueFiles = sb.logUniqueFiles;
exports.logRootFiles   = sb.logRootFiles;
exports.lintSamples    = sb.lintSamples;
