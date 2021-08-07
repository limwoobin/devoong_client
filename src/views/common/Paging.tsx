import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import './paging.scss';

const useStyles = makeStyles((theme) =>
	createStyles({
		root: {
			'& > *': {
				marginTop: theme.spacing(2),
			},
		},
	}),
);

export default function Paging() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Pagination count={5} color="secondary" />
		</div>
	);
}