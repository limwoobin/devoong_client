import React , { useEffect } from 'react';
import { useDispatch , useSelector } from 'react-redux';
import { getPostsAsync } from '../../reducer/postsReducer';
import MarkdownRender from '../MarkdownRender';
import Progress from '../Progress';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

function onFindPosts(dispatch: any , id: number) {
	dispatch(getPostsAsync(id));
}

function renderProgress() {
	return (
		<div style={{ paddingLeft: '10%' , paddingRight: '10%' , paddingTop: '30%' }}>
			<Progress />
		</div>
	);
}

export default function PostsView(props: any) {
	const id = props.location.state.id;
	const contents = props.location.state.contents;

	const dispatch = useDispatch();

	useEffect(() => {
		onFindPosts(dispatch , id);
	} , []);

	const { data , isLoading } = useSelector(state => state.postsReducer);

	return (
		// <React.Fragment>
		// 	<CssBaseline />
		// 	<Container maxWidth="md">
		// 		<Typography component="div" style={{ height: '100vh' }}>
					<>

					</>
		// 		</Typography>
		// 	</Container>
		// </React.Fragment>
	);
}