import React , { useLayoutEffect} from 'react';
import { useDispatch , useSelector } from 'react-redux';
import { getPostsAsync , initLoadingState } from '../reducer/postsReducer';
import PostsView from '../views/posts/PostsView';

function onFindPosts(dispatch: Dispatch, id: number) {
  dispatch(getPostsAsync(id));
}

function onInitLoadingState(dispatch: Dispatch) {
  dispatch(initLoadingState());
}

interface PostViewContainerProps {
  location: {
    state: {
      id: string;
    };
  };
}

export default function PostsViewContainer({
  location,
}: PostViewContainerProps) {
  const id = location.state.id;
  const dispatch = useDispatch();

	useLayoutEffect(() => {
		onInitLoadingState(dispatch);
		onFindPosts(dispatch , id);
	} , [id]);

  const { data, isLoading } = useSelector(state => state.postsReducer);

  return (
    <>
      <PostsView data={data} isLoading={isLoading} />
    </>
  );
}
