import React from 'react';
import { Link } from 'react-router-dom';
import { PostsModel } from '../../../../models';
import { ILatestPosts } from './ILatestPosts';
import '../layout.scss';

function renderLatestPosts(latestPosts: PostsModel[]) {
	return latestPosts.map((data: PostsModel , index: number) => (
		<Link key={index} to={{ pathname: `/posts/${data.id}` , state: {id: data.id} }}>
			<li><b style={{ fontSize: '1.2rem' }}>{data.title}</b></li>
		</Link>
	));
}

export default function LatestPostsPc(props: ILatestPosts) {
	const { latestPosts } = props;

	return (
		<aside className="sc-csuQGl pDRpR">
			<section className="fNlsam kPSwsK">
				<h3>최신글</h3>
					{renderLatestPosts(latestPosts)}
			</section>
		</aside>
	);
}