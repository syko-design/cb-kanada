import styled, { css } from "styled-components";
import { ThemeProps } from "theme/theme.type";

export const Button = styled.button`
    border: none;
    padding: 10px 30px;
    font-weight: 500;
    font-size: 14px;
    transition-duration: .3s;
    transition-property: background-color, color;
    will-change: background-color, color;
    cursor: pointer;

    ${({ theme }: ThemeProps) => css`
        border: 1px solid  ${theme.primary100};
        background-color: ${theme.primary100};
        color: ${theme.light100};

        &:hover {
            background-color: transparent;
            color: ${theme.primary100};
        }
    `}
`
