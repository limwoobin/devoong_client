import React from 'react';
import Box from '@material-ui/core/Box';
import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => 
	createStyles({
		root: {
			backgroundColor: '#858585',
			fontWeight: 'bold',
			fontSize: '15px',
			color: 'white',
			marginBottom: '8px',
			marginTop: '5px',
		}
	})
);

interface IArchiveBox {
	title: string;
	key: number;
}

export default function ArchiveBox(props: IArchiveBox) {
	const classes = useStyles();
	const { title } = props;

	return (
		<>
			<Box className={classes.root} p={0.1}>
				<div style={{ marginLeft: '20px' }}>
					{title}
				</div>
			</Box>
		</>
	);
}