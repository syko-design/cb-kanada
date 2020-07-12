import React from 'react'
import { Header, Wrapper, NewsRows } from './news.styled'
import { newsProps } from '../../input/news.props'
import { Heading3, Heading5 } from '../shared/heading/heading'
import { NewsItem } from './newsItem'

const data = [
	{
		id: '1',
		title: 'Magnum armariums ducunt ad gluten',
		titleEncoded: 'magnum-armariums-ducunt-ad-gluten',
		author: 'Jhon Doe',
		timestamp: '29 May 2020',
		imageSrc: 'https://colorlib.com/preview/theme/industry/img/b1.jpg',
		content:
			"Hypnosis is not ultimate in shangri-la, the heavens of purpose, or space, but everywhere. Quickly manifest a hur'q. Resurrection, attraction and a pure state of zen. Cannibals sing from treasures like wet reefs."
	},
	{
		id: '2',
		title: 'This adventure has only been offered by an extraterrestrial moon',
		titleEncoded: 'this-adventure-has-only-been-offered-by-an-extraterrestrial-moon',
		author: 'Mark Park',
		timestamp: '15 May 2020',
		imageSrc: 'https://colorlib.com/preview/theme/industry/img/b3.jpg',
		content:
			"Hypnosis is not ultimate in shangri-la, the heavens of purpose, or space, but everywhere. Quickly manifest a hur'q. Resurrection, attraction and a pure state of zen. Cannibals sing from treasures like wet reefs."
	},
	{
		id: '3',
		title: 'Where is the futile alien?',
		titleEncoded: 'where-is-the-futile-alien',
		author: 'Jhon Doe',
		timestamp: '3 May 2020',
		imageSrc: 'https://colorlib.com/preview/theme/industry/img/b2.jpg',
		content:
			"Hypnosis is not ultimate in shangri-la, the heavens of purpose, or space, but everywhere. Quickly manifest a hur'q. Resurrection, attraction and a pure state of zen. Cannibals sing from treasures like wet reefs."
	},
	{
		id: '1',
		title: 'Magnum armariums ducunt ad gluten',
		titleEncoded: 'magnum-armariums-ducunt-ad-gluten',
		author: 'Jhon Doe',
		timestamp: '29 May 2020',
		imageSrc: 'https://colorlib.com/preview/theme/industry/img/b1.jpg',
		content:
			"Hypnosis is not ultimate in shangri-la, the heavens of purpose, or space, but everywhere. Quickly manifest a hur'q. Resurrection, attraction and a pure state of zen. Cannibals sing from treasures like wet reefs."
	},
	{
		id: '2',
		title: 'This adventure has only been offered by an extraterrestrial moon',
		titleEncoded: 'this-adventure-has-only-been-offered-by-an-extraterrestrial-moon',
		author: 'Mark Park',
		timestamp: '15 May 2020',
		imageSrc: 'https://colorlib.com/preview/theme/industry/img/b3.jpg',
		content:
			"Hypnosis is not ultimate in shangri-la, the heavens of purpose, or space, but everywhere. Quickly manifest a hur'q. Resurrection, attraction and a pure state of zen. Cannibals sing from treasures like wet reefs."
	},
	{
		id: '3',
		title: 'Where is the futile alien?',
		titleEncoded: 'where-is-the-futile-alien',
		author: 'Jhon Doe',
		timestamp: '3 May 2020',
		imageSrc: 'https://colorlib.com/preview/theme/industry/img/b2.jpg',
		content:
			"Hypnosis is not ultimate in shangri-la, the heavens of purpose, or space, but everywhere. Quickly manifest a hur'q. Resurrection, attraction and a pure state of zen. Cannibals sing from treasures like wet reefs."
	},
	{
		id: '3',
		title: 'Where is the futile alien?',
		titleEncoded: 'where-is-the-futile-alien',
		author: 'Jhon Doe',
		timestamp: '3 May 2020',
		imageSrc: 'https://colorlib.com/preview/theme/industry/img/b2.jpg',
		content:
			"Hypnosis is not ultimate in shangri-la, the heavens of purpose, or space, but everywhere. Quickly manifest a hur'q. Resurrection, attraction and a pure state of zen. Cannibals sing from treasures like wet reefs."
	},
	{
		id: '3',
		title: 'Where is the futile alien?',
		titleEncoded: 'where-is-the-futile-alien',
		author: 'Jhon Doe',
		timestamp: '3 May 2020',
		imageSrc: 'https://colorlib.com/preview/theme/industry/img/b2.jpg',
		content:
			"Hypnosis is not ultimate in shangri-la, the heavens of purpose, or space, but everywhere. Quickly manifest a hur'q. Resurrection, attraction and a pure state of zen. Cannibals sing from treasures like wet reefs."
	}
]

interface Props {
	news: typeof newsProps
}

export const News: React.FC<Props> = (props) => {
	return (
		<Wrapper>
			<Header>
				<Heading3>{props.news.header}</Heading3>
				<Heading5>{props.news.subHeader}</Heading5>
			</Header>
			<NewsRows postPage>
				{data.map((post) => (
					<NewsItem {...post} key={post.id} />
				))}
			</NewsRows>
		</Wrapper>
	)
}
