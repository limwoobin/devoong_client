import React from 'react';
import { TagsModel } from '@/models';
import Chip from '@material-ui/core/Chip';
import { Link } from 'react-router-dom';
import { TagType } from '@/core/enums';

interface IRenderTags {
	tags: TagsModel[];
	tagType?: TagType; 
}

function defaultRenderTags(tags: TagsModel[]) {
	if (tags !== undefined) {
		return tags.map((tag: TagsModel , index: number) => (
			<Link 
				key={index} 
				to={{ pathname: `/tags/${tag.name}` , state: {id: tag.id} }} 
				style={{ textDecoration: 'none' }}
			>
				<Chip 
					key={index} 
					label={tag.name} 
					style={{ 
						backgroundColor: '#757575',
						fontSize: '1rem', 
						cursor: 'pointer',
						fontWeight: 'bold',
					}} 
				/>
			</Link>
		));
	}
}

function customRenderTags(tags: TagsModel[] , tagType: TagType) {
	if (tags !== undefined) {
		return tags.map((tag: TagsModel , index: number) => (
			<Link 
				key={index} 
				to={{ pathname: `/tags/${tag.name}` , state: {id: tag.id} }} 
				style={{ textDecoration: 'none' }}
			>
				<Chip 
					key={index}
					label={tag.name}
					style={{ 
						backgroundColor: tagType,
						fontSize: '1rem', 
						cursor: 'pointer',
						fontWeight: 'bold',
					}} 
				/>
			</Link>
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