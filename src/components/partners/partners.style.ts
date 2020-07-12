import styled from 'styled-components'

export const PartnersHeader = styled.header`
	display: flex;
	flex-direction: column-reverse;
`

export const PartnersWrapper = styled.section`
	width: 100%;
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	column-gap: 25px;
	row-gap: 50px;
	align-items: center;
	justify-items: center;
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

export const PartnersOuterWrapper = styled.section`
	width: 1240px;
	margin: 50px auto;
	@media screen and (max-width: 1300px) {
		width: 80%;

		${PartnersWrapper} {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media screen and (max-width: 800px) {
		width: 90%;

		${PartnersWrapper} {
			grid-template-columns: 1fr;
		}
	}
`
