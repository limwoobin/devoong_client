import React from 'react';
import MarkdownRender from '../MarkdownRender';
import Progress from '../Progress';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { PostsModel } from '../../models';

function renderProgress() {
	return (
		<div style={{ paddingLeft: '10%' , paddingRight: '10%' , paddingTop: '30%' }}>
			<Progress />
		</div>
	);
}

interface PostsViewProps {
	data: PostsModel;
	isLoading: false;
}

export default function PostsView(props: PostsViewProps) {
	const { data , isLoading } = props;

	return (
		<>
			{!isLoading ? renderProgress() : 
				<React.Fragment>
					<CssBaseline />
					<Container maxWidth="md">
						<Typography component="div" style={{ height: '100vh' }}>
							<MarkdownRender contents={data.contents} />
						</Typography>
					</Container>
				</React.Fragment>
			}
		</>
	);
}