var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var imageResize = require('gulp-image-resize');
var rename = require('gulp-rename');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');

gulp.task('default', ['copy-html', 'copy-css', 'copy-img', 'generate-thumbnail'], function() {
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

gulp.task('copy-img', function() {
	gulp.src('./src/img/*' )
		.pipe(imagemin({
			progressive: true,
			svgoPlugins: [{removeViewBox: false}],
			use: [pngquant()]
		}))
		.pipe(gulp.dest('./dist/img'));
});


gulp.task('generate-thumbnail', function() {
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