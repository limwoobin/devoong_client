import React , { useState , useEffect } from 'react';
import { useDispatch , useSelector } from 'react-redux';
import postsReducer, { findPostsByTagsAsync , initLoadingState } from '../../reducer/postsReducer';
import PostsList from '../posts/PostsList';
import Progress from '../common/Progress';
import { RootState } from '../../reducer/rootReducer';
import { Dispatch } from 'redux';
import Paging from '../../views/common/Paging';
import qs from 'qs';
import { createBrowserHistory } from 'history';
import { Pageable } from '../../models';
import TagsByPostsModel from '../../models/TagsByPostsModel';

function onFindPostsByTags(dispatch: Dispatch , tagsByPostsModel: TagsByPostsModel) {
	dispatch(findPostsByTagsAsync(tagsByPostsModel));
}

function onInitLoadingState(dispatch: Dispatch) {
	dispatch(initLoadingState());
}

export default function TagsView(props: any) {
	const id = props.location.state?.id;
	const name = props.match.params?.name;
	const dispatch = useDispatch();

	const [pageNumber , setPageNumber] = useState(1);

	const history = createBrowserHistory();

	function onChangePage(e: any , page: number) {
		window.location.href=`/tags/${name}/?page=${page}`;
	}

	useEffect(() => {
		onFindPostsByTags(dispatch , new TagsByPostsModel(id , new Pageable(pageNumber - 1)));
	} , [pageNumber]);

	useEffect(() => {
		if (id === undefined) {
			location.href = "/";
		}

		const filterParams = history.location.search.substr(1);
		const filtersFromParams = qs.parse(filterParams);

		if (filtersFromParams.page) {
			setPageNumber(Number(filtersFromParams.page));
			return;
		}

		if (!postsByTags.content) {
			onInitLoadingState(dispatch);
			onFindPostsByTags(dispatch , new TagsByPostsModel(id , new Pageable(pageNumber - 1)));
		}
	} , [name]);

	const { postsByTags , isLoading } = useSelector(
		(state: RootState) => state.postsReducer);

	return (
		<>
			{!isLoading ? 
				<Progress /> : 
				<div>
					{/* <PostsList data={postsByTags} isLoading={isLoading} name={name} />
					<Paging 
						totalPages={postsByTags.totalPages} 
						pagable={postsByTags.pageable}
						handlePageChange={onChangePage}
						selectedPage={pageNumber}
					/> */}
				</div>
			}
		</>
	);
}