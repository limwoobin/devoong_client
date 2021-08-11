import React , { useState , useEffect } from 'react';
import { useDispatch , useSelector } from 'react-redux';
import { findPostsByTagsAsync , initLoadingState } from '../../reducer/postsReducer';
import PostsList from '../posts/PostsList';
import Progress from '../common/Progress';
import { RootState } from '../../reducer/rootReducer';

function onFindPostsByTags(dispatch: any , tagId: number) {
	dispatch(findPostsByTagsAsync(tagId));
}

function onInitLoadingState(dispatch: any) {
	dispatch(initLoadingState());
}

export default function TagsView(props: any) {
	const id = props.location.state.id;
	const name = props.match.params.name;

	const dispatch = useDispatch();

	useEffect(() => {
		onInitLoadingState(dispatch);
		onFindPostsByTags(dispatch , id);
	} , [name]);

	const { postsByTags , isLoading } = useSelector(
		(state: RootState) => state.postsReducer);

	return (
		<>
			{!isLoading ? <Progress /> : <PostsList posts={postsByTags} isLoading={isLoading} name={name} />}
		</>
	);
}