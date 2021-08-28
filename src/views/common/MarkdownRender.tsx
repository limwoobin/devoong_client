import React from 'react';
import ReactMarkdown from 'react-markdown';
import Progress from './Progress';
import './markdown.scss';

interface IMarkdownRender {
	data: string;
	isLoading: boolean;
}

export default function MarkdownRender({data , isLoading}: IMarkdownRender) {
	return (
		<div style={{ color: 'white' , paddingTop: '10px' }}>
			{!isLoading ? <Progress /> : <ReactMarkdown children={data} />}
		</div>
	);
}