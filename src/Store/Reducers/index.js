import { combineReducers } from 'redux';
import todosReducer from './todosReducer';

const rootReducer = combineReducers({
    todo: todosReducer,
})
export default rootReducer