import React from 'react'
import { PathProps } from 'types/path.props'
import Layout from 'components/templates/layout/layout'
import SEO from 'components/templates/seo/seo'
import { Gallery } from 'components/gallery/gallery'
import { galleryProps } from 'input/gallery.props'

const GalleryPage: React.FC<PathProps> = ({ path }) => (
	<Layout path={path}>
		<SEO title="Gallery" />
		<Gallery gallery={galleryProps} />
	</Layout>
)

export default GalleryPage
