import React from 'react'
import {
	OfferDetailsWrapper,
	OfferDetailsHeader,
	OfferDetailsCloseButton,
	OfferDetailsContent,
	OfferDetailsImage,
	OfferDetailsImageBtn,
	OfferDetailsImageBtnWrapper,
	OfferItemSubServiceItem,
	OfferItemSubServiceList,
	OfferDetailsContentText
} from './offer.styled'
import { Props as OfferProps } from './offerItem'
import { DynamicImage } from 'components/images/dynamic-image'
import { ArrowLeft } from '../shared/arrows/left'
import { ArrowRight } from '../shared/arrows/right'

interface Props extends OfferProps {
	open: boolean
	handleClose(e: React.MouseEvent<HTMLButtonElement>): void
	innerRef: any
}

export const OfferDetails: React.FC<Props> = (props) => {
	const [featured, setFeatured] = React.useState<number>(0)
	const handleNext = () => {
		setFeatured((prevState) => {
			if (prevState === props.offer.images.length - 1) return 0
			else return ++prevState
		})
	}

	const handlePrev = () => {
		setFeatured((prevState) => {
			if (prevState === 0) return props.offer.images.length - 1
			else return --prevState
		})
	}

	return (
		<OfferDetailsWrapper open={props.open} ref={props.innerRef}>
			<OfferDetailsContent>
				<OfferDetailsHeader>
					<h6>{props.offer.title}</h6>
					<OfferDetailsCloseButton>
						<button onClick={props.handleClose} />
					</OfferDetailsCloseButton>
				</OfferDetailsHeader>
				<OfferDetailsContentText>
					<p>{props.offer.content}</p>
					<OfferItemSubServiceList>
						{props.offer.subService.map((subService) => (
							<OfferItemSubServiceItem key={subService}>{subService}</OfferItemSubServiceItem>
						))}
					</OfferItemSubServiceList>
				</OfferDetailsContentText>
			</OfferDetailsContent>
			<OfferDetailsImage>
				<DynamicImage
					alt={props.offer.images[featured].alt}
					fileName={props.offer.images[featured].src}
				/>
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
