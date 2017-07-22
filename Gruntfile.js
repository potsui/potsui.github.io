module.exports = function (grunt) {
    'use strict';

    var jshintrc = '.jshintrc';
    var gruntFile = 'Gruntfile.js';
    var directoryPackage = '.';
    var directoryPrivate = directoryPackage + '/private';
    var directoryPublic = directoryPackage + '/public';
    var directoryTemplates = directoryPrivate + '/templates';
    var directoryPrivateJsAll = directoryPrivate + '/**/*.js';
    var directoryPrivateCssAll = directoryPrivate + '/**/*.css';
    var directoryPrivateHtmlAll = directoryPrivate + '/**/*.html';

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
                src: [
                    directoryTemplates + '/header.html',
                    directoryTemplates + '/index.html',
                    directoryTemplates + '/footer.html',
                ],
                dest: directoryPublic + '/index.html',
            }
        },
        copy: {
            images: {
                files: [
                    {
                        expand: true,
                        src: [
                            directoryPrivate + '/**/*.jpg',
                            directoryPrivate + '/**/*.png',
                            directoryPrivate + '/**/*.gif',
                        ],
                        dest: directoryPublic + '/',
                    },
                ],
            },
        },
        csslint: {
            dist: {
                src: [
                    directoryPrivateCssAll,
                ],
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
                    directoryPrivateCssAll,
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
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', [
        'jshint',
        'csslint',
        'cssmin',
        'uglify',
        'concat',
        'copy',
    ]);
};