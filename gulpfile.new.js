"use strict";

// =========================================================================
// Configuration

// =========================================================================
// Folder source css files

var csssource = "../css/api/less";

// =========================================================================
// Folder with the source images

var imgsource = "../images/api/source";

// =========================================================================
// Folder with a ready file

var theme = "../";

// =========================================================================

// =========================================================================
// Gulp PlugIns Connection
// =========================================================================

var gulp = require("gulp");
var pngquant = require("pngquant");
var plugins = require("gulp-load-plugins")();

// =========================================================================
// Errors
// =========================================================================

var error = function(err) {
  console.log(err);
  this.emit("end");
};

// =========================================================================
// Variables, Paths
// =========================================================================

var paths;

paths = {
  less: [csssource],
  imgmin: [imgsource],
  sprite: [imgsource]
};

// =========================================================================
// Tasks
// =========================================================================
function less(done) {
  gulp
    .src(csssource + "/*.less")
    .pipe(plugins.plumber({ errorHandler: error }))
    .pipe(plugins.less())
    .pipe(plugins.sourcemaps.init())
    .pipe(plugins.filesize())
    .pipe(gulp.dest(theme + "/css/api/"))
    .pipe(plugins.cssmin())
    .pipe(plugins.rename({ suffix: ".min" }))
    .pipe(plugins.filesize())
    .pipe(plugins.sourcemaps.write("../min/maps/"))
    .pipe(gulp.dest(theme + "/css/api/min/"))
    .pipe(plugins.plumber.stop());
  done();
}

///////////////////////////////////////////////////////////////////////
function imgmin(done) {
  gulp
    .src(imgsource + "/**/*.*")
    .pipe(plugins.plumber({ errorHandler: error }))
    .pipe(
      plugins.imagemin({
        progressive: true,
        svgoPlugins: [{ removeViewBox: false }],
        use: [pngquant()]
      })
    )
    .pipe(plugins.plumber.stop())
    .pipe(gulp.dest(theme + "/images/api/"));
  done();
}

///////////////////////////////////////////////////////////////////////
function sprite(done) {
  var spriteData = gulp.src(imgsource + "/for_sprite/*.*").pipe(
    plugins.spritesmith({
      imgPath:
        "/images/api/template/sprite.png?" + Math.floor(Date.now() / 1000),
      imgName: "sprite.png",
      cssName: "sprite.less",
      padding: 5,
      cssFormat: "less",
      algorithm: "binary-tree",
      cssVarMap: function(sprite) {
        sprite.name = "img-" + sprite.name;
      }
    })
  );

  spriteData.img.pipe(gulp.dest(theme + "/images/api/template/"));
  spriteData.css.pipe(gulp.dest(csssource + "/base/"));
  done();
}

///////////////////////////////////////////////////////////////////////
function watch_files() {
  gulp.watch(paths.less, gulp.series(less));
  gulp.watch(paths.imgmin, gulp.series(imgmin));
  gulp.watch(paths.sprite, gulp.series(sprite));
}

// =========================================================================
// Default Watches
// =========================================================================
gulp.task("default", gulp.parallel(less, imgmin, sprite, watch_files));
// =========================================================================
