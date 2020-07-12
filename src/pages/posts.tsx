import React from 'react'
import { Router, RouteComponentProps } from '@reach/router'
import Layout from 'components/templates/layout/layout'
import SEO from 'components/templates/seo/seo'
import { newsProps } from '../input/news.props'
import { News } from '../components/news/postPage'
import { SinglePost } from '../components/news/singlePost'

const PostsPage: React.FC<RouteComponentProps> = () => (
	<>
		<SEO title="News" />
		<News news={newsProps} />
	</>
)

const NewsWrap: React.FC = () => (
	<Layout>
		<Router>
			<PostsPage path={'/posts/'} />
			<SinglePost path={`posts/:postSlug`} />
		</Router>
	</Layout>
)

export default NewsWrap