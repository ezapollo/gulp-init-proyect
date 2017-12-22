var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('styles', function() {
    gulp.src('app/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('app/css'))
});

gulp.task('watchCss',function(){

    gulp.watch('app/scss/**/*.scss',['styles']);
});

//Watch task
// gulp.task('default',function() {
//     gulp.watch('app/scss/**/*.scss',['styles']);
// });

gulp.task('default', ['watchCss']);