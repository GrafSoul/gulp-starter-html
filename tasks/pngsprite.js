// Project: Frontend Builder
// Project URI: https://github.com/Xgraf/frontend-builder-html
// Version: 1.0
// Tags: gulp, html, css, js, sass
// Description: Frontend Builder - Project builder for web
// Author: Dmitriy Zatulovskiy
// Author URI: https://github.com/Xgraf , http://networkroom.ru

// =========================================================================
// Images - PNG Sprite
// =========================================================================

module.exports = function (gulp, plugins, config) {
	return function () {
		const spriteData = gulp.src(config.input.pngSprite)
			.pipe(plugins.spritesmith({
				imgPath: '/images/template/spritepng.png',
				imgName: 'spritepng.png',
				cssName: '_spritepng.scss',
				padding: 5,
				cssFormat: 'scss',
				algorithm: 'binary-tree',
				cssVarMap: function (sprite) {
					sprite.name = 'img-' + sprite.name;
				}
			}));

		spriteData.img.pipe(gulp.dest(config.output.path + '/images/template/'));
		spriteData.css.pipe(gulp.dest(config.input.sassPngSprite));
	};
};
