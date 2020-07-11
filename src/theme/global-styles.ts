import { createGlobalStyle, css } from "styled-components";
import { ThemeProps } from "./theme.type";

export const GlobalStyles = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
        ${({ theme }: ThemeProps) => css`
            ::selection {
                background: ${theme.primary100};
            }
        `}
    }

    body: {
        font-size: 14px;
        font-family: sans-serif;
        ${({ theme }: ThemeProps) => css`
            color: ${theme.dark100};
        `}
    }

`