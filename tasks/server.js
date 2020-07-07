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

module.exports = function (gulp, browserSync, config) {
	return function () {
		browserSync.init({
			server: {
				baseDir: config.output.path
			}
		});

		gulp.watch(config.input.sassfiles, ['sass']);
		gulp.watch(config.input.html, ['html']);
		gulp.watch(config.input.js, ['js']);
		gulp.watch(config.input.fonts, ['fonts']);
		gulp.watch(config.input.video, ['video']);
		gulp.watch(config.input.images, ['imagemin']);
		gulp.watch(config.input.pngSprite, ['pngsprite']);
		gulp.watch(config.input.svgSprite + '*.*', ['svgsprite']);
	};
};
