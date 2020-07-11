import styled, { css } from 'styled-components'
import { ThemeProps } from 'theme/theme.type'

export type HamburgerWrapperProps = {
	open: boolean
} & ThemeProps

export const HamburgerWrapper = styled.section<HamburgerWrapperProps>`
	width: 24px;
	height: 16px;
	position: relative;
	cursor: pointer;

	${({ open }: HamburgerWrapperProps) =>
		open &&
		css`
			${HamburgerItemWrapper2} {
				opacity: 0;
			}

			${HamburgerItemWrapper1} {
				transform: translateY(7px);
			}

			${HamburgerItem1} {
				transform: rotate(-45deg);
			}

			${HamburgerItemWrapper3} {
				transform: translateY(-7px);
			}

			${HamburgerItem3} {
				transform: rotate(45deg);
			}
		`};
`

export const HamburgerItemWrapper = styled.span`
	position: absolute;
	left: 0;
	height: 2px;
	width: 100%;
	display: block;
`

export const HamburgerItemWrapper1 = styled(HamburgerItemWrapper)`
	top: 0;
	transition: transform 0.3s;
	will-change: transform;
`

export const HamburgerItemWrapper2 = styled(HamburgerItemWrapper)`
	top: calc(50% - 1px);
	transition: opacity 0.3s;
	will-change: opacity;
`

export const HamburgerItemWrapper3 = styled(HamburgerItemWrapper)`
	bottom: 0;
	transition: transform 0.3s;
	will-change: transform;
`

export const HamburgerItem = styled.span`
	display: block;
	width: 100%;
	height: 100%;
	border-radius: 1px;
	transition: transform 0.3s;
	will-change: transform;
	${({ theme }: ThemeProps) => css`
		background-color: ${theme.colors.dark100};
	`}
`

export const HamburgerItem1 = styled(HamburgerItem)``
export const HamburgerItem3 = styled(HamburgerItem)``
