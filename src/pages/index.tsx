import React from 'react'
import Layout from 'components/templates/layout/layout'
import SEO from 'components/templates/seo/seo'
import { About } from '../components/about/about'
import { aboutProps } from '../input/about.props'
import { Contact } from '../components/contact/contact'
import { contactProps } from '../input/contact.props'
import { Hero } from 'components/hero/hero'
import { newsProps } from '../input/news.props'
import { News } from '../components/news/news'

const IndexPage: React.FC = () => (
	<Layout>
		<SEO title="Home" />
		<Hero />
		<About about={aboutProps} />
		<Contact contact={contactProps} />
		<News news={newsProps} />
	</Layout>
)

export default IndexPage
