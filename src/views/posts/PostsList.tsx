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

	return;
}

function renderTagName(name: string) {
	return (
		<div>
			<h1 style={{ color: '#6B66FF' }}>{name}</h1>
		</div>
	);
}

interface PostsListProps {
	posts: PostsModel[];
	isLoading: false;
	name?: string;
}

export default function PostsList(props: PostsListProps) {
	const { posts , isLoading , name } = props;

	return (
		<>
			{!isLoading ? <Progress /> : 
				<Container maxWidth="lg">
					{name ? renderTagName(name) : ''}
						<Grid container spacing={2}>
							{renderPosts(posts)}
						</Grid>
				</Container>
			}
		</>
	);
}