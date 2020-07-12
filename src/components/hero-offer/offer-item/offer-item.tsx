import React from 'react'
import {
	OfferItemContainer,
	OfferHeader,
	OfferText,
	OfferImgWrapper,
	OfferImg
} from './offer-item.style'
import { Heading4 } from 'components/shared/heading/heading'
import { Hexagon } from '../hexagon/hexagon'

export interface OfferItemType {
	icon: string
	header: string
	description: string
}

export interface OfferItemProps {
	offer: OfferItemType
}

export const OfferItem: React.FC<OfferItemProps> = ({ offer: { icon, header, description } }) => (
	<OfferItemContainer>
		<Hexagon>
			<OfferImgWrapper>
				<OfferImg src={icon} alt="Offer icon"></OfferImg>
			</OfferImgWrapper>
		</Hexagon>
		<OfferHeader>
			<Heading4>{header}</Heading4>
		</OfferHeader>

		<OfferText>{description}</OfferText>
	</OfferItemContainer>
)
