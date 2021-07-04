import React from 'react';
import { Route , Switch } from 'react-router-dom';
import styled from 'styled-components';
import {
    NoMatch,
    Prepare,
    Posts,
    PostsView,
    About,
} from '../../page/pages';

const MainDiv = styled.div`
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: #363636;
`;

export default function Router() {   
    return (
        <MainDiv>
            <Switch>
                <Route exact path="/" component={Posts} />
                <Route path="/posts" component={PostsView} />
                <Route path="/about" component={About} />
                <Route path="/tags" component={Prepare} />
                <Route path="/my" component={Prepare} />
                <Route component={NoMatch} />
            </Switch>
        </MainDiv>
    )
}