interface Image {
	src: string
	alt: string
}

interface Service {
	title: string
	shortContent: string
	content: string
	images: Image[]
}

export const offerProps = {
	header: 'Our Offer',
	subHeader: 'What we can do for you?',
	services: [
		{
			title: 'Window',
			shortContent:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut diam et lacus luctus imperdiet sed at dui. Duis convallis pellentesque laoreet. Vestibulum elit nisl, laoreet eu purus sit amet, vulputate dictum velit. In quis massa ut justo sollicitudin suscipit. Aliquam eget dapibus ex, vitae consectetur diam. Maecenas eleifend porta orci, sed pulvinar erat.',
			content:
				'Donec pharetra sodales erat ut sollicitudin. Donec mattis elit nulla, sed sagittis dolor porttitor et. Fusce risus lorem, ultricies et nulla et, euismod auctor quam. Maecenas sit amet facilisis dui, sit amet pulvinar enim. Vestibulum iaculis urna lorem, ut viverra urna convallis at. Donec nec cursus enim. Vestibulum eu libero placerat, cursus enim placerat, cursus arcu. Nullam efficitur diam quis aliquet pretium. Nulla eu tincidunt sapien. Proin at dapibus nunc. Donec sagittis quis tellus nec ornare. Aenean ut mollis lacus.',
			images: [
				{
					src: 'BR_Schueco_67PD_Haus001.jpg',
					alt: 'ALT'
				},
				{
					src: 'BR_Schueco_67PD_Haus002.jpg',
					alt: 'ALT'
				},
				{
					src: 'ASE_67_PD_m_Villa_02.jpg',
					alt: 'ALT'
				}
			]
		},
		{
			title: 'Door',
			shortContent:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut diam et lacus luctus imperdiet sed at dui. Duis convallis pellentesque laoreet. Vestibulum elit nisl, laoreet eu purus sit amet, vulputate dictum velit. In quis massa ut justo sollicitudin suscipit. Aliquam eget dapibus ex, vitae consectetur diam. Maecenas eleifend porta orci, sed pulvinar erat.',
			content:
				'Donec pharetra sodales erat ut sollicitudin. Donec mattis elit nulla, sed sagittis dolor porttitor et. Fusce risus lorem, ultricies et nulla et, euismod auctor quam. Maecenas sit amet facilisis dui, sit amet pulvinar enim. Vestibulum iaculis urna lorem, ut viverra urna convallis at. Donec nec cursus enim. Vestibulum eu libero placerat, cursus enim placerat, cursus arcu. Nullam efficitur diam quis aliquet pretium. Nulla eu tincidunt sapien. Proin at dapibus nunc. Donec sagittis quis tellus nec ornare. Aenean ut mollis lacus.',
			images: [
				{
					src: 'BR_Schueco_67PD_Haus001.jpg',
					alt: 'ALT'
				},
				{
					src: 'BR_Schueco_67PD_Haus002.jpg',
					alt: 'ALT'
				},
				{
					src: 'ASE_67_PD_m_Villa_02.jpg',
					alt: 'ALT'
				}
			]
		},
		{
			title: 'Railings',
			shortContent:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut diam et lacus luctus imperdiet sed at dui. Duis convallis pellentesque laoreet. Vestibulum elit nisl, laoreet eu purus sit amet, vulputate dictum velit. In quis massa ut justo sollicitudin suscipit. Aliquam eget dapibus ex, vitae consectetur diam. Maecenas eleifend porta orci, sed pulvinar erat.',
			content:
				'Donec pharetra sodales erat ut sollicitudin. Donec mattis elit nulla, sed sagittis dolor porttitor et. Fusce risus lorem, ultricies et nulla et, euismod auctor quam. Maecenas sit amet facilisis dui, sit amet pulvinar enim. Vestibulum iaculis urna lorem, ut viverra urna convallis at. Donec nec cursus enim. Vestibulum eu libero placerat, cursus enim placerat, cursus arcu. Nullam efficitur diam quis aliquet pretium. Nulla eu tincidunt sapien. Proin at dapibus nunc. Donec sagittis quis tellus nec ornare. Aenean ut mollis lacus.',
			images: [
				{
					src: 'BR_Schueco_67PD_Haus001.jpg',
					alt: 'ALT'
				},
				{
					src: 'BR_Schueco_67PD_Haus002.jpg',
					alt: 'ALT'
				},
				{
					src: 'ASE_67_PD_m_Villa_02.jpg',
					alt: 'ALT'
				}
			]
		},
		{
			title: 'Constructions',
			shortContent:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ut diam et lacus luctus imperdiet sed at dui. Duis convallis pellentesque laoreet. Vestibulum elit nisl, laoreet eu purus sit amet, vulputate dictum velit. In quis massa ut justo sollicitudin suscipit. Aliquam eget dapibus ex, vitae consectetur diam. Maecenas eleifend porta orci, sed pulvinar erat.',
			content:
				'Donec pharetra sodales erat ut sollicitudin. Donec mattis elit nulla, sed sagittis dolor porttitor et. Fusce risus lorem, ultricies et nulla et, euismod auctor quam. Maecenas sit amet facilisis dui, sit amet pulvinar enim. Vestibulum iaculis urna lorem, ut viverra urna convallis at. Donec nec cursus enim. Vestibulum eu libero placerat, cursus enim placerat, cursus arcu. Nullam efficitur diam quis aliquet pretium. Nulla eu tincidunt sapien. Proin at dapibus nunc. Donec sagittis quis tellus nec ornare. Aenean ut mollis lacus.',
			images: [
				{
					src: 'BR_Schueco_67PD_Haus001.jpg',
					alt: 'ALT'
				},
				{
					src: 'BR_Schueco_67PD_Haus002.jpg',
					alt: 'ALT'
				},
				{
					src: 'ASE_67_PD_m_Villa_02.jpg',
					alt: 'ALT'
				}
			]
		}
	] as Service[]
}
