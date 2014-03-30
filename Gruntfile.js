module.exports = function(grunt) {
    grunt.initConfig({
        requirejs: {
            dev: {
                options: {
                    baseUrl: "./src/",
                    name: "my_define",
                    include: "main",
                    out: "dist/main.js",
                    optimize: "none",
                    wrap: true
                }
            }
        }
    });

    grunt.loadNpmTasks("grunt-contrib-requirejs");

    grunt.registerTask("default", ["requirejs"]);
}

