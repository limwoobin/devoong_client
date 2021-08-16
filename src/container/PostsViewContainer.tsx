import React , { useLayoutEffect } from 'react';
import { useDispatch , useSelector } from 'react-redux';
import { getPostsAsync , initLoadingState } from '../reducer/postsReducer';
import { Dispatch } from 'redux';
import PostsView from '../views/posts/PostsView';
import { RootState } from '../reducer/rootReducer';

function onFindPosts(dispatch: Dispatch, id: number) {
	dispatch(getPostsAsync(id));
}

function onInitLoadingState(dispatch: Dispatch) {
	dispatch(initLoadingState());
}

interface IPostViewContainer {
	match: {
		params: {
			id: number;
		};
	};
}

	export default function PostsViewContainer({match}: IPostViewContainer) {
	const id = match.params.id;
	const dispatch = useDispatch();

	useLayoutEffect(() => {
		console.log('PostsViewContainer ###');
		onInitLoadingState(dispatch);
		onFindPosts(dispatch , id);
	} , [id]);

	const { data , isLoading } = useSelector(
		(state: RootState) => state.postsReducer);

	return (
		<>
			<PostsView data={data} isLoading={isLoading} />
		</>
	);
}
