import styled, { css } from 'styled-components'
import { ThemeProps } from 'theme/theme.type'

export const Button = styled.button`
	border: none;
	padding: 10px 30px;
	transition-duration: 0.3s;
	transition-property: background-color, color;
	will-change: background-color, color;
	cursor: pointer;

	:focus {
		outline: none;
	}

	${({ theme }: ThemeProps) => css`
		font-weight: ${theme.fontWeight.semiBold};
		border: 1px solid ${theme.colors.primary100};
		background-color: ${theme.colors.primary100};
		color: ${theme.colors.light100};

		&:hover {
			background-color: transparent;
			color: ${theme.colors.primary100};
		}

		&:focus {
			outline: none;
		}
	`}
`
