import styled, { css } from 'styled-components'
import { ThemeProps } from 'theme/theme.type'
import BackgroundImage from 'gatsby-background-image'

export type FilterItemProps = {
	active: boolean
} & ThemeProps

export type ImageWrapperProps = {
	count: number
} & ThemeProps

export const GalleryWrapper = styled.section`
	min-height: 100vh;
	width: 90%;
	margin: auto;
	max-width: 1650px;
`

export const FilterWrapper = styled.section`
	display: flex;
	justify-content: center;
`

export const FilterItemList = styled.ul`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	list-style-type: none;

	@media screen and (max-width: 800px) {
		margin: 20px 0;
	}
`

export const FilterItem = styled.li<FilterItemProps>`
	cursor: pointer;
	padding: 30px 40px;
	transition: color 0.3s;
	text-align: center;
	${({ theme }: FilterItemProps) => css`
		color: ${theme.colors.dark200};
	`}

	${({ active, theme }: FilterItemProps) =>
		active &&
		css`
			color: ${theme.colors.primary100};
		`}

	@media screen and (max-width: 800px) {
		padding: 10px;
	}
`

export const ImagesWrapper = styled.section`
	display: grid;
	gap: 25px;
	grid-template-columns: repeat(4, 1fr);
	grid-auto-rows: 250px;
	grid-auto-flow: dense;

	@media screen and (max-width: 1350px) {
		grid-template-columns: repeat(3, 1fr);
	}

	@media screen and (max-width: ${({ theme }: ThemeProps) => theme.media.mobileBp}) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media screen and (max-width: 800px) {
		grid-auto-rows: 350px;
		grid-template-columns: 1fr;
	}

	@media screen and (max-width: 500px) {
		grid-auto-rows: 250px;
	}
`

export const ImageWrapper = styled.section<ImageWrapperProps>`
	width: 100%;
	height: 100%;

	${({ count }: ImageWrapperProps) =>
		count > 8
			? css`
					&:nth-child(7n) {
						grid-column: span 2;
					}

					&:nth-child(2n) {
						grid-row: span 2;
					}
			  `
			: css`
					grid-row: span 2;
					grid-column: span 2;
			  `}

	@media screen and (max-width: 800px) {
		grid-row: span 1 !important;
		grid-column: span 1 !important;
	}

	div {
		height: 100%;
	}
`

export const GalleryBackgroundImage = styled(BackgroundImage)`
	background-size: cover;
	background-position: center;
`
