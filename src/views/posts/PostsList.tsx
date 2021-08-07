import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Progress from '../common/Progress';
import { PostsModel } from '../../models';
import PostsCard from './PostsCard';
import Pagination from '../common/Pagination';
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
				<Container maxWidth="lg" style={{ paddingTop: '1rem' }}>
					{name ? renderTitle(name) : ''}
						<Grid container spacing={2}>
							{renderPosts(posts)}
						</Grid>
						{/* <Pagination /> */}
				</Container>
			}
		</>
	);
}