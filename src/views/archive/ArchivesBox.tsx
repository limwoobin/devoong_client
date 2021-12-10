import React from 'react';
import Box from '@material-ui/core/Box';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { useMediaQuery } from 'react-responsive';
import { constants } from '@/core/constant';

const useStyles = makeStyles(() => 
	createStyles({
		root: {
			backgroundColor: '#858585',
			fontWeight: 'bold',
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
	const isMobile = useMediaQuery({query: constants.MAX_WIDTH});
	const classes = useStyles();
	const { title } = props;

	return (
		<>
			<Box className={classes.root} p={1}>
				<div style={{ marginLeft: '20px' , fontSize: isMobile ? '0.7rem' : '1rem'}}>
					{title}
				</div>
			</Box>
		</>
	);
}