import React from 'react';
import { Link } from 'react-router-dom';
import { PostsModel } from '@/models';
import { ILatestPosts } from './ILatestPosts';
import { DateUtils } from '@/core/utils';
import { DateType } from '@/core/enums';
import '../layout.scss';

function renderLatestPosts(latestPosts: PostsModel[]) {
	return latestPosts.map((data: PostsModel , index: number) => (
		<Link key={index} to={{ pathname: `/posts/${data.id}` , state: {id: data.id} }} style={{ textDecoration: 'none' }}>
			<div>
				<span>
					<p>
						<b style={{ color: 'white' , fontSize: '1.0rem'}}>{data.title}</b>
						<br />
						<label style={{ fontSize: '0.8rem' }}>
							{DateUtils.convertDate(DateType.YEAR_MONTH_DATE , data.createdDate!)}
						</label>
					</p>
				</span>
			</div>
		</Link>
	));
}

export default function LatestPostsPc(props: ILatestPosts) {
	const { latestPosts } = props;

	return (
		<aside className="sc-csuQGl pDRpR">
			<section className="fNlsam kPSwsK">
				<h3>Latest</h3>
				{renderLatestPosts(latestPosts)}
			</section>
		</aside>
	);
}