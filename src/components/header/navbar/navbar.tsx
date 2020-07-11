import React from 'react'
import { NavbarContainer, NavbarList, NavbarListItem, NavbarListLink } from './navbar.style'

export interface NavbarItem {
	name: string
	link: string
}

export interface NavbarProps {
	items: NavbarItem[]
}

export const Navbar: React.FC<NavbarProps> = ({ items }) => (
	<NavbarContainer>
		<NavbarList>
			{items.map(({ name, link }, i) => (
				<NavbarListItem key={i}>
					<NavbarListLink to={link}>{name}</NavbarListLink>
				</NavbarListItem>
			))}
		</NavbarList>
	</NavbarContainer>
)
