import { Theme } from './theme.type'

export const theme: Theme = {
	colors: {
		primary100: '#fab700',
		primary200: '#ffc10a',
		secondary100: '#0e1328',
		secondary200: '#04091e',
		light100: '#fff',
		light200: '#fafafa',
		dark100: '#222222',
		dark200: '#777777',
		shadow100: '#22222222'
	},
	fontSize: {
		small: '12px',
		normal: '14px',
		large: '16px',
		headingSmall: '18px',
		headingLarge: '36px'
	},
	fontWeight: {
		light: '300',
		regular: '400',
		semiBold: '500',
		bold: '600'
	},
	fromFamily: {
		primary: `'Poppins', sans-serif`
	},
	media: {
		mobileBp: '1023px'
	}
}
