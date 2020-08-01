import React , {useState , useEffect} from 'react';
import '../MainPage.scss';
import {Link} from 'react-router-dom';


const renderPostsTitle = (posts: []) => {
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

export default function RecentPost(props: any) {
    const { recentPosts , onRecentPosts } = props;
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
