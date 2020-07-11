import styled, { css } from 'styled-components'
import { ThemeProps } from 'theme/theme.type'

export const HeroOfferContainer = styled.section`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: 50px;
	padding: 25px 50px;
	width: 1240px;
	margin: auto;
	position: relative;
	top: -175px;
	margin-bottom: -125px;
	justify-items: center;
	${({ theme }: ThemeProps) => css`
		background-color: ${theme.colors.light100};
		box-shadow: 0 -5px 10px ${theme.colors.shadow100};
	`}

	@media screen and (max-width: 1300px) {
		width: 80%;
		grid-template-columns: repeat(2, 1fr);
	}

	@media screen and (max-width: 800px) {
		width: 90%;
		grid-template-columns: 1fr;
	}

	@media screen and (max-width: 600px) {
		top: 0;
		margin-bottom: 50px;
		margin-top: 50px;
	}
`
