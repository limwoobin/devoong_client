import React , { useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { HeaderModel } from '../../../../../models';
import { Link } from 'react-router-dom';
import '../scss/header.scss';

import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const headerBtns = (headers: HeaderModel[]) => {
    return <div>
               <List>
                   {headers.map((c: HeaderModel) => {
                       return <Link 
                            to={c.path} 
                            className="listItem" 
                            style={{ textDecoration: 'none' , backgroundColor: 'black'}}
                        >
                                <ListItem button key={c.value}>
                                    <ListItemText primary={c.value} className="menu_item" />
                                </ListItem>
                            </Link>
                   })}
                   </List>      
           </div>
}

const useStyles = makeStyles({
    list: {
      width: '200px',
    },
});

type HeaderProps = {
    headers: HeaderModel[],
}

export default function HeaderMobile({headers}: HeaderProps) {
    const classes = useStyles();
    const [left , setLeft] = useState(false);

    const toggleDrawer = (open: boolean) => (event: any) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
          }

          setLeft(open);
    }

    const openSide = (headers: HeaderModel[]) => (
        <div
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
            className={clsx(classes.list)}
        >
        {headerBtns(headers)}
        </div>
    );

    return (
        <>
            <div className="menu_btn">
                <IconButton onClick={toggleDrawer(true)} className="menu_btn" color="primary" aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <Drawer open={left} onClose={toggleDrawer(false)}>
                    {openSide(headers)}
                </Drawer>
            </div>
        </>
    )
}