import React, { useState } from 'react'
import {
	HeaderContainer,
	HeaderWrapper,
	HeaderHamburgerWrapper,
	HeaderNavbarWrapper
} from './header.style'
import { HeaderSocial, HeaderSocialProps } from '../header-social/header-social'
import { Logo } from '../logo/logo'
import { Navbar, NavbarProps } from '../navbar/navbar'
import { Hamburger } from '../hamburger/hamburger'

export interface HeaderInput {
	headerSocial: HeaderSocialProps
	navbar: NavbarProps
}

export interface HeaderProps {
	header: HeaderInput
}

export const Header: React.FC<HeaderProps> = ({ header }) => {
	const [openNavbar, setOpenNavbar] = useState(false)
	const handleHamburgerClick = () => setOpenNavbar(!openNavbar)

	return (
		<HeaderContainer>
			<HeaderSocial contact={header.headerSocial.contact} />
			<HeaderWrapper>
				<Logo />
				<HeaderNavbarWrapper open={openNavbar}>
					<Navbar items={header.navbar.items} />
				</HeaderNavbarWrapper>
				<HeaderHamburgerWrapper>
					<Hamburger open={openNavbar} onClick={handleHamburgerClick} />
				</HeaderHamburgerWrapper>
			</HeaderWrapper>
		</HeaderContainer>
	)
}
