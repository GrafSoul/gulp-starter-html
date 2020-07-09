// Project: Frontend Builder
// Project URI: https://github.com/Xgraf/frontend-builder-html
// Version: 1.0
// Tags: gulp, html, css, js, sass
// Description: Frontend Builder - Project builder for web
// Author: Dmitriy Zatulovskiy
// Author URI: https://github.com/Xgraf , http://networkroom.ru

// =========================================================================
// Server
// =========================================================================

module.exports = function (browserSync, config) {
    return function server(done) {
        browserSync.init({
            server: {
                baseDir: config.output.path,
            },
        });
        done();
    };
};
