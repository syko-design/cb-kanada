import React from 'react'
import Layout from 'components/templates/layout/layout'
import SEO from 'components/templates/seo/seo'
import { Header } from 'components/header/header/header'

import { headerProps } from 'input/header.props'
import { About } from '../components/about/about'
import { aboutProps } from '../input/about.props'
import { Contact } from '../components/contact/contact'
import { contactProps } from '../input/contact.props'
import { Hero } from 'components/hero/hero'
import { HeroOffer } from 'components/hero-offer/hero-offer/hero-offer'
import { heroOfferProps } from 'input/hero-offer.props'
import { HeaderSocial } from 'components/header/header-social/header-social'
import { headerSocialProps } from 'input/header-social.props'
import { heroProps } from 'input/hero.props'

const IndexPage: React.FC = () => (
	<Layout>
		<SEO title="Home" />
		<HeaderSocial headerSocial={headerSocialProps} />
		<Header header={headerProps} />
		<Hero hero={heroProps} />
		<HeroOffer heroOffer={heroOfferProps} />
		<About about={aboutProps} />
		<Contact contact={contactProps} />
	</Layout>
)

export default IndexPage
