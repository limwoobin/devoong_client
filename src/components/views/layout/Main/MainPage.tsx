import React from 'react';
import './MainPage.scss';
import MyProfile from '../../MyProfile/MyProfile';
import MainSideContainer from '../../../../containers/CommonContainer';

const MainPage : React.FC = () => {
    return (
        <div className="sc-fjdhpX iqwyib">
            <div className="sc-jlyJG lpgbkm">
                <main className="sc-gipzik BAccj">
                    <div className="sc-eqIVtm gLLJLX">
                        <MyProfile />
                    </div>
                </main>
                <MainSideContainer />
            </div>
        </div>
    )
}

export default MainPage;