import React from 'react'
import {
	FooterWrapper,
	LocalizationWrapper,
	CopyRightText,
	MapWrapper,
	CompanyDataWrapper,
	Map,
	DataHeader,
	CompanyDataItem,
	DataHeading
} from './footer.style'

export const Footer = () => (
	<FooterWrapper>
		<LocalizationWrapper>
			<CompanyDataWrapper>
				<CompanyDataItem>
					<DataHeader>
						<DataHeading>Contact</DataHeading>
					</DataHeader>
					<p>phone: +48 543 542 134</p>
					<p>email: example@gmail.com</p>
				</CompanyDataItem>
				<CompanyDataItem>
					<DataHeader>
						<DataHeading>Adress</DataHeading>
					</DataHeader>
					<p>3086 Pembina Hwy, Winnipeg,</p>
					<p>MB R3T 2J2, Kanada</p>
				</CompanyDataItem>
			</CompanyDataWrapper>
			<MapWrapper>
				<Map
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2729.4744211683646!2d-97.1550260977028!3d49.78078464178378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52c1df65659403b7%3A0xde9ac834faeb2b8b!2sShell!5e0!3m2!1spl!2spl!4v1594573951398!5m2!1spl!2spl"
					height="400"
					aria-hidden="false"
				></Map>
			</MapWrapper>
		</LocalizationWrapper>
		<CopyRightText>&copy; CB Canada 2020</CopyRightText>
	</FooterWrapper>
)
