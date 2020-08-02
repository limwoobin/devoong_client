import React , { useState , useEffect , useMemo } from 'react';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import { Link } from 'react-router-dom';
import { util } from '../../../../core/util/util';
import { CategoryModel } from '../../../../core/models/CategoryModel';
import { useSelector , useDispatch } from 'react-redux';
import { RootState } from '../../../../reducers';
import { getCategories } from '../../../../actions/commonAction';
import './Menu.scss';

const useStyles = makeStyles({
    list: {
        width: 250,
      },
      fullList: {
        width: 'auto',
      }
});

const menuList = (menuItems: CategoryModel[]) => {
    return <div>
                <List>
                    {menuItems.sort(util.Compare('id')).map((c) => {
                        if(c.code === 'BOARD') {
                            return <Link 
                                       to={`/ctg/${c.routerName}`} 
                                       key={c._id} 
                                       className="listItem" 
                                       style={{ textDecoration: 'none'}}
                                   >
                                       <ListItem button key={c.name}>
                                           <ListItemText primary={c.name} className="menuItem" />
                                       </ListItem>
                                   </Link>
                        }
                    })}
                </List>
                <Divider />
            </div>
}

const postList = (menuItems: CategoryModel[]) => {
    return <div>
                <List>
                    {menuItems.sort(util.Compare('id')).map((c) => {
                        if(c.code === 'POST') {
                            return <Link 
                                       to={`/ctg/posts/${c.routerName}`} 
                                       key={c._id} 
                                       className="listItem" 
                                       style={{ textDecoration: 'none'}}
                                   >
                                       <ListItem button key={c.name}>
                                           <ListItemText primary={c.name} className="menuItem" />
                                       </ListItem>
                                   </Link>
                        }
                    })}
                </List>
           </div>
}

const Menu : React.FC = () => {
    const apiCalling: boolean = useSelector((state: RootState) => state.appReducer.apiCalling);
    const categories: CategoryModel[] = useSelector((state: RootState) => state.commonReducer.categories);

    const dispatch = useDispatch();

    const onCategories = () => {
        dispatch(getCategories());
    }

    const classes = useStyles();
    const [left , setLeft] = useState(false);

    useEffect(() => {
        onCategories();
    } , []);

    const openSide = () => (
        <div
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
            className={clsx(classes.list)}
        >
            {menuList(categories)}
            {postList(categories)}
        </div>
    );

    const toggleDrawer = (open: boolean) => (event: any) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
          }
          setLeft(open);
    }

    return (
        <div className="menu__btn">
             <IconButton 
                color='inherit' 
                aria-label="open drawer"
                onClick={toggleDrawer(true)}
            >
                <MenuIcon />
            </IconButton>

            <Drawer open={left} onClose={toggleDrawer(false)}>
                {openSide()}
            </Drawer>
        </div>
    )
}

export default Menu;