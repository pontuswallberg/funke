var gulp = require('gulp');

var autoprefixer = require('gulp-autoprefixer');
var csso = require('gulp-csso');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

let srcFile = 'scss/funke.scss';

gulp.task('watch', function () {
	gulp.watch(srcFile, ['sass']);
});

gulp.task('sass', function () {
	return gulp.src(srcFile)
		.pipe(sourcemaps.init())
		.pipe(sass()) // Converts Sass to CSS with gulp-sass
		.pipe(autoprefixer({
			browsers: ['last 2 versions'],
		})) // Autoprefix CSS with gulp-autoprefixer
		.pipe(csso())
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('css'))
		.pipe(gulp.dest('docs/css'));
});
