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
	HeroArticleButton,
	HeroArticleWrapper
} from './hero.style'

export interface HeroType {
	heading1: string
	heading2: string
	description: string
	buttonValue: string
}

export interface HeroProps {
	hero: HeroType
}

export const Hero: React.FC<HeroProps> = ({
	hero: { heading1, heading2, description, buttonValue }
}) => {
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
			<HeroArticleWrapper>
				<HeroArticle>
					<HeroHeader>
						<HeroHeading1>{heading2}</HeroHeading1>
						<HeroHeading2>{heading1}</HeroHeading2>
					</HeroHeader>
					<HeroArticleText>{description}</HeroArticleText>
					<HeroArticleButton>{buttonValue}</HeroArticleButton>
				</HeroArticle>
			</HeroArticleWrapper>
		</HeroWrapper>
	)
}
