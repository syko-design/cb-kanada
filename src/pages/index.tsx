import React from 'react'

import Layout from 'components/templates/layout/layout'
import SEO from 'components/templates/seo/seo'
import { Header } from 'components/header/header/header'
import { headerProps } from 'input/header.props'

const IndexPage = () => (
	<Layout>
		<SEO title="Home" />
		<Header header={headerProps} />
	</Layout>
)

export default IndexPage
