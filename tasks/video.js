// Project: Frontend Builder
// Project URI: https://github.com/Xgraf/frontend-builder-html
// Version: 1.0
// Tags: gulp, html, css, js, sass
// Description: Frontend Builder - Project builder for web
// Author: Dmitriy Zatulovskiy
// Author URI: https://github.com/Xgraf , http://networkroom.ru

// =========================================================================
// Video
// =========================================================================

module.exports = function (gulp, plugins, config, browserSync, errors) {
	return function () {
		gulp.src(config.input.video)
			.pipe(plugins.plumber({errorHandler: errors}))
			.pipe(plugins.plumber.stop())
			.pipe(gulp.dest(config.output.path + '/images/video'))
			.pipe(plugins.filesize())
			.pipe(browserSync.stream());
	};
};
