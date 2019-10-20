var gulp = require('gulp');
var del = require('del');
var sass = require('gulp-sass');
var postcss = require('gulp-postcss');
var browsersync = require('browser-sync').create();
var autoprefixer = require('autoprefixer');
var cssnano = require('cssnano');
var inlinesource = require('gulp-inline-source');
var htmlmin = require('gulp-htmlmin');
// var image = require('gulp-image');
var webp = require('gulp-webp');
var sourcemaps = require('gulp-sourcemaps');

sass.compiler = require('node-sass');

var paths = {
    styles: {
      src: 'src/scss/*.scss',
      dest: 'site/css/'
    },
    img: {
        src: 'src/img/**/*',
        dest: 'site/img/'
    },
    html: {
        src: 'src/*.html',
        dest: 'site/'
    }
  };

var pcssplugins = [
    autoprefixer(),
    cssnano()
];

// BrowserSync
function browserSync(done) {
    browsersync.init({
        server: {
            baseDir: "./site/"
        },
        port: 3000
    });
    done();
}

// BrowserSync Reload
function browserSyncReload(done) {
    browsersync.reload();
    done();
}

function clean() {
    return del([ 'site' ]);
  }

function styles() {
    return gulp.src(paths.styles.src)
        .pipe(sass())
        .pipe(postcss(pcssplugins))
        .pipe(gulp.dest(paths.styles.dest))
        .pipe(browsersync.stream());
}

function stylesWatch() {
    return gulp.src(paths.styles.src)
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(paths.styles.dest))
        .pipe(browsersync.stream());
}

function img() {
    return gulp.src(paths.img.src)
    // .pipe(image())
    .pipe(gulp.dest(paths.img.dest));
}

function imgWebp() {
    return gulp.src(paths.img.src)
    // .pipe(image())
    .pipe(webp({quality: 100}))
    .pipe(gulp.dest(paths.img.dest));
}

function html() {
    return gulp.src(paths.html.src)
    .pipe(gulp.dest(paths.html.dest))
    .pipe(inlinesource())
    .pipe(htmlmin({
        collapseWhitespace: true,
        removeComments: true
    }))
    .pipe(gulp.dest(paths.html.dest));
}

function htmlWatch() {
    return gulp.src(paths.html.src)
    .pipe(gulp.dest(paths.html.dest));
}

// Watch files
function watchFiles() {
    gulp.watch(paths.styles.src, stylesWatch);
    gulp.watch(paths.html.src,
      gulp.series(htmlWatch, browserSyncReload)
    );
    gulp.watch(paths.img.src, img);
    gulp.watch(paths.img.src, imgWebp);
  }

var build = gulp.series(clean, styles, img, imgWebp, html);
var preWatch = gulp.series(clean, stylesWatch, img, imgWebp, htmlWatch);
var watchActual = gulp.parallel(watchFiles, browserSync);
var watch = gulp.series(preWatch, watchActual);

exports.watch = watch;
exports.default = build;