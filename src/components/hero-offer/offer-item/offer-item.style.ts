import styled, { css } from 'styled-components'
import { ThemeProps } from 'theme/theme.type'

export const OfferItemContainer = styled.article`
	max-width: 400px;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 25px 10px;
	cursor: pointer;
	transition-duration: 0.3s;
	transition-property: background-color;
	will-change: background-color;

	${({ theme }: ThemeProps) => css`
		&:hover {
			background-color: ${theme.colors.primary200};
			color: ${theme.colors.light100};

			* {
				border-color: ${theme.colors.light100};
			}

			${OfferText} {
				color: ${theme.colors.light100};
			}
		}
	`}
`

export const OfferHeader = styled.header`
	text-align: center;
	margin: 25px 0 25px 0;
	transition-duration: 0.3s;
	transition-property: color;
	will-change: color;
`

export const OfferText = styled.p`
	text-align: center;
	transition-duration: 0.3s;
	transition-property: color;
	will-change: color;
	${({ theme }: ThemeProps) => css`
		color: ${theme.colors.dark200};
	`}
`

export const OfferImgWrapper = styled.figure`
	width: 30px;
`

export const OfferImg = styled.img`
	width: 100%;
`
