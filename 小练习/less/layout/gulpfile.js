var gulp = require('gulp'),
    less = require('gulp-less'),
    notify = require('gulp-notify'),
    plumber = require('gulp-plumber'),
    livereload = require('gulp-livereload'),
    sourcemaps = require('gulp-sourcemaps'),
    autoprefixer = require('gulp-autoprefixer'),
    cssmin = require('gulp-minify-css');

gulp.task('compileLess',function(){
    gulp.src(['./css/index.less','./css/public-mixin.less'])
        .pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(sourcemaps.write())
        .pipe(autoprefixer())
        .pipe(cssmin())
        .pipe(gulp.dest('./css'))
        .pipe(livereload())
})

gulp.task('watchLess',function(){
    livereload.listen();
    gulp.watch('./css/*.less',['compileLess']);
})