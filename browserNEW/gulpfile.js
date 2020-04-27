// eval(require('typescript')
//     .transpile(require('fs')
//     .readFileSync("./tasks/gulp-browser.ts").toString()));

function log(msg) {
    console.log('gulpfile.js ' + msg);
}

function task(cb) {
     // del.sync(browserPath + "/**/*.*", {force:true});
     // del.sync(browserTargetPath);
    log('task')


    eval(require('typescript')
        .transpile(require('fs')
        .readFileSync("./tasks/gulp-browser.ts").toString()));

    // eval(require('typescript')
    //         .transpile(require('fs')
    //         .readFileSync("./tasks/Transformer.ts").toString()));

    // var trans = new Transformer2();
    // trans.test();

    log('calling task2')
    task2();
    dirSamples();
    cb();
 } exports.task = task;

// function defaultTask(cb) {
//     log('default()');
//     // igBrowser.initTransformer();
//     // igBrowser.dirSamples(cb);
//     cb();
// } exports.default = defaultTask