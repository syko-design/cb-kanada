import styled, { css } from 'styled-components'
import { ThemeProps } from 'theme/theme.type'
import { Heading3 } from 'components/shared/heading/heading'

export const FooterWrapper = styled.footer`
	padding: 75px 50px 25px 75px;
	${({ theme }: ThemeProps) => css`
		background-color: ${theme.colors.secondary100};
		color: ${theme.colors.light100};
	`}

	@media screen and (max-width: 800px) {
		padding: 50px 25px 50px 25px;
	}
`

export const MapWrapper = styled.section``

export const CompanyDataWrapper = styled.section``

export const CompanyDataItem = styled.article`
	&:first-child {
		margin-bottom: 50px;
	}
`

export const DataHeader = styled.header``

export const DataHeading = styled(Heading3)`
	margin-bottom: 10px;
	text-align: left !important;
`

export const CopyRightText = styled.p`
	text-align: center;
`

export const Map = styled.iframe`
	width: 100%;
	border: none;
	filter: brightness(0.9) invert(100%) hue-rotate(180deg);
`

export const LocalizationWrapper = styled.section`
	display: grid;
	grid-template-columns: 1fr 2fr;
	max-width: 1240px;
	margin: 0 auto 25px auto;
	gap: 50px;

	@media screen and (max-width: ${({ theme }: ThemeProps) => theme.media.mobileBp}) {
		grid-template-columns: 1fr;

		${CompanyDataWrapper} {
			display: grid;
			align-items: center;
			grid-template-columns: 1fr 1fr;
			gap: 50px;
		}

		${CompanyDataItem} {
			&:first-child {
				margin-bottom: 0;
			}
		}
	}

	@media screen and (max-width: 800px) {
		${CompanyDataWrapper} {
			grid-template-columns: 1fr;
		}
	}
`
