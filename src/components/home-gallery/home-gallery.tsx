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
import { useStaticQuery, graphql } from 'gatsby'
import { GalleryArticle } from './gallery-article'

export const HomeGallery = () => {
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

	return (
		<HomeGalleryContainer>
			<GalleryHeader>
				<Heading3>Latest Finished Projects</Heading3>
				<Heading5>Check out our gallery</Heading5>
			</GalleryHeader>
			<HomeGalleryWrapper>
				<GalleryImageWrapper1>
					<GalleryImage
						fluid={data.placeholderImage1.childImageSharp.fluid}
						alt="gallery"
					></GalleryImage>
					<GalleryArticle />
				</GalleryImageWrapper1>
				<GalleryImageWrapper2>
					<GalleryImage
						fluid={data.placeholderImage2.childImageSharp.fluid}
						alt="gallery"
					></GalleryImage>
					<GalleryArticle />
				</GalleryImageWrapper2>
				<GalleryImageWrapper3>
					<GalleryImage
						fluid={data.placeholderImage3.childImageSharp.fluid}
						alt="gallery"
					></GalleryImage>
					<GalleryArticle />
				</GalleryImageWrapper3>
				<GalleryImageWrapper4>
					<GalleryImage
						fluid={data.placeholderImage4.childImageSharp.fluid}
						alt="gallery"
					></GalleryImage>
					<GalleryArticle />
				</GalleryImageWrapper4>
			</HomeGalleryWrapper>
			<GalleryFooter>
				<Button>Show more</Button>
			</GalleryFooter>
		</HomeGalleryContainer>
	)
}
