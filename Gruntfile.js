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
    watch: {
      scripts: {
        files: ['app/js/App/**/*.js','app/index.html','jsx/**/*.jsx'],
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

  // Default task(s).
  grunt.registerTask('default', ['react','closureDepsWriter:app','watch']);

};