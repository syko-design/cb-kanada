import { createGlobalStyle, css } from 'styled-components'
import { ThemeProps } from './theme.type'

export const GlobalStyles = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        ${({ theme }: ThemeProps) => css`
					font-family: ${theme.fromFamily.primary};

					::selection {
						background: ${theme.colors.primary100};
					}
				`}
    }

    body {
        ${({ theme }: ThemeProps) => css`
					font-size: ${theme.fontSize.normal};
					color: ${theme.colors.dark100};
				`}
    }

`
