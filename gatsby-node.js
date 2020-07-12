/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const { resolve } = require('path')

exports.onCreateWebpackConfig = ({ actions }) => {
	actions.setWebpackConfig({
		resolve: {
			modules: [resolve(__dirname, 'src'), 'node_modules']
		}
	})
}

exports.onCreatePage = async ({ page, actions }) => {
	const { createPage } = actions
	if (page.path.match(/^\/posts/)) {
		page.matchPath = '/posts/*'
		createPage(page)
	}
}
