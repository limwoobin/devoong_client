import React , { useEffect } from 'react';
import { useDispatch , useSelector } from 'react-redux';
import { findTagsAsync } from '../reducer/tagsReducer';
import TagsList from '../views/tags/TagsList';

function onFindTags(dispatch: any) {
	dispatch(findTagsAsync());
}

export default function TagsContainer() {
	const dispatch = useDispatch();

	useEffect(() => {
		onFindTags(dispatch);
	} , []);

	const { tags } = useSelector(state => state.tagsReducer);

	return (
		<div>
			<TagsList tags={tags} />
		</div>
	);
}