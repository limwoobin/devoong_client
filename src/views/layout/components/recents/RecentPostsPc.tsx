import React from 'react';
import '../layout.scss';
import { Link } from 'react-router-dom';
import { PostsModel } from '../../../../models';

function renderLatestPosts(latestPosts: PostsModel[]) {
	return latestPosts.map((data: PostsModel , index: number) => (
		<Link key={index} to={`/posts/${data.id}`}>
				<li><b>{data.title}</b></li>
		</Link>
	));
}

interface LatestPostsProps {
	latestPosts: PostsModel[];
}

export default function PcRecentPosts(props: LatestPostsProps) {
	const { latestPosts } = props;

	return (
		<aside className="sc-csuQGl pDRpR">
			<section className="fNlsam kPSwsK">
				<h4>최신글</h4>
				<ol>
					{renderLatestPosts(latestPosts)}
				</ol>
			</section>
		</aside>
	);
}