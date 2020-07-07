'use strict';

// Project: Gulp Starter (HTML version)
// Project URI: https://github.com/GrafSoul/gulp-starter-html.git
// Version: 1.0
// Tags: gulp, html, css, js, sass
// Description: Gulp Starter - Project builder for web
// Author: Dmitriy Zatulovskiy
// Author URI: https://github.com/GrafSoul , http://networkroom.ru

// =========================================================================
// Config
// =========================================================================
const config = {
	develop: true,
	zipname: 'project-dist.zip',
	input: {
		js: './source/js/**/*.js',
		sass: './source/sass/main.scss',
		sassfiles: './source/sass/**/*.scss',
		html: './source/html/**/*.html',
		fonts: './source/fonts/**/*.*',
		video: './source/video/**/*.*',
		images: './source/images/**/*.*',
		pngSprite: './source/images/for_png_sprite/*.*',
		svgSprite: './source/images/for_svg_sprite/',
		sassPngSprite: './source/sass/base',
	},
	output: {
		path: './public',
	},
};

// =========================================================================
// Add Gulp and Gulp plugins
// =========================================================================
const gulp = require('gulp');
const plugins = require('gulp-load-plugins')();
const browserSync = require('browser-sync').create();

// =========================================================================
// Errors
// =========================================================================
const errors = (err) => {
	console.log(err);
	this.emit('end');
};

// =========================================================================
// Tasks
// =========================================================================

// HTML
// =========================================================================
gulp.task(
	'html',
	require('./tasks/html')(gulp, plugins, config, browserSync, errors),
);

// Fonts
// =========================================================================
gulp.task(
	'fonts',
	require('./tasks/fonts')(gulp, plugins, config, browserSync, errors),
);

// Video
// =========================================================================
gulp.task(
	'video',
	require('./tasks/video')(gulp, plugins, config, browserSync, errors),
);

// JS
// =========================================================================
gulp.task(
	'js',
	require('./tasks/js')(gulp, plugins, config, browserSync, errors),
);

// SASS
// =========================================================================
gulp.task(
	'sass',
	require('./tasks/sass')(gulp, plugins, config, browserSync, errors),
);

// Images - Minimizing
// =========================================================================
gulp.task(
	'imagemin',
	require('./tasks/imagemin')(gulp, plugins, config, browserSync, errors),
);

// Images - PNG Sprite
// =========================================================================
gulp.task('pngsprite', require('./tasks/pngsprite')(gulp, plugins, config));

// Images - SVG Sprite
// =========================================================================
gulp.task('svgsprite', require('./tasks/svgsprite')(gulp, plugins, config));

// Zip public
// =========================================================================
gulp.task('zip', require('./tasks/zip')(gulp, plugins, config, errors));

// Server
// =========================================================================
gulp.task('server', require('./tasks/server')(gulp, browserSync, config));

// Watch default
// =========================================================================
gulp.task(
	'default',
	gulp.parallel(
		html,
		fonts,
		video,
		imagemin,
		pngsprite,
		svgsprite,
		sass,
		js,
		server,
	),
);
