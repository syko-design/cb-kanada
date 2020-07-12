import React from 'react'
import {
	OfferDetailsWrapper,
	OfferDetailsHeader,
	OfferDetailsCloseButton,
	OfferDetailsContent,
	OfferDetailsImage,
	OfferDetailsImageBtn,
	OfferDetailsImageBtnWrapper
} from './offer.styled'
import { Props as OfferProps } from './offerItem'
import { DynamicImage } from 'components/images/dynamic-image'
import { ArrowLeft } from '../shared/arrows/left'
import { ArrowRight } from '../shared/arrows/right'

interface Props extends OfferProps {
	open: boolean
	handleClose(e: React.MouseEvent<HTMLButtonElement>): void
}

export const OfferDetails: React.FC<Props> = (props) => {
	const [featured, setFeatured] = React.useState<number>(0)
	const handleNext = () => {
		setFeatured((prevState) => {
			if (prevState === props.images.length - 1) return 0
			else return ++prevState
		})
	}

	const handlePrev = () => {
		setFeatured((prevState) => {
			if (prevState === 0) return props.images.length - 1
			else return --prevState
		})
	}

	return (
		<OfferDetailsWrapper open={props.open}>
			<OfferDetailsContent>
				<OfferDetailsHeader>
					<h6>{props.title}</h6>
					<OfferDetailsCloseButton>
						<button onClick={props.handleClose} />
					</OfferDetailsCloseButton>
				</OfferDetailsHeader>
				<p>{props.content}</p>
			</OfferDetailsContent>
			<OfferDetailsImage>
				<DynamicImage alt={props.images[featured].alt} fileName={props.images[featured].src} />
				<OfferDetailsImageBtnWrapper>
					<OfferDetailsImageBtn onClick={handlePrev}>
						<ArrowLeft />
					</OfferDetailsImageBtn>
					<OfferDetailsImageBtn onClick={handleNext}>
						<ArrowRight />
					</OfferDetailsImageBtn>
				</OfferDetailsImageBtnWrapper>
			</OfferDetailsImage>
		</OfferDetailsWrapper>
	)
}
