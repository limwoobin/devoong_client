import React from 'react';
import { useSelector , useDispatch } from 'react-redux';
import { RootState } from '../reducers';
import {  } from '../actions/counterAction';
// import MainSide from '../components/views/layout/Main/MainSide';

export default function MainSideContainer() {
    const recentPost = useSelector((state: RootState) => state.commonReducer.recentPost);
    const recentNotice = useSelector((state: RootState) => state.commonReducer.recentNotice);
    
    const dispatch = useDispatch();

    const getRecentPost = () => {
        dispatch(getRecentPost());
      };
    
      const getRecentNotice = () => {
        dispatch(getRecentNotice());
      };
    
      return (
        <MainSide
            recentPost={recentPost}
            recentNotice={recentNotice}
            getRecentPost={getRecentPost}
            getRecentNotice={getRecentNotice}
        />
      );
}