import React from 'react'
import {
	HeaderSocialWrapper,
	HeaderSocialSection,
	HeaderContactSection,
	ContactText,
	HeaderSocialContainer
} from './header-social.style'

export interface HeaderSocialProps {
	contact: {
		phone: string
		email: string
	}
}

export const HeaderSocial: React.FC<HeaderSocialProps> = ({ contact }) => (
	<HeaderSocialContainer>
		<HeaderSocialWrapper>
			<HeaderSocialSection></HeaderSocialSection>
			<HeaderContactSection>
				<ContactText>{contact.phone}</ContactText>
				<ContactText>{contact.email}</ContactText>
			</HeaderContactSection>
		</HeaderSocialWrapper>
	</HeaderSocialContainer>
)
