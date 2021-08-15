import React , { useEffect } from 'react';
import { useDispatch , useSelector } from 'react-redux';
import PostsList from '../views/posts/PostsList';
import { searchPostsAsync , initLoadingState } from '../reducer/postsReducer';
import Paging from '../views/common/Paging';
import { RootState } from '../reducer/rootReducer';

function onSearchPosts(dispatch: any) {
	dispatch(searchPostsAsync());
}

function onInitLoadingState(dispatch: any) {
	dispatch(initLoadingState());
}

interface IPostsContainer {
	tagId: number;
	searchWord: string;
}

export default function PostsContainer({ tagId , searchWord }: IPostsContainer) {
	const dispatch = useDispatch();
	
	useEffect(() => {
		if (posts.length === 0) {
			onInitLoadingState(dispatch);
			onSearchPosts(dispatch);
		}
	} , []);

	function isPropsNull(param: IPostsContainer) : boolean {
		if (param.tagId == null && param.searchWord == null) {
			return true;
		}

		return false;
	}

	const { posts , isLoading } = useSelector(
		(state: RootState) => state.postsReducer);

	return (
		<>
			<PostsList posts={posts} isLoading={isLoading} />
			<Paging />
		</>
	);
}