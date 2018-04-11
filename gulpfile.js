/**
 * Created by wijay on 2016/11/21.
 */
var gulp = require('gulp'),
    sass = require('gulp-sass'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    cssmin=require('gulp-minify-css'),
    livereload=require('gulp-livereload');

//编译sass
gulp.task('sass',function () {
    gulp.src('./scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('css/'))
        .pipe(cssmin())
        .pipe(rename({suffix:'.min'}))
        .pipe(gulp.dest('css/'));
});

//合并压缩文件

gulp.task('scripts',function () {
    gulp.src('./js/index.js')
        .pipe(rename({suffix:'.min'}))
        .pipe(uglify())
        .pipe(gulp.dest('js/'));
});

//default

gulp.task('default',function () {
    gulp.start('sass','scripts');
});

//watch

gulp.task('watch',function () {
    gulp.watch('./scss/*.scss',['sass']);
    gulp.watch('./js/index.js',['scripts']);
    livereload.listen();
    gulp.watch(['*']).on('change',livereload.changed);
});