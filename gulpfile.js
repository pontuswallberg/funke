var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function () {
	return gulp.src('scss/funke.scss')
		.pipe(sass()) // Converts Sass to CSS with gulp-sass
		.pipe(autoprefixer({
			browsers: ['last 2 versions'],
		})) // Autoprefix CSS with gulp-autoprefixer
		.pipe(gulp.dest('css'))
		.pipe(gulp.dest('docs/css'));
});
