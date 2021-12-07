import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { TitleView , MarkdownRender } from '@/views/common';

const data2 = ``;

export default function About() {
	return (
		<React.Fragment>
			<CssBaseline />
			<Container maxWidth="md">
				<TitleView title="About" />
				<MarkdownRender data={data2} isLoading={true} />
			</Container>
		</React.Fragment>
	);
}