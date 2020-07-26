import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import todoReducer from './todoReducer';

const rootReducer = combineReducers({
    counterReducer,
    todoReducer
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
