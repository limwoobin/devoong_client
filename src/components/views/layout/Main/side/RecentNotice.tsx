import React , {useState , useEffect} from 'react';
import '../MainPage.scss';
import {API} from '../../../../../api/callAA';
import {Link} from 'react-router-dom';


// const RenderNoticeTitle = (notices: []) => {
//     return <div>
//             {notices.map((c: any) => {
//                 return  <Link to={`/ctg/notice/id/${c._id}`} key={c._id} style={{ textDecoration: 'none' }}>
//                             <h3><li><p>{c.title}</p></li></h3>
//                         </Link>
//             })} 
//            </div>
// }

const RecentNotice = (props: any) => {
    const [noticeTitle , setNoticeTitle] = useState([]);
    // useEffect(() => {
    //      API.Get_RecentNotice()
    //      .then(res => {
    //         console.log(res);
    //         setNoticeTitle(res.data.data);
    //      }).catch(err => {
    //         console.log(err);
    //      })
    // } , []);

    return (
        <section className="sc-fAjcbJ fNlsam sc-caSCKo wDGYV">
            <h4>공지사항</h4>
            <ol>
                {props.recentNotices}
                <button onClick={props.onRecentNotices}>Hi Notice</button>
                {/* {noticeTitle.length === 0 
                    ? <h3>공지사항이 없습니다.</h3>
                    : RenderNoticeTitle(noticeTitle)} */}
            </ol>
        </section>
    )
}

export default RecentNotice;