import React , { useEffect } from 'react';
import './MainPage.scss';
import RecentPost from './side/RecentPost';
// import RecentNotice from './side/RecentNotice';
// import XX from './side/XX';
import { RecentDataModel } from '../../../../core/models/RecentDataModel';

type MainSideProps = {
    recentPost: RecentDataModel[];
    recentNotice: RecentDataModel[];
    onGetRecentPost: () => RecentDataModel[];
    onGetRecentNotice: () => RecentDataModel[];
}

export default function MainSide() {
    return (
        <div>
            <aside className="sc-csuQGl pDRpR">
                    <div className="sc-cHGsZl bHiaRe">
                        <div className="sc-TOsTZ eyrfCG">
                            <RecentPost 
                            />
                            {/* <RecentNotice />
                            <XX /> */}
                        </div>
                    </div>
                </aside>
        </div>
    )
}
