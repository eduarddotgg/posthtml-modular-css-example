var gulp = require('gulp');
var jade = require('gulp-jade');
var posthtml = require('gulp-posthtml');

gulp.task('jade', function() {
    var plugins = [
		require('posthtml-modular-css')({
            srcFolder: __dirname + '/webroot',
            outputCSS: './dist/style.css'
        })
    ];
    var options = {};

    return gulp.src('./webroot/index.jade')
        .pipe(jade())
        .pipe(posthtml(plugins, options))
        .pipe(gulp.dest('./dist/'))
});
