import React , { useLayoutEffect } from 'react';
import { useDispatch , useSelector } from 'react-redux';
import { RootState } from '../reducer/rootReducer';
import { Dispatch } from 'redux';
import { findPostsArchivesAsync , initLoadingState } from '../reducer/postsReducer';
import Archives from '../views/archive/Archives';

function onFindPostsArchives(dispatch: Dispatch) {
	dispatch(findPostsArchivesAsync());
}

function onInitLoadingState(dispatch: Dispatch) {
	dispatch(initLoadingState());
}

export default function ArchiveContainer() {
	const dispatch = useDispatch();

	useLayoutEffect(() => {
		onInitLoadingState(dispatch);
		onFindPostsArchives(dispatch);
	} , []);

	const { archives , isLoading } = useSelector(
		(state: RootState) => state.postsReducer
	);

	return (
		<div>
			<Archives data={archives} isLoading={isLoading} />
		</div>
	);
}