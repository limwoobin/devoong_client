import React from 'react';
import { makeStyles, createStyles, Theme, withStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles({
	paginationContainer: {
		marginBottom: "40px",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		height: "110px",

		"& .MuiPaginationItem-root": {
			margin: "0 6px",
			fontSize: "16px",
			color: 'white',
			fontWeight: 'bold'
		},
		"& .MuiPaginationItem-page": {
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
			fontFamily: "'proxima-nova', 'Noto Sans KR', sans-serif",
			letterSpacing: "-0.1px",

			"&.Mui-selected": {
				backgroundColor: "#424242",
				color: "black",
			},
		},
	},

	pageRange: {
		margin: "16px 0 30px",
		fontSize: "14px",
		fontWeight: "bold"
	},

	additionalFee: {
		fontSize: "17px",
		fontWeight: "bold",
		color: "#777",
		lineHeight: "30px",
	},
});

interface IPaging {
	totalPages: number;
	pagable: any;
	handlePageChange: any;
}

export default function Paging({totalPages , pagable , handlePageChange}: IPaging) {
	const classes = useStyles();

	return (
		<div className={classes.paginationContainer} style={{ textAlign: 'center' }}>
			<Pagination 
				size="large" 
				count={totalPages} 
				color="primary"  
				onChange={handlePageChange} 
			/>
		</div>
	);
}