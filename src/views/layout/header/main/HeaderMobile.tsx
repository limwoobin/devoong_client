import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { HeaderModel } from '@/models';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { withStyles } from '@material-ui/core/styles';
import '../scss/header.scss';

const useStyles = makeStyles({
	list: {
		width: '100%',
	},
});

type Anchor = 'top';

function headerBtns (headers: HeaderModel[]) {
	return <div>
						<List>
							{headers.map((c: HeaderModel , index: number) => {
								return <Link 
										key={index}
										to={c.path} 
										className="listItem" 
										style={{ textDecoration: 'none'}}
								>
									<ListItem button key={c.value}>
											<ListItemText primary={c.value} className="menu_item" />
									</ListItem>
								</Link>;
							})}
						</List>
					</div>;
}

type HeaderProps = {
	headers: HeaderModel[],
};

const CustomDrawer = withStyles({
	paper: {
			backgroundColor: '#3d3d3d' 
	}
})(Drawer);

export default function HeaderMobile({headers}: HeaderProps) {
	const classes = useStyles();
	const [state, setState] = React.useState({
			top: false,
	});

	const toggleDrawer = (anchor: Anchor, open: boolean) => (
			event: React.KeyboardEvent | React.MouseEvent,
	) => {
		if (
			event.type === 'keydown' &&
			((event as React.KeyboardEvent).key === 'Tab' ||
				(event as React.KeyboardEvent).key === 'Shift')
			) {
			return;
		}

		setState({...state , [anchor]: open});
	};

	const openSide = (anchor: Anchor , headersData: HeaderModel[]) => (
		<div
				role="presentation"
				onClick={toggleDrawer(anchor , false)}
				onKeyDown={toggleDrawer(anchor , false)}
				className={clsx(classes.list)}
		>
		{headerBtns(headersData)}
		</div>
	);

	return (
		<>
			<div className="menu_btn">
				<IconButton onClick={toggleDrawer('top' , true)} className="menu_btn" color="primary" aria-label="menu">
					<MenuIcon />
				</IconButton>
				<CustomDrawer anchor="top" open={state.top} onClose={toggleDrawer('top' , false)}>
					{openSide('top' , headers)}
				</CustomDrawer>
			</div>
		</>
	);
}