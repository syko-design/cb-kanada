import React, { useState } from 'react'
import {
	GalleryWrapper,
	ImagesWrapper,
	FilterWrapper,
	FilterItemList,
	FilterItem
} from './gallery.style'
import { galleryProps } from 'input/gallery.props'

export interface GalleryProps {
	gallery: typeof galleryProps
}

export const Gallery: React.FC<GalleryProps> = ({ gallery }) => {
	const [filter, setFilter] = useState('All')
	const handleSetFilter = (name: string) => setFilter(name)

	return (
		<GalleryWrapper>
			<FilterWrapper>
				<FilterItemList>
					{gallery.filterItems.map((item, i) => (
						<FilterItem
							key={i}
							active={item.name === filter}
							onClick={() => handleSetFilter(item.name)}
						>
							{item.name}
						</FilterItem>
					))}
				</FilterItemList>
			</FilterWrapper>
			<ImagesWrapper></ImagesWrapper>
		</GalleryWrapper>
	)
}
