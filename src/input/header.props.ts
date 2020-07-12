import { HeaderInput } from 'components/header/header/header'

export const headerProps: HeaderInput = {
	navbar: {
		items: [
			{
				name: 'Start',
				link: '/',
				selector: '#hero-section'
			},
			{
				name: 'About',
				link: '/',
				selector: '#about-section'
			},
			{
				name: 'Offer',
				link: '/',
				selector: '#offer-section'
			},
			{
				name: 'Gallery',
				link: '/',
				selector: '#gallery-section'
			},
			{
				name: 'News',
				link: '/',
				selector: '#news-section'
			},
			{
				name: 'Contact',
				link: '/',
				selector: '#contact-section'
			}
		]
	}
}
