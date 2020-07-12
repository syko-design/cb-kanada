import styled, { StyledProps } from 'styled-components'
import { ThemeProps } from '../../theme/theme.type'

export const Wrapper = styled.section`
	width: 100%;
	max-width: 1240px;
	margin: 35px auto;
	height: auto;
	padding: 3rem 10vw;
	display: flex;
	background-color: ${(props: StyledProps<ThemeProps>): string => props.theme.colors.light300};
	justify-content: center;
	align-items: flex-start;
	flex-wrap: wrap;

	@media (max-width: ${(props: StyledProps<ThemeProps>): string => props.theme.media.mobileBp}) {
 		flex-direction: column;
  }
}
`

export const Header = styled.header`
	display: flex;
	flex-direction: column-reverse;
	flex-basis: 100%;
	width: 100%;
`

export const Content = styled.article`
	width: 100%;
	margin-top: 10vh;

	p {
		width: 80%;
		margin: 4vh 0;
		font-size: 1.6rem;
	}

	@media (max-width: 1200px) {
		p {
			width: 100%;
		}
	}

	h2,
	h3,
	h4 {
		margin: 5vh 0;
	}

	ul,
	ol {
		font-size: 1.6rem;
	}

	.wp-block-image {
		width: 100%;
		margin: 3vh 0;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
	}

	.wp-block-image img {
		max-width: 100% !important;
	}

	.wp-block-image figcaption {
		text-align: center;
		color: #767676;
		margin-top: 2vh;
		width: 100%;
	}

	.wp-block-gallery {
		width: 100%;
		list-style: none;
		margin: 3vh 0;
		padding: 0;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		align-items: center;
	}

	.blocks-gallery-item {
		display: block;
		flex-basis: 33.3%;
		margin: 0;
	}

	@media (max-width: 1200px) {
		.blocks-gallery-item {
			flex-basis: 50%;
		}
	}

	@media (max-width: 600px) {
		.blocks-gallery-item {
			flex-basis: 100%;
		}
	}

	.blocks-gallery-item figure {
		width: 100%;
		margin: 0;
	}

	.blocks-gallery-item img {
		width: 100%;
	}

	.wp-block-quote {
		border-left: 2px solid black;
		padding-left: 4vw;
		padding-top: 1vw;
		padding-bottom: 1vw;
		margin: 3vh 0;
	}

	.wp-block-quote p {
		margin: 0;
	}

	.wp-block-file {
		margin: 3vh 0;
	}

	.wp-block-file a {
		display: block;
		margin-bottom: 1vh;
	}

	.wp-block-file a::before {
		content: 'Plik: ';
	}

	.wp-block-file__button {
		display: inline-block !important;
		text-decoration: none;
		padding: 8px 12px;
		font-size: 1.6rem;
		background: ${({ theme }) => theme.pink};
		color: white;
		transition: all 100ms linear;

		:hover {
			background: ${({ theme }) => theme.darkPink};
		}
	}

	.wp-block-file__button::before {
		content: '' !important;
	}

	.wp-block-table {
		width: 100%;
		border-collapse: collapse;
		margin: 3vh 0;
	}

	.wp-block-table td {
		border: 1px solid #767676;
		padding: 1rem;
	}

	hr {
		margin: 3vh 0;
	}

	.wp-block-columns {
		display: flex;
		flex-wrap: wrap;
		margin: 3vh 0;
	}

	.has-2-columns .wp-block-column {
		flex-basis: 50%;
	}

	.has-3-columns .wp-block-column {
		flex-basis: 33.333%;
	}

	.has-4-columns .wp-block-column {
		flex-basis: 25%;
	}

	@media (max-width: 1200px) {
		.wp-block-column {
			flex-basis: 100% !important;
		}
	}

	.wp-block-button {
		display: block;
	}

	.wp-block-button__link {
		display: inline-block;
		text-decoration: none;
		padding: 16px 22px;
		font-size: 1.6rem;
		background: ${({ theme }) => theme.pink};
		color: white;
		transition: all 100ms linear;

		:hover {
			background: ${({ theme }) => theme.darkPink};
		}
	}
`
