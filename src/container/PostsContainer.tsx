import React , { useEffect } from 'react';
import { useDispatch , useSelector } from 'react-redux';
import PostsList from '../views/posts/PostsList';
import { searchPostsAsync , initLoadingState } from '../reducer/postsReducer';
import { RootState } from '../reducer/rootReducer';
import Paging from '../views/common/Paging';
import { Pageable } from '../models';

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
	
	function onPageChange(e: any , page: number) {
		const pageNumber: number = page - 1;
		onSearchPosts(dispatch , new Pageable(pageNumber));
	}

	useEffect(() => {
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
			<Paging 
				totalPages={posts.totalPages} 
				pagable={posts.pageable}
				handlePageChange={onPageChange}
			/>
		</>
	);
}