import React , { useEffect } from 'react';
import { useDispatch , useSelector } from 'react-redux';
import { findTagsAsync } from '../reducer/tagsReducer';
import { useMediaQuery } from 'react-responsive';
import { constants } from '../core/constant/constants';
import TagsPc from '../views/layout/components/tags/TagsPc';
import TagsMobile from '../views/layout/components/tags/TagsMobile';
import { RootState } from '../reducer/rootReducer';

function onFindTags(dispatch: any) {
	dispatch(findTagsAsync());
}

export default function TagsLayoutContainer() {
	const isPc = useMediaQuery({query: constants.MIN_WIDTH});
	const isMobile = useMediaQuery({query: constants.MAX_WIDTH});

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
			{isPc && <TagsPc tags={tags} />}
			{isMobile && <TagsMobile tags={tags} />}
		</div>
	);
}