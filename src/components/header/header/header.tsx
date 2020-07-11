import React from 'react'
import { HeaderContainer } from './header.style'
import { HeaderSocial, HeaderSocialProps } from '../header-social/header-social'

export interface HeaderProps {
	header: {
		headerSocial: HeaderSocialProps
	}
}

export const Header: React.FC<HeaderProps> = ({ header }) => (
	<HeaderContainer>
		<HeaderSocial contact={header.headerSocial.contact} />
	</HeaderContainer>
)
