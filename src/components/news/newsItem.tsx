import React from 'react'
import {
	NewsItemWrapper,
	NewsItemMeta,
	NewsItemHeading,
	NewsItemContent,
	NewsItemOverlayLink,
	NewsItemImage
} from './news.styled'

interface Props {
	id: string
	title: string
	titleEncoded: string
	author: string
	timestamp: string
	imageSrc: string
	content: string
}

export const NewsItem: React.FC<Props> = (props) => {
	let croppedContent = props.content
	if (props.content.length > 299) croppedContent = props.content.substring(0, 297) + '...'

	return (
		<NewsItemWrapper>
			<NewsItemOverlayLink
				to={`/posts/${props.id}-${props.titleEncoded}`}
				title={'Click to read more'}
			/>
			<NewsItemImage>
				<img src={props.imageSrc} alt={'Post image'} />
			</NewsItemImage>
			<NewsItemMeta>
				<span>{props.author}</span>
				<time dateTime={props.timestamp}>{props.timestamp}</time>
			</NewsItemMeta>
			<NewsItemHeading>{props.title}</NewsItemHeading>
			<NewsItemContent>{croppedContent}</NewsItemContent>
		</NewsItemWrapper>
	)
}
