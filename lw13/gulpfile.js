const gulp = require('gulp');
//var browserSync = require('browser-sync').create();
//minify js
const uglifyjs = require('uglify-js');
const composer = require('gulp-uglify/composer');
const pump = require('pump');
const minify = composer(uglifyjs, console);
//concat css
const { src, dest } = require('gulp');
const concat = require('gulp-concat');
//minify css
const cleanCSS = require('gulp-clean-css');


const cssBundle = () =>
    src([
        'src/css/bootstrap.css',
        'src/css/fontawesome.css',
        'src/css/brands.css',
        'src/css/solid.css',
        'src/css/carousel.css',
    ])
        .pipe(concat('styles.css'))
        .pipe(dest('dist/css'));
exports.cssBundle = cssBundle;

gulp.task('compress_css', () => {
    return gulp.src('styles/*.css')
        .pipe(cleanCSS({}))
        .pipe(gulp.dest('dist'));
});
 
gulp.task('compress_js', function (cb) {
  // the same options as described above
  const options = {};
 
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