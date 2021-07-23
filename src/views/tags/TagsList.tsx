import React , { useEffect } from 'react';
import { Tag } from 'antd';
import { Link } from 'react-router-dom';
import { TagsModel } from '../../models';

function renderTags(tags: TagsModel[]) {
	return tags.map((tag: TagsModel , index: number) => (
		<Tag key={index} color="#757575" style={{fontSize: '15px' , fontWeight: 'bold'}}>
			<Link key={index} to={{ pathname: `/tags/${tag.name}` , state: {id: tag.id} }}>{ tag.name }</Link>
		</Tag>
	));
}

interface TagsListProps {
	tags: TagsModel[];
}

export default function TagsList(props: TagsListProps) {
	const { tags } = props;

	return (
		<div>
			{renderTags(tags)}
		</div>
	);
}