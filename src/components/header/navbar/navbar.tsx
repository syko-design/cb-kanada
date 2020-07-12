import React from 'react'
import {
	NavbarContainer,
	NavbarList,
	NavbarListItem,
	NavbarListTextAsLink,
	NavbarListLink
} from './navbar.style'

export interface NavbarItem {
	name: string
	link: string
	selector: string
}

export interface NavbarProps {
	items: NavbarItem[]
	path?: string
}

export const Navbar: React.FC<NavbarProps> = ({ items, path }) => {
	const scroll = (selector: string) => {
		const elem: HTMLElement | null = document.querySelector(selector)
		if (elem) {
			const offset = elem.offsetTop
			window.scrollTo({ top: offset - 100, behavior: 'smooth' })
			console.dir(elem)
		}
	}

	return (
		<NavbarContainer>
			<NavbarList>
				{items.map(({ name, link, selector }, i) => (
					<NavbarListItem key={i}>
						{path === link ? (
							<NavbarListTextAsLink onClick={() => scroll(selector)}>{name}</NavbarListTextAsLink>
						) : (
							<NavbarListLink to={link + selector}>{name}</NavbarListLink>
						)}
					</NavbarListItem>
				))}
			</NavbarList>
		</NavbarContainer>
	)
}
