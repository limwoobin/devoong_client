import React from 'react';
import styled from '@emotion/styled';
import ReactMarkdown from 'react-markdown';
import './markdown.scss';

export default function MarkdownRender(props: any) {
	const { contents } = props;

	return (
		<div style={{ color: 'white' , paddingTop: '10px' }}>
			<ReactMarkdown children={contents} />
		</div>
	);
}