import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Progress from '../common/Progress';
import { PostsModel } from '../../models';
import PostsCard from './PostsCard';
import TitleView from '../common/TitleView';

function renderPosts(posts: PostsModel[]) {
	if (posts.length > 0) {
		return posts.map((data) => (
			<PostsCard key={data.id} post={data} />
		));    
	}

	return;
}

function renderTitle(name: string) {
	return (
		<div style={{ paddingTop: '10px' , paddingBottom: '20px' }}>
			<TitleView title={name} />
		</div>
	);
}

interface IPostsList {
	posts: PostsModel[];
	isLoading: boolean;
	name?: string;
}

export default function PostsList(props: IPostsList) {
	const { posts , isLoading , name } = props;

	return (
		<>
			{!isLoading ? <Progress /> : 
				<Container maxWidth="md" style={{ paddingTop: '1rem' }}>
					{name ? renderTitle(name) : ''}
						<Grid container spacing={1}>
							{renderPosts(posts)}
						</Grid>
				</Container>
			}
		</>
	);
}