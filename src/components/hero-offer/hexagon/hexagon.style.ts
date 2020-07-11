import styled, { css } from 'styled-components'
import { ThemeProps, Theme } from 'theme/theme.type'

const width = '35px'
const height = '60px'

const createBorder = (theme: Theme) => `solid 2px ${theme.colors.dark200}`

const hexagonBox = (theme: Theme) => `
    width: ${width};
    height: ${height};
    border-top: ${createBorder(theme)};
    border-bottom: ${createBorder(theme)};
    trasition: border-color 0.3s;
    will-change: border-color;
`

export const HexagonWrapper = styled.section`
	position: relative;
	display: inline-block;
	width: ${width};
	height: ${height};
	display: flex;
	align-items: center;
	justify-content: center;
`

const HexagonLines = styled.span`
	position: absolute;
	top: 0;
	left: 0;
	${({ theme }: ThemeProps) => css`
		${hexagonBox(theme)}
	`}
`

export const HexagonLines1 = styled(HexagonLines)`
	transform: rotate(30deg);
`
export const HexagonLines2 = styled(HexagonLines)`
	transform: rotate(90deg);
`

export const HexagonLines3 = styled(HexagonLines)`
	transform: rotate(150deg);
`
