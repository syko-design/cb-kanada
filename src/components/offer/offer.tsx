import React from 'react'
import { offerProps } from '../../input/offer.props'
import { OfferItem } from './offerItem'
import { Wrapper, OfferWrapper, Header } from './offer.styled'
import { Heading3, Heading5 } from 'components/shared/heading/heading'

interface Props {
	offer: typeof offerProps
}

export const Offer: React.FC<Props> = (props) => {
	return (
		<Wrapper id="offer-section">
			<Header>
				<Heading3>{props.offer.header}</Heading3>
				<Heading5>{props.offer.subHeader}</Heading5>
			</Header>
			<OfferWrapper>
				{props.offer.services.map((service, index) => (
					<OfferItem offer={service} index={index} key={service.title} />
				))}
			</OfferWrapper>
		</Wrapper>
	)
}
