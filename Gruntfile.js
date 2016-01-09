module.exports = function (grunt){
  grunt.initConfig({
    pkg:grunt.file.readJSON('package.json'),
    cssmin: {
      combine: {
        files: {
          'css/print-min.css': ['css/print.css']
        }
      }
    }
  });

grunt.loadNpmTasks('grunt-contrib-cssmin');
grunt.registerTask('default', [cssmin]);
};