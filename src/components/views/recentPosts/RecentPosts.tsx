import React , {useState , useEffect} from 'react';
import '../MainPage.scss';
import {Link} from 'react-router-dom';
import { RecentDataModel } from '../../../models/RecentDataModel';
import { useMediaQuery } from 'react-responsive';
import { MOBILE_MIN_WIDTH , MOBILE_MAX_WIDTH } from '../../../core/constant/constants';
import RecentPostsPc from './RecentPostsPc';
import RecentPostsMobile from './RecentPostsMobile';


const renderPostsTitle = (posts: RecentDataModel[]) => {
    if (posts.length !== 0) {
        return <div>
                   {posts.map((c: any) => {
                       return <Link to={`/ctg/notice/id/${c._id}`} 
                                  key={c._id} 
                                  style={{ textDecoration: 'none' }}>
                                  <h3><li><p>{c.title}</p></li></h3>
                              </Link>
                   })} 
                </div>
    } else {
        return <div>
                   <h3>최신글이 없습니다.</h3> 
               </div>
    }
}

type RecentPostsProps = {
    apiCalling: boolean,
    recentPosts: RecentDataModel[];
    onRecentPosts: () => void;
}

const RecentPosts : React.FC<RecentPostsProps> = props => {
    const isPc = useMediaQuery({query: MOBILE_MIN_WIDTH});
    const isMobile = useMediaQuery({query: MOBILE_MAX_WIDTH});

    const { apiCalling , recentPosts , onRecentPosts } = props;
    useEffect(() => {
        console.log('apicalling' , apiCalling);
        console.log('asd' , recentPosts)
        onRecentPosts();
    } , []);
    
    return (
        <>
            {isPc && <RecentPostsPc />}
            {isMobile && <RecentPostsMobile />}
        </>
    )
}

export default RecentPosts;