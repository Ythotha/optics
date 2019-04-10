var gulp = require ('gulp');
var	less = require('gulp-less');
var path = require('path');
var autoprefixer = require('gulp-autoprefixer');
let cleanCSS = require('gulp-clean-css');
var concat = require('gulp-concat');
var browserSync = require('browser-sync').create();


function styles() {
    return gulp.src('less/**/style.less')
        .pipe(less({
            paths: [ path.join(__dirname, 'less', 'includes') ]
        }))
        .pipe(autoprefixer({browsers: ['last 2 versions'], cascade: false}))
        //.pipe(cleanCSS({level: 2}))
        .pipe(gulp.dest('css/'))
        .pipe(browserSync.stream());
}

function res() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch('./less/**/*.less', styles);
    gulp.watch("./*.html").on('change', browserSync.reload);
}

gulp.task('styles', styles);
gulp.task('res', res);

/*gulp.task('scripts', function() {
    return gulp.src('./less/blocks/!*.less')
        .pipe(concat('style.less'))

        .pipe(less({
            paths: [ path.join(__dirname, 'less', 'includes') ]
        }))
        .pipe(autoprefixer({browsers: ['last 2 versions'], cascade: false}))

        .pipe(gulp.dest('./dist/'));
});*/


gulp.task('default', gulp.series('styles', 'res'));