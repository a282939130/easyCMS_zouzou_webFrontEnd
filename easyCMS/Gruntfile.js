module.exports=function(grunt){
	grunt.initConfig({
		pkg:grunt.file.readJSON('package.json'),
		uglify:{
			options:{
				removeComments:true,
				collapseWhitespace:true,
				stripBanners:true,
				banner:'/*! <%=pkg.name%>-<%=pkg.version%>.js <%= grunt.template.today("yyyy-mm-dd")%> */\n'
			},
			// dist:{
			// 	files:{
			// 		'build/test.min.js':'src/test.js'
			// 	}
			// }
			build:{
				src:'index.js',
				dest:'index.min.js'
				// dest:'build/<%=pkg.name%>-<%=pkg.version%>.min.js'
			}
		},
		cssmin:{
			options:{
				removeComments:true,
				collapseWhitespace:true,
				stripBanners:true,
				banner:'/*! <%=pkg.name%>-<%=pkg.version%>.css <%= grunt.template.today("yyyy-mm-dd")%> */\n'
			},
			build:{
				src:'index.css',
				dest:'index.min.css'
				// dest:'build/<%=pkg.name%>-<%=pkg.version%>.min.css'
			}
		}
		// cssmin:{
		// 	build:['Gruntfile.js','src/*.js'],
		// 	options:{
		// 		jshintrc:'.jshintrc'
		// 	}
		// }
	});
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.registerTask('default',['cssmin','uglify']);
};