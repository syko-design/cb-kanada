import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import {
	HeroWrapper,
	HeroCoverImage,
	HeroHeading1,
	HeroArticle,
	HeroHeader,
	HeroHeading2,
	HeroArticleText,
	HeroArticleButton
} from './hero.style'

export const Hero = () => {
	const data = useStaticQuery(graphql`
		query {
			placeholderImage: file(relativePath: { eq: "BR_Schueco_67PD_Haus002.jpg" }) {
				childImageSharp {
					fluid(maxWidth: 2500) {
						...GatsbyImageSharpFluid
					}
				}
			}
		}
	`)

	return (
		<HeroWrapper>
			<HeroCoverImage
				fluid={data.placeholderImage.childImageSharp.fluid}
				alt="cover"
			></HeroCoverImage>
			<HeroArticle>
				<HeroHeader>
					<HeroHeading2>Rezydencje i obiekty komercyjne</HeroHeading2>
					<HeroHeading1>Nowoczesne okna i drzwi z Eurpy</HeroHeading1>
				</HeroHeader>
				<HeroArticleText>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis labore laudantium
					officiis facilis debitis beatae, illum exercitationem possimus atque sed.
				</HeroArticleText>
				<HeroArticleButton>Get started</HeroArticleButton>
			</HeroArticle>
		</HeroWrapper>
	)
}
