// Project: Gulp Starter (HTML version)
// Project URI: https://github.com/GrafSoul/gulp-starter-html.git
// Version: 1.0
// Tags: gulp, html, css, js, sass
// Description: Gulp Starter - Project builder for web
// Author: Dmitriy Zatulovskiy
// Author URI: https://github.com/GrafSoul , http://networkroom.ru

// =========================================================================
// Images - Minimizing
// =========================================================================

const pngquant = require('imagemin-pngquant');

module.exports = function (gulp, plugins, config, browserSync, errors) {
    return function imageMin(done) {
        gulp.src(config.input.images)
            .pipe(plugins.plumber({ errorHandler: errors }))
            .pipe(
                plugins.imagemin({
                    progressive: true,
                    svgoPlugins: [{ removeViewBox: false }],
                    use: [pngquant()],
                }),
            )
            .pipe(plugins.plumber.stop())
            .pipe(gulp.dest(config.output.path + '/images'))
            .pipe(plugins.filesize())
            .pipe(browserSync.stream());
        done();
    };
};
