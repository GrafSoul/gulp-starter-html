// Project: Gulp Starter (HTML version)
// Project URI: https://github.com/GrafSoul/gulp-starter-html.git
// Version: 1.0
// Tags: gulp, html, css, js, sass
// Description: Gulp Starter - Project builder for web
// Author: Dmitriy Zatulovskiy
// Author URI: https://github.com/GrafSoul , http://networkroom.ru

// =========================================================================
// Fonts
// =========================================================================
module.exports = function (gulp, plugins, browserSync, config, errors) {
    return function fonts(done) {
        gulp.src(config.input.fonts)
            .pipe(plugins.plumber({ errorHandler: errors }))
            .pipe(plugins.plumber.stop())
            .pipe(gulp.dest(config.output.path + '/fonts'))
            .pipe(plugins.filesize())
            .pipe(browserSync.stream());
        done();
    };
};
