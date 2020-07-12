import React from 'react'

import Layout from 'components/templates/layout/layout'
import SEO from 'components/templates/seo/seo'
import { PathProps } from 'types/path.props'

const NotFoundPage: React.FC<PathProps> = ({ path }) => (
	<Layout path={path}>
		<SEO title="404: Not found" />
		<h1>NOT FOUND</h1>
	</Layout>
)

export default NotFoundPage
