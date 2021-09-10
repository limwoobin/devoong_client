import React , { useLayoutEffect } from 'react';
import { useDispatch , useSelector } from 'react-redux';
import { RootState } from '@/reducer';
import { Dispatch } from 'redux';
import { findPostsArchivesAsync , initLoadingState } from '@/reducer/postsReducer';
import Archives from '@/views/archive/Archives';
import CssBaseline from '@material-ui/core/CssBaseline';

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
		<React.Fragment>
			<CssBaseline />
			<Archives data={archives} isLoading={isLoading} />
		</React.Fragment>
	);
}