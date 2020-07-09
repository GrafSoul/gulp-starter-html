// Project: Gulp Starter (HTML version)
// Project URI: https://github.com/GrafSoul/gulp-starter-html.git
// Version: 1.0
// Tags: gulp, html, css, js, sass
// Description: Gulp Starter - Project builder for web
// Author: Dmitriy Zatulovskiy
// Author URI: https://github.com/GrafSoul , http://networkroom.ru

// =========================================================================
// Zip public
// =========================================================================

module.exports = function (gulp, plugins, config, errors) {
    return function zip(done) {
        gulp.src(config.output.path + '/**/*.*')
            .pipe(plugins.plumber({ errorHandler: errors }))
            .pipe(plugins.zip(config.zipname))
            .pipe(plugins.plumber.stop())
            .pipe(gulp.dest('./'))
            .pipe(plugins.notify('Set archived'));
        done();
    };
};
