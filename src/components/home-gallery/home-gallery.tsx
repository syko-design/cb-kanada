import React from 'react'
import {
	HomeGalleryWrapper,
	HomeGalleryContainer,
	GalleryHeader,
	GalleryImage,
	GalleryFooter,
	GalleryImageWrapper1,
	GalleryImageWrapper2,
	GalleryImageWrapper3,
	GalleryImageWrapper4
} from './home-gallery.style'
import { Heading3, Heading5 } from 'components/shared/heading/heading'
import { Button } from 'components/shared/button/button'
import { useStaticQuery, graphql, Link } from 'gatsby'
import { GalleryArticle, GalleryArticleItem } from './gallery-article'

export interface HomeGalleryType {
	heading: string
	subHeading: string
	buttonValue: string
	article: {
		a1: GalleryArticleItem
		a2: GalleryArticleItem
		a3: GalleryArticleItem
		a4: GalleryArticleItem
	}
}

export interface HomeGalleryProps {
	gallery: HomeGalleryType
}

export const HomeGallery: React.FC<HomeGalleryProps> = ({ gallery }) => {
	const data = useStaticQuery(graphql`
		query {
			placeholderImage1: file(relativePath: { eq: "BR_Schueco_67PD_Haus002.jpg" }) {
				childImageSharp {
					fluid(maxWidth: 900) {
						...GatsbyImageSharpFluid
					}
				}
			}
			placeholderImage2: file(relativePath: { eq: "ASE_67_PD_m_Villa_02.jpg" }) {
				childImageSharp {
					fluid(maxWidth: 400) {
						...GatsbyImageSharpFluid
					}
				}
			}
			placeholderImage3: file(relativePath: { eq: "ASE_67_PD_m_Villa_01.jpg" }) {
				childImageSharp {
					fluid(maxWidth: 600) {
						...GatsbyImageSharpFluid
					}
				}
			}
			placeholderImage4: file(relativePath: { eq: "BR_Schueco_67PD_Haus001.jpg" }) {
				childImageSharp {
					fluid(maxWidth: 600) {
						...GatsbyImageSharpFluid
					}
				}
			}
		}
	`)

	const getLink = (filter: string) => `/gallery?filter=${filter}`

	return (
		<HomeGalleryContainer id="gallery-section">
			<GalleryHeader>
				<Heading3>{gallery.heading}</Heading3>
				<Heading5>{gallery.subHeading}</Heading5>
			</GalleryHeader>
			<HomeGalleryWrapper>
				<GalleryImageWrapper1>
					<Link to={getLink('Windows')}>
						<GalleryImage
							fluid={data.placeholderImage1.childImageSharp.fluid}
							alt="gallery"
						></GalleryImage>
						<GalleryArticle article={gallery.article.a1} />
					</Link>
				</GalleryImageWrapper1>
				<GalleryImageWrapper2>
					<Link to={getLink('Doors')}>
						<GalleryImage
							fluid={data.placeholderImage2.childImageSharp.fluid}
							alt="gallery"
						></GalleryImage>
						<GalleryArticle article={gallery.article.a2} />
					</Link>
				</GalleryImageWrapper2>
				<GalleryImageWrapper3>
					<Link to={getLink('Railings')}>
						<GalleryImage
							fluid={data.placeholderImage3.childImageSharp.fluid}
							alt="gallery"
						></GalleryImage>
						<GalleryArticle article={gallery.article.a3} />
					</Link>
				</GalleryImageWrapper3>
				<GalleryImageWrapper4>
					<Link to={getLink('Constructions')}>
						<GalleryImage
							fluid={data.placeholderImage4.childImageSharp.fluid}
							alt="gallery"
						></GalleryImage>
						<GalleryArticle article={gallery.article.a4} />
					</Link>
				</GalleryImageWrapper4>
			</HomeGalleryWrapper>
			<GalleryFooter>
				<Link to="/gallery">
					<Button>{gallery.buttonValue}</Button>
				</Link>
			</GalleryFooter>
		</HomeGalleryContainer>
	)
}
