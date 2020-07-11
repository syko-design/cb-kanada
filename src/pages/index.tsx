import React from 'react'
import Layout from 'components/templates/layout/layout'
import SEO from 'components/templates/seo/seo'
import { Header } from 'components/header/header/header'

import { headerProps } from 'input/header.props'
import { About } from '../components/about/about'
import { aboutProps } from '../input/about.props'
import { Hero } from 'components/hero/hero'

const IndexPage: React.FC = () => (
	<Layout>
		<SEO title="Home" />
		<Header header={headerProps} />
		<Hero />
		<About about={aboutProps} />
	</Layout>
)

export default IndexPage
