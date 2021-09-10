import React from 'react';
import { Route } from 'react-router-dom';
import { PostsContainer , PostsViewContainer } from '@/container';
import CssBaseline from '@material-ui/core/CssBaseline';

export default function PostsRouter() {
	return (
		<React.Fragment>
			<CssBaseline />
			<Route exact path="/posts" component={PostsContainer} />
			<Route path="/posts/:id" component={PostsViewContainer} />
		</React.Fragment>
	);
}