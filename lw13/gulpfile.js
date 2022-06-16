const gulp = require('gulp');
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
//minify html
const minifyHTML = require('html-minifier').minify;


gulp.task('compress_html', () => {
    minifyHTML(src('index.php'), {
        removeAttributeQuotes: true
    })
        .pipe(gulp.dest('dist'))
});
gulp.task( 'merge_css', () =>
    src([
        'styles/popUp-styles.css',
        'styles/form-styles.css'
    ])
        .pipe(concat('secStyle.css'))
        .pipe(dest('dist/css'))
);

gulp.task('compress_css', () => {
    return gulp.src('styles/*.css')
        .pipe(cleanCSS({}))
        .pipe(gulp.dest('dist'));
});
 
gulp.task('compress_js', function (cb) {
  const options = {};
 
  pump([
      gulp.src('scripts/*.js'),
      minify(options),
      gulp.dest('dist')
    ],
    cb
  );
})