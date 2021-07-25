import React , { useEffect } from 'react';
import { useDispatch , useSelector } from 'react-redux';
import PostsList from '../views/posts/PostsList';
import { searchPostsAsync , getPostsAsync } from '../reducer/postsReducer';

function onSearchPosts(dispatch: any) {
	dispatch(searchPostsAsync());
}

function getPosts(dispatch: any , id: number) {
	dispatch(getPostsAsync(id));
}

interface PostsContainerProps {
	tagId: number;
	searchWord: string;
}

export default function PostsContainer(props: PostsContainerProps) {
	const { tagId , searchWord } = props;
	const dispatch = useDispatch();

	useEffect(() => {
		if (posts.length === 0) {
			onSearchPosts(dispatch);
		}
		
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
				<PostsList posts={posts} isPostsLoading={isPostsLoading} />
			</>
	);
}