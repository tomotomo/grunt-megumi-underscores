module.exports = function( grunt ) {

	// Project configuration
	grunt.initConfig( {
		pkg:    grunt.file.readJSON( 'package.json' ),
		concat: {
			options: {
				stripBanners: true,
				banner: '/*! <%= pkg.title %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %>\n' +
					' * <%= pkg.homepage %>\n' +
					' * Copyright (c) <%= grunt.template.today("yyyy") %>;' +
					' * Licensed GPLv2+' +
					' */\n'
			},
			{%= js_safe_name %}: {
				src: [
					'js/{%= js_safe_name %}.js'
				],
				dest: 'js/{%= js_safe_name %}.min.js'
			}
		},
		jshint: {
			all: [
				'Gruntfile.js',
				'js/{%= js_safe_name %}.js'
			],
			options: {
				curly:   true,
				eqeqeq:  true,
				immed:   true,
				latedef: true,
				newcap:  true,
				noarg:   true,
				sub:     true,
				undef:   true,
				boss:    true,
				eqnull:  true,
				globals: {
					exports: true,
					module:  false,
                    jQuery: false,
                    Console: false
				}
			}
		},
		uglify: {
			all: {
				files: {
					'js/{%= js_safe_name %}.min.js': [
                        'js/{%= js_safe_name %}.js'
                    ]
				},
				options: {
					banner: '/*! <%= pkg.title %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %>\n' +
						' * <%= pkg.homepage %>\n' +
						' * Copyright (c) <%= grunt.template.today("yyyy") %>;' +
						' * Licensed GPLv2+' +
						' */\n',
					mangle: {
						except: ['jQuery']
					}
				}
			}
		},

        compass: {
            dist: {
                options: {
                    sassDir: 'sass',
                    cssDir: 'css',
                    outputStyle: 'compressed',
                    imagesDir: 'img',
                    javascriptsDir: 'js'
                }
            }
        }
	} );
	//
	// Load other tasks
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-compass');

	// Default task.
	grunt.registerTask(
        'default',
        ['jshint', 'concat', 'uglify', 'compass']
    );

	grunt.util.linefeed = '\n';
};
