/**
 * grunt-wp-underscores
 * https://github.com/ericmann/grunt-wp-underscores
 *
 * Copyright (c) 2013 Eric Mann, 10up
 * Licensed under the MIT License
 */

'use strict';

exports.description = 'Create a WordPress theme based on Automattic\'s _s starter theme.';

// Template-specific notes to be displayed before question prompts.
exports.notes = '';

// Template-specific notes to be displayed after the question prompts.
exports.after = '';

// Any existing file or directory matching this wildcard will cause a warning.
exports.warnOn = '*';

// The actual init template
exports.template = function( grunt, init, done ) {
    init.process( {}, [
        // Prompt for these values.
        init.prompt( 'title', 'Megumi Underscores' ),
        {
            name   : 'prefix',
            message: 'PHP function prefix (alpha and underscore characters only)',
            default: 'megumi'
        },
        init.prompt( 'description', 'Underscores based Megumi theme' ),
        init.prompt( 'homepage', 'https://www.digitalcube.jp/' ),
        init.prompt( 'author_name', 'DigitalCube Co., Ltd' ),
        init.prompt( 'author_url', 'https://www.digitalcube.jp/' ),
    ], function( err, props ) {
        props.keywords = [];
        props.version = '0.1.0';
        props.devDependencies = {
            'grunt': '~0.4.1',
            'grunt-contrib-concat': '~0.1.2',
            'grunt-contrib-uglify': '~0.1.1',
            'grunt-contrib-jshint': '~0.1.1',
            'grunt-contrib-nodeunit': '~0.1.2',
            'grunt-contrib-compass': '*',
        };
        // Sanitize names where we need to for PHP/JS
        props.name = props.title.replace( /\s+/g, '-' ).toLowerCase();
        // Development prefix (i.e. to prefix PHP function names, variables)
        props.prefix = props.prefix.replace('/[^a-z_]/i', '').toLowerCase();
        // Development prefix in all caps (e.g. for constants)
        props.prefix_caps = props.prefix.toUpperCase();
        // An additional value, safe to use as a JavaScript identifier.
        props.js_safe_name = props.name.replace(/[\W_]+/g, '_').replace(/^(\d)/, '_$1');
        // An additional value that won't conflict with NodeUnit unit tests.
        props.js_test_safe_name = props.js_safe_name === 'test' ? 'myTest' : props.js_safe_name;
        props.js_safe_name_caps = props.js_safe_name.toUpperCase();

        // Files to copy and process
        var files = init.filesToCopy( props );
        console.log( files );
        // Actually copy and process files
        init.copyAndProcess( files, props );
        // Generate package.json file
        init.writePackageJSON( 'package.json', props );

        var path = require('path');
        var fs = require('fs');

        fs.stat(path.resolve('js'), function(err, stats){
            if (err) {
                fs.mkdir(path.resolve('js'));
            }
        });

        fs.stat(path.resolve('css'), function(err, stats){
            if (err) {
                fs.mkdir(path.resolve('css'));
            }
        });

        fs.stat(path.resolve('img'), function(err, stats){
            if (err) {
                fs.mkdir(path.resolve('img'));
            }
        });

        fs.stat(path.resolve('sass'), function(err, stats){
            if (err) {
                fs.mkdir(path.resolve('sass'));
            }
        });

        fs.writeFile(
            path.resolve('sass')+props.js_safe_name+'.scss',
            '@import "compass";\n@import "compass/reset"'
        );

        fs.writeFile(
            path.resolve('js')+props.js_safe_name+'.js',
            '(function($){})(jQuery);'
        );

        // Done!
        done();
    });
};
