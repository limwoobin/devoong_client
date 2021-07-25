import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Progress from '../../views/Progress';
import { PostsModel } from '../../models';
import PostsCard from './PostsCard';

function renderPosts(posts: PostsModel[]) {
	if (posts.length > 0) {
			return posts.map((data) => (
					<PostsCard key={data.id} post={data} />
			));    
	}

	return '데이터가 없습니다...';
}

function renderProgress() {
	return (
		<div style={{ paddingLeft: '10%' , paddingRight: '10%' , paddingTop: '30%' }}>
			<Progress />
		</div>
	);
}

interface PostsListProps {
	posts: PostsModel[];
	isLoading: false;
}

export default function PostsList(props: PostsListProps) {
	const { posts , isLoading } = props;

	return (
		<>
			{!isLoading ? renderProgress() : 
				<Container maxWidth="lg">
						<Grid container spacing={2}>
								{renderPosts(posts)}
						</Grid>
				</Container>
			}
		</>
	);
}