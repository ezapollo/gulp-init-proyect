// https://ilikekillnerds.com/2014/11/10-highly-useful-gulp-js-plugins-for-a-super-ninja-front-end-workflow/
// https://semaphoreci.com/community/tutorials/getting-started-with-gulp-js
var gulp = require('gulp');
var sass = require('gulp-sass');
// var sass = require('gulp-load-plugins');
var concat = require('gulp-concat');


// code fabi
gulp.task('styles', function () {
    gulp.src('app/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('app/css'))
});

gulp.task('watchCss', function () {
    gulp.watch('app/scss/**/*.scss', ['styles']);
});

gulp.task('watchJs', function () {
    console.log('start watchJs');
    gulp.watch('app/ts/**/*.js', ['scriptsJs']);
});


gulp.task('scriptsJs', function () {
    console.log('start scriptsJs');
    return gulp.src('app/js/*.js')
    .pipe(concat('all.js'))
    .pipe(gulp.dest('app/js'));
    console.log('end scriptsJs');
});


// gulp.task('sass', function (done) {
//     gulp.src(['src/**/*.scss'])
//         .pipe($.sass())
//         .on('error', $.sass.logError)
//         .pipe(gulp.dest(config.paths.dest))
//         .on('end', done);
// });



gulp.task('default', ['watchCss', 'watchJs']);