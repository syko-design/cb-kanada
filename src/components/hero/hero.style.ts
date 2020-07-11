import styled, { css } from 'styled-components'
import BackgroundImage from 'gatsby-background-image'
import { Heading } from 'components/shared/heading/heading'
import { ThemeProps } from 'theme/theme.type'
import { Button } from 'components/shared/button/button'

export const HeroWrapper = styled.section`
	height: 800px;
	position: relative;
`

export const HeroCoverImage = styled(BackgroundImage)`
	height: 100%;
	background-size: cover;
	background-position: center 60%;
	filter: brightness(0.5);
`

export const HeroArticle = styled.article`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`

export const HeroHeader = styled.header`
	text-align: center;
`

export const HeroHeading1 = styled.h1`
	${Heading}
	margin: 25px 0;
	${({ theme }: ThemeProps) => css`
		color: ${theme.colors.light100};
		font-size: 48px;
	`}
`

export const HeroHeading2 = styled.h2`
	text-transform: uppercase;
	${({ theme }: ThemeProps) => css`
		color: ${theme.colors.light100};
		font-weight: ${theme.fontWeight.light};
		font-size: ${theme.fontSize.normal};
	`}
`

export const HeroArticleText = styled.p`
	max-width: 600px;
	text-align: center;
	${({ theme }: ThemeProps) => css`
		color: ${theme.colors.light100};
	`}
`

export const HeroArticleButton = styled(Button)`
	text-transform: uppercase;
	margin: 25px;
`
