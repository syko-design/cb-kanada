/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'

interface LayoutProps {
	children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
	return (
		<div>
			<main>{children}</main>
		</div>
	)
}

export default Layout
