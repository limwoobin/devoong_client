import React from 'react';
import './MainPage.scss';
import MainSide from './MainSide';
// import MyProfile from '../../MyProfile/MyProfile';
import CounterContainer from '../../../../containers/CounterContainer';
import TodoInsert from '../../todo/TodoInsert';
import TodoList from '../../todo/TodoList';

const MainPage = () => {
    return (
        <div className="sc-fjdhpX iqwyib">
            <div className="sc-jlyJG lpgbkm">
                <main className="sc-gipzik BAccj">
                    <div className="sc-eqIVtm gLLJLX">
                        {/* <MyProfile /> */}
                        <CounterContainer />
                        <TodoInsert />
                        <TodoList />
                    </div>
                </main>
                <MainSide />
            </div>
        </div>
    )
}

export default MainPage;