var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var imageResize = require('gulp-image-resize');
var rename = require('gulp-rename');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');
var uglify = require('gulp-uglify');

gulp.task('default', [
	'copy-html','copy-css', 'copy-js', 'copy-img', 'generate-pizza-thumbnail', 
	'copy-pizza-html', 'copy-pizza-css', 'copy-pizza-js', 'copy-pizza-img', 'generate-pizza-medium'], function() {
	// place code for your default task here
		browserSync.init({
			server: './dist'
		});
});

gulp.task('copy-html', function() {
	gulp.src('./src/*.html' )
		.pipe(gulp.dest('./dist'));
});


gulp.task('copy-css', function() {
	gulp.src('./src/css/*.css' )
		.pipe(gulp.dest('./dist/css'));
});

gulp.task('copy-js', function() {
	gulp.src('./src/js/*.js' )
		.pipe(uglify())
		.pipe(gulp.dest('./dist/js'));
});

gulp.task('copy-img', function() {
	gulp.src('./src/img/*' )
		.pipe(imagemin({
			progressive: true,
			svgoPlugins: [{removeViewBox: false}],
			use: [pngquant()]
		}))
		.pipe(gulp.dest('./dist/img'));
});

gulp.task('generate-pizza-thumbnail', function() {
	gulp.src('./src/views/images/pizzeria.jpg')
		.pipe(rename('pizzeria-thumbnail.jpg'))
		.pipe(imageResize({
			width : 115
		}))
		.pipe(imagemin({
			progressive: true,
			svgoPlugins: [{removeViewBox: false}],
			use: [pngquant()]
		}))
		.pipe(gulp.dest('./dist/views/images'));
});

gulp.task('copy-pizza-html', function() {
	gulp.src('./src/views/*.html' )
		.pipe(gulp.dest('./dist/views'));
});

gulp.task('copy-pizza-css', function() {
	gulp.src('./src/views/css/*.css' )
		.pipe(gulp.dest('./dist/views/css'));
});

gulp.task('copy-pizza-js', function() {
	gulp.src('./src/views/js/*.js' )
		//.pipe(uglify())
		.pipe(gulp.dest('./dist/views/js'));
});

gulp.task('copy-pizza-img', function() {
	gulp.src('./src/views/images/*' )
		.pipe(imagemin({
			progressive: true,
			svgoPlugins: [{removeViewBox: false}],
			use: [pngquant()]
		}))
		.pipe(gulp.dest('./dist/views/images'));
});

gulp.task('generate-pizza-medium', function() {
	gulp.src('./src/views/images/pizzeria.jpg')
		.pipe(rename('pizzeria-medium.jpg'))
		.pipe(imageResize({
			width : 600
		}))
		.pipe(imagemin({
			progressive: true,
			svgoPlugins: [{removeViewBox: false}],
			use: [pngquant()]
		}))
		.pipe(gulp.dest('./dist/views/images'));
});
