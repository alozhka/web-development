var gulp = require('gulp');
//var browserSync = require('browser-sync').create();
//minifu js
var uglifyjs = require('uglify-js');
var composer = require('gulp-uglify/composer');
var pump = require('pump');
var minify = composer(uglifyjs, console);
//minify css
const cleanCSS = require('gulp-clean-css');

gulp.task('compress_css', () => {
    return gulp.src('styles/*.css')
        .pipe(cleanCSS({}))
        .pipe(gulp.dest('dist'));
});
 
gulp.task('compress_js', function (cb) {
  // the same options as described above
  var options = {};
 
  pump([
      gulp.src('scripts/*.js'),
      minify(options),
      gulp.dest('dist')
    ],
    cb
  );
});

/*gulp.task('serve', function(done) {

    browserSync.init({
        server: ""
    });

    gulp.watch("scripts/*.js", gulp.series('js'));
    gulp.watch("*.html").on('change', () => {
      browserSync.reload();
      done();
    });
  

    done();
});

gulp.task('default', gulp.series('js', 'serve'));*/