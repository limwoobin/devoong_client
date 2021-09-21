import React , { useLayoutEffect } from 'react';
import { useDispatch , useSelector } from 'react-redux';
import { getPostsAsync , initLoadingState } from '@/reducer/postsReducer';
import { Dispatch } from 'redux';
import { PostsView } from '@/views/posts';
import { RootState } from '@/reducer';
import { CustomModal } from '@/views/common';

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
		onInitLoadingState(dispatch);
		onFindPosts(dispatch , id);
	} , [id]);

	const { data , isLoading , errorData } = useSelector(
		(state: RootState) => state.postsReducer);

	return (
		<>
			{errorData.isError ? 
				<CustomModal title={errorData.code} message={errorData.message} action={() => window.location.href="/"} /> 
				: <PostsView data={data} isLoading={isLoading} errorData={errorData} />
			}
		</>
	);
}
