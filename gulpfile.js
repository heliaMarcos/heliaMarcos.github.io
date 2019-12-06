let gulpversion   = '4';

let gulp           = require('gulp'),
		gutil          = require('gulp-util' ),
		sass           = require('gulp-sass'),
		browserSync    = require('browser-sync'),
		concat         = require('gulp-concat'),
		uglify         = require('gulp-uglify'),
		cleanCSS       = require('gulp-clean-css'),
		htmlmin        = require('gulp-htmlmin'),
		rename         = require('gulp-rename'),
		del            = require('del'),
		imagemin       = require('gulp-imagemin'),
		cache          = require('gulp-cache'),
		autoprefixer   = require('gulp-autoprefixer'),
		notify         = require("gulp-notify"),
		rsync          = require('gulp-rsync');


let styles = () => {
	return gulp.src('./scss/**/*.scss')
	  .pipe(sass({outputStyle: 'expanded'}).on("error", notify.onError()))
    //.pipe(rename({suffix: '.min', prefix : ''}))
    .pipe(concat('style.min.css'))
    .pipe(gulp.dest('./css'))
    .pipe(browserSync.stream())
};

let scripts = () => {
	return gulp.src([
		'node_modules/uikit3/dist/js/uikit.min.js',
		'node_modules/uikit3/dist/js/uikit-icons.min.js',
		'js/main.js',
		])
	.pipe(concat('scripts.min.js'))
	.pipe(gulp.dest('./js'))
	.pipe(browserSync.reload({ stream: true }))
};

let html = () => {
	return gulp.src('./*.html')
	.pipe(browserSync.reload({ stream: true }))
};

let clean = () => {
	return del(['./dist/'])
};

let imgmin = () => {
	return gulp.src('./assets/**/*')
	.pipe(imagemin())
	.pipe(gulp.dest('./dist/assets'))
};


let buildHtml = () => {
	return gulp.src('./*.html')
	.pipe(htmlmin({collapseWhitespace: true}))
	.pipe(gulp.dest('./dist'))
};

let buildCss = () => {
	return gulp.src('./css/style.min.css')
	.pipe(autoprefixer(['last 15 versions']))
  .pipe(cleanCSS())
	.pipe(gulp.dest('./dist/css'))
};

let buildFiles = () => {
	return gulp.src([
	  './*.txt',
	  ]).pipe(gulp.dest('./dist'))
};

let buildJs = () => {
	return gulp.src('./js/scripts.min.js')
	.pipe(uglify())
	.pipe(gulp.dest('./dist/js'))
};


let watch = () => {
	browserSync.init({
		server: {
			baseDir: './'
		},
		notify: false,
	});
  gulp.watch('./scss/**/*.scss', styles);
	gulp.watch(['./node_modules/uikit/**/*.js', './js/main.js'], scripts);
  gulp.watch('./*.html', html);
};

gulp.task('styles', styles);
gulp.task('scripts', scripts);
gulp.task('clean', clean);
gulp.task('imgmin', imgmin);
gulp.task('buildHtml', buildHtml);
gulp.task('buildCss', buildCss);
gulp.task('buildFiles', buildFiles);
gulp.task('buildJs', buildJs);

if (gulpversion == 4) {

gulp.task('build', gulp.series(clean,
	                 gulp.parallel(buildHtml, buildCss, buildJs, buildFiles, imgmin))
);

gulp.task('default', gulp.series(watch, browserSync));
gulp.task('watch', gulp.series(watch, browserSync));

};


gulp.task('clearcache', () => { return cache.clearAll(); });
