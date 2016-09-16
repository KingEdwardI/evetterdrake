var gulp = require('gulp');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var del = require('del');
var watch = require('gulp-watch');
var pug = require('gulp-pug');

gulp.task("default", ["clean", "pug", "files"]);

// pipe the .pug files through the pug compiler and save them as html in the public folder
gulp.task("pug", ["clean"], function() {
  return gulp.src('./pug-files/*.pug')
  .pipe(pug())
  .pipe(gulp.dest('./public/'));
});

// remove any html files in the public folder
gulp.task(
	'clean',
	function () {
	del('./public/*.html');
  return true;
	}
);


gulp.task(
	'files',
	['clean', 'pug'],
	function () {
		return gulp
			.src([
				'./pug-files/*.html',
        './public/*.html'
			])
			.pipe(gulp.dest('./public'));
	}
);

// watch the pug-files folder for changes being saved.
gulp.task(
	'watch',
	function () {
		gulp.start('default');
		watch([
			'./pug-files/*',
		],
		function (events) {
			gulp.start('default');
		});
	}
);
