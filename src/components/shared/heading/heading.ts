import styled, { css } from 'styled-components'
import { ThemeProps } from 'theme/theme.type'

const Heading = css`
	font-weight: 600;
	line-height: 120%;
`

export const Heading3 = styled.h3`
	${Heading}
	${({ theme }: ThemeProps) => css`
		font-size: ${theme.fontSize.headingLarge};
	`}
`

export const Heading4 = styled.h4`
	${Heading}
	${({ theme }: ThemeProps) => css`
		font-size: ${theme.fontSize.headingSmall};
	`}
`
