import React , { useEffect } from 'react';
import { useDispatch , useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import { constants } from '../core/constant';
import LatestPostsPc from '../views/layout/components/recents/LatestPostsPc';
import LatestPostsMobile from '../views/layout/components/recents/LatestPostsMobile';
import { findLatestPostsAsync } from '../reducer/postsReducer';
import { RootState } from '../reducer/rootReducer';

function onFindLatestPosts(dispatch: any) {
	dispatch(findLatestPostsAsync());
}

export default function LatestPostsContainer() {
	const isPc = useMediaQuery({query: constants.MIN_WIDTH});
	const isMobile = useMediaQuery({query: constants.MAX_WIDTH});

	const dispatch = useDispatch();

	useEffect(() => {
		if (latestPosts.length === 0) {
			onFindLatestPosts(dispatch);
		}
		
	} , []);

	const { latestPosts } = useSelector(
		(state: RootState) => state.postsReducer);

	return (
		<>
			{isPc && <LatestPostsPc latestPosts={latestPosts} />}
			{isMobile && <LatestPostsMobile latestPosts={latestPosts} />}
		</>
	);
}
