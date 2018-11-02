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
			mvno:
				options: [
					webResources: {images: false}
				]
				files: [
					expand: true,
					cwd: 'out/mvno/'
					src: ['*.html']
					css: ['src/files/css/foundation-emails.css', 'src/files/css/mvnoemails.css']
					dest: 'src/raw/mvno/inlined/'
				]
			retailersmvno:
				options: [
					webResources: {images: false}
				]
				files: [
					expand: true,
					cwd: 'out/retailersmvno/'
					src: ['*.html']
					dest: 'src/raw/retailersmvno/inlined/'
				]
			retailers:
				options: [
					webResources: {images: false}
				]
				files: [
					expand: true,
					cwd: 'out/retailers/'
					src: ['*.html']
					dest: 'src/raw/retailers/inlined/'
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
				tasks: ['inlinecss:mvno']

		shell:
			clean:
				options:
					stdout: true
				command: 'docpad clean'
			ghpages:
				options:
					stdout: true
				command: 'docpad generate --env static'
			gulp:
				command: 'gulp'
			run:
				options:
					stdout: true
					async: true
				command: 'docpad run'

	grunt.registerTask 'deploy',  ['shell:clean', 'shell:ghpages', 'shell:gulp', 'gh-pages']
	grunt.registerTask 'default', ['inlinecss']
