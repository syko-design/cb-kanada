import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { aboutProps } from '../../input/about.props'
import { Wrapper, ColumnImage, ColumnText, Content, Image, Header } from './about.styled'
import { Heading3, Heading5 } from 'components/shared/heading/heading'

interface Props {
	about: typeof aboutProps
}

export const About: React.FC<Props> = (props) => {
	const data = useStaticQuery(graphql`
		query {
			placeholderImage: file(relativePath: { eq: "ASE_67_PD_m_Villa_02.jpg" }) {
				childImageSharp {
					fluid(maxWidth: 600) {
						...GatsbyImageSharpFluid
					}
				}
			}
		}
	`)

	return (
		<Wrapper id={'about-us'}>
			<ColumnImage>
				<Image fluid={data.placeholderImage.childImageSharp.fluid} alt="About us photo" />
			</ColumnImage>
			<ColumnText>
				<Header>
					<Heading3>{props.about.header}</Heading3>
					<Heading5>{props.about.subHeader}</Heading5>
				</Header>
				<Content>{props.about.content}</Content>
			</ColumnText>
		</Wrapper>
	)
}
