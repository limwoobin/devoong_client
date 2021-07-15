import { combineReducers } from 'redux';
import postsReducer , { postsSaga } from './postsReducer';
import tagsReducer , {tagsSaga} from './tagsReducer';
import { all } from 'redux-saga/effects';

const rootReducer = combineReducers({
    postsReducer,
    tagsReducer
});

export function* rootSaga() {
    yield all([postsSaga() , tagsSaga()]);
}

export default rootReducer;