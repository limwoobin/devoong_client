import React from 'react';
import { Helmet } from 'react-helmet';

interface SeoProps {
	title: string;
	description: string;
	url: string;
	image: string;
}


export default function SEO(props: SeoProps) {
	return (
		<div>
			<Helmet>
				<title>{props.title}</title>
				<meta charSet="utf-8" />
				<meta name="description" content={props.description} data-react-helmet="true" />
				<meta name="url" content={props.url} data-react-helmet="true" />
				<meta name="image" content={props.image} data-react-helmet="true" />
				<meta property="og:title" content={props.title} data-react-helmet="true" />
				<meta property="og:type" content="website" data-react-helmet="true" />
				<meta property="og:description" content={props.description} data-react-helmet="true" />
				<meta property="og:url" content={props.url} data-react-helmet="true" />
				<meta property="og:image" content={props.image} data-react-helmet="true" />
			</Helmet>
		</div>
	);
}