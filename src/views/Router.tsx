import React from 'react';
import { Route , Switch } from 'react-router-dom';
import styled from 'styled-components';
import {
	NoMatch,
	Prepare,
	About,
	PostsContainer,
	PostsRouter,
	TagsRouter
} from '../page/pages';

const MainDiv = styled.div`
    font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", "Apple SD Gothic Neo", "Malgun Gothic", "맑은 고딕", 나눔고딕, "Nanum Gothic", "Noto Sans KR", "Noto Sans CJK KR", arial, 돋움, Dotum, Tahoma, Geneva, sans-serif;
    background-color: #363636;
`;

export default function Router() {   
	return (
		<MainDiv>
			<Switch>
				<Route exact path="/" component={PostsContainer} />
				<Route path="/posts" component={PostsRouter} />
				<Route path="/tags" component={TagsRouter} />
				<Route path="/about" component={About} />
				<Route path="/tags" component={Prepare} />
				<Route path="/archive" component={Prepare} />
				<Route component={NoMatch} />
			</Switch>
		</MainDiv>
	);
}