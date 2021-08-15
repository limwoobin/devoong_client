import React from 'react';
import Box from '@material-ui/core/Box';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => 
	createStyles({
		root: {
			backgroundColor: '#22b3eb',
			fontWeight: 'bold',
			fontSize: '25px',
			color: 'white'
		}
	})
);

interface ITitleView {
	title: string;
}

export default function TitleView(props: ITitleView) {
	const classes = useStyles();
	const {title} = props;

	return (
		<>
			<Box className={classes.root} p={2}>
				{title}
			</Box>
		</>
	);
}