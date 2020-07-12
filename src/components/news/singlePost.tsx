import React from 'react'
import { RouteComponentProps } from '@reach/router'
import { Wrapper, Header, Content } from './singlePost.styled'
import { Heading3 } from 'components/shared/heading/heading'

interface Props extends RouteComponentProps {
	postSlug?: string
}

export const SinglePost: React.FC<Props> = () => {
	return (
		<Wrapper>
			<Header>
				<Heading3>TITLE</Heading3>
			</Header>
			<Content>content</Content>
		</Wrapper>
	)
}
