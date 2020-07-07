// Project: Frontend Builder
// Project URI: https://github.com/Xgraf/frontend-builder-html
// Version: 1.0
// Tags: gulp, html, css, js, sass
// Description: Frontend Builder - Project builder for web
// Author: Dmitriy Zatulovskiy
// Author URI: https://github.com/Xgraf , http://networkroom.ru

// =========================================================================
// Zip public
// =========================================================================

module.exports = function (gulp, plugins, config, errors) {
	return function () {
		gulp.src(config.output.path + '/**/*.*')
			.pipe(plugins.plumber({errorHandler: errors}))
			.pipe(plugins.zip(config.zipname))
			.pipe(plugins.plumber.stop())
			.pipe(gulp.dest('./'))
			.pipe(plugins.notify('Set archived'));
	};
};
