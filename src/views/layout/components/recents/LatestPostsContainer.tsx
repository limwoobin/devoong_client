import React , { useEffect } from 'react';
import '../layout.scss';
import { useDispatch , useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import { constants } from '../../../../core/constant';
import RecentPostsPc from './RecentPostsPc';
import RecentPostsMobile from './RecentPostsMobile';
import { findLatestPostsAsync } from '../../../../reducer/postsReducer';

function onFindLatestPosts(dispatch: any) {
	dispatch(findLatestPostsAsync());
}

export default function LatestPostsContainer() {
	const isPc = useMediaQuery({query: constants.MIN_WIDTH});
	const isMobile = useMediaQuery({query: constants.MAX_WIDTH});

	const dispatch = useDispatch();

	useEffect(() => {
		onFindLatestPosts(dispatch);
	} , []);

	const { latestPosts } = useSelector(state => state.postsReducer);

	return (
		<>
			{isPc && <RecentPostsPc latestPosts={latestPosts} />}
			{/* {isMobile && <RecentPostsMobile latestPosts={latestPosts} />} */}
		</>
	);
}
