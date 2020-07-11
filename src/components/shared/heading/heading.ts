import styled, { css, FlattenSimpleInterpolation, StyledProps } from 'styled-components'
import { ThemeProps } from 'theme/theme.type'

export const Heading = css`
	font-weight: 600;
	line-height: 120%;
`

export const Heading3 = styled.h3`
	margin-bottom: 30px;
	${Heading}
	${({ theme }: ThemeProps): FlattenSimpleInterpolation => css`
		font-size: ${theme.fontSize.headingLarge};
	`}
	
	@media (max-width: ${(props: StyledProps<ThemeProps>): string => props.theme.media.mobileBp}) {
		text-align: center;
	}
`

export const Heading4 = styled.h4`
	${Heading}
	${({ theme }: ThemeProps): FlattenSimpleInterpolation => css`
		font-size: ${theme.fontSize.headingSmall};
	`}
`

export const Heading5 = styled.h5`
	color: #fab700;
	font-weight: 300;
	font-size: 14px;

	@media (max-width: ${(props: StyledProps<ThemeProps>): string => props.theme.media.mobileBp}) {
		text-align: center;
	}
`
