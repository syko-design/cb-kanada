export interface Theme {
	colors: {
		primary100: string
		primary200: string
		secondary100: string
		secondary200: string
		light100: string
		light200: string
		dark100: string
		dark200: string
	}
	fontSize: {
		small: string
		normal: string
		large: string
		headingSmall: string
		headingLarge: string
	}
	fontWeight: {
		light: string
		regular: string
		semiBold: string
		bold: string
	}
	fromFamily: {
		primary: string
	}
	media: {}
}

export interface ThemeProps {
	theme: Theme
}
