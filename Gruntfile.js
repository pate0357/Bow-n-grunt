/**
 * Created by Harsh on 2015-12-03.
 */

module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        copy: {
            js: {
                src: 'js/main.js',
                dest: 'dist/js/main.js'
            },
            bootstrap_css: {
                src: 'bower_components/bootstrap/dist/css/bootstrap.css',
                dest: 'dist/css/bootstrap.css'
            },
            fonts: {
                expand: true,
                flatten: true,
                src: 'bower_components/font-awesome/fonts/*',
                dest: 'dist/fonts/'
            },
            bootstrap_js: {
                src: 'bower_components/bootstrap/dist/js/bootstrap.js',
                dest: 'dist/js/bootstrap.js'
            },
            fonts_css: {
                src: 'bower_components/font-awesome/css/font-awesome.css',
                dest: 'dist/css/font-awesome.css'
            },
            jquery: {
                src: 'bower_components/jquery/dist/jquery.js',
                dest: 'dist/js/jquery.js'
            },
            css: {
                src: '*/main.css',
                dest: 'dist/css/main.css'
            },
            html: {
                src: 'index.html',
                dest: 'dist/index.html'
            }
        },
        uglify: {
            minjs: {
                files: {
                    'dist/js/main.min.js': ['dist/js/jquery.js', 'dist/js/bootstrap.js', 'dist/js/main.js']
                }
            }
        },
        cssmin: {
            target: {
                files: {
                    'dist/css/main.min.css': ['dist/css/bootstrap.css', 'dist/css/font-awesome.css', 'dist/css/main.css']
                }
            }
        },
        clean: {

            css: ["dist/css/*.css", "!dist/css/*.min.css"],
            js: ["dist/js/*.js", "!dist/js/*.min.js"]


        }

    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.registerTask('default', ['copy', 'uglify', 'cssmin', 'clean']);

}