import { combineReducers } from 'redux';
import appReducer from './app';
import counterReducer from './counterReducer';
import commonReducer from './commonReducer';

const rootReducer = combineReducers({
    appReducer,
    counterReducer,
    commonReducer
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
