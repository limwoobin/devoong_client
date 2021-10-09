import React from 'react';
import { Helmet } from 'react-helmet';

export default function SEO() {
	const title = 'Devoong';
	const description = 'Devoong 의 개발 blog';
	const url = 'https://www.devoong.com';
	const image = 'https://user-images.githubusercontent.com/28802545/134803711-b1d37a77-0b43-48cb-bafb-2b40057d86b5.png';

	return (
		<div>
			<Helmet>
				<title>{title}</title>
				<meta charSet="utf-8" />
				<meta name="description" content={description} data-react-helmet="true" />
				<meta name="url" content={url} data-react-helmet="true" />
				<meta name="image" content={image} data-react-helmet="true" />
				<meta property="og:title" content={title} data-react-helmet="true" />
				<meta property="og:type" content="website" data-react-helmet="true" />
				<meta property="og:description" content={description} data-react-helmet="true" />
				<meta property="og:url" content={url} data-react-helmet="true" />
				<meta property="og:image" content={image} data-react-helmet="true" />
			</Helmet>
		</div>
	);
}