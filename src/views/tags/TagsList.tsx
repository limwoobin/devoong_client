import React  from 'react';
import Container from '@material-ui/core/Container';
import { TagsModel } from '@/models';
import { TitleView } from '@/views/common';
import RenderTags from './RenderTags';

interface ITagsList {
	tags: TagsModel[];
}

export default function TagsList(props: ITagsList) {
	const { tags } = props;

	return (
		<Container maxWidth="md">
			<TitleView title="Tags" />
			<RenderTags tags={tags} />
		</Container>
	);
}