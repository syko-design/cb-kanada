import styled, { css } from 'styled-components'
import BackgroundImage from 'gatsby-background-image'
import { Heading } from 'components/shared/heading/heading'
import { ThemeProps } from 'theme/theme.type'
import { Button } from 'components/shared/button/button'

export const HeroWrapper = styled.section`
	height: calc(100vh - 106px);
	min-height: 700px;
	position: relative;

	${({ theme }: ThemeProps) => css`
		@media screen and (max-width: ${theme.media.mobileBp}) {
			height: calc(100vh - 68px);
		}
	`}
`

export const HeroCoverImage = styled(BackgroundImage)`
	height: 100%;
	background-size: cover;
	background-position: center 60%;
	filter: brightness(0.65);
`

export const HeroArticleWrapper = styled.section`
	position: absolute;
	top: 0;
	left: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
`

export const HeroArticle = styled.article`
	padding: 25px;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	transform: translateY(-75px);
	${({ theme }: ThemeProps) => css`
		color: ${theme.colors.light100};
	`}

	@media screen and (max-width: 600px) {
		transform: translateY(0);
	}
`

export const HeroHeader = styled.header`
	text-align: center;
	display: flex;
	flex-direction: column-reverse;
`

export const HeroHeading1 = styled.h1`
	${Heading}
	margin: 25px 0;
	${({ theme }: ThemeProps) => css`
		font-size: ${theme.fontSize.headingExtraLarge};

		@media screen and (max-width: ${theme.media.mobileBp}) {
			font-size: ${theme.fontSize.headingLarge};
		}
	`}
`

export const HeroHeading2 = styled.h2`
	text-transform: uppercase;
	${({ theme }: ThemeProps) => css`
		font-weight: ${theme.fontWeight.light};
		font-size: 24px;
	`}
`

export const HeroArticleText = styled.p`
	max-width: 600px;
	text-align: center;
`

export const HeroArticleButton = styled(Button)`
	text-transform: uppercase;
	margin: 25px;
`
