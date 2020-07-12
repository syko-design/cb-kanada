import React from 'react'
import {
	PartnersWrapper,
	PartnerWrapper,
	PartnerLogo,
	PartnersOuterWrapper,
	PartnersHeader
} from './partners.style'
import { Heading3, Heading5 } from 'components/shared/heading/heading'

export interface Partner {
	logo: string
}

export interface PartnersType {
	partners: Partner[]
	subHeading: string
	heading: string
}

export interface PartnersProps {
	partners: PartnersType
}

export const Partners: React.FC<PartnersProps> = ({ partners }) => (
	<PartnersOuterWrapper>
		<PartnersHeader>
			<Heading3>{partners.heading}</Heading3>
			<Heading5>{partners.subHeading}</Heading5>
		</PartnersHeader>
		<PartnersWrapper>
			{partners.partners.map(({ logo }, i) => (
				<PartnerWrapper key={i}>
					<PartnerLogo src={logo} alt="partner" />
				</PartnerWrapper>
			))}
		</PartnersWrapper>
	</PartnersOuterWrapper>
)
