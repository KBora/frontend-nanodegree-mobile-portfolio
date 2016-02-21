var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('default', ['copy-html'], function() {
  // place code for your default task here
  browserSync.init({
		server: './dist'
	});
});


gulp.task('copy-html', function() {
	gulp.src('./src/*.html' )
		.pipe(gulp.dest('./dist'));
});


