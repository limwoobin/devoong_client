import React , { useState , useEffect } from 'react';
import { useDispatch , useSelector } from 'react-redux';
import { findPostsByTagsAsync } from '../../reducer/postsReducer';
import PostsList from '../posts/PostsList';

function onFindPostsByTags(dispatch: any , tagId: number) {
	dispatch(findPostsByTagsAsync(tagId));
}

export default function TagsView(props: any) {
	const id = props.location.state.id;
	const name = props.match.params.name;

	const dispatch = useDispatch();

	useEffect(() => {
		onFindPostsByTags(dispatch , id);
	} , []);

	const { postsByTags , isLoading } = useSelector(state => state.postsReducer);

	return (
		<div>
			<PostsList posts={postsByTags} isLoading={isLoading} name={name} />
		</div>
	);
}