//----------------------------------------------------------------------
//  変数宣言
//----------------------------------------------------------------------
const gulp = require("gulp");
const loadPlugins = require("gulp-load-plugins");
const $ = loadPlugins();                                         //  purgecss,imagemin,plumber

//  dest
// const destSrc      = "./src/**/*.{html,scss,css,map}";         重くなるからやらない
const destSrc      = "./src/**/*.html";
const destDest     = "./dist";

//  purge
const purgeSrc     = "./dist/css/style.css";
const purgeContent = "./dist/*.html";
const purgeDest    = "./dist/css";

//  imagemin
const imageminSrc  = "./src/image/**/*.{png,jpg,JPG,gif,svg}";
const imageminDest = "./dist/image";

//  watch
const watchSrc     = "./src/**/*";

//  default

//----------------------------------------------------------------------
//  task処理
//----------------------------------------------------------------------
//  dest
gulp.task("dest", function (done) {
  gulp.src(destSrc)
      .pipe($.plumber())
      .pipe(gulp.dest(destDest));
  done();
});

//  purgecss
gulp.task("purge", function (done) {
  gulp.src(purgeSrc)
      .pipe($.plumber())
      .pipe($.purgecss({
          content: [purgeContent],
        })
      )
      .pipe(gulp.dest(purgeDest));
  done();
});

//  imagemin
gulp.task("imagemin", function (done) {
  gulp.src(imageminSrc)
      .pipe($.imagemin())
      .pipe(gulp.dest(imageminDest));
  done();
});

//----------------------------------------------------------------------
//  watch処理
//----------------------------------------------------------------------
//  watch
gulp.task("watch", function (done) {
  gulp.watch(watchSrc, gulp.series("dest"));
});

//----------------------------------------------------------------------
//  default処理
//----------------------------------------------------------------------
gulp.task("default", gulp.series("dest", "imagemin","watch"));

/************************************************************************/
/*  END OF FILE                                       									*/
/************************************************************************/
