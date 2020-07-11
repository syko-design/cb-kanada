import React from 'react'
import {
	HeaderSocialWrapper,
	HeaderSocialSection,
	HeaderContactSection,
	ContactText,
	HeaderSocialContainer
} from './header-social.style'

export interface HeaderSocial {
	contact: {
		phone: string
		email: string
	}
}

export interface HeaderSocialProps {
	headerSocial: HeaderSocial
}

export const HeaderSocial: React.FC<HeaderSocialProps> = ({ headerSocial }) => (
	<HeaderSocialContainer>
		<HeaderSocialWrapper>
			<HeaderSocialSection></HeaderSocialSection>
			<HeaderContactSection>
				<ContactText>{headerSocial.contact.phone}</ContactText>
				<ContactText>{headerSocial.contact.email}</ContactText>
			</HeaderContactSection>
		</HeaderSocialWrapper>
	</HeaderSocialContainer>
)
