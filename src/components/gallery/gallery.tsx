import React, { useState, useEffect } from 'react'
import {
	GalleryWrapper,
	ImagesWrapper,
	FilterWrapper,
	FilterItemList,
	FilterItem,
	ImageWrapper
} from './gallery.style'
import { galleryProps } from 'input/gallery.props'
import { GalleryDynamicImage } from './gallery-dynamic-image'
import { useQueryParam, StringParam } from 'use-query-params'

export interface GalleryProps {
	gallery: typeof galleryProps
}

export const Gallery: React.FC<GalleryProps> = ({ gallery }) => {
	const [filter, setFilter] = useState('All')
	const [filtered, setFiltred] = useState([...gallery.galleryImages])
	const [queryFilter] = useQueryParam('filter', StringParam)

	const handleSetFilter = (name: string) => {
		setFilter(name)
		filterGallery(name)
	}

	const filterGallery = (filter: string) => {
		const arr = gallery.galleryImages.filter(({ category }) =>
			filter === 'All' ? true : category === filter
		)

		setFiltred(arr)
	}

	useEffect(() => {
		if (queryFilter) {
			handleSetFilter(queryFilter)
		}
	}, [])

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
			<ImagesWrapper>
				{filtered.map((image, i) => (
					<ImageWrapper key={i} count={filtered.length}>
						<GalleryDynamicImage fileName={image.path} alt="galery" />
					</ImageWrapper>
				))}
			</ImagesWrapper>
		</GalleryWrapper>
	)
}
