var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('default', function() {
  // place code for your default task here
  browserSync.init({
		server: './'
	});
});