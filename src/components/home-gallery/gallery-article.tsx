import React from 'react'
import { Hexagon } from 'components/hero-offer/hexagon/hexagon'
import {
	GalleryArticleWrapper,
	GalleryLabel,
	ArticleIconWrapper,
	ArticleIcon
} from './gallery-article.style'

export interface GalleryArticleItem {
	heading: string
	icon: string
}

export interface GalleryArticleProps {
	article: GalleryArticleItem
}

export const GalleryArticle: React.FC<GalleryArticleProps> = ({ article: { heading, icon } }) => (
	<GalleryArticleWrapper>
		<Hexagon>
			<ArticleIconWrapper>
				<ArticleIcon src={icon} alt="article icon"></ArticleIcon>
			</ArticleIconWrapper>
		</Hexagon>
		<GalleryLabel>{heading}</GalleryLabel>
	</GalleryArticleWrapper>
)
