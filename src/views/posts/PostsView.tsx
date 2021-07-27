import React from 'react';
import MarkdownRender from '../MarkdownRender';
import Progress from '../Progress';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { PostsModel, TagsModel } from '../../models';
import { Tag } from 'antd';

function renderProgress() {
	return (
		<div style={{ paddingLeft: '10%' , paddingRight: '10%' , paddingTop: '30%' }}>
			<Progress />
		</div>
	);
}

function renderTags(tagsList: TagsModel[]) {
	if (tagsList) {
		return (
			tagsList.map((tag: TagsModel , index: number) => (
				<Tag key={index} color="#757575" style={{fontSize: '15px' , fontWeight: 'bold'}}>
					{tag.name}
				</Tag>
			))
		);
	}
}

interface PostsViewProps {
	data: PostsModel;
	isLoading: false;
}

export default function PostsView(props: PostsViewProps) {
	const { data , isLoading } = props;

	return (
		<>
			{!isLoading ? <Progress /> : 
				<React.Fragment>
					<CssBaseline />
					<Container maxWidth="md">
						{renderTags(data.tagsResponseList!)}
						<Typography component="div" style={{ height: '100vh' }}>
							<MarkdownRender contents={data.contents} />
						</Typography>
					</Container>
				</React.Fragment>
			}
		</>
	);
}