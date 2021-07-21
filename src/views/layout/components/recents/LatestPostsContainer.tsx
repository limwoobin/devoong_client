import React , { useEffect } from 'react';
import '../layout.scss';
import { useDispatch , useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import { constants } from '../../../../core/constant';
import LatestPostsPc from './LatestPostsPc';
import LatestPostsMobile from './LatestPostsMobile';
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
			{isPc && <LatestPostsPc latestPosts={latestPosts} />}
			{isMobile && <LatestPostsMobile latestPosts={latestPosts} />}
		</>
	);
}
