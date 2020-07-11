import styled, { css } from 'styled-components'
import { ThemeProps } from 'theme/theme.type'

export const HeaderContainer = styled.header`
	${({ theme }: ThemeProps) => css`
		box-shadow: 0 20px 30px ${theme.colors.shadow100};
	`}
`

export const HeaderWrapper = styled.section`
	width: 1200px;
	margin: auto;
	display: flex;
	justify-content: space-between;
	align-items: center;
`
