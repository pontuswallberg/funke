var gulp = require('gulp');
var gutil = require('gulp-util');

var autoprefixer = require('gulp-autoprefixer');
var csso = require('gulp-csso');
var highlight = require('gulp-highlight');
var http = require('http-server');
var mustache = require("gulp-mustache");
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('dev', ['server', 'watch']);

gulp.task('server', function () {
	let server = http.createServer({
		root: '.',
	});
	server.listen(8000);
	gutil.log('Listening on http://localhost:8000/funke')
});

gulp.task('watch', ['sass', 'mustache'], function () {
	gulp.watch('scss/**/*.scss', ['sass']);
	gulp.watch('templates/**/*.html', ['mustache']);
});

gulp.task('sass', function () {
	return gulp.src('scss/{funke,hljs}.scss')
		.pipe(sourcemaps.init())
		.pipe(sass().on('error', sass.logError)) /// Converts Sass to CSS with gulp-sass
		.pipe(autoprefixer({
			browsers: ['last 2 versions'],
		})) // Autoprefix CSS with gulp-autoprefixer
		.pipe(csso())
		.pipe(sourcemaps.write('.'))
		// .pipe(gulp.dest('css'))
		.pipe(gulp.dest('docs/css'));
});

gulp.task('mustache', function () {
	return gulp.src('./templates/*.html')
		.pipe(mustache())
		.pipe(highlight())
		.pipe(gulp.dest('docs'));
})
