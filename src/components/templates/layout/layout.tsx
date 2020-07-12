import React from 'react'
import { ThemeProvider } from 'styled-components'
import { theme } from 'theme/theme'
import { GlobalStyles } from 'theme/global-styles'
import { headerProps } from '../../../input/header.props'
import { Header } from '../../header/header/header'
import { HeaderSocial } from 'components/header/header-social/header-social'
import { headerSocialProps } from 'input/header-social.props'
import { Footer } from 'components/footer/footer'

const Layout: React.FC = ({ children }) => {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<section>
				<HeaderSocial headerSocial={headerSocialProps} />
				<Header header={headerProps} />
				{children}
				<Footer />
			</section>
		</ThemeProvider>
	)
}

export default Layout
