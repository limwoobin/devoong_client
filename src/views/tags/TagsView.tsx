import React , { useState , useEffect } from 'react';
import { useDispatch , useSelector } from 'react-redux';
import { findPostsByTagsAsync , initLoadingState } from '../../reducer/postsReducer';
import PostsList from '../posts/PostsList';
import Progress from '../Progress';

function onFindPostsByTags(dispatch: any , tagId: number) {
	dispatch(findPostsByTagsAsync(tagId));
}

function onInitLoadingState(dispatch: any) {
	dispatch(initLoadingState());
}

function renderProgress() {
	return (
		<div style={{ paddingLeft: '10%' , paddingRight: '10%' , paddingTop: '30%' }}>
			<Progress />
		</div>
	);
}

export default function TagsView(props: any) {
	const id = props.location.state.id;
	const name = props.match.params.name;

	const dispatch = useDispatch();

	useEffect(() => {
		console.log('name' , name);
		onInitLoadingState(dispatch);
		onFindPostsByTags(dispatch , id);
	} , [name]);

	const { postsByTags , isLoading } = useSelector(state => state.postsReducer);

	return (
		<>
			{!isLoading ? renderProgress() : <PostsList posts={postsByTags} isLoading={isLoading} name={name} />}
		</>
	);
}