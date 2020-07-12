import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { offerProps } from '../../input/offer.props'
import {
	OfferItemWrapper,
	OfferItemImage,
	Image,
	OfferItemContent,
	OfferItemContentHeader
} from './offer.styled'
import { OfferDetails } from './offerItemDetails'

export type Props = typeof offerProps.services[0]

export const OfferItem: React.FC<Props> = (props) => {
	const [open, setOpen] = React.useState<boolean>(false)
	const ref = React.useRef(document.getElementsByTagName('body')[0])
	const handleOpen = () => {
		setOpen(true)
		ref.current.classList.add('block-scroll')
	}
	const handleClose = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.stopPropagation()
		setOpen(false)
		ref.current.classList.remove('block-scroll')
	}
	const data = useStaticQuery(graphql`
		query {
			placeholderImage: file(relativePath: { eq: "ASE_67_PD_m_Villa_02.jpg" }) {
				childImageSharp {
					fluid(maxWidth: 300) {
						...GatsbyImageSharpFluid
					}
				}
			}
		}
	`)

	return (
		<OfferItemWrapper tabIndex={0} role={'button'} onClick={handleOpen}>
			<OfferItemImage>
				<Image fluid={data.placeholderImage.childImageSharp.fluid} alt="About us photo" />
			</OfferItemImage>
			<OfferItemContent>
				<OfferItemContentHeader>{props.title}</OfferItemContentHeader>
				<p>{props.shortContent}</p>
			</OfferItemContent>
			<OfferDetails open={open} handleClose={handleClose} {...props} />
		</OfferItemWrapper>
	)
}
