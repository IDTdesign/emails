# DocPad Configuration File
# http://docpad.org/docs/config

# Define the DocPad Configuration
docpadConfig = {
	# ...
	templateData:
		site:
			# Site Production URL
			url: 'https://idtdesign.github.io/emails'

			# The website's styles
			styles: [
			]

			# The website's scripts
			scripts: [
			]

	# Plugins configurations

	plugins:
		ghpages:
			deployRemote: 'deploy'
			deployBranch: 'gh-pages'

	# =================================
	# Environments

	environments:
		development:
			templateData:
				site:
					url: 'http://localhost:9778'
}

# Export the DocPad Configuration
module.exports = docpadConfig
