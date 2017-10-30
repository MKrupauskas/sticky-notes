/**
 * Imports
 */

const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const useref = require('gulp-useref');
const uglify = require('gulp-uglify');
const gulpIf = require('gulp-if');
const cssnano = require('gulp-cssnano');
const imagemin = require('gulp-imagemin');
const cache = require('gulp-cache');
const del = require('del');
const runSequence = require('run-sequence');
const webpack = require('webpack-stream');

/**
 * Watchers
 */

gulp.task('watch', ['browserSync', 'sass'], () => {
  gulp.watch('app/scss/**/*.scss', ['sass']);
  gulp.watch('app/*.html', browserSync.reload);
  gulp.watch('app/js/**/*.js', browserSync.reload);
});

/**
 * Tasks
*/

gulp.task('sass', () => {
  return gulp
    .src('app/scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({
      stream: true,
    }));
});

gulp.task('browserSync', () => {
  browserSync.init({
    server: {
      baseDir: 'app',
    },
  });
});

gulp.task('useref', () => {
  return gulp
    .src('app/*.html')
    .pipe(useref())
    .pipe(gulpIf('*.js', uglify()))
    .pipe(gulpIf('*.css', cssnano()))
    .pipe(gulp.dest('dist'));
});

gulp.task('clean:dist', () => {
  return del.sync('dist');
});

gulp.task('build', (callback) => {
  runSequence('clean:dist', ['sass', 'useref', 'images'], callback);
});

gulp.task('webpack', () => {
  return gulp
    .src('app/js/main.js')
    .pipe(webpack())
    .pipe(gulp.dest('dist/'));
});

gulp.task('default', (callback) => {
  runSequence(['sass', 'webpack', 'browserSync', 'watch'], callback);
});
