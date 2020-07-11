import styled, { css } from 'styled-components'
import { Link } from 'gatsby'
import { ThemeProps } from 'theme/theme.type'

export const NavbarContainer = styled.nav``

export const NavbarList = styled.ul`
	list-style-type: none;
	display: flex;
`

export const NavbarListItem = styled.li`
	cursor: pointer;
`

export const NavbarListLink = styled(Link)`
	text-decoration: none;
	display: block;
	padding: 25px 15px;
	text-transform: uppercase;
	${({ theme }: ThemeProps) => css`
		font-size: ${theme.fontSize.small};
		color: ${theme.colors.dark100};
	`}
`
