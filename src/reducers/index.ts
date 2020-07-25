import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import { axiosReducer } from './axiosReducer';

const rootReducer = combineReducers({
    counterReducer,
    axiosReducer
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
