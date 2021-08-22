import React from 'react';
import { Route , Switch } from 'react-router-dom';
import styled from 'styled-components';
import {
	NoMatch,
	Prepare,
	About,
	PostsContainer,
	PostsRouter,
	TagsRouter,
	ArchiveContainer
} from '../page/pages';

// const MainDiv = styled.div`
//     font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", "Apple SD Gothic Neo", "Malgun Gothic", "맑은 고딕", 나눔고딕, "Nanum Gothic", "Noto Sans KR", "Noto Sans CJK KR", arial, 돋움, Dotum, Tahoma, Geneva, sans-serif;
//     background-color: #363636;
// `;

const MainDiv = styled.div`
	font-family: -apple-system,"Helvetica Neue","Arial","PingFang SC","Hiragino Sans GB","STHeiti","Microsoft YaHei","Microsoft JhengHei","Source Han Sans SC","Noto Sans CJK SC","Source Han Sans CN","Noto Sans SC","Source Han Sans TC","Noto Sans CJK TC","WenQuanYi Micro Hei",SimSun,sans-serif;
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
				<Route path="/archive" component={ArchiveContainer} />
				<Route component={NoMatch} />
			</Switch>
		</MainDiv>
	);
}