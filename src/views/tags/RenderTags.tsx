import React from 'react';
import { TagsModel } from '@/models';
import { Tag } from 'antd';
import { Link } from 'react-router-dom';
import { TagType } from '@/core/enums';

interface IRenderTags {
	tags: TagsModel[];
	tagType?: TagType; 
}

function defaultRenderTags(tags: TagsModel[]) {
	if (tags !== undefined) {
		return tags.map((tag: TagsModel , index: number) => (
			<Tag key={index} color="#757575" style={{ fontSize: '17px' , fontWeight: 'bold' , lineHeight: '30px' }}>
				<Link key={index} to={{ pathname: `/tags/${tag.name}` , state: {id: tag.id} }}>{ tag.name }</Link>
			</Tag>
		));
	}
}

function customRenderTags(tags: TagsModel[] , tagType: TagType) {
	if (tags !== undefined) {
		return tags.map((tag: TagsModel , index: number) => (
			<Tag key={index} color={tagType} style={{ fontSize: '17px' , fontWeight: 'bold' , lineHeight: '30px' }}>
				<Link key={index} to={{ pathname: `/tags/${tag.name}` , state: {id: tag.id} }}>{ tag.name }</Link>
			</Tag>
		));
	}
}

export default function RenderTags({tags , tagType} : IRenderTags) {
	return (
		<>
			{tagType 
				? customRenderTags(tags , tagType)
				: defaultRenderTags(tags)}
		</>
	);
}