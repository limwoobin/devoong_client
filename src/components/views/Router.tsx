import React from 'react';
import { Route , Switch } from 'react-router-dom';
import MainView from './MainView';
import styled from 'styled-components';
import {
    NoMatch,
    PostsDetail,
    About,
    Tags,
    My
} from '../../page/pages';

const MainDiv = styled.div`
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: #363636;
`;

export default function Router() {   
    return (
        <MainDiv>
            <Switch>
                <Route exact path="/" component={MainView} />
                <Route path="/posts" component={PostsDetail} />
                <Route path="/about" component={About} />
                <Route path="/tags" component={Tags} />
                <Route path="/my" component={My} />
                <Route component={NoMatch} />
            </Switch>
        </MainDiv>
    )
}