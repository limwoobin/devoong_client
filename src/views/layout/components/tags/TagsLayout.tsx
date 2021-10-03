import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import { TagsModel } from '@/models';
import { RenderTags } from '@/views/tags';
import '../layout.scss';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			display: 'flex',
			justifyContent: 'center',
		},
	}),
);

interface TagsPcProps {
	tags: TagsModel[];
}

export default function TagsLayout(props: TagsPcProps) {
	const classes = useStyles();
	const { tags } = props;

	return (
		<aside className="pDRpR">
			<section className="fNlsam kPSwsK">
				<h3>Tag</h3>
				<div style={{ display: 'flex' , justifyContent: 'center' , lineHeight: '2.5rem' }}>
					<RenderTags tags={tags} />
				</div>
			</section>
		</aside>
	);
}