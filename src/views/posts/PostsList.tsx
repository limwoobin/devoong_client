import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { Progress , TitleView } from '@/views/common';
import { PageModel, PostsModel } from '@/models';
import PostsCard from './PostsCard';
import { CustomModal } from '@/views/common';

function renderPosts(posts: PostsModel[]) {
	if (posts) {
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
	data: PageModel;
	isLoading: boolean;
	name?: string;
}

const action = () => {
	window.location.href = "/about";
};

export default function PostsList(props: IPostsList) {
	const { data , isLoading , name } = props;
	
	return (
		<>
			{!isLoading ? <Progress /> : 
				<Container maxWidth="md" style={{ paddingTop: '1rem' }}>
					{name ? renderTitle(name) : ''}
					<Grid container spacing={1}>
						{renderPosts(data.content!)}
					</Grid>
				</Container>
			}
		</>
	);
}