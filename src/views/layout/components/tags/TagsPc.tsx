import React from 'react';
import '../layout.scss';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import { Tag } from 'antd';
import { Link } from 'react-router-dom';
import { TagsModel } from '../../../../models';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			display: 'flex',
			justifyContent: 'center',
			flexWrap: 'wrap',
			'& > *': {
				margin: theme.spacing(0.5),
			},
		},
	}),
);

function renderTags(tags: TagsModel[]) {
	return tags.map((tag: TagsModel) => (
		<Tag color="#757575" style={{fontSize: '15px' , fontWeight: 'bold'}}>
			<Link to={`/tags/${tag.id}`}>{ tag.name }</Link>
		</Tag>
	));
}

export default function TagsPc(props: any) {
	const classes = useStyles();
	const { tags } = props;

	return (
		<aside className="pDRpR">
				<section className="fNlsam kPSwsK">
						<h4>Tag</h4>
						<div className={classes.root}>
							{renderTags(tags)}
						</div>
				</section>
		</aside>
	);
}
