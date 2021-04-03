import React , {useState , useEffect} from 'react';
import '../MainPage.scss';
import {Link} from 'react-router-dom';
import { RecentDataModel } from '../../../../../core/models/RecentDataModel';
import { useMediaQuery } from 'react-responsive';
import { MOBILE_MIN_WIDTH , MOBILE_MAX_WIDTH } from '../../../../../core/constant/constants';
import PcRecentPosts from './PcRecentPosts';
import MobileRecentPosts from './MobileRecentPosts';


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

interface Props {
    apiCalling: boolean,
    recentPosts: RecentDataModel[],
    onRecentPosts: Function
}

const RecentPosts : React.FC<Props> = props => {
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
            {isPc && <PcRecentPosts />}
            {isMobile && <MobileRecentPosts />}
        </>
    )
}

export default RecentPosts;