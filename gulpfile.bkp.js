// https://css-tricks.com/gulp-for-beginners/

var gulp = require('gulp');
var sass = require('gulp-sass');
var cache = require('gulp-cache');
var del = require('del');
var runSequence = require('run-sequence');
var imagemin = require('gulp-imagemin');
var cssnano = require('gulp-cssnano');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var browserSync = require('browser-sync').create();

gulp.task('task-name', function (csallback) {
    runSequence('task-one', 'task-two', 'task-three', callback);
});

gulp.task('images', function () {
    return gulp.src('app/images/**/*.+(png|jpg|jpeg|gif|svg)')
        // Caching images that ran through imagemin
        .pipe(cache(imagemin({
            interlaced: true
        })))
        .pipe(gulp.dest('dist/images'))
});

gulp.task('useref', function () {
    return gulp.src('app/*.html')
        .pipe(useref())
        .pipe(gulpIf('*.js', uglify()))
        // Minifies only if it's a CSS file
        .pipe(gulpIf('*.css', cssnano()))
        .pipe(gulp.dest('dist'))
});

gulp.task('task-name', function () {
    // Stuff here
});

gulp.task('fonts', function () {
    return gulp.src('app/fonts/**/*')
        .pipe(gulp.dest('dist/fonts'))
})

gulp.task('browserSync', function () {
    browserSync.init({
        server: {
            baseDir: 'app'
        },
    })
})

gulp.task('sass', function () {
    return gulp.src('app/scss/**/*.scss') // Gets all files ending with .scss in app/scss
        .pipe(sass())
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({
            stream: true
        }))
});

gulp.task('clean:dist', function () {
    return del.sync('dist');
})

gulp.task('watch', ['browserSync', 'sass'], function () {
    // ... watchers
})

gulp.task('build', [`clean`, `sass`, `useref`, `images`, `fonts`], function () {
    console.log('Building files');
})


gulp.task('default', function (callback) {
    runSequence(
        [
            'sass',
            // 'browserSync',
            // 'watch'
        ],
        console.log(callback)
    )
})