// Project: Frontend Builder
// Project URI: https://github.com/Xgraf/frontend-builder-html
// Version: 1.0
// Tags: gulp, html, css, js, sass
// Description: Frontend Builder - Project builder for web
// Author: Dmitriy Zatulovskiy
// Author URI: https://github.com/Xgraf , http://networkroom.ru

// =========================================================================
// Html
// =========================================================================

module.exports = function (gulp, plugins, config, browserSync, errors) {
	return function () {
		gulp.src(config.input.html)
			.pipe(plugins.plumber({errorHandler: errors}))
			.pipe(plugins.htmlhint())
			.pipe(plugins.htmlhint.reporter())
			.pipe(plugins.plumber.stop())
			.pipe(gulp.dest(config.output.path))
			.pipe(plugins.filesize())
			.pipe(browserSync.stream());
	};
};
