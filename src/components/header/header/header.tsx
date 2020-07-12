import React, { useState } from 'react'
import {
	HeaderContainer,
	HeaderWrapper,
	HeaderHamburgerWrapper,
	HeaderNavbarWrapper
} from './header.style'
import { Logo } from '../logo/logo'
import { Navbar, NavbarProps } from '../navbar/navbar'
import { Hamburger } from '../hamburger/hamburger'

export interface HeaderInput {
	navbar: NavbarProps
}

export interface HeaderProps {
	header: HeaderInput
	path: string
}

export const Header: React.FC<HeaderProps> = ({ header, path }) => {
	const [openNavbar, setOpenNavbar] = useState(false)
	const handleHamburgerClick = () => setOpenNavbar(!openNavbar)

	return (
		<HeaderContainer>
			<HeaderWrapper>
				<Logo />
				<HeaderNavbarWrapper open={openNavbar}>
					<Navbar items={header.navbar.items} path={path} />
				</HeaderNavbarWrapper>
				<HeaderHamburgerWrapper>
					<Hamburger open={openNavbar} onClick={handleHamburgerClick} />
				</HeaderHamburgerWrapper>
			</HeaderWrapper>
		</HeaderContainer>
	)
}
