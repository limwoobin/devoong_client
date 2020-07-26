import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import commonReducer from './commonReducer';
// import { axiosReducer } from './axiosReducer';

const rootReducer = combineReducers({
    counterReducer,
    commonReducer
    // axiosReducer
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
