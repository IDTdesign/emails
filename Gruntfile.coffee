module.exports = (grunt) =>
	require('time-grunt')(grunt)
	require('load-grunt-tasks')(grunt)

	grunt.initConfig

		pkg: grunt.file.readJSON('package.json')

		inlinecss:
			bossdtc:
				options: [
					webResources: {images: false}
				]
				files: [
					expand: true,
					cwd: 'out/bossdtc/'
					src: ['*.html']
					dest: 'src/raw/bossdtc/inlined/'
				]

		'gh-pages':
			options:
				base: 'out'
				branch: 'gh-pages'
				repo: 'https://github.com/IDTdesign/emails.git'
			src: ['**/*']

		watch:
			bossdtc:
				files: ['out/mvno/*.html']
				tasks: ['inlinecss:bossdtc']

	grunt.registerTask 'deploy',  ['gh-pages']
	grunt.registerTask 'default', ['inlinecss']
