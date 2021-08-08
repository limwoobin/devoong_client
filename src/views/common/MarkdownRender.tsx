import React from 'react';
import ReactMarkdown from 'react-markdown';
import './markdown.scss';

interface IMarkdownRender {
	data: string;
}

export default function MarkdownRender({data}: IMarkdownRender) {

	return (
		<div style={{ color: 'white' , paddingTop: '10px' }}>
			<ReactMarkdown children={data} />
		</div>
	);
}