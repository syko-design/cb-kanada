import React from 'react'
import { PartnersWrapper, PartnerWrapper, PartnerLogo } from './partners.style'

export interface Partner {
	logo: string
}

export interface PartnersType {
	partners: Partner[]
}

export interface PartnersProps {
	partners: PartnersType
}

export const Partners: React.FC<PartnersProps> = ({ partners }) => (
	<PartnersWrapper>
		{partners.partners.map(({ logo }, i) => (
			<PartnerWrapper>
				<PartnerLogo src={logo} alt="partner" />
			</PartnerWrapper>
		))}
	</PartnersWrapper>
)
