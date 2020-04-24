//imports for gulp
var gulp = require('gulp');
var rename = require('gulp-rename');
var fs = require('fs.extra');
var path = require('path');
var flatten = require('gulp-flatten');
var del = require('del');
const es = require('event-stream');
const shell = require('gulp-shell');
var replace = require('gulp-replace');
var contains = require('gulp-contains');
 
//package version
var packageVersion = '"^16.11.7"';
//additional dependencies
var addDependencies = [];
//globals
var scriptsPath = './github-react-samples/';
var templates = './templates-samples-browser/';
var templateFiles = [];
// components path
let componentsPath = '../samples/';

//**delete root** 
function clean(cb) {
    del.sync("./github-react-samples/**/*.*", {force:true});
    del.sync("./github-react-samples");
    cb();
}
exports.clean = clean;

//* Pack every sample into it's own dir.
function unpack() {

//match name of tsx and dest is root
return gulp.src(['./github/**/**/*.*',
 '!./github/**/**/index*.*'
])
.pipe(gulp.dest('./github-react-samples/src/samples/'))

}
exports.unpack = unpack;

//* move everything up a level then delete.
function moveup() {

    //match name of tsx and dest is root
    return gulp.src(['./github-react-samples/src/samples/**/**/*.tsx',
     './github-react-samples/src/samples/**/**/*.css', 
     './github-react-samples/src/samples/**/**/*.js',
      './github-react-samples/src/samples/**/**/*.ts',
      '!./github-react-samples/src/samples/**/**/styles.css' ])
    .pipe(flatten({ includeParents: 1}))
    .pipe(gulp.dest('./github-react-samples/src/samples'))
    .on('end', function(){
        del.sync(['./github-react-samples/src/samples/*/**',
        '!./github-react-samples/src/samples/*/*.tsx',
         '!./github-react-samples/src/samples/**/**/*.css',
          '!./github-react-samples/src/samples/**/**/*.js',
          '!./github-react-samples/src/samples/**/**/*.ts'],
           {force:true}) 
    })
}
exports.moveup = moveup;

//* Copy Template Files
function getConfigTemplates() {
    return gulp.src(templates + './**/*')
    .pipe(gulp.dest('./github-react-samples/'))
}
exports.getConfigTemplates = getConfigTemplates;

//Move Colorpicker.ts, LegendItem.ts, LegendItem.tsx, LegendOverlay.css, LegendOverlay.tsx, SourceInfo.css, SourceInfo.css
//to src/Components folder

//TODO
//Create the TOC
///read file structure 

//gulp recipe 


//Task #1
function getSamplesStructure(dir) {

    let componentsArray = [];
    let samplesArray = [];
    let srcFiles = [];
    let publicFiles = [];

    return fs.readdirSync(dir).map(componentName => {
        var componentPath = path.join(dir, componentName);
        componentsArray = componentsPath;
        return fs.readdirSync(componentPath).map(sampleName => {
            var samplePath = path.join(componentPath, sampleName);
            samplesArray = samplePath;
            //read src folder
            fs.readdirSync(samplePath + "\\src").map(sampleFile => {
                var srcPath = path.join(samplePath, samplePath + "\\src\\" + sampleFile);
                srcFiles = srcPath;               
                return srcPath;
              }) 

            //read public folder
            fs.readdirSync(samplePath + "\\public").map(sampleFile => {
                var publicPath = path.join(samplePath, samplePath + "\\public\\" + sampleFile);
                publicFiles = publicPath;
                return publicPath;
              }) 
          }) 
      })
}

// function getSampleFolders(componentFolder){
//     gulp.src(componentFolder + "/*")
// }
function getComponentFolders() {
    return gulp.src(componentsPath)
        .pipe(es.map(function(file, cb) {
            getSamplesStructure(componentsPath);
    }));
}

exports.getComponentFolders = getComponentFolders;

// Task #2
function createTOC() {
    let components = getComponentFolders()
    let toc = ``;
    let imports = ``;

    //loop through components
    //nested loop
    //sample names and folders
    //
            
        let samples = getSampleFolders(component);
        
        //for loop entries for toc
        
            //let routing path = sample
            //split sample name folder (camel case) to words (eg. category-chart-annoatations)

            //create routing path
            //create a display name
            //remove/skip first and second words and remaining word is display name

            //let sampleImport = "const sampleFolder = Loadable({ loader: () => import("../samples/{componentName}/{sampleFolder}"), loading: SampleLoading })"
            imports += sampleImport + "\n"
            //update import

        
    let file = imports + "\n" + toc;

    gulp.src.pipe(gulp.dest('./navigation/toc2.js/'))
}

//TODO - add getSampleFolders
exports.all = gulp.series(unpack, moveup, 
     getConfigTemplates
     );