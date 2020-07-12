import React from 'react'
import { Hexagon } from 'components/hero-offer/hexagon/hexagon'
import {
	GalleryArticleWrapper,
	GalleryLabel,
	ArticleIconWrapper,
	ArticleIcon
} from './gallery-article.style'

export const GalleryArticle = () => (
	<GalleryArticleWrapper>
		<Hexagon>
			<ArticleIconWrapper>
				<ArticleIcon src="hero-offer/window.svg" alt="article icon"></ArticleIcon>
			</ArticleIconWrapper>
		</Hexagon>
		<GalleryLabel>Windows</GalleryLabel>
	</GalleryArticleWrapper>
)
