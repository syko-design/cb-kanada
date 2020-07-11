import styled, { css } from 'styled-components'
import { ThemeProps } from 'theme/theme.type'

export interface HeaderNavbarWrapperProps {
	open: boolean
}

export const HeaderWrapper = styled.section`
	width: 90%;
	max-width: 1200px;
	min-height: 68px;
	margin: auto;
	display: flex;
	justify-content: space-between;
	align-items: center;
`

export const HeaderNavbarWrapper = styled.section<HeaderNavbarWrapperProps>`
	position: relative;
	right: -15px;

	@media screen and (max-width: 1024px) {
		z-index: 10000;
		width: 100vw;
		height: 100vh;
		position: fixed;
		top: 0;
		right: -100%;
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

	@media screen and (max-width: 1024px) {
		display: block;
		z-index: 11000;
	}
`

export const HeaderContainer = styled.header`
	${({ theme }: ThemeProps) => css`
		box-shadow: 0 20px 30px ${theme.colors.shadow100};
	`}
`
