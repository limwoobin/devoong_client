import React , { useEffect } from 'react';
import { useDispatch , useSelector } from 'react-redux';
import PostsCard from '../views/posts/PostsCard';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Progress from '../views/Progress';
import { searchPostsAsync , getPostsAsync } from '../reducer/postsReducer';
import { PostsModel } from '../models';


function renderProgress() {
	return (
		<div style={{ paddingLeft: '10%' , paddingRight: '10%' , paddingTop: '30%' }}>
			<Progress />
		</div>
	);
}

function onSearchPosts(dispatch: any) {
	dispatch(searchPostsAsync());
}

function getPosts(dispatch: any , id: number) {
	dispatch(getPostsAsync(id));
}

function renderPosts(posts: PostsModel[]) {
	if (posts.length > 0) {
			return posts.map((data) => (
					<PostsCard key={data.id} post={data} />
			));    
	}

	return '데이터가 없습니다...';
}

interface PostsContainerProps {
	tagId: number;
	searchWord: string;
}

export default function PostsContainer(props: PostsContainerProps) {
	const { tagId , searchWord } = props;
	const dispatch = useDispatch();

	useEffect(() => {
		console.log('main ###');
		// if (posts.length === 0) {
		// 	onSearchPosts(dispatch);
		// }

		onSearchPosts(dispatch);
	} , []);

	function isPropsNull(param: PostsContainerProps) : boolean {
		if (param.tagId == null && param.searchWord == null) {
			return true;
		}

		return false;
	}

	const { posts , isPostsLoading } = useSelector(state => state.postsReducer);

	return (
			<>
				{!isPostsLoading ? renderProgress() : 
						<Container maxWidth="lg">
								<Grid container spacing={2}>
										{renderPosts(posts)}
								</Grid>
						</Container>
				}
			</>
	);
}