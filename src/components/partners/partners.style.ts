import styled from 'styled-components'

export const PartnersWrapper = styled.section`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	column-gap: 25px;
	row-gap: 50px;
	align-items: center;
	justify-items: center;
	width: 1240px;
	margin: 50px auto;

	@media screen and (max-width: 1300px) {
		width: 80%;
		grid-template-columns: repeat(2, 1fr);
	}

	@media screen and (max-width: 800px) {
		width: 90%;
		grid-template-columns: 1fr;
	}
`

export const PartnerWrapper = styled.figure`
	max-width: 200px;
	&:nth-child(2) {
		max-width: 100px;
	}
`

export const PartnerLogo = styled.img`
	width: 100%;
`
