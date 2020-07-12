import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'
import { GalleryArticleWrapper } from './gallery-article.style'

export const HomeGalleryContainer = styled.section`
	max-width: 1240px;
	margin: 50px auto;
`

export const HomeGalleryWrapper = styled.section`
	display: grid;
	grid-template-columns: repeat(6, 1fr);
	grid-template-rows: repeat(2, minmax(325px, 1fr));
	grid-template-areas:
		'image1 image1 image1 image1 image2 image2'
		'image3 image3 image3 image4 image4 image4';
	gap: 50px;
`

export const GalleryHeader = styled.header`
	display: flex;
	flex-direction: column-reverse;
`

export const GalleryImage = styled(BackgroundImage)`
	background-image: url(logo.png);
	background-size: cover;
	background-position: center;
	transition-duration: 0.3s;
	transition-property: transform, filter;
	will-change: transform, filter;
	height: 100%;
	width: 100%;
`

export const GalleryFooter = styled.footer`
	display: flex;
	justify-content: center;
	margin-top: 25px;
`

export const GalleryImageWrapper = styled.section`
	overflow: hidden;
	position: relative;

	&:hover {
		${GalleryImage} {
			transform: scale(1.05);
			filter: brightness(0.65);
		}

		${GalleryArticleWrapper} {
			opacity: 1;
			transform: translateY(0);
		}
	}
`

export const GalleryImageWrapper1 = styled(GalleryImageWrapper)`
	grid-area: image1;
`

export const GalleryImageWrapper2 = styled(GalleryImageWrapper)`
	grid-area: image2;
`

export const GalleryImageWrapper3 = styled(GalleryImageWrapper)`
	grid-area: image3;
`

export const GalleryImageWrapper4 = styled(GalleryImageWrapper)`
	grid-area: image4;
`
