/*
 backgrid
 http://github.com/wyuenho/backgrid

 Copyright (c) 2013 Jimmy Yuen Ho Wong and contributors
 Licensed under the MIT license.
 */

// jshint globalstrict:true, node:true

"use strict";

module.exports = function (grunt) {

  grunt.initConfig({

    pkg: grunt.file.readJSON("package.json"),

    clean: {
      options: {
        force: true
      },
      default: [
        "dist/"
      ]
    },

    recess: {
      csslint: {
        options: {
          compile: true
        },
        files: {
          "dist/backgrid-responsiveGrid.css": ["src/backgrid-responsiveGrid.css"]
        }
      },
      default: {
        options: {
          compress: true
        },
        files: {
          "dist/backgrid-responsiveGrid.min.css": ["src/backgrid-responsiveGrid.css"]
        }
      }
    },

    uglify: {
      options: {
        mangle: true,
        compress: true,
        preserveComments: "some"
      },
      default: {
        files: {
          "dist/backgrid-responsiveGrid.min.js": ["./src/backgrid-responsiveGrid.js"]
        }
      }
    }
  });

  grunt.loadNpmTasks("grunt-contrib-clean");
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-recess");

  grunt.registerTask("default", ["clean", "uglify", "recess:default"]);
};