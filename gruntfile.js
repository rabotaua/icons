module.exports = function (grunt) {
	grunt.initConfig({

		webfont: {
			icons: {
				src: 'svg/*.svg',
				dest: './dist',
				options: {
					font: 'r',
					syntax: 'bem',
					engine: 'fontforge',
					autoHint: true,
					normalize: true,
					stylesheet: 'css',
					relativeFontPath: '',
					//relativeFontPath: 'http://css.rabota.com.ua/ra',
					htmlDemoTemplate: 'template.html',
					htmlDemoFilename: 'index',
					templateOptions: {
						baseClass: 'r',
						classPrefix: '',
						mixinPrefix: ''
					}
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-webfont');
	grunt.registerTask('default', ['webfont']);
};
