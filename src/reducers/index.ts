import { combineReducers } from 'redux';
import appReducer from './appReducer';
import counterReducer from './counterReducer';
import commonReducer from './commonReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
    appReducer,
    counterReducer,
    commonReducer,
    userReducer
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
