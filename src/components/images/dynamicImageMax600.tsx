import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { DynamicImageProps } from './dynamic-image'

export const DynamicImageMax600: React.FC<DynamicImageProps> = ({ alt, fileName }) => (
	<StaticQuery
		query={graphql`
			query DynamicImageMax600 {
				images: allFile {
					edges {
						node {
							relativePath
							name
							childImageSharp {
								fluid(maxWidth: 600) {
									...GatsbyImageSharpFluid
								}
							}
						}
					}
				}
			}
		`}
		render={(data) => {
			const image = data.images.edges.find((n: any) => {
				return n.node.relativePath.includes(fileName)
			})
			if (!image) {
				return null
			}

			return <Img alt={alt} fluid={image.node.childImageSharp.fluid} />
		}}
	/>
)
