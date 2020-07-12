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
import { HeroOffer } from 'components/hero-offer/hero-offer/hero-offer'
import { heroOfferProps } from 'input/hero-offer.props'
import { heroProps } from 'input/hero.props'
import { Partners } from 'components/partners/partners'
import { partnersProps } from 'input/partners.props'
import { HomeGallery } from 'components/home-gallery/home-gallery'
import { homeGallertProps } from 'input/home-gallery.props'

const IndexPage: React.FC = () => (
	<Layout>
		<SEO title="Home" />
		<Hero hero={heroProps} />
		<HeroOffer heroOffer={heroOfferProps} />
		<Partners partners={partnersProps} />
		<HomeGallery gallery={homeGallertProps} />
		<About about={aboutProps} />
		<News news={newsProps} />
		<Contact contact={contactProps} />
	</Layout>
)

export default IndexPage
