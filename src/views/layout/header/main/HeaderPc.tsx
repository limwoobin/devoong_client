import React , { useState } from 'react';
import { Link } from 'react-router-dom';
import { HeaderModel } from '../../../../models';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import { createStyles, fade, Theme, makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import '../scss/header.scss';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			flexGrow: 1,
		},
		title: {
			flexGrow: 1,
			display: 'none',
			[theme.breakpoints.up('sm')]: {
				display: 'block',
			},
		},
		search: {
			position: 'relative',
			borderRadius: theme.shape.borderRadius,
			backgroundColor: fade(theme.palette.common.white, 0.15),
			'&:hover': {
				backgroundColor: fade(theme.palette.common.white, 0.25),
			},
			marginLeft: 0,
			width: '100%',
			[theme.breakpoints.up('sm')]: {
				marginLeft: theme.spacing(1),
				width: 'auto',
			},
			marginRight: '20px'
		},
		searchIcon: {
			padding: theme.spacing(0, 2),
			height: '100%',
			position: 'absolute',
			pointerEvents: 'none',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
		},
		inputRoot: {
			color: 'inherit',
		},
		inputInput: {
			padding: theme.spacing(1, 1, 1, 0),
			paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
			transition: theme.transitions.create('width'),
			width: '100%',
			[theme.breakpoints.up('sm')]: {
				width: '12ch',
				'&:focus': {
					width: '20ch',
				},
			},
		},
	}),
);

const headerBtns = (headers: HeaderModel[]) => {
	return <div>
						<p>
							{headers.map((c: HeaderModel) => {
								return <Link to={c.path} key={c.value} className="btn_test_style">
													{c.value}
												</Link>;
							})}
						</p>
					</div>;
};


interface IHeader {
	headers: HeaderModel[];
}

export default function HeaderPc(props: IHeader) {
	const classes = useStyles();
	const { headers } = props;

	const [searchWord , setSearchWord] = useState('');

	return (
		<div className={classes.root}>
			<Typography className={classes.title} variant="h6" noWrap>
					{headerBtns(headers)}
			</Typography>
			{/* <div className={classes.search}>
				<div className={classes.searchIcon}>
						<SearchIcon fontSize="small" />
				</div>
				<InputBase
						placeholder="Search…"
						classes={{
								root: classes.inputRoot,
								input: classes.inputInput,
						}}
						inputProps={{ 'aria-label': 'search' }}
				/>
			<Button>OK</Button>
			</div> */}
		</div>
	);
}