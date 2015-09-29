module.exports = function  (grunt) {
  grunt.initConfig({
    sass: {                              // Task 
      dist: {                            // Target 
        files: {                         // Dictionary of files 
          'assets/stylesheets/home.css': 'assets/stylesheets/src/home.scss',
          'assets/stylesheets/gallery.css': 'assets/stylesheets/src/gallery.scss',
           'assets/stylesheets/rules.css': 'assets/stylesheets/src/rules.scss',
         'assets/stylesheets/biker.css': 'assets/stylesheets/src/biker.scss',
         'assets/stylesheets/join.css': 'assets/stylesheets/src/join.scss',
         
        }         
      }
    },
    watch: {
      css: {
       files: ['assets/stylesheets/src/*.scss'],
       tasks: ['sass','cssmin']
     }  
   },

    // concat: {
    //   css: {
    //     src: ['assets/stylesheets/common.css', 'assets/stylesheets/land.css'],
    //       dest: 'assets/stylesheets/app.css',
    //   },
    // },

    cssmin: {
      target: {
        files: {
          'assets/stylesheets/app.min.css': 
            [
            'assets/stylesheets/home.css',
             'assets/stylesheets/gallery.css',
             'assets/stylesheets/rules.css',
             'assets/stylesheets/biker.css',
             'assets/stylesheets/join.css'


            ]
        }
      }
    }
});
  
grunt.loadNpmTasks('grunt-contrib-sass');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-contrib-cssmin');
grunt.registerTask('default' , ['sass','cssmin','watch']);
};

