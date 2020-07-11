import styled, { css } from 'styled-components'
import { ThemeProps } from 'theme/theme.type'

export const HeaderSocialContainer = styled.section`
	${({ theme }: ThemeProps) => css`
		background-color: ${theme.colors.dark100};
	`}
`

export const HeaderSocialWrapper = styled.section`
	display: flex;
	justify-content: space-between;
	padding: 10px;
	max-width: 1200px;
	margin: auto;
`

export const HeaderSocialSection = styled.section``

export const HeaderContactSection = styled.section`
	display: flex;
`

export const ContactText = styled.p`
	margin: 0 10px;
	font-size: 12px;
	font-weight: 300;
	${({ theme }: ThemeProps) => css`
		color: ${theme.colors.light100};
	`}
`
