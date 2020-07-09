// Project: Gulp Starter (HTML version)
// Project URI: https://github.com/GrafSoul/gulp-starter-html.git
// Version: 1.0
// Tags: gulp, html, css, js, sass
// Description: Gulp Starter - Project builder for web
// Author: Dmitriy Zatulovskiy
// Author URI: https://github.com/GrafSoul , http://networkroom.ru

// =========================================================================
// Html
// =========================================================================

module.exports = function (gulp, plugins, config, browserSync, errors) {
    return function html(done) {
        gulp.src(config.input.html)
            .pipe(plugins.plumber({ errorHandler: errors }))
            .pipe(plugins.htmlhint())
            .pipe(plugins.htmlhint.reporter())
            .pipe(plugins.plumber.stop())
            .pipe(gulp.dest(config.output.path))
            .pipe(plugins.filesize())
            .pipe(browserSync.stream());
        done();
    };
};
