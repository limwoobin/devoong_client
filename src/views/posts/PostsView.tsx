import React from 'react';
import MarkdownRender from '../common/MarkdownRender';
import Progress from '../common/Progress';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { PostsModel, TagsModel } from '../../models';
import { Tag } from 'antd';
import TitleView from '../common/TitleView';
import { string } from 'yargs';

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

function renderViews(views: number) {
	return (
		<div style={{ float: 'right', color: 'white' }}>{views}</div>
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
			{!isLoading ? <Progress /> : 
				<React.Fragment>
					<CssBaseline />
					<Container maxWidth="md">
						{renderTags(data.tagsResponseList!)}
						<Typography component="div" style={{ height: '100vh' }}>
							<TitleView title={data.title!} />
							<MarkdownRender contents={data.contents} />
						</Typography>
					</Container>
				</React.Fragment>
			}
		</>
	);
}