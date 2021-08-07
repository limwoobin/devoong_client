import React from 'react';
import { Link } from 'react-router-dom';
import { PostsModel } from '../../../../models';
import { LatestPostsInterface } from './LatestPostsInterface';
import '../layout.scss';

function renderLatestPosts(latestPosts: PostsModel[]) {
	return latestPosts.map((data: PostsModel , index: number) => (
		<Link key={index} to={{ pathname: `/posts/${data.id}` , state: {id: data.id} }}>
				<li><b>{data.title}</b></li>
		</Link>
	));
}

export default function LatestPostsPc(props: LatestPostsInterface) {
	const { latestPosts } = props;

	return (
		<aside className="sc-csuQGl pDRpR">
			<section className="fNlsam kPSwsK">
				<h4>최신글</h4>
					{renderLatestPosts(latestPosts)}
			</section>
		</aside>
	);
}