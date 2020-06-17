const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const concat = require('gulp-concat');
const terser = require('gulp-terser');
const sourcemaps = require('gulp-sourcemaps');
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const autoprefixer = require('autoprefixer');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const { src, series, parallel, dest, watch } = require('gulp');

const jsPath = 'src/js/**/*.js';
const cssPath = 'src/css/**/*.css';
const sassPath = 'src/scss/**/*.scss';


function copyHtml() {
    return src('src/*.html').pipe(gulp.dest('dist'));
}

function imgTask() {
    return src('src/images/*').pipe(imagemin()).pipe(gulp.dest('dist/images'));
}

// function jsTask() {
//     return src(jsPath)
//         .pipe(sourcemaps.init())
//         .pipe(concat('all.js'))
//         .pipe(terser())
//         .pipe(sourcemaps.write('.'))
//         .pipe(dest('dist/assets/js'));
// }

// function cssTask() {
//     return src(cssPath)
//         .pipe(sourcemaps.init())
//         .pipe(concat('style.css'))
//         .pipe(postcss([autoprefixer(), cssnano()]))
//         .pipe(sourcemaps.write('.'))
//         .pipe(dest('dist/assets/css'));
// }


// ONLY FOR DEVELOPMENT
function sassTask() {
    return src(sassPath)
        .pipe(sass())
        .pipe(dest('src/css'))
        .pipe(browserSync.stream());
}


function watchTask() {
    watch([cssPath, jsPath, sassPath], { interval: 1000 }, sassTask);
}

// function watch() {
//     browserSync.init({
//         server: {
//             baseDir: './'
//         }
//     });
//     gulp.watch(sassPath, sassTask);
//     gulp.watch('src/*.html').on('change', browserSync.reload);
//     gulp.watch(jsPath, jsTask).on('change', browserSync.reload);
// }

exports.sassTask = sassTask;

// exports.jsTask = jsTask;
exports.imgTask = imgTask;
exports.default = series(
    parallel(copyHtml, imgTask, sassTask),
    watchTask
);
// exports.watch = watch;