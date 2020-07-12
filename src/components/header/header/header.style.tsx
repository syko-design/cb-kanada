import styled, { css } from 'styled-components'
import { ThemeProps } from 'theme/theme.type'

export interface HeaderNavbarWrapperProps {
	open: boolean
}

export const HeaderWrapper = styled.section`
	width: 90%;
	max-width: 1240px;
	min-height: 68px;
	margin: auto;
	display: flex;
	justify-content: space-between;
	align-items: center;
`

export const HeaderNavbarWrapper = styled.section<HeaderNavbarWrapperProps>`
	position: relative;
	right: -15px;

	@media screen and (max-width: ${({ theme }: ThemeProps) => theme.media.mobileBp}) {
		z-index: 10000;
		width: calc(100vw + 20px);
		height: 100vh;
		position: fixed;
		top: 0;
		right: calc(-100% - 40px);
		transform: translateX(0);
		transition: transform 0.3s;
		will-change: transform;

		${({ open }: HeaderNavbarWrapperProps) =>
			open &&
			css`
				transform: translateX(-100%);
			`}
	}
`

export const HeaderHamburgerWrapper = styled.section`
	display: none;

	@media screen and (max-width: ${({ theme }: ThemeProps) => theme.media.mobileBp}) {
		display: block;
		z-index: 11000;
	}
`

export const HeaderContainer = styled.header`
	position: sticky;
	top: 0;
	left: 0;
	z-index: 20000;
	${({ theme }: ThemeProps) => css`
		box-shadow: 0 20px 30px ${theme.colors.shadow100};
		background-color: ${theme.colors.light100};
	`}
`
