import React from 'react';
import { TagsModel } from '../../models';
import { Tag } from 'antd';
import { Link } from 'react-router-dom';

interface IRenderTags {
	tags: TagsModel[];
}

function renderTags(tags: TagsModel[]) {
	console.log('rednerTags ###' , tags);
	if (tags !== undefined) {
		return tags.map((tag: TagsModel , index: number) => (
			<Tag key={index} color="#757575" style={{ fontSize: '18px' , fontWeight: 'bold' , height: '25px' }}>
				<Link key={index} to={{ pathname: `/tags/${tag.name}` , state: {id: tag.id} }}>{ tag.name }</Link>
			</Tag>
		));
	}
}

export default function RenderTags({tags} : IRenderTags) {
	return (
		<>
			{renderTags(tags)}
		</>
	);
}