import { combineReducers} from 'redux';
import postReducer from './postReducers.js';

export default combineReducers ({
    posts: postReducer
});