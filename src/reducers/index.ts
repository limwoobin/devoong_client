import { combineReducers } from 'redux';
import appReducer from './appReducer';
import counterReducer from './counterReducer';
import commonReducer from './commonReducer';

const rootReducer = combineReducers({
    appReducer,
    counterReducer,
    commonReducer
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
