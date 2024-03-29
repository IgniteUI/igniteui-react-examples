/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */

let gulp = require('gulp');

function log(msg) {
    console.log('gulpfile.js ' + msg);
}

var sb = require('./tasks/gulp-samples.js')

// exports.updateSamples = updateSamples = gulp.series(
//     sb.lintSamples,
//     sb.getSamples,
//     sb.updateReadme,
//     // sb.updateIndex,
//     sb.updateSharedFiles,
// );

exports.updateReadme = updateReadme = gulp.series(
    sb.getSamples,
    sb.updateReadme,
);

exports.getSamples = getSamples = gulp.series(
    sb.getSamples,
);

exports.simplifySamples = simplifySamples = gulp.series(
    sb.getSamples,
    sb.simplifySamples,
);

exports.updateSharedFiles = updateSharedFiles = gulp.series(
    sb.getSamples,
    sb.updateSharedFiles,
);

exports.updateBrowser = updateBrowser = gulp.series(
    sb.logPackages,
    sb.updateVersion,
    sb.getSamples,
    sb.copySamples,
    sb.updateCodeViewer,
    sb.updateReadme,
    // sb.copyPackageJson,
);

exports.updateVersion = updateVersion = sb.updateVersion;

// exports.default = updateBrowser;

exports.logPackages    = sb.logPackages;
exports.logPublicFiles = sb.logPublicFiles;
exports.logSourceFiles = sb.logSourceFiles;
exports.logUniqueFiles = sb.logUniqueFiles;
exports.logRootFiles   = sb.logRootFiles;
exports.lintSamples    = sb.lintSamples;
exports.verifyBuild    = sb.verifyBuild;

exports.logRoutes = logRoutes = gulp.series(
    sb.getSamples,
    sb.logRoutes,
);

exports.logSandboxUrls = logSandboxUrls = gulp.series(
    sb.getSamples,
    sb.logSandboxUrls,
);

exports.updateCodeViewer = updateCodeViewer = gulp.series(
    sb.getSamples,
    sb.updateCodeViewer
);

exports.updateIG = updateIG = sb.updateIG

exports.cleanupSamples = cleanupSamples = sb.cleanupSamples
