import React from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from 'theme/theme'
import { GlobalStyles } from 'theme/global-styles'
import { headerProps } from '../../../input/header.props'
import { Header } from '../../header/header/header'
import { headerSocialProps } from '../../../input/header-social.props'
import { HeaderSocial } from '../../header/header-social/header-social'

const Layout: React.FC = ({ children }) => {
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
