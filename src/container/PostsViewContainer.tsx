import React , { useEffect } from 'react';
import { useDispatch , useSelector } from 'react-redux';
import { getPostsAsync , initLoadingState } from '../reducer/postsReducer';
import PostsView from '../views/posts/PostsView';

function onFindPosts(dispatch: any , id: number) {
	dispatch(getPostsAsync(id));
}

function onInitLoadingState(dispatch: any) {
	dispatch(initLoadingState());
}

export default function PostsViewContainer(props: any) {
	const id = props.location.state.id;
	const dispatch = useDispatch();

	useEffect(() => {
		onInitLoadingState(dispatch);
		onFindPosts(dispatch , id);
	} , [id]);

	const { data , isLoading } = useSelector(state => state.postsReducer);

	return (
		<>
			<PostsView data={data} isLoading={isLoading} />
		</>
	);
}