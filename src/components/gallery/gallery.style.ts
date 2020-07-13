import styled, { css } from 'styled-components'
import { ThemeProps } from 'theme/theme.type'

export type FilterItemProps = {
	active: boolean
} & ThemeProps

export const GalleryWrapper = styled.section`
	min-height: 100vh;
`

export const FilterWrapper = styled.section`
	display: flex;
	justify-content: center;
`

export const FilterItemList = styled.ul`
	display: flex;
	list-style-type: none;
`

export const FilterItem = styled.li<FilterItemProps>`
	cursor: pointer;
	padding: 30px 40px;
	transition: color 0.3s;
	${({ theme }: FilterItemProps) => css`
		color: ${theme.colors.dark200};
	`}

	${({ active, theme }: FilterItemProps) =>
		active &&
		css`
			color: ${theme.colors.primary100};
		`}
`

export const ImagesWrapper = styled.section``
