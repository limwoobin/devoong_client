import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import commonReducer from './commonReducer';

const rootReducer = combineReducers({
    counterReducer,
    commonReducer
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
