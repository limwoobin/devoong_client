import React , { useState , useEffect } from 'react';
import { useDispatch , useSelector } from 'react-redux';
import PostsList from '../views/posts/PostsList';
import { searchPostsAsync , initLoadingState } from '../reducer/postsReducer';
import { RootState } from '../reducer/rootReducer';
import Paging from '../views/common/Paging';
import { Pageable } from '../models';
import qs from 'qs';
import { createBrowserHistory } from 'history';

function onSearchPosts(dispatch: any , pageable: Pageable) {
	dispatch(searchPostsAsync(pageable));
}

function onInitLoadingState(dispatch: any) {
	dispatch(initLoadingState());
}

interface IPostsContainer {
	tagId: number;
	searchWord: string;
}

export default function PostsContainer({ tagId , searchWord }: IPostsContainer) {
	const dispatch = useDispatch();
	
	const [pageNumber , setPageNumber] = useState(1);

	const history = createBrowserHistory();

	function onPageChange(e: any , page: number) {
		setPageNumber(page);
		onSearch();
	}

	function onSearch() {
		console.log('pageNumber' , pageNumber);
		history.push(`/posts?page=${pageNumber}`);
		onSearchPosts(dispatch , new Pageable(pageNumber - 1));
	}

	useEffect(() => {
		const filterParams = history.location.search.substr(1);
		const filtersFromParams = qs.parse(filterParams);

		console.log('filtersFromParams' , filtersFromParams);
		console.log('filtersFromParams.page' , filtersFromParams.page);

		if (filtersFromParams.page) {
			setPageNumber(Number(filtersFromParams.page));
			onPageChange(null , Number(filtersFromParams.page));
			return;
		}

		if (posts.content === undefined) {
			onInitLoadingState(dispatch);
			onSearchPosts(dispatch , new Pageable(0));
		}
	} , []);

	function isPropsNull(param: IPostsContainer) : boolean {
		if (param.tagId == null && param.searchWord == null) {
			return true;
		}

		return false;
	}

	const { posts , isLoading } = useSelector(
		(state: RootState) => state.postsReducer);

	return (
		<>
			<PostsList data={posts} isLoading={isLoading} />
			{pageNumber}
			<Paging 
				totalPages={posts.totalPages} 
				pagable={posts.pageable}
				handlePageChange={onPageChange}
			/>
		</>
	);
}