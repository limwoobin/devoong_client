import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';


const useStyles = makeStyles((theme) =>
	createStyles({
		root: {
			'& > *': {
				marginTop: theme.spacing(2),
			},
			// paddingLeft: '30%'
		},
	}),
);

export default function Paging() {
	const classes = useStyles();

	return (
		<div className={classes.root} style={{ textAlign: 'center' }}>
			<Pagination size="large" count={10} color="primary" />
		</div>
	);
}