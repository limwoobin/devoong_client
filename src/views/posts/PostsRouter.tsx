import React from 'react';
import { Route } from 'react-router-dom';
import { PostsContainer , PostsViewContainer } from '../../container';

export default function PostsRouter() {
	return (
		<div>
			<Route exact path="/posts" component={PostsContainer} />
			<Route path="/posts/:id" component={PostsViewContainer} />
		</div>
	);
}