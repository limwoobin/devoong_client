import React , { useEffect } from 'react';
import Container from '@material-ui/core/Container';
import { Tag } from 'antd';
import { Link } from 'react-router-dom';
import { TagsModel } from '../../models';

function renderTags(tags: TagsModel[]) {
	return tags.map((tag: TagsModel , index: number) => (
		<Tag key={index} color="#757575" style={{fontSize: '15px' , fontWeight: 'bold' , height: '25px'}}>
			<Link key={index} to={{ pathname: `/tags/${tag.name}` , state: {id: tag.id} }}>{ tag.name }</Link>
		</Tag>
	));
}

interface ITagsList {
	tags: TagsModel[];
}

export default function TagsList(props: ITagsList) {
	const { tags } = props;

	return (
		<Container maxWidth="md">
			{renderTags(tags)}
		</Container>
	);
}