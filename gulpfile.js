var gulp = require('gulp');

var autoprefixer = require('gulp-autoprefixer');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');


gulp.task('sass', function () {
	return gulp.src('scss/test.scss')
		.pipe(sourcemaps.init())
		.pipe(sass()) // Converts Sass to CSS with gulp-sass
		.pipe(autoprefixer({
			browsers: ['last 2 versions'],
		})) // Autoprefix CSS with gulp-autoprefixer
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('css'))
		.pipe(gulp.dest('docs/css'));
});
