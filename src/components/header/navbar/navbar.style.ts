import styled, { css } from 'styled-components'
import { Link } from 'gatsby'
import { ThemeProps } from 'theme/theme.type'

export const NavbarContainer = styled.nav`
	@media screen and (max-width: 1024px) {
		${({ theme }: ThemeProps) => css`
			width: 100%;
			height: 100%;
			background-color: ${theme.colors.dark100};
			opacity: 0.99;

			${NavbarList} {
				height: 100%;
				flex-direction: column;
				justify-content: center;
			}

			${NavbarListLink} {
				font-size: ${theme.fontSize.large};
				color: ${theme.colors.light100};
			}
		`}
	}
`

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
	text-align: center;
	${({ theme }: ThemeProps) => css`
		font-size: ${theme.fontSize.small};
		color: ${theme.colors.dark100};
	`}
`