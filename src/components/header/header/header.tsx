import React from 'react'
import { HeaderContainer, HeaderWrapper } from './header.style'
import { HeaderSocial, HeaderSocialProps } from '../header-social/header-social'
import { Logo } from '../logo/logo'
import { Navbar, NavbarProps } from '../navbar/navbar'

export interface HeaderInput {
	headerSocial: HeaderSocialProps
	navbar: NavbarProps
}

export interface HeaderProps {
	header: HeaderInput
}

export const Header: React.FC<HeaderProps> = ({ header }) => (
	<HeaderContainer>
		<HeaderSocial contact={header.headerSocial.contact} />
		<HeaderWrapper>
			<Logo />
			<Navbar items={header.navbar.items} />
		</HeaderWrapper>
	</HeaderContainer>
)
