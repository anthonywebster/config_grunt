module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            min: {
                files: {
                    'js/jquery-migrate-1.2.1.min.js': ['js/jquery-migrate-1.2.1.js'],
                }
            }
        },
    });
 
    grunt.loadNpmTasks('grunt-contrib-uglify');
 
    grunt.registerTask('default', ['uglify']);
};