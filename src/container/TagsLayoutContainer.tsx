import React , { useEffect } from 'react';
import { useDispatch , useSelector } from 'react-redux';
import { findTagsAsync } from '@/reducer/tagsReducer';
import TagsLayout from '@/views/layout/components/tags/TagsLayout';
import { RootState } from '@/reducer';

function onFindTags(dispatch: any) {
	dispatch(findTagsAsync());
}

export default function TagsLayoutContainer() {
	const dispatch = useDispatch();

	useEffect(() => {
		if (tags.length === 0) {
			onFindTags(dispatch);
		}
		
	} , []);

	const { tags } = useSelector(
		(state: RootState) => state.tagsReducer);

	return (
		<div>
			<TagsLayout tags={tags} />
		</div>
	);
}