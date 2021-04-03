import React , {useState , useEffect} from 'react';
import '../MainPage.scss';
import {Link} from 'react-router-dom';
import { RecentDataModel } from '../../../../../core/models/RecentDataModel';

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
    const { apiCalling , recentPosts , onRecentPosts } = props;
    useEffect(() => {
        console.log('apicalling' , apiCalling);
        console.log('asd' , recentPosts)
        onRecentPosts();
    } , []);
    
    return (
        <aside className="sc-csuQGl pDRpR">
            <section className="fNlsam kPSwsK">
                <h4>최신글</h4>
                <ol>
                    {/* {renderPostsTitle(recentPosts)} */}
                    <h3><li><p>테스트 최신글1</p></li></h3>
                    <h3><li><p>테스트 최신글2</p></li></h3>
                    <h3><li><p>테스트 최신글3</p></li></h3>
                </ol>
            </section>
        </aside>
    )
}

export default RecentPosts;