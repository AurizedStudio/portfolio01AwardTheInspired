module.exports = function (grunt) {
 
grunt.loadNpmTasks('grunt-contrib-sass');
grunt.loadNpmTasks('grunt-autoprefixer');
grunt.loadNpmTasks('grunt-imageoptim');
grunt.loadNpmTasks('grunt-contrib-watch');
 
grunt.initConfig({
	sass: {
		options: {
			style: 'expanded'
		},
		dist: {
			src: 'scss/style.scss',
			dest: 'htdocs/css/style.css'
		}
	},
	autoprefixer: {
		options: {
			browsers: ['last 2 version', 'ie 9']
		},
		no_dest: {
			src: 'htdocs/css/style.css' // globbing is also possible here
		}
	},
	imageoptim: {
		options: {
			imageAlpha: false,
			jpegMini: false,
			quitAfter: true
		},
		src: 'htdocs/img/'
	},
	watch: {
//		img: {
//			files: 'htdocs/img/*.png',
//			tasks: ['imageoptim']
//		},
//		css: {
//			files: 'htdocs/css/*.css',
//			tasks: ['autoprefixer']
//		},
		html: {
			files: ['htdocs/*.html', 'htdocs/img/*.*', 'htdocs/js/*.*'],
			options: {
				livereload: true,
			}
		},
		sass: {
			files: 'scss/*.scss',
			tasks: ['sass'],
			options: {
				livereload: true,
			}
		}
	}
});

grunt.registerTask('default', ['watch']);
grunt.registerTask('build', ['sass', 'autoprefixer']);
grunt.registerTask('imgbuild', ['imageoptim']);
 
};
