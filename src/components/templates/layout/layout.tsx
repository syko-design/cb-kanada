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
import { headerProps } from '../../../input/header.props'
import { Header } from '../../header/header/header'
import { HeaderSocial } from 'components/header/header-social/header-social'
import { headerSocialProps } from 'input/header-social.props'

interface LayoutProps {
	children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<section>
				<HeaderSocial headerSocial={headerSocialProps} />
				<Header header={headerProps} />
				{children}
			</section>
		</ThemeProvider>
	)
}

export default Layout
