import React from 'react';
import { Route } from 'react-router-dom';
import { TagsView } from './';
import { TagsContainer } from '@/container';
import CssBaseline from '@material-ui/core/CssBaseline';

export default function TagsRouter() {
	return (
		<React.Fragment>
			<CssBaseline />
			<Route exact path="/tags" component={TagsContainer} />
			<Route path="/tags/:name" component={TagsView} />
		</React.Fragment>
	);
}