import React , {useEffect} from 'react';
import { Route } from 'react-router-dom';
import { TagsView , TagsList } from './';
import { TagsContainer } from '../../container';

export default function TagsRouter() {
	return (
		<div>
			<Route exact path="/tags" component={TagsContainer} />
			<Route path="/tags/:name" component={TagsView} />
		</div>
	);
}