import styled, { css } from 'styled-components'
import { ThemeProps } from 'theme/theme.type'

export const HeaderSocialContainer = styled.section`
	${({ theme }: ThemeProps) => css`
		background-color: ${theme.colors.dark100};
	`}

	@media screen and (max-width: 1024px) {
		display: none;
	}
`

export const HeaderSocialWrapper = styled.section`
	display: flex;
	justify-content: space-between;
	padding: 10px 0;
	width: 90%;
	max-width: 1200px;
	margin: auto;
`

export const HeaderSocialSection = styled.section``

export const HeaderContactSection = styled.section`
	display: flex;
`

export const ContactText = styled.p`
	&:first-child {
		margin-right: 15px;
	}

	${({ theme }: ThemeProps) => css`
		font-weight: ${theme.fontWeight.light};
		font-size: ${theme.fontSize.small};
		color: ${theme.colors.light100};
	`}
`
