import React from 'react';
import { Route , Switch } from 'react-router-dom';
import styled from 'styled-components';
import {
	NoMatch,
	About,
	PostsContainer,
	PostsRouter,
	TagsRouter,
	ArchiveContainer
} from '@/page/pages';
import '@/static/fonts/font.css';

// font-family: -apple-system,"Helvetica Neue","Arial","PingFang SC","Hiragino Sans GB","STHeiti","Microsoft YaHei","Microsoft JhengHei","Source Han Sans SC","Noto Sans CJK SC","Source Han Sans CN","Noto Sans SC","Source Han Sans TC","Noto Sans CJK TC","WenQuanYi Micro Hei",SimSun,sans-serif;

const MainDiv = styled.div`
	font-family: BMJUA;
`;

export default function Router() {   
	return (
		<MainDiv>
			<Switch>
				<Route exact path="/" component={PostsContainer} />
				<Route path="/posts" component={PostsRouter} />
				<Route path="/tags" component={TagsRouter} />
				<Route path="/about" component={About} />
				<Route path="/archive" component={ArchiveContainer} />
				<Route path="/public" />
				<Route component={NoMatch} />
			</Switch>
		</MainDiv>
	);
}