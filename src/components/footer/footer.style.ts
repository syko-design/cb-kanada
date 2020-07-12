import styled, { css } from 'styled-components'
import { ThemeProps } from 'theme/theme.type'

export const FooterWrapper = styled.footer`
	padding: 50px;
	text-align: center;
	${({ theme }: ThemeProps) => css`
		background-color: ${theme.colors.secondary100};
		color: ${theme.colors.light100};
	`}
`
