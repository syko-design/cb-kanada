import React from 'react'
import { FooterWrapper, LocalizationWrapper, CopyRightText, Map } from './footer.style'
import { Contact } from 'components/contact/contact'
import { contactProps } from 'input/contact.props'
import { footerProps } from 'input/footer.props'

export interface FooterProps {
	footer: typeof footerProps
}

export const Footer: React.FC<FooterProps> = ({ footer }) => (
	<FooterWrapper>
		<Contact contact={contactProps} />
		<LocalizationWrapper>
			<Map
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2729.4744211683646!2d-97.1550260977028!3d49.78078464178378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52c1df65659403b7%3A0xde9ac834faeb2b8b!2sShell!5e0!3m2!1spl!2spl!4v1594573951398!5m2!1spl!2spl"
				height="400"
				aria-hidden="false"
				title="map"
			></Map>
		</LocalizationWrapper>
		<CopyRightText>&copy; {footer.copyRight}</CopyRightText>
	</FooterWrapper>
)
