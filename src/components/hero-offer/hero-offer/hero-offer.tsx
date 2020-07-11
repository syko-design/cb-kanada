import React from 'react'
import { HeroOfferContainer } from './hero-offer.style'
import { OfferItem, OfferItemType } from '../offer-item/offer-item'

export interface HeroOffer {
	offerItems: OfferItemType[]
}

export interface HeroOfferProps {
	heroOffer: HeroOffer
}

export const HeroOffer: React.FC<HeroOfferProps> = ({ heroOffer }) => (
	<HeroOfferContainer>
		{heroOffer.offerItems.map((o, i) => (
			<OfferItem offer={o} key={i} />
		))}
	</HeroOfferContainer>
)
