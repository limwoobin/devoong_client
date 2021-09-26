import React from 'react';
import { Helmet } from 'react-helmet';

export default function SEO() {
	const title = 'Devoong';
	const description = 'Devoong 의 개발 blog';
	const url = 'https://www.devoong.com';
	const image = 'https://user-images.githubusercontent.com/28802545/134803711-b1d37a77-0b43-48cb-bafb-2b40057d86b5.png';

	return (
		<>
			<Helmet>
				<title>{title}</title>
				<meta name="description" content={description} />
				<meta name="url" content={url} />
				<meta name="image" content={image} />
				<meta property="og:title" content={title} />
				<meta property="og:type" content="website" />
				<meta property="og:description" content={description} />
				<meta property="og:url" content={url} />
				<meta property="og:image" content={image} />
			</Helmet>
		</>
	);
}