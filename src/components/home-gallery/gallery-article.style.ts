import styled, { css } from 'styled-components'
import { ThemeProps } from 'theme/theme.type'

export const GalleryArticleWrapper = styled.article`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	z-index: 1000;
	opacity: 0;
	transform: translateY(20px);
	transition: all 0.3s;
	${({ theme }: ThemeProps) => css`
		* {
			border-color: ${theme.colors.light100};
		}
	`}
`

export const GalleryLabel = styled.p`
	text-transform: uppercase;
	margin-top: 15px;
	${({ theme }: ThemeProps) => css`
		color: ${theme.colors.light100};
		font-size: ${theme.fontSize.headingSmall};
		font-weight: ${theme.fontWeight.light};
	`}
`

export const ArticleIconWrapper = styled.figure`
	width: 30px;
`

export const ArticleIcon = styled.img`
	width: 100%;
`
