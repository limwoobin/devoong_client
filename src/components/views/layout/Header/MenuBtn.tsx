import React, { useState } from 'react';
import './scss/Header.scss';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

export default function MenuBtn() {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        console.log(event);
        console.log(event.currentTarget);
        setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };

    return (
        <>
            <div className="menu_btn">
                <IconButton onClick={handleClick} className="menu_btn" color="primary" aria-label="menu">
                    <MenuIcon />
                </IconButton>
            </div>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}>AAAAA</MenuItem>
                <MenuItem onClick={handleClose}>BBBBB</MenuItem>
                <MenuItem onClick={handleClose}>CCCCC</MenuItem>
                <MenuItem onClick={handleClose}>DDDDD</MenuItem>
            </Menu>
        </>
    )
}