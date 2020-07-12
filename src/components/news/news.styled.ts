import styled, { css, StyledProps } from 'styled-components'
import { ThemeProps } from '../../theme/theme.type'
import { Link } from 'gatsby'

export const Wrapper = styled.section`
	width: 100%;
	height: auto;
	padding: 3rem 10vw;
	display: flex;
	justify-content: center;
	align-items: flex-start;
	flex-wrap: wrap;
	background-color: ${(props: StyledProps<ThemeProps>): string => props.theme.colors.light100};

	@media (max-width: ${(props: StyledProps<ThemeProps>): string => props.theme.media.mobileBp}) {
 		flex-direction: column;
  }
}
`

export const Header = styled.header`
	display: flex;
	flex-direction: column-reverse;
	flex-basis: 100%;
	width: 100%;
	text-align: center;
`

export const NewsItemWrapper = styled.article`
	position: relative;
	display: flex;
	flex-direction: column;
	flex: 1 0 calc(33.333% - 120px);
	height: 100%;

	:nth-child(3n + 2) {
		margin: 0 60px;
	}

	@media (max-width: ${(props: StyledProps<ThemeProps>): string => props.theme.media.mobileBp}) {
		:nth-child(3n + 2) {
			margin: 60px 0;
		}
	}
`

export const NewsRows = styled.section<{ postPage?: boolean }>`
	display: flex;
	width: 100%;
	max-width: 1240px;
	justify-content: space-between;
	align-items: stretch;
	margin-bottom: 32px;
	${({ postPage }) =>
		postPage &&
		css`
			display: grid;
			grid-template-columns: 1fr 1fr 1fr;
			gap: 60px 60px;

			${NewsItemWrapper}:nth-child(3n + 2) {
				margin: 0;
			}

			@media (max-width: ${(props: StyledProps<ThemeProps>): string =>
					props.theme.media.mobileBp}) {
				grid-template-columns: 1fr;
			}
		`}

	@media (max-width: ${(props: StyledProps<ThemeProps>): string => props.theme.media.mobileBp}) {
		max-width: 100%;
		flex-direction: column;
	}
`

export const NewsItemImage = styled.section`
	overflow: hidden;
	width: 100%;
	img {
		width: 100%;
		object-fit: cover;
		transition: all 0.2s linear;
	}
`

export const NewsItemMeta = styled.section`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-bottom: 1px solid ${(props: StyledProps<ThemeProps>): string => props.theme.colors.dark200};

	span,
	time {
		color: ${(props: StyledProps<ThemeProps>): string => props.theme.colors.dark200};
		line-height: 250%;
	}
`

export const NewsItemHeading = styled.h6`
	text-transform: uppercase;
	font-weight: 600;
	margin-top: 16px;
	margin-bottom: 12px;
	font-size: 18px;
	color: #222;
	transition: all 0.1s ease-in-out;
`

export const NewsItemContent = styled.p`
	color: ${(props: StyledProps<ThemeProps>): string => props.theme.colors.dark200};
`

export const NewsItemOverlayLink = styled(Link)`
	position: absolute;
	width: 100%;
	height: 100%;
	z-index: 100;

	:hover ~ ${NewsItemHeading} {
		color: ${(props: StyledProps<ThemeProps>): string => props.theme.colors.primary100};
	}

	:hover ~ ${NewsItemImage} img {
		transform: scale(1.05);
	}
`

export const ButtonMoreWrapper = styled.section`
	flex-basis: 100%;
	width: 100%;
	text-align: center;
`
