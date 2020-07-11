/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from 'theme/theme'
import { GlobalStyles } from 'theme/global-styles'

interface LayoutProps {
	children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<section>
				{children}
			</section>
		</ThemeProvider>
	)
}

export default Layout
