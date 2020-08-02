import React , {useState , useEffect} from 'react';
import '../MainPage.scss';
import {API} from '../../../../../api/callAA';
import {Link} from 'react-router-dom';
import { RecentDataModel } from '../../../../../core/models/RecentDataModel';

const renderNoticeTitle = (notices: RecentDataModel[]) => {
    if (notices.length !== 0) {
        return <div>
                   {notices.map((c: any) => {
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
    recentNotices: RecentDataModel[],
    onRecentNotices: Function
}

const RecentNotice : React.FC<Props> = props => {
    const { apiCalling , recentNotices , onRecentNotices } = props;
    useEffect(() => {
         onRecentNotices();
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