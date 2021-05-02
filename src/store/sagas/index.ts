import { all , fork } from 'redux-saga/effects';
import commonSaga from './commonSaga';
import userSaga from './userSaga';

export default function* rootSaga() {
    yield all([
        fork(commonSaga),
        fork(userSaga),
    ])    
}