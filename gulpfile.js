var gulp = require ('gulp');
var	less = require('gulp-less');
var path = require('path');
var autoprefixer = require('gulp-autoprefixer');
let cleanCSS = require('gulp-clean-css');

function styles() {
    return gulp.src('less/**/style.less')
        .pipe(less({
            paths: [ path.join(__dirname, 'less', 'includes') ]
        }))
        .pipe(autoprefixer({browsers: ['last 2 versions'], cascade: false}))
        .pipe(cleanCSS({level: 2}))
        .pipe(gulp.dest('css/'));
}

function res() {
    gulp.watch('less/**/*.less', styles);
}

gulp.task('styles', styles);
gulp.task('res', res);


gulp.task('default', gulp.series('styles', 'res'));