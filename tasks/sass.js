// Project: Frontend Builder
// Project URI: https://github.com/Xgraf/frontend-builder-html
// Version: 1.0
// Tags: gulp, html, css, js, sass
// Description: Frontend Builder - Project builder for web
// Author: Dmitriy Zatulovskiy
// Author URI: https://github.com/Xgraf , http://networkroom.ru

// =========================================================================
// SASS
// =========================================================================

module.exports = function (gulp, plugins, config, browserSync, errors) {
	return function () {
		gulp.src(config.input.sass)
			.pipe(plugins.plumber({errorHandler: errors}))
			.pipe(plugins.if(config.develop, plugins.sourcemaps.init()))
			.pipe(plugins.sass())
			.pipe(plugins.rename({basename: 'style', suffix: '.min'}))
			.pipe(plugins.autoprefixer({
				browsers: ['last 2 versions'],
				cascade: false
			}))
			.pipe(plugins.if(!config.develop, plugins.cleanCss()))
			.pipe(plugins.if(config.develop, plugins.sourcemaps.write()))
			.pipe(plugins.plumber.stop())
			.pipe(gulp.dest(config.output.path + '/css'))
			.pipe(plugins.filesize())
			.pipe(browserSync.stream());
	};
};
