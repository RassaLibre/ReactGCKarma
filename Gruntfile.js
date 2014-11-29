module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    closureDepsWriter: {
      options: {
        depswriter: 'app/components/closurelibrary/closure/bin/build/depswriter.py', // filepath to depswriter
        root_with_prefix: '"app/js/App ../../../../js/App"',
      },
      app: {
        dest: 'app/js/deps.js'
      }
    },
    react: {
        dynamic_mappings: {
            files:[{
                expand: true,
                cwd: 'jsx/',
                src: ['**/*.jsx'],
                dest: 'app/js/',
                ext: '.js'
            }]
        }
    },
    sass: {                              // Task
      dist: {                            // Target
        options: {                       // Target options
          style: 'compressed'
        },
        files: {                                       // Dictionary of files
          'app/css/main.css': 'sass/main.scss',        // 'destination': 'source'
        }
      }
    },
    closureLint: {
      app:{
        command: 'gjslint',
        src: ['app/js/App/**/*.js','!app/js/App/ui/**/*.js'],
        options: {
          stdout: true,
          strict: true
        }
      }
    },
    closureFixStyle: {
      app:{
        command: 'fixjsstyle',
        src: ['app/js/App/**/*.js','!app/js/App/ui/**/*.js'],
        options: {
          stdout: true,
          strict: true
        }
      }
    },
    watch: {
      scripts: {
        files: ['app/js/App/**/*.js','app/index.html','jsx/**/*.jsx','sass/**/*.scss'],
        tasks: ['default'],
        options: {
          spawn: false,
          livereload: true
        },
      },
    }
  });

  //closure tools
  grunt.loadNpmTasks('grunt-closure-tools');

  //watcher
  grunt.loadNpmTasks('grunt-contrib-watch');

  //react
  grunt.loadNpmTasks('grunt-react');

  //sass
  grunt.loadNpmTasks('grunt-contrib-sass');

  //linting
  grunt.loadNpmTasks('grunt-closure-linter');

  // Default task(s).
  grunt.registerTask('default', ['react','sass','closureFixStyle','closureLint','closureDepsWriter:app','watch']);

};