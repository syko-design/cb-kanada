import styled, { css, FlattenSimpleInterpolation, StyledProps } from 'styled-components'
import Img from 'gatsby-image'
import { ThemeProps } from '../../theme/theme.type'

export const Wrapper = styled.section`
	width: 100%;
	height: auto;
	padding: 3rem 10vw;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: ${(props: StyledProps<ThemeProps>): string => props.theme.colors.light300};

	@media (max-width: ${(props: StyledProps<ThemeProps>): string => props.theme.media.mobileBp}) {
		flex-direction: column-reverse;
	}
`

export const Header = styled.header`
	display: flex;
	flex-direction: column-reverse;
`

export const ColumnText = styled.article`
	flex-grow: 1;
	flex-basis: 0;
	display: flex;
	flex-direction: column;
	max-width: 600px;
	margin-left: 20px;

	@media (max-width: ${(props: StyledProps<ThemeProps>): string => props.theme.media.mobileBp}) {
		max-width: 100%;
		margin-left: 0;
	}
`

export const Content = styled.p``

export const ColumnImage = styled.article`
	flex-grow: 1;
	flex-basis: 0;
	max-width: 600px;
	margin-right: 20px;

	@media (max-width: ${(props: StyledProps<ThemeProps>): string => props.theme.media.mobileBp}) {
		width: 100%;
		max-width: 100%;
		margin-right: 0;
		flex-basis: 100%;
		margin-top: 30px;
	}
`

export const Image = styled(Img)`
	position: relative;
	max-width: 600px;
	width: 100%;
	display: block;
	overflow: visible !important;

	:before {
		content: '';
		position: absolute;
		left: -8px;
		top: 8px;
		width: 100%;
		height: 100%;
		will-change: transform;
		transition: all 0.1s linear;
		${({ theme }: ThemeProps): FlattenSimpleInterpolation => css`
			background-color: ${theme.colors.primary100};
		`}
	}

	:hover:before {
		transform: translate(16px, -16px);
	}

	@media (max-width: ${(props: StyledProps<ThemeProps>): string => props.theme.media.mobileBp}) {
		max-width: 100%;
	}
`
