import React , {useState , useEffect} from 'react';
import '../MainPage.scss';
import {API} from '../../../../../api/callAA';
import {Link} from 'react-router-dom';


const renderNoticeTitle = (notices: []) => {
    return <div>
            {notices.map((c: any) => {
                return  <Link to={`/ctg/notice/id/${c._id}`} key={c._id} style={{ textDecoration: 'none' }}>
                            <h3><li><p>{c.title}</p></li></h3>
                        </Link>
            })} 
           </div>
}

const RecentNotice = (props: any) => {
    const { recentNotices , onRecentNotices } = props;
    useEffect(() => {
         onRecentNotices();
         console.log('recentNotices' , recentNotices);
    } , []);

    return (
        <section className="sc-fAjcbJ fNlsam sc-caSCKo wDGYV">
            <h4>공지사항</h4>
            <ol>
                {renderNoticeTitle(recentNotices)}
            </ol>
        </section>
    )
}

export default RecentNotice;