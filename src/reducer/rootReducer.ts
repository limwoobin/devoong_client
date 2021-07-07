import { combineReducers } from 'redux';
import postsReducer , { postsSaga } from './postsReducer';
import { all } from 'redux-saga/effects';

const rootReducer = combineReducers({
    postsReducer
});

export function* rootSaga() {
    yield all([postsReducer]);
}

export default rootReducer;