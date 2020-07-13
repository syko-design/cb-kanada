import React from 'react'
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock'
import { offerProps } from '../../input/offer.props'
import {
	OfferItemWrapper,
	OfferItemImage,
	OfferItemContent,
	OfferItemContentHeader,
	OfferItemSubServiceList,
	OfferItemSubServiceItem
} from './offer.styled'
import { OfferDetails } from './offerItemDetails'
import { DynamicImageMax600 } from '../images/dynamicImageMax600'
import { Button } from '../shared/button/button'

export interface Props {
	offer: typeof offerProps.services[0]
	index: number
}

export const OfferItem: React.FC<Props> = (props) => {
	const [open, setOpen] = React.useState<boolean>(false)
	const ref = React.useRef(null)
	const handleOpen = () => {
		const targetElement = ref.current
		setOpen(true)
		if (targetElement) {
			disableBodyScroll(targetElement)
		}
	}
	const handleClose = (e: React.MouseEvent<HTMLButtonElement>) => {
		const targetElement = ref.current
		e.stopPropagation()
		setOpen(false)
		if (targetElement) {
			enableBodyScroll(targetElement)
		}
	}

	React.useEffect(() => () => clearAllBodyScrollLocks())

	return (
		<OfferItemWrapper>
			<OfferItemImage>
				<DynamicImageMax600 fileName={props.offer.images[0].src} alt={props.offer.images[0].alt} />
			</OfferItemImage>
			<OfferItemContent>
				<section>
					<OfferItemContentHeader>{props.offer.title}</OfferItemContentHeader>
					<p>{props.offer.shortContent}</p>
					<OfferItemSubServiceList>
						{props.offer.subService.map((subService) => (
							<OfferItemSubServiceItem key={subService}>{subService}</OfferItemSubServiceItem>
						))}
					</OfferItemSubServiceList>
					<Button onClick={handleOpen}>Show Details</Button>
				</section>
			</OfferItemContent>
			<OfferDetails open={open} innerRef={ref} handleClose={handleClose} {...props} />
		</OfferItemWrapper>
	)
}
