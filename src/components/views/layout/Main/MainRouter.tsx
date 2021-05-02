import React from 'react';
import { Route , Switch } from 'react-router-dom';
import MainPage from './MainPage';
import './Main.scss';
import {
    NoMatch,
} from '../../../../page/pages';


const Main = () => {
    
    return (
        <div className="mainDiv">
            <Switch>
                <Route exact path="/" component={MainPage} />
                {/* <Route path="/ctg/posts" component={PostRouter} /> */}
                <Route component={NoMatch} />
            </Switch>
        </div>
    )
}

export default Main;