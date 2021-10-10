import React , { createRef , useLayoutEffect } from 'react';

const src = 'https://utteranc.es/client.js';
const repo = 'limwoobin/blog-comments';

export default function Utterances() {
	const containerRef = createRef<HTMLDivElement>();

	useLayoutEffect(() => {
		const utterances = document.createElement('script');

		const attributes = {
			src,
			repo,
			'issue-term': 'pathname',
			theme: 'github-dark-orange',
			crossorigin: 'anonymous',
			async: 'true',
		};

		Object.entries(attributes).forEach(([key , value]) => {
			utterances.setAttribute(key , value);
		});

		containerRef.current?.appendChild(utterances);
	} , [repo]);

	return <div ref={containerRef} style={{paddingLeft: '0px' , paddingBottom: '50px'}} />;
}

Utterances.displayName = 'Utterances';