import React , {useState , useEffect} from 'react';
import '../MainPage.scss';
import {Link} from 'react-router-dom';
import { RecentDataModel } from '../../../../../core/models/RecentDataModel';


const renderPostsTitle = (posts: RecentDataModel[]) => {
    return <div>
            {posts.map((c: any) => {
                return  <Link to={`/ctg/notice/id/${c._id}`} 
                              key={c._id} 
                              style={{ textDecoration: 'none' }}>
                            <h3><li><p>{c.title}</p></li></h3>
                        </Link>
            })} 
           </div>
}

interface Props {
    apiCalling: boolean,
    recentPosts: RecentDataModel[],
    onRecentPosts: Function
}

const RecentPost : React.FC<Props> = props => {
    const { apiCalling , recentPosts , onRecentPosts } = props;
    useEffect(() => {
        onRecentPosts();
    } , []);
    
    return (
        <section className="sc-fAjcbJ fNlsam sc-gisBJw kPSwsK">
            <h4>최신글</h4>
            <ol>
                {recentPosts.length === 0 
                ? <h3>최신글이 없습니다.</h3> 
                : renderPostsTitle(recentPosts)}
            </ol>
        </section>
    )
}

export default RecentPost;