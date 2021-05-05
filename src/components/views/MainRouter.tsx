import React from 'react';
import { Route , Switch } from 'react-router-dom';
import MainPage from './MainPage';
import './main.scss';
import {
    NoMatch,
    PostsDetail,
} from '../../page/pages';


const Main = () => {
    
    return (
        <div className="mainDiv">
            <Switch>
                <Route exact path="/" component={MainPage} />
                <Route path="/posts" component={PostsDetail} />
                <Route component={NoMatch} />
            </Switch>
        </div>
    )
}

export default Main;