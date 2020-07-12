import styled, { css, FlattenSimpleInterpolation, StyledProps } from 'styled-components'
import Img from 'gatsby-image'
import { ThemeProps } from '../../theme/theme.type'

export const Wrapper = styled.section`
	width: 100%;
	height: auto;
	padding: 3rem 10vw;
	display: flex;
	flex-direction: column;
	// background-color: ${(props: StyledProps<ThemeProps>): string => props.theme.colors.light300};
`

export const Header = styled.header`
	display: flex;
	flex-direction: column-reverse;
	text-align: center;
`

export const OfferWrapper = styled.article`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`

export const OfferItemWrapper = styled.article`
	position: relative;
	width: 100%;
	max-width: 1000px;
	margin-top: 48px;
	display: flex;
	background-color: ${(props: StyledProps<ThemeProps>): string => props.theme.colors.light300};
	transition: all 0.1s linear;

	:nth-child(even) {
		flex-direction: row-reverse;
	}

	:first-of-type {
		margin-top: 0;
	}

	:before {
		content: '';
		z-index: -1;
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
		flex-direction: column;

		:nth-child(even) {
			flex-direction: column;
		}
	}
`

export const OfferItemImage = styled.section`
	width: 100%;
	max-width: 300px;

	@media (max-width: ${(props: StyledProps<ThemeProps>): string => props.theme.media.mobileBp}) {
		width: 100%;
		max-width: 100%;
		flex-basis: 100%;
	}
`

export const Image = styled(Img)`
	position: relative;
	max-width: 300px;
	width: 100%;
	display: block;

	@media (max-width: ${(props: StyledProps<ThemeProps>): string => props.theme.media.mobileBp}) {
		max-width: 100%;
	}
`

export const OfferItemContent = styled.section`
	padding: 16px 32px;
	display: flex;
	flex-wrap: wrap;
	background-color: ${(props: StyledProps<ThemeProps>): string => props.theme.colors.light300};

	@media (max-width: ${(props: StyledProps<ThemeProps>): string => props.theme.media.mobileBp}) {
		width: 100%;
		max-width: 100%;
		flex-basis: 100%;
	}
`

export const OfferItemContentHeader = styled.h6`
	flex-basis: 100%;
	text-transform: uppercase;
	font-weight: 600;
	margin-bottom: 12px;
	font-size: 18px;
	color: #222;
	transition: all 0.1s ease-in-out;
	margin-top: 0;
`

export const OfferDetailsWrapper = styled.section<{ open: boolean }>`
	position: fixed;
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: 1fr;
	gap: 1px 1px;
	grid-template-areas: 'image content';
	width: 100vw;
	min-height: 100vh;
	height: auto;
	background-color: ${(props: StyledProps<ThemeProps>): string => props.theme.colors.light100};
	top: 0;
	left: 0;
	z-index: 20001;
	will-change: transform;
	transition: all 0.4s ease-in-out;

	${({ open }) => {
		console.log(open)
		return open
			? css`
					transform: scale(1);
			  `
			: css`
					transform: scale(0);
			  `
	}}
	
	@media (max-width: ${(props: StyledProps<ThemeProps>): string => props.theme.media.mobileBp}) {
		grid-template-columns: 1fr;
  	grid-template-rows: 1fr 1fr;
  	grid-template-areas: "content";
	}
`

export const OfferDetailsHeader = styled.section`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	height: fit-content;
	font-size: 48px;
	font-size: 6vw;

	@media (max-width: ${(props: StyledProps<ThemeProps>): string => props.theme.media.mobileBp}) {
		font-size: 48px;
	}
`

export const OfferDetailsCloseButton = styled.section`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-left: auto;

	button {
		position: relative;
		border: 0;
		background: transparent;
		width: 5vh;
		height: 5vh;
		min-height: 30px;
		min-width: 30px;
	}

	button:focus {
		outline: none;
	}

	button:focus:before,
	button:focus:after,
	button:hover:before,
	button:hover:after {
		box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
	}

	button:before {
		content: '';
		position: absolute;
		top: 0;
		left: 50%;
		background-color: ${(props: StyledProps<ThemeProps>): string => props.theme.colors.dark100};
		width: 5px;
		height: 5vh;
		min-height: 30px;
		transform: rotate(45deg);
	}

	button:after {
		content: '';
		position: absolute;
		top: 0;
		left: 50%;
		background-color: ${(props: StyledProps<ThemeProps>): string => props.theme.colors.dark100};
		width: 5px;
		height: 5vh;
		min-height: 30px;
		transform: rotate(-45deg);
	}
`

export const OfferDetailsContent = styled.section`
	grid-area: content;
	padding: 5vh 5vw;
	display: flex;
	flex-wrap: wrap;
	justify-content: flex-start;
	align-items: flex-start;
	p {
		font-size: calc(12px + 1vw);
	}
`

export const OfferDetailsImage = styled.section`
	position: relative;
	grid-area: image;
	height: 100%;
	.gatsby-image-wrapper {
		width: 100%;
		height: 100%;
	}
`

export const OfferDetailsImageBtnWrapper = styled.section`
	position: absolute;
	bottom: -10px;
	right: 0;

	@media (max-width: ${(props: StyledProps<ThemeProps>): string => props.theme.media.mobileBp}) {
		display: none;
	}
`

export const OfferDetailsImageBtn = styled.button`
	background-color: ${(props: StyledProps<ThemeProps>): string => props.theme.colors.secondary100};
	width: 5vw;
	height: 5vw;
	min-height: 60px;
	min-width: 60px;
	border: none;

	svg {
		width: 100%;
		height: 100%;
		fill: white;
		will-change: transform;
		transition: all 0.2s linear;
	}

	:focus {
		outline: none;
	}

	:focus svg,
	:hover svg {
		transform: scale(1.05);
	}

	:active svg {
		transform: scale(0.95);
	}
`
