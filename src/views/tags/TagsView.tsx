import React , { useState , useLayoutEffect } from 'react';
import { useDispatch , useSelector } from 'react-redux';
import { findPostsByTagsAsync , initLoadingState } from '@/reducer/postsReducer';
import { PostsList } from '@/views/posts';
import { Progress , Paging } from '@/views/common';
import { RootState } from '@/reducer';
import { Dispatch } from 'redux';
import qs from 'qs';
import { createBrowserHistory } from 'history';
import { Pageable } from '@/models';

function onFindPostsByTags(dispatch: Dispatch , name: string , pageable: Pageable) {
	dispatch(findPostsByTagsAsync({'name': name , 'pageable': pageable}));
}

function onInitLoadingState(dispatch: Dispatch) {
	dispatch(initLoadingState());
}

export default function TagsView(props: any) {
	const name = props.match.params?.name;
	const dispatch = useDispatch();
	let targetPage: any = 0;

	const [pageNumber , setPageNumber] = useState(1);

	const history = createBrowserHistory({ forceRefresh: true });

	function onChangePage(e: any , page: number) {
		if (pageNumber !== page) {
			window.location.href=`/tags/${name}?page=${page}`;
		}
	}

	useLayoutEffect(() => {
		console.log('targetPage ###');
		const filterParams = history.location.search.substr(1);
		const filtersFromParams = qs.parse(filterParams);
		targetPage = filtersFromParams.page;

		if (targetPage) {
			setPageNumber(Number(targetPage));
			onFindPostsByTags(dispatch , name , new Pageable(targetPage - 1));
			return;
		} 

		targetPage = 0;
		onInitLoadingState(dispatch);
		onFindPostsByTags(dispatch , name , new Pageable(targetPage));
	} , [targetPage]);

	useLayoutEffect(() => {
		const filterParams = history.location.search.substr(1);
		const filtersFromParams = qs.parse(filterParams);

		if (filtersFromParams.page) {
			return;
		}

		setPageNumber(1);
		onInitLoadingState(dispatch);
		onFindPostsByTags(dispatch , name , new Pageable(0));
	} , [name]);

	// useEffect(() => {
	// 	onFindPostsByTags(dispatch , name , new Pageable(pageNumber - 1));
	// } , [pageNumber]);

	// useEffect(() => {
	// 	const filterParams = history.location.search.substr(1);
	// 	const filtersFromParams = qs.parse(filterParams);

	// 	if (filtersFromParams.page) {
	// 		setPageNumber(Number(filtersFromParams.page));
	// 		return;
	// 	}

	// 	if (!postsByTags.content) {
	// 		onInitLoadingState(dispatch);
	// 		onFindPostsByTags(dispatch , name , new Pageable(pageNumber - 1));
	// 	}
	// } , [name]);

	const { postsByTags , isLoading } = useSelector(
		(state: RootState) => state.postsReducer);

	return (
		<>
			{!isLoading ? 
				<Progress /> : 
				<div>
					<PostsList data={postsByTags} isLoading={isLoading} name={name} />
					<Paging 
						totalPages={postsByTags.totalPages} 
						pagable={postsByTags.pageable}
						handlePageChange={onChangePage}
						selectedPage={pageNumber}
					/>
				</div>
			}
		</>
	);
}