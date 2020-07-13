import styled, { css } from 'styled-components'
import { ThemeProps } from 'theme/theme.type'

export const FooterWrapper = styled.footer`
	padding: 75px 0 25px 0;
	margin-top: 50px;
	${({ theme }: ThemeProps) => css`
		background-color: ${theme.colors.secondary100};
		color: ${theme.colors.light100};
	`}

	@media screen and (max-width: 800px) {
		padding: 50px 0 25px 0;
	}
`

export const CopyRightText = styled.p`
	text-align: center;
`

export const Map = styled.iframe`
	width: 100%;
	border: none;
	filter: brightness(0.9) invert(100%) hue-rotate(180deg) contrast(1.15);
`

export const LocalizationWrapper = styled.section`
	margin-bottom: 25px;
`
