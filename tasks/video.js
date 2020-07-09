// Project: Gulp Starter (HTML version)
// Project URI: https://github.com/GrafSoul/gulp-starter-html.git
// Version: 1.0
// Tags: gulp, html, css, js, sass
// Description: Gulp Starter - Project builder for web
// Author: Dmitriy Zatulovskiy
// Author URI: https://github.com/GrafSoul , http://networkroom.ru

// =========================================================================
// Video
// =========================================================================

module.exports = function (gulp, plugins, config, browserSync, errors) {
    return function video(done) {
        gulp.src(config.input.video)
            .pipe(plugins.plumber({ errorHandler: errors }))
            .pipe(plugins.plumber.stop())
            .pipe(gulp.dest(config.output.path + '/images/video'))
            .pipe(plugins.filesize())
            .pipe(browserSync.stream());
        done();
    };
};
