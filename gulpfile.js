// https://css-tricks.com/gulp-for-beginners/

var gulp = require('gulp');
var cache = require('gulp-cache');
var del = require('del');

gulp.task('images', function () {
    return gulp.src('app/images/**/*.+(png|jpg|jpeg|gif|svg)')
        // Caching images that ran through imagemin
        .pipe(cache(imagemin({
            interlaced: true
        })))
        .pipe(gulp.dest('dist/images'))
});

var imagemin = require('gulp-imagemin');

gulp.task('task-name', function () {
    // Stuff here
});

gulp.task('fonts', function () {
    return gulp.src('app/fonts/**/*')
        .pipe(gulp.dest('dist/fonts'))
})


gulp.task('clean:dist', function () {
    return del.sync('dist');
})


gulp.task('watch', ['browserSync', 'sass'], function () {
    // ... watchers
})


gulp.task('build', [`clean`, `sass`, `useref`, `images`, `fonts`], function () {
    console.log('Building files');
})