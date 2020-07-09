// Project: Gulp Starter (HTML version)
// Project URI: https://github.com/GrafSoul/gulp-starter-html.git
// Version: 1.0
// Tags: gulp, html, css, js, sass
// Description: Gulp Starter - Project builder for web
// Author: Dmitriy Zatulovskiy
// Author URI: https://github.com/GrafSoul , http://networkroom.ru

// =========================================================================
// JS
// =========================================================================

module.exports = function (gulp, plugins, config, browserSync, errors) {
    return function js(done) {
        gulp.src(config.input.js)
            .pipe(plugins.plumber({ errorHandler: errors }))
            .pipe(plugins.if(config.develop, plugins.sourcemaps.init()))
            .pipe(plugins.jshint())
            .pipe(gulp.dest(config.output.path + '/js'))
            .pipe(plugins.uglify())
            .pipe(plugins.rename({ suffix: '.min' }))
            .pipe(plugins.if(config.develop, plugins.sourcemaps.write()))
            .pipe(gulp.dest(config.output.path + '/js/min'))
            .pipe(plugins.concat('script.all.js'))
            .pipe(plugins.plumber.stop())
            .pipe(gulp.dest(config.output.path + '/js/min'))
            .pipe(plugins.filesize())
            .pipe(browserSync.stream());
        done();
    };
};
