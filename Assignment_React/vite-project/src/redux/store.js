import { legacy_createStore, combineReducers } from 'redux';
import { taskReducer } from './reducer/reducer';

const rootReducer = combineReducers({
    Task : taskReducer
})

export const store = legacy_createStore(rootReducer)