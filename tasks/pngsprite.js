// Project: Gulp Starter (HTML version)
// Project URI: https://github.com/GrafSoul/gulp-starter-html.git
// Version: 1.0
// Tags: gulp, html, css, js, sass
// Description: Gulp Starter - Project builder for web
// Author: Dmitriy Zatulovskiy
// Author URI: https://github.com/GrafSoul , http://networkroom.ru

// =========================================================================
// Images - PNG Sprite
// =========================================================================

module.exports = function (gulp, plugins, config) {
    return function pngSprite(done) {
        const spriteData = gulp.src(config.input.pngSprite).pipe(
            plugins.spritesmith({
                imgPath: '/images/template/spritepng.png',
                imgName: 'spritepng.png',
                cssName: '_spritepng.scss',
                padding: 5,
                cssFormat: 'scss',
                algorithm: 'binary-tree',
                cssVarMap: function (sprite) {
                    sprite.name = 'img-' + sprite.name;
                },
            }),
        );

        spriteData.img.pipe(
            gulp.dest(config.output.path + '/images/template/'),
        );
        spriteData.css.pipe(gulp.dest(config.input.sassPngSprite));
        done();
    };
};
