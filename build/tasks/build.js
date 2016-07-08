var gulp = require('gulp');
var runSequence = require('run-sequence');
var changed = require('gulp-changed');
var plumber = require('gulp-plumber');
var sourcemaps = require('gulp-sourcemaps');
var paths = require('../paths');
var assign = Object.assign || require('object.assign');
var notify = require('gulp-notify');
var pug = require('gulp-pug');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var browserSync = require('browser-sync');
var typescript = require('gulp-typescript');
var htmlmin = require('gulp-htmlmin');

// transpiles changed es6 files to SystemJS format
// the plumber() call prevents 'pipe breaking' caused
// by errors from other gulp plugins
// https://www.npmjs.com/package/gulp-plumber
var typescriptCompiler = typescriptCompiler || null;
gulp.task('build-system', function () {
    if (!typescriptCompiler) {
        typescriptCompiler = typescript.createProject('tsconfig.json', {
            "typescript": require('typescript')
        });
    }
    return gulp.src(paths.dtsSrc.concat(paths.source))
        .pipe(plumber({ errorHandler: notify.onError('Error: <%= error.message %>') }))
        .pipe(changed(paths.output, { extension: '.ts' }))
        .pipe(sourcemaps.init({ loadMaps: true }))
        .pipe(typescript(typescriptCompiler))
        .pipe(sourcemaps.write('.', { includeContent: false, sourceRoot: '/src' }))
        .pipe(gulp.dest(paths.output));
});

// copies changed pug files to the output directory
gulp.task('build-pug', function () {
    return gulp.src(paths.pug)
        .pipe(changed(paths.output, { extension: '.pug' }))
        .pipe(pug())
        .pipe(gulp.dest(paths.output));
});

// copies changed scss files to the output directory
gulp.task('build-sass', function () {
    return gulp.src(paths.scss)
        .pipe(changed(paths.output, { extension: '.scss' }))
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('styles.css'))
        .pipe(gulp.dest(paths.output))
        .pipe(browserSync.stream());
});

// this task calls the clean task (located
// in ./clean.js), then runs the build-system
// and build-html tasks in parallel
// https://www.npmjs.com/package/gulp-run-sequence
gulp.task('build', function (callback) {
    return runSequence(
        'clean',
        ['build-system', 'build-pug', 'build-sass'],
        callback
    );
});
