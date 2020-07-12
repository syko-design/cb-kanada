import React from 'react'
import Layout from 'components/templates/layout/layout'
import SEO from 'components/templates/seo/seo'
import { About } from '../components/about/about'
import { aboutProps } from '../input/about.props'
import { Hero } from 'components/hero/hero'
import { newsProps } from '../input/news.props'
import { News } from '../components/news/news'
import { HeroOffer } from 'components/hero-offer/hero-offer/hero-offer'
import { heroOfferProps } from 'input/hero-offer.props'
import { heroProps } from 'input/hero.props'
import { Partners } from 'components/partners/partners'
import { partnersProps } from 'input/partners.props'
import { Offer } from '../components/offer/offer'
import { offerProps } from '../input/offer.props'
import { HomeGallery } from 'components/home-gallery/home-gallery'
import { homeGallertProps } from 'input/home-gallery.props'
import { PathProps } from 'types/path.props'

const IndexPage: React.FC<PathProps> = ({ path }) => (
	<Layout path={path}>
		<SEO title="Home" />
		<Hero hero={heroProps} />
		<HeroOffer heroOffer={heroOfferProps} />
		<About about={aboutProps} />
		<Partners partners={partnersProps} />
		<Offer offer={offerProps} />
		<HomeGallery gallery={homeGallertProps} />
		<News news={newsProps} />
	</Layout>
)

export default IndexPage
