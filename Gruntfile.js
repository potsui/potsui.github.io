module.exports = function (grunt) {
    'use strict';

    var jshintrc = '.jshintrc';
    var gruntFile = 'Gruntfile.js';
    var directoryPackage = '.';
    var directoryPrivate = directoryPackage + '/private';
    var directoryPublic = directoryPackage + '/public';
    var directoryTemplates = directoryPrivate + '/templates';
    var directoryPrivateJsAll = directoryPrivate + '/**/*.js';
    var directoryPrivateLessAll = directoryPrivate + '/**/*.less';
    var directoryPrivateHtmlAll = directoryPrivate + '/**/*.html';

    function createPageSource(page) {
        return [
            directoryTemplates + '/header.html',
            directoryTemplates + '/' + page + '.html',
            directoryTemplates + '/footer.html',
        ];
    }

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean: [
            'node_modules/',
        ],
        concat: {
            options: {
                separator: '\n',
            },
            index: {
                src: createPageSource('index'),
                dest: directoryPublic + '/index.html',
            },
            photography: {
                src: createPageSource('photography'),
                dest: directoryPublic + '/photography.html',
            },
            about: {
                src: createPageSource('about'),
                dest: directoryPublic + '/about.html',
            },
        },
        cssmin: {
            build: {
                src: directoryPrivate + '/css/main.css',
                dest: directoryPublic + '/css/main.min.css'
            }
        },
        jshint: {
            options: {
                ignores: [
                ],
            },
            dist: [
                gruntFile,
                directoryPrivateJsAll,
            ],
        },
        less: {
            development: {
                options: {
                    compress: true,
                    yuicompress: true,
                    optimization: 2
                },
                src: directoryPrivate + '/less/main.less',
                dest: directoryPrivate + '/css/main.css',
            },
        },
        uglify: {
            options: {
                footer: '\n',
            },
            build: {
                src: directoryPrivate + '/scripts/main.js',
                dest: directoryPublic + '/scripts/main.min.js',
            }
        },
        watch: {
            dist: {
                files: [
                    jshintrc,
                    gruntFile,
                    directoryPrivateLessAll,
                    directoryPrivateHtmlAll,
                    directoryPrivateJsAll,
                ],
                tasks: [
                    'default',
                ],
            },
        },
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-csslint');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', [
        'jshint',
        'less',
        'cssmin',
        'uglify',
        'concat',
    ]);
};
