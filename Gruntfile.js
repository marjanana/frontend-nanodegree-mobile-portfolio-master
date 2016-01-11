module.exports = function (grunt){
  grunt.initConfig({
    pkg:grunt.file.readJSON('package.json'),
    cssmin: {
      target: {
        files: {
          'css/print-min.css': ['css/print.css'],
          'views/css/bootstrap-grid-min.css': ['views/css/bootstrap-grid.css']
        }
      }
    },

  uglify: {
      dist: {
        files: {
          'views/js/main-min.js': ['views/js/main.js']
        }
      }
    }

});

grunt.loadNpmTasks('grunt-contrib-cssmin');
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-imagemin');
grunt.registerTask('default', ['cssmin', 'uglify']);
};